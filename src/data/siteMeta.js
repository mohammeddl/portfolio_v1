import logoAmazon from '@/images/logos/aws.svg'
import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoXOR from '@/images/logos/xor.jpg'
import logoEvanto from '@/images/logos/evanto.png'
import logoFitness from '@/images/logos/fitness.png'
import logoWiki from '@/images/logos/wiki.png'
import logoWhisper from '@/images/logos/whisper.png'
import logoHiremee from '@/images/logos/hiremee.png'
import logoNexus from '@/images/logos/nexus.png'
const siteMeta = {
  title: 'Daali Mohammed',
  description: 'Daali Mohammed is a developer web.',
  copyright: 'Daali Mohammed',
  author: {
    name: 'Daali mohammed',
    email: 'daali.22.ss@gmail.com',
    instagram: 'https://instagram.com/mohammed_dl1',
    github: 'https://github.com/mohammeddl',
    linkedin: 'https://ma.linkedin.com/in/daali-mohammed-85736b271/',
  },
  siteUrl: 'https://brian.dev',
}
export const resume = [
  {
    company: 'Amazon',
    title: 'Principal Developer Advocate',
    logo: logoAmazon,
    start: '2022',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Microsoft',
    title: 'Principal Cloud Developer Advocate',
    logo: logoMicrosoft,
    start: '2017',
    end: '2022',
  },
  {
    company: 'XOR Data Exchange',
    title: 'CIO',
    logo: logoXOR,
    start: '2014',
    end: '2016',
  },
  {
    company: 'Clarity Services, Inc.',
    title: 'COO',
    logo: logoClarity,
    start: '2008',
    end: '2014',
  },
]
export const projects = [
  {
    name: 'Fitness',
    description:
      'Our Gym Center is platform forinformation, programs and memberships ofgymnasium.',
    skills: 'HTML-CSS-JS',
    link: {
      href: 'https://mohammeddl.github.io/projetFitness/',
      label: 'github.com',
    },
    logo: logoFitness,
  },
  {
    name: 'Citronix ',
    description:
      'The Citronix project is developing a management application for a lemon farm',
    skills: 'JAVA-SPRINGBOOT-POSTGRESQL-DOCKER-SWAGGER-JENKINS',
    link: {
      href: 'https://citronix.systems/swagger-ui/index.html',
      label: 'citronix.systems',
    },
    logo: '',
  },
  {
    name: 'Wiki',
    description:
      'Wiki an effective content management system, combined with a front office, to offer an exceptional user experience.',
    skills: 'HTML-TAILWIND-JS-PHP-SQL',
    link: {
      href: 'https://github.com/mohammeddl/WikiProjet.git',
      label: 'github.com',
    },
    logo: logoWiki,
  },
  {
    name: 'Evento',
    description:
      'The company "Evento" aims to develop an innovative platform dedicated to the management and reservation of event tickets. ',
    skills: 'HTML-TAILWIND-JS-PHP LARAVEL-PGSQL-DOCKER',
    link: {
      href: 'https://github.com/mohammeddl/WikiProjet.git',
      label: 'github.com',
    },
    logo: logoEvanto,
  },
  {
    name: 'Whisper',
    description:
      'The company "Whispere" wants to develop an innovative messaging application that will allow users to exchange messages, photos, documents.Custom commands as webhooks.',
    skills: 'HTML-TAILWIND-JS-PHP LARAVEL-PGSQL-DOCKER',
    link: {
      href: 'https://github.com/zinebMachrouh/Whisper.git',
      label: 'github.com',
    },
    logo: logoWhisper,
  },
  {
    name: 'HireMe',
    description:
      'HireMe wants to develop a job platform allowing users to find job opportunities and companies to publish their offers.',
    skills: 'HTML-TAILWIND-JS-PHP LARAVEL-SQL',
    link: {
      href: 'https://github.com/mohammeddl/HireMee.git',
      label: 'github.com',
    },
    logo: logoHiremee,
  },
  {
    name: 'Nexus',
    description:
      'Nexus Crypto Wallet by offering a platform that provides real-time updates on cryptocurrency prices. This platform allows users to effectively manage their cryptocurrency portfolios and make secure transactions.',
    skills: 'HTML-TAILWIND-JS-PHP-SQL',
    link: {
      href: 'https://github.com/Sahtani/Cryptocurrency_management.git',
      label: 'github.com',
    },
    logo: logoNexus,
  },
  {
    name: 'cyberTeck',
    description:
      'The E-commerce project is a web application that allows users to browse, search, and purchase a variety of products online. The application offers a user-friendly and secure experience for online shopping, with features such as user authentication, cart management, order checkout, etc.',
    skills: 'REACTJS-LARAVEL-PGSQL',
    link: {
      href: 'https://github.com/mohammeddl/cyberTeck.git',
      label: 'github.com',
    },
  },
]

export default siteMeta
