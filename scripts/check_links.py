"""Check internal HTML links and fragment targets in the built playbook."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote
import sys

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.links, self.ids = [], set()
        self.feed(text)
    def handle_starttag(self, tag, attributes):
        attributes = dict(attributes)
        if 'id' in attributes:
            self.ids.add(attributes['id'])
        if tag == 'a' and attributes.get('href'):
            self.links.append(attributes['href'])

def check(root):
    files = list(root.rglob('*.html'))
    if not files:
        return ['No built pages found. Run npm run build first.']
    pages = {p: Page(p.read_text()) for p in files}
    errors = []
    for path, page in pages.items():
        route = '/' + path.relative_to(root).as_posix()
        if route.endswith('index.html'):
            route = route[:-10]
        for href in page.links:
            url = urlsplit(urljoin('https://playbook.civictechdc.org' + route, href))
            if url.scheme not in ('http', 'https') or url.netloc != 'playbook.civictechdc.org':
                continue
            target = root / unquote(url.path).lstrip('/')
            if target.is_dir():
                target /= 'index.html'
            elif not target.suffix:
                target /= 'index.html'
            if not target.is_file():
                errors.append(f'{route}: missing destination {href}')
            elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
                errors.append(f'{route}: missing anchor {href}')
    return sorted(set(errors))

if __name__ == '__main__':
    errors = check(Path('dist'))
    for error in errors:
        print(error)
    print(f'Internal link check: {len(errors)} error(s).')
    sys.exit(bool(errors))
