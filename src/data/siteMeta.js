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
import insurance from '@/images/logos/insurance.png'
import citronix from '@/images/logos/citronx.png'
import memoryGame from '@/images/logos/memory_game.png'
import employee from '@/images/logos/employee.png'
import cybertech from '@/images/logos/cybertech.png'
import fauget from '@/images/logos/fauget.png'
import recycleHub from '@/images/logos/recyclehub.png'
import creativePrint from '@/images/logos/creativeprint.png'      

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
    name: 'RecycleHub',
    description:
      'The application RecycleHub is an innovative Single Page Application (SPA) that bridges the gap between individuals and certified waste collectors.',
    skills: 'ANGULAR-RxJS-DOCKER-Reactive Forms-TailwindCSS',
    link: {
      href: 'https://recycle-hub-zeta.vercel.app/home',
      label: 'recycleHub.com',
    },
    repository: 'https://github.com/mohammeddl/RecycleHub',
    logo: recycleHub,
    screenshots: [
      '/images/projects/recyclehub/screen1.jpg',
      '/images/projects/recyclehub/screen2.jpg'
    ],
  },
  {
    name: 'CreativePrint',
    description:
      'CreativePrint is a comprehensive print-on-demand platform enabling creators to design, customize, and sell custom products with automated production and delivery.',
    skills: 'JAVA SPRING BOOT-REACT-TypeScript-DOCKER-PostgreSQL-TailwindCSS-Github Actions CI/CD',
    link: {
      href: 'https://github.com/mohammeddl/CreativePrint',
      label: 'github.com',
    },
    repository: 'https://github.com/mohammeddl/CreativePrint',
    logo: creativePrint,
    screenshots: [
      '/images/projects/creativeprint/screen1.jpg',
      '/images/projects/creativeprint/screen2.jpg'
    ],
  },
  {
    name: 'Insurance',
    description:
      'The application aims to provide a smooth and intuitive user experience for managing insurance contracts.',
    skills: 'JAVA-JEE-POSTGRESQL-DOCKER-SWAGGER',
    link: {
      href: 'https://github.com/mohammeddl/insurance.git',
      label: 'github.com',
    },
    repository: 'https://github.com/mohammeddl/insurance.git',
    logo: insurance,
    screenshots: [
      '/images/projects/insurance/screen1.jpg',
      '/images/projects/insurance/screen2.jpg'
    ],
  },
  {
    name: 'Memory-Game',
    description:
      'This is a classic memory game where the player must reproduce a sequence of colors in the correct order. With each level, the sequence gets longer, making the game more and more difficult.',
    skills: 'ANGULAR',
    link: {
      href: 'https://memory-game-eight-umber.vercel.app/',
      label: 'vercel.app',
    },
    repository: 'https://github.com/mohammeddl/memory-game',
    logo: memoryGame,
    screenshots: [
      '/images/projects/memory-game/screen1.jpg',
      '/images/projects/memory-game/screen2.jpg'
    ],
  },
  {
    name: 'Fitness',
    description:
      'Our Gym Center is platform forinformation, programs and memberships ofgymnasium.',
    skills: 'HTML-CSS-JS',
    link: {
      href: 'https://mohammeddl.github.io/projetFitness/',
      label: 'Fitness.com',
    },
    repository: 'https://github.com/mohammeddl/projetFitness',
    logo: logoFitness,
    screenshots: [
      '/images/projects/fitness/screen1.jpg',
      '/images/projects/fitness/screen2.jpg'
    ],
  },
  {
    name: 'FaugetTravel',
    description:
      ' The platform offers a variety of travel packages, detailed itineraries, and user reviews to help travelers make informed decisions. ',
    skills: 'HTML-CSS-JS',
    link: {
      href: 'https://mohammeddl.github.io/projetFauget/index.html',
      label: 'fauget.com',
    },
    repository: 'https://github.com/mohammeddl/projetFauget',
    logo: fauget,
    screenshots: [
      '/images/projects/fauget/screen1.jpg',
      '/images/projects/fauget/screen2.jpg'
    ],
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
    repository: 'https://github.com/mohammeddl/citronix',
    logo: citronix,
    screenshots: [
      '/images/projects/citronix/screen1.jpg',
      '/images/projects/citronix/screen2.jpg'
    ],
  },
  {
    name: 'Employee Management ',
    description:
      'Develop an employee management application, allowing users to view, add, edit, and delete employees.',
    skills: 'ANGULAR-RxJS-TypeScript-localStorage',
    link: {
      href: 'https://employee-management-lime-zeta.vercel.app/employees',
      label: 'vercel.app',
    },
    repository: 'https://github.com/mohammeddl/employee-management',
    logo: employee,
    screenshots: [
      '/images/projects/employee/screen1.jpg',
      '/images/projects/employee/screen2.jpg'
    ],
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
    repository: 'https://github.com/mohammeddl/WikiProjet.git',
    logo: logoWiki,
    screenshots: [
      '/images/projects/wiki/screen1.jpg',
      '/images/projects/wiki/screen2.jpg'
    ],
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
    repository: 'https://github.com/mohammeddl/Evento',
    logo: logoEvanto,
    screenshots: [
      '/images/projects/evento/screen1.jpg',
      '/images/projects/evento/screen2.jpg'
    ],
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
    repository: 'https://github.com/zinebMachrouh/Whisper.git',
    logo: logoWhisper,
    screenshots: [
      '/images/projects/whisper/screen1.jpg',
      '/images/projects/whisper/screen2.jpg'
    ],
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
    repository: 'https://github.com/mohammeddl/HireMee.git',
    logo: logoHiremee,
    screenshots: [
      '/images/projects/hireme/screen1.jpg',
      '/images/projects/hireme/screen2.jpg'
    ],
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
    repository: 'https://github.com/Sahtani/Cryptocurrency_management.git',
    logo: logoNexus,
    screenshots: [
      '/images/projects/nexus/screen1.jpg',
      '/images/projects/nexus/screen2.jpg'
    ],
  },
  {
    name: 'cyberTeck',
    description:
      'The E-commerce project is a web application that allows users to browse, search, and purchase a variety of products online. The application offers a user-friendly and secure experience for online shopping, with features such as user authentication, cart management, order checkout, etc.',
    skills: 'REACTJS-LARAVEL-PGSQL-DOCKER',
    link: {
      href: 'https://github.com/mohammeddl/cyberTeck.git',
      label: 'github.com',
    },
    repository: 'https://github.com/mohammeddl/cyberTeck.git',
    logo: cybertech,
    screenshots: [
      '/images/projects/cyberteck/screen1.jpg',
      '/images/projects/cyberteck/screen2.jpg'
    ],
    style: {
      width: '50px',
      height: '50px',
    },
  },
]

export default siteMeta