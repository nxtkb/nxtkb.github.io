import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = process.env.SITE || 'https://nxtkb.com';

export default defineConfig({
  site,
  integrations: [
    starlight({
      title: 'NXTKB Docs',
      description: 'Documentation for NXTKB ergonomic split keyboards.',
      favicon: '/favicons/favicon.svg',
      head: [
        {
          tag: 'script',
          attrs: {
            src: '/scripts/site-preferences.js',
          },
        },
      ],
      logo: {
        src: './public/icons/logo.svg',
        alt: 'NXTKB',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        zh: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      editLink: {
        baseUrl: 'https://github.com/nxtkb/nxtkb.github.io/edit/main/',
      },
      sidebar: [
        {
          label: 'Start',
          translations: { 'zh-CN': '开始' },
          items: [
            { slug: 'docs', label: 'Documentation', translations: { 'zh-CN': '文档首页' } },
            {
              slug: 'docs/setup',
              label: 'Getting Started',
              translations: { 'zh-CN': '入门指南' },
            },
            {
              slug: 'docs/setup/connect',
              label: 'Connect to Your Device',
              translations: { 'zh-CN': '连接到设备' },
            },
          ],
        },
        {
          label: 'Keymaps',
          translations: { 'zh-CN': '键位' },
          items: [
            {
              slug: 'docs/setup/keymap',
              label: 'Keymap Overview',
              translations: { 'zh-CN': '键位概览' },
            },
            {
              slug: 'docs/setup/keymap/ferris-sweep-pro-keymap',
              label: 'Ferris Sweep Pro Keymap',
              translations: { 'zh-CN': 'Ferris Sweep Pro 键位' },
            },
            {
              slug: 'docs/setup/keymap/ferris-sweep-keymap',
              label: 'Ferris Sweep Keymap',
              translations: { 'zh-CN': 'Ferris Sweep 键位' },
            },
            {
              slug: 'docs/setup/keymap/input-tester',
              label: 'Input Tester',
              translations: { 'zh-CN': '键位测试工具' },
            },
            {
              slug: 'docs/setup/keymap/trackpad',
              label: 'Use the Trackpad',
              translations: { 'zh-CN': '使用触控板' },
            },
            {
              slug: 'docs/setup/keymap/how-to-update-keymaps',
              label: 'Update Keymaps',
              translations: { 'zh-CN': '更新键位' },
            },
          ],
        },
        {
          label: 'Firmware',
          translations: { 'zh-CN': '固件' },
          items: [
            {
              slug: 'docs/firmware',
              label: 'Firmware Overview',
              translations: { 'zh-CN': '固件概览' },
            },
            {
              slug: 'docs/firmware/how-to-flash-a-firmware',
              label: 'Flash Firmware',
              translations: { 'zh-CN': '刷写固件' },
            },
            {
              slug: 'docs/firmware/build-your-own-firmware',
              label: 'Build Firmware',
              translations: { 'zh-CN': '自行构建固件' },
            },
            {
              slug: 'docs/firmware/sweep-pro-configuration',
              label: 'Sweep Pro Configuration',
              translations: { 'zh-CN': 'Sweep Pro 配置文件' },
            },
            {
              slug: 'docs/firmware/ferris-sweep-configuration',
              label: 'Ferris Sweep Configuration',
              translations: { 'zh-CN': 'Ferris Sweep 配置文件' },
            },
          ],
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/nxtkb/',
        },
      ],
      customCss: ['./src/styles/starlight.css'],
    }),
  ],
});
