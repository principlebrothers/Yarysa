import { BiSupport } from 'react-icons/bi';
import { GrIntegration } from 'react-icons/gr';
import { TbArrowFork } from 'react-icons/tb';

export const navLinks = [
  { id: 'compliance', page: 'Compliance', path: '/compliance' },
  { id: 'products', page: 'Products', path: '/products' },
  { id: 'support', page: 'Support', path: '/support' },
  { id: 'pricing', page: 'Pricing', path: '/pricing' },
  { id: 'insurers', page: 'Insurers', path: '/insurers' },
];

export const portfolioData = [
  {
    id: 1,
    title: 'Development Support',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam morbi et tell malesuada sed maecenas. Nisl cursus ipsum pretium ultrices at. Ullamcorper nibh ridiculus vestibulum aliquet. Suscipit nisl purus nunc elementum ultricies. Duis tristique et amet convallis fermentum. A sed amet orci vulputate sed blandit dolor pharetra.',
    icon: BiSupport,
  },
  {
    id: 2,
    title: 'Easy Integration',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam morbi et tell malesuada sed maecenas. Nisl cursus ipsum pretium ultrices at. Ullamcorper nibh ridiculus vestibulum aliquet. Suscipit nisl purus nunc elementum ultricies. Duis tristique et amet convallis fermentum. A sed amet orci vulputate sed blandit dolor pharetra.',
    icon: GrIntegration,
  },
  {
    id: 3,
    title: 'Cross Platform',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam morbi et tell malesuada sed maecenas. Nisl cursus ipsum pretium ultrices at. Ullamcorper nibh ridiculus vestibulum aliquet. Suscipit nisl purus nunc elementum ultricies. Duis tristique et amet convallis fermentum. A sed amet orci vulputate sed blandit dolor pharetra.',
    icon: TbArrowFork,
  },
];

export const aboutData = [
  {
    id: 1,
    title: 'Streamlined Operations',
    details:
      'Fully integrated clinical, support, finance and billing, supply chain and administrative functions for more efficient operations.',
  },
  {
    id: 2,
    title: 'Interoperability Across Standards',
    details: 'Compliance with standards like ICD 10/11',
  },
  {
    id: 3,
    title: 'Enhanced Patient Care',
    details:
      'Structured, specialty-wise electronic medical records enabling doctors to provide diagnosis-based care with better visibility to patients.',
  },
  {
    id: 4,
    title: 'Information Security',
    details:
      'Role-based security matrix to define user controls in each department and block-chain for optimizing productivity.',
  },
];

export const footerData = [
  {
    id: 'compliance',
    title: 'Compliance',
    details: ['Protect', 'Collect', 'Network', 'Pricing'],
  },
  {
    id: 'products',
    title: 'Products',
    details: ['Protect', 'Collect', 'Network', 'Pricing'],
  },
  {
    id: 'support',
    title: 'Support',
    details: ['Protect', 'Collect', 'Network', 'Pricing'],
  },
  {
    id: 'others',
    title: 'Others',
    details: ['Protect', 'Collect', 'Network', 'Pricing'],
  },
];
