export const projectResources = [
  { label: 'Lead A Project Night', slug: 'resources/lead' },
  { label: 'Grow Your Project', slug: 'resources/grow' },
  { label: 'Build Your Toolkit', slug: 'resources/technical' },
  { label: 'Navigating Project Challenges', slug: 'resources/navigating-project-challenges' },
  { label: 'Passing the Torch 🔥', slug: 'resources/passing-the-torch' },
];

export function isProjectResource(pathname: string) {
  const path = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  return projectResources.some(({ slug }) => path === slug || path.startsWith(slug + '/'));
}
