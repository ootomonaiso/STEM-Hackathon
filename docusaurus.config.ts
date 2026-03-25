import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'STEM-Hackathon',
  tagline: '学生のためのハッカソン参加・学習ポータル',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://stem-hackathon.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'STEM-Hackathon',
  projectName: 'STEM-Hackathon',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '.',
          include: [
            'intro.md',
            'handbook/**/*.{md,mdx}',
            'history/**/*.{md,mdx}',
            'devdojo/**/*.{md,mdx}',
            'news/**/*.{md,mdx}',
          ],
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'STEM-Hackathon',
      logo: {
        alt: 'STEM-Hackathon Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          position: 'left',
          label: '参加の手引き',
          items: [
            {
              label: '申し込み方法',
              to: '/docs/handbook/registration',
            },
            {
              label: '当日のスケジュール',
              to: '/docs/handbook/schedule',
            },
          ],
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'ハッカソン履歴',
          items: [
            {
              label: '2024 春ハッカソン',
              to: '/docs/history/2024/event-1',
            },
            {
              label: '2024 夏ハッカソン',
              to: '/docs/history/2024/event-2',
            },
            {
              label: '2025 春ハッカソン',
              to: '/docs/history/2025/hackathon-spring',
            },
          ],
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'DevDojo',
          items: [
            {
              label: 'GitHub・Git 基礎',
              to: '/docs/devdojo/github-git/basics',
            },
            {
              label: 'チーム開発の流れ',
              to: '/docs/devdojo/github-git/workflow',
            },
            {
              label: '生成AI 入門',
              to: '/docs/devdojo/generative-ai/getting-started',
            },
          ],
        },
        {to: '/docs/news/spring-announcement', label: '最新情報', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ドキュメント',
          items: [
            {
              label: 'はじめに',
              to: '/docs/intro',
            },
            {
              label: '参加の手引き',
              to: '/docs/handbook/registration',
            },
          ],
        },
        {
          title: 'お知らせ',
          items: [
            {
              label: '開催案内',
              to: '/docs/news/spring-announcement',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} STEM-Hackathon`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
