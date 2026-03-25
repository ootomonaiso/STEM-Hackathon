import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: '参加の手引き',
      items: ['handbook/registration', 'handbook/schedule'],
    },
    {
      type: 'category',
      label: 'ハッカソン履歴',
      items: [
        {
          type: 'category',
          label: '2024年度',
          items: ['history/2024/event-1', 'history/2024/event-2'],
        },
        {
          type: 'category',
          label: '2025年度',
          items: ['history/2025/hackathon-spring'],
        },
      ],
    },
    {
      type: 'category',
      label: 'DevDojo',
      items: [
        {
          type: 'category',
          label: 'GitHub・Git',
          items: ['devdojo/github-git/basics', 'devdojo/github-git/workflow'],
        },
        {
          type: 'category',
          label: '生成AI',
          items: ['devdojo/generative-ai/getting-started'],
        },
      ],
    },
  ],
};

export default sidebars;
