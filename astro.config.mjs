import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    react(),
    starlight({
      title: 'Civic Tech Playbook',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight'
        }
      ],
      sidebar: [
        {
          label: 'Builders',
          items: [
            { label: 'Overview', link: '/builders/' }
          ]
        },
        {
          label: 'Contributors',
          items: [
            { label: 'Overview', link: '/contributors/' }
          ]
        }
      ]
    })
  ]
});