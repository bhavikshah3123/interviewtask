import frameOne from '../assets/images/Frame 1.svg';
import frameTwo from '../assets/images/Frame 2.svg';
import frameThree from '../assets/images/Frame 3.svg';
import frameFour from '../assets/images/Frame 4.svg';
import frameFive from '../assets/images/Frame 5.svg';
import frameSix from '../assets/images/Frame 6.svg';
import frameSeven from '../assets/images/Frame 7.svg';
import facebookIcon from '../assets/images/facebook.svg';
import instagramIcon from '../assets/images/instagram.svg';
import linkedinIcon from '../assets/images/linkedin.svg';
import twitterIcon from '../assets/images/twitter.svg';

export const navItems = [
  { label: 'AI Banking', href: '#features' },
  { label: 'Payments', href: '#why', hasDropdown: true },
  { label: 'Payouts', href: '#standards', hasDropdown: true },
  { label: 'Support', href: '#footer' },
];

export const brandLogos = [
  { name: 'Brave', image: frameOne },
  { name: 'Circle', image: frameTwo },
  { name: 'Discord', image: frameThree },
  { name: 'Google', image: frameFour },
  { name: 'Jump', image: frameFive },
  { name: 'Magic Eden', image: frameSix },
  { name: 'Magic Team', image: frameSeven },
];

export const whyItems = [
  { title: 'Unified Dashboard', description: 'Manage banking, payouts, and merchants in one place.' },
  { title: 'AI-Driven Decisions', description: 'Automate approvals, verification, and financial operations.' },
  { title: 'Developer-Friendly APIs', description: 'Build, integrate, and launch faster.' },
  { title: 'Enterprise-Grade Security', description: 'Bank-level encryption and compliance.' },
  { title: 'Scalable Infrastructure', description: 'Designed for startups to enterprises.' },
  { title: 'Merchant Onboarding', description: 'Frictionless validation and assisted activation.' },
  { title: 'Real-Time Payments', description: 'Move funds instantly with transparent processing.' },
  { title: 'Actionable Insights', description: 'Track behavior, performance, and risk in one flow.' },
];

export const standardsCards = [
  {
    title: 'Scalability & Integration',
    copy: 'Lorem ipsum is dummy placeholder text commonly used in graphic design, publishing, and web development.',
  },
  {
    title: 'Step-by-step guide',
    copy: 'Lorem ipsum is dummy placeholder text commonly used in graphic design, publishing, and web development.',
  },
  {
    title: 'SaaS based solution',
    copy: 'Lorem ipsum is dummy placeholder text commonly used in graphic design, publishing, and web development.',
  },
  {
    title: 'Modular workflows',
    copy: 'Lorem ipsum is dummy placeholder text commonly used in graphic design, publishing, and web development.',
  },
];

export const footerLinks = {
  products: ['AI Banking', 'Payment', 'Payout', 'Merchant Onboarding', 'FRM'],
  company: ['About Us', 'Help Center', 'Contact'],
  legal: ['Cookie Policy', 'Privacy Policy', 'Terms of Service'],
  socials: [
    { label: 'LinkedIn', icon: linkedinIcon, href: '#', handle: '/uzofin' },
    { label: 'X / Twitter', icon: twitterIcon, href: '#', handle: '/uzofin' },
    { label: 'Instagram', icon: instagramIcon, href: '#', handle: '/uzofin' },
    { label: 'Facebook', icon: facebookIcon, href: '#', handle: '/uzofin' },
  ],
};
