import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://playbook.civictechdc.org',
  integrations: [
    react(),
    starlight({
      title: 'Civic Tech Playbook',

      customCss: ['./src/styles/global.css'],

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight'
        }
      ],

      sidebar: [
        {
          label: 'Explore',
          items: [
            { label: 'Start Here', link: '/' },
            { label: 'What is Civic Tech', link: '/civictech/' },
            { label: 'History', link: '/history/' },
            { label: 'Projects', link: '/projects/' }
          ]
        },
        {
          label: 'Resources',
          items: [
            { label: 'AWS Account Access', link: '/resources/aws/' },
            { label: 'GitHub Organization Access', link: '/resources/github/' }
          ]
        }
      ]
    })
  ]
});