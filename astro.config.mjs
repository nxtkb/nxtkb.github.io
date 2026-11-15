import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import starlight from '@astrojs/starlight';
import { rehypeExternalLinks } from './src/utils/external-links.mjs';

const site = process.env.SITE || 'https://nxtkb.com';
const sitePreferences = readFileSync(new URL('./public/scripts/site-preferences.js', import.meta.url), 'utf8');

export default defineConfig({
  site,
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { site }]],
  },
  integrations: [
    starlight({
      title: 'NXTKB Docs',
      description: 'Documentation for NXTKB ergonomic split keyboards.',
      favicon: '/favicons/favicon.svg',
      head: [
        {
          tag: 'script',
          content: sitePreferences,
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
            {
              slug: 'docs/setup',
              label: 'Getting Started',
              translations: { 'zh-CN': '入门指南' },
            },
            {
              slug: 'docs/setup/ferris-sweep-pro',
              label: 'Sweep Pro User Guide',
              translations: { 'zh-CN': 'Sweep Pro 使用指南' },
            },
            {
              slug: 'docs/setup/ferris-sweep',
              label: 'Ferris Sweep User Guide',
              translations: { 'zh-CN': 'Ferris Sweep 使用指南' },
            },
            {
              slug: 'docs/setup/connect',
              label: 'Connect to Your Device',
              translations: { 'zh-CN': '连接到设备' },
            },
            {
              slug: 'docs/setup/keymap/input-tester',
              label: 'Keyboard & Mouse Test',
              translations: { 'zh-CN': '键鼠测试' },
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
              slug: 'docs/setup/keymap/how-to-update-keymaps',
              label: 'Update Keymaps',
              translations: { 'zh-CN': '更新键位' },
            },
          ],
        },
        {
          label: 'Sweep Pro Features',
          translations: { 'zh-CN': 'Sweep Pro 功能' },
          items: [
            {
              slug: 'docs/setup/keymap/trackpad',
              label: 'Trackpad',
              translations: { 'zh-CN': '触控板' },
            },
            {
              slug: 'docs/firmware/sweep-pro-display',
              label: 'E-Ink Display',
              translations: { 'zh-CN': '墨水屏' },
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
