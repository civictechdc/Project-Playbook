import tempfile
import unittest
from pathlib import Path
from check_links import check


class LinkChecks(unittest.TestCase):
    def test_missing_pages_and_fragments_fail(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / 'index.html').write_text('<a href="/missing/">Missing</a><a href="/guide/#missing">Anchor</a>')
            (root / 'guide').mkdir()
            (root / 'guide/index.html').write_text('<h1 id="present">Guide</h1>')
            errors = check(root)
            self.assertEqual(len(errors), 2)
            self.assertTrue(any('missing destination' in error for error in errors))
            self.assertTrue(any('missing anchor' in error for error in errors))

    def test_valid_relative_links_and_encoded_anchors_pass(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / 'index.html').write_text('<a href="guide/#a%20b">Guide</a><a href="mailto:team@example.org">Email</a><a href="https://example.org/">External</a>')
            (root / 'guide').mkdir()
            (root / 'guide/index.html').write_text('<h1 id="a b">Guide</h1><a href="../">Home</a>')
            self.assertEqual(check(root), [])

    def test_no_build_fails(self):
        with tempfile.TemporaryDirectory() as directory:
            self.assertTrue(check(Path(directory)))


if __name__ == '__main__':
    unittest.main()
