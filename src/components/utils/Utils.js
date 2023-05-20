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
    title: 'Nursing',
    details: 'Vitals section, procedures and nursing treatment plan',
    icon: BiSupport,
  },
  {
    id: 2,
    title: 'Pharmacy',
    details:
      'Dispensing of drugs and automatic billing of client, reports on drugs sales.',
    icon: GrIntegration,
  },
  {
    id: 3,
    title: 'In-Patient/Admission',
    details: "Provides all information needed for the admission of patient's",
    icon: TbArrowFork,
  },
  {
    id: 4,
    title: 'Lab/Radiology system',
    details:
      'Quick entering and uploading of lab results, received by the practitioner and can also be emailed to patient directly.',
    icon: BiSupport,
  },
  {
    id: 5,
    title: 'Inventory',
    details:
      'Keep tracks of all purchases of items,  list of items requested by the pharmacist and a data of the item given to the various department and the remaining item in the store.',
    icon: GrIntegration,
  },
  {
    id: 6,
    title: 'Cash/Accounting:',
    details: 'Bill of patient’s, top-ups,reporting and  claims.',
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
