import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Guides',
      links: [
        { text: 'All Guides', href: getBlogPermalink() },
        { text: 'Coding AI', href: getPermalink('coding-ai', 'category') },
        { text: 'Writing AI', href: getPermalink('writing-ai', 'category') },
        { text: 'Image AI', href: getPermalink('image-ai', 'category') },
        { text: 'Productivity', href: getPermalink('productivity', 'category') },
        { text: 'Comparisons', href: getPermalink('comparisons', 'category') },
        { text: 'How-To', href: getPermalink('how-to', 'category') },
      ],
    },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Categories',
      links: [
        { text: 'Coding AI', href: getPermalink('coding-ai', 'category') },
        { text: 'Writing AI', href: getPermalink('writing-ai', 'category') },
        { text: 'Image AI', href: getPermalink('image-ai', 'category') },
        { text: 'Productivity', href: getPermalink('productivity', 'category') },
        { text: 'Comparisons', href: getPermalink('comparisons', 'category') },
        { text: 'How-To', href: getPermalink('how-to', 'category') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'All Guides', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms & Conditions', href: getPermalink('/terms') },
        { text: 'Affiliate Disclosure', href: getPermalink('/disclosure') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Disclosure', href: getPermalink('/disclosure') },
  ],
  socialLinks: [],
  footNote: `
    © ${new Date().getFullYear()} AIToolsEdge. All rights reserved.
  `,
};
