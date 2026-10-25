
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
        './src/styles/theme.css',
      ],

      components: {
        Header: './src/components/PlaybookHeader.astro',
        Sidebar: './src/components/ProjectResourcesSidebar.astro',
        PageTitle: './src/components/PlaybookPageTitle.astro',
        Head: './src/components/PlaybookHead.astro',
      },

      routeMiddleware: './src/routeData.ts',

      sidebar: [
        {
          label: 'Learn',
          items: [
            { label: 'What Is Civic Tech?', slug: 'learn' },
            { label: 'History of Civic Tech DC', slug: 'resources/history' },
          ],
        },
        {
          label: 'Join',
          items: [
            { label: 'Welcome to Civic Tech DC', slug: 'join' },
            { label: 'Choose Your Contribution Path', slug: 'resources/contributionpaths' },
            { label: 'Your First Contribution', slug: 'join/first-contribution' },
          ],
        },
        {
          label: 'Build',
          items: [
            { label: 'Build a Project', slug: 'build' },
            {
              label: 'Project Tracks',
              items: [
                { label: 'Onboarding Track', slug: 'build/onboardingtrack' },
                { label: 'Incubator Track', slug: 'build/incubatortrack' },
                { label: 'Understanding Your Problem', slug: 'build/incubatortrack/basics' },
                { label: 'Finding Your People', slug: 'build/incubatortrack/people' },
              ],
            },
            { label: 'Project Setup', slug: 'resources/projectsetup' },
            { label: 'Project Cycle', slug: 'resources/projectlifecycle' },
            { label: 'Lead a Project Night', slug: 'resources/lead' },
            { label: 'Grow a Project', slug: 'resources/grow' },
            { label: 'Navigating Project Challenges', slug: 'resources/navigating-project-challenges' },
            { label: '🔥 Passing the Torch', slug: 'resources/passing-the-torch' },
            { label: 'Working With Community Partners', slug: 'build/community-partners' },
            { label: 'Maintain or Close a Project', slug: 'build/maintain-or-close' },
          ],
        },
        {
          label: 'Shared Resources',
          items: [
            { label: 'Technical Resources', slug: 'resources/technical' },
            { label: 'AI Resources for Civic Tech', slug: 'resources/aicivictech' },
            { label: 'Keeping Communities Going', slug: 'resources/keeping-communities-going' },
          ],
        },
      ],

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/civictechdc/Project-Playbook',
        },
      ],
    }),
  ],
});
