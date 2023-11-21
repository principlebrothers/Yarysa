import { TbRibbonHealth } from 'react-icons/tb';
import { FaUserNurse } from 'react-icons/fa';
import { BsRadioactive } from 'react-icons/bs';
import { MdLocalPharmacy } from 'react-icons/md';
import nurseImage from '../../assets/nurseImage.png';
import labImage from '../../assets/labImage.png';
import doctorImage from '../../assets/doctorImage.png';
import pharmacyImage from '../../assets/pharmacyImage.png';

export const navLinks = [
  { id: 'about', page: 'About Us', path: 'https://www.devdexsoftware.com' },
  { id: 'modules', page: 'Modules', path: '#modules' },
  { id: 'onboarding', page: 'Onboard Hospital', path: '/onboard-hospital' },
  { id: 'contact', page: 'Contact Us', path: '#contact' },
];

export const blogNavLinks = [
  { id: 'about', page: 'About Us', path: 'https://www.devdexsoftware.com' },
  { id: 'home', page: 'Home', path: '/' },
];

export const portfolioData = [
  {
    id: 'nursing',
    title: 'Nursing',
    image: pharmacyImage,
    details:
      'Yarysa offers nurses an integrated single-screen view of patients information from multiple sources enabling them to overcome operational challenges',
    features: [
      'Vitals Section',
      'Procedures',
      'In-patient Management',
      'Monitoring & Triaging',
    ],
    icon: FaUserNurse,
  },
  {
    id: 'laboratory',
    title: 'Laboratory/Radiology',
    image: doctorImage,
    details:
      'Yarysa provides a comprehensive lab & radiology module fully optimized, automated diagnostic reports workflow from collection of samples to recording and processing lab results. Some features are:',
    features: [
      'View all lab requests',
      'Auto billing of labs',
      'Upload and imports of lab results',
      'Intergeration of diverse pathology including Hematology, Biochemistry',
    ],
    icon: BsRadioactive,
  },
  {
    id: 'doctors',
    title: 'Doctors',
    image: labImage,
    details:
      "Patient's engagement diagnosis & teatment is made easier with Yarysa EMR. Doctors/Physicians seamelessly focus on delivering exceptional services without thinking of administrative tasks. Doctors on Yarysa can;",
    features: [
      'View Simple & Detailed patient medical history',
      'Complaints & ICD-10/11 integrations for quick diagnosis',
      'Medication, Lab & Radiology request',
      'Admission & Appointment mechanism',
    ],
    icon: TbRibbonHealth,
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy/Inventory System',
    image: nurseImage,
    details:
      'A seamless and simple to use pharmacy module that makes ordering drugs for patients simpler.',
    features: [
      'Inventory system for pharmacy',
      'Stock records & reports',
      'Walk-in modules for medical purchases',
      'Outside-prescriptions',
      'E-prescription options',
    ],
    icon: MdLocalPharmacy,
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
    details: 'Compliance with standards like ICD-10/11',
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
