
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://playbook.civictechdc.org',

  integrations: [
    react(),

    starlight({
      title: 'Civic Tech Playbook',

      customCss: [
        './src/styles/global.css',
      ],

      routeMiddleware: './src/routeData.ts',

      sidebar: [
        {
          label: 'Project Guides',
          items: [
            'resources/projectlifecycle',
            'resources/lead',
            'resources/grow',
            'resources/technical',
          ],
        },
        {
          label: 'Incubator',
          items: [
            'build/incubatortrack',
            'build/incubatortrack/basics',
            'build/incubatortrack/people',
          ],
        },
      ],

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
    }),
  ],
});
