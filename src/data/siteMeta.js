const logoEvanto = '/logos/evanto.png'
const logoFitness = '/logos/fitness.png'
const logoWiki = '/logos/wiki.png'
const logoWhisper = '/logos/whisper.png'
const logoHiremee = '/logos/hiremee.png'
const logoNexus = '/logos/nexus.png'
const insurance = '/logos/insurance.png'
const citronix = '/logos/citronx.png'
const memoryGame = '/logos/memory_game.png'
const employee = '/logos/employee.png'
const cybertech = '/logos/cybertech.png'
const fauget = '/logos/fauget.png'
const recycleHub = '/logos/recyclehub.png'
const creativePrint = '/logos/creativeprint.png'
const resetclub = '/logos/resetlogo.avif'
const dakhlaclub = '/logos/LogoDakhla.avif'
const textCrafter = '/logos/textcrafterlogo.png'
const serene = '/logos/serene.png'

const siteMeta = {
  title: 'Daali Mohammed',
  description:
    'Daali Mohammed — full stack web developer building web experiences with Java, Spring Boot, React, Next.js and Angular.',
  copyright: 'Daali Mohammed',
  author: {
    name: 'Daali Mohammed',
    email: 'daali.22.ss@gmail.com',
    instagram: 'https://instagram.com/mohammed_dl1',
    github: 'https://github.com/mohammeddl',
    linkedin: 'https://ma.linkedin.com/in/daali-mohammed-85736b271/',
  },
  siteUrl: 'https://med.dev',
}

export const skills = [
  {
    label: 'front-end',
    items: ['HTML', 'TailwindCSS', 'TypeScript', 'ReactJS', 'NextJS', 'Angular'],
  },
  {
    label: 'back-end',
    items: ['Java', 'Spring Boot', 'J2EE', 'Spring Core', 'JPA', 'JUnit'],
  },
  {
    label: 'devops',
    items: ['DigitalOcean', 'Docker', 'Jenkins', 'GitHub Actions', 'Maven'],
  },
  {
    label: 'databases',
    items: ['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB'],
  },
  {
    label: 'tools',
    items: ['Draw.io UML', 'Git', 'GitHub', 'Jira', 'Trello'],
  },
  {
    label: 'methodologies',
    items: ['Agile', 'Scrum'],
  },
  {
    label: 'ui / ux',
    items: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
  },
]

export const interests = [
  'Software Architecture',
  'Clean Code Practices',
  'Continuous Learning',
]

export const projects = [
  {
    name: 'TextCrafter',
    description: 'TextCrafter is a website for crafters',
    skills:
      'NEXTJS - TailwindCSS - TYPESCRIPT - POSTGRESQL - DOCKER - GITHUB ACTIONS CI/CD',
    accent: 'var(--accent-purple)',
    featured: true,
    link: {
      href: 'https://textcrafter.tech/en',
      label: 'textcrafter.tech',
    },
    logo: textCrafter,
    screenshots: ['/screens/textcrafter.png', '/screens/textcrafter2.png'],
  },
  {
    name: 'DakhlaClub',
    description: 'Dakhlaclub is a hotel website in dakhla',
    skills: 'NEXTJS - DOCKER - TYPESCRIPT - GITHUB ACTIONS CI/CD - TailwindCSS',
    accent: 'var(--accent-blue)',
    featured: true,
    link: {
      href: 'https://offer.dakhlaclub.com/fr/',
      label: 'offer.dakhlaclub.com',
    },
    logo: dakhlaclub,
    screenshots: [
      '/screens/dakhlaclub.png',
      '/screens/dakhlaclub2.png',
      '/screens/dakhlaclub3.png',
      '/screens/dakhlaclub4.png',
      '/screens/dakhlaclub5.png',
    ],
  },
  {
    name: 'ResetClub',
    description:
      'A platform to transform your body, mind, and emotions with the In-Out-Reset™ protocol, offering sports coaching, nutrition, biohacking, and well-being in Rabat.',
    skills: 'NEXTJS - DOCKER - Reactive Forms - TailwindCSS',
    accent: 'var(--accent-green)',
    featured: true,
    link: {
      href: 'https://resetclub.ma/',
      label: 'resetclub.ma',
    },
    logo: resetclub,
    screenshots: [
      '/screens/resetclub1.png',
      '/screens/resetclub2.png',
      '/screens/resetclub3.png',
    ],
  },
  {
    name: 'Sérène',
    description:
      'Sérène is a Casablanca-based maison de décoration. Handcrafted ceramics, lighting, mirrors and objects that soften the noise of everyday life.',
    skills: 'NEXTJS - TailwindCSS - TYPESCRIPT',
    accent: 'var(--accent-orange)',
    featured: true,
    link: {
      href: 'https://store-e-olive.vercel.app/',
      label: 'store-e-olive.vercel.app',
    },
    repository: 'https://github.com/mohammeddl/store-e',
    logo: serene,
    screenshots: [
      '/screens/serene1.png',
      '/screens/serene2.png',
      '/screens/serene3.png',
    ],
  },
  {
    name: 'RecycleHub',
    description:
      'The application RecycleHub is an innovative Single Page Application (SPA) that bridges the gap between individuals and certified waste collectors.',
    skills: 'ANGULAR - RxJS - DOCKER - Reactive Forms - TailwindCSS',
    accent: 'var(--accent)',
    featured: true,
    link: {
      href: 'https://recycle-hub-zeta.vercel.app/home',
      label: 'recycleHub.com',
    },
    repository: 'https://github.com/mohammeddl/RecycleHub',
    logo: recycleHub,
    screenshots: [
      '/screens/RecycleHub1.png',
      '/screens/RecycleHub2.png',
      '/screens/RecycleHub3.png',
      '/screens/RecycleHub4.png',
      '/screens/RecycleHub5.png',
      '/screens/RecycleHub6.png',
    ],
  },
  {
    name: 'CreativePrint',
    description:
      'CreativePrint is a comprehensive print-on-demand platform enabling creators to design, customize, and sell custom products with automated production and delivery.',
    skills:
      'JAVA SPRING BOOT - REACT - TypeScript - DOCKER - PostgreSQL - TailwindCSS - Github Actions CI/CD',
    accent: 'var(--accent-pink)',
    featured: true,
    link: {
      href: 'https://github.com/mohammeddl/CreativePrint',
      label: 'github.com',
    },
    logo: creativePrint,
    screenshots: [
      '/screens/createPrint.png',
      '/screens/createPrint1.png',
      '/screens/createPrint2.png',
    ],
  },
  {
    name: 'FaugetTravel',
    description:
      'The platform offers a variety of travel packages, detailed itineraries, and user reviews to help travelers make informed decisions.',
    skills: 'HTML - CSS - JS',
    accent: 'var(--accent-orange)',
    featured: true,
    link: {
      href: 'https://mohammeddl.github.io/projetFauget/index.html',
      label: 'fauget.com',
    },
    screenshots: [
      '/screens/FaugetTravel1.png',
      '/screens/FaugetTravel2.png',
      '/screens/FaugetTravel3.png',
    ],
    logo: fauget,
  },
  {
    name: 'Insurance',
    description:
      'The application aims to provide a smooth and intuitive user experience for managing insurance contracts.',
    skills: 'JAVA - JEE - POSTGRESQL - DOCKER - SWAGGER',
    accent: 'var(--accent-darkblue)',
    link: {
      href: 'https://github.com/mohammeddl/insurance.git',
      label: 'github.com',
    },
    logo: insurance,
  },
  {
    name: 'Memory-Game',
    description:
      'This is a classic memory game where the player must reproduce a sequence of colors in the correct order. With each level, the sequence gets longer, making the game more and more difficult.',
    skills: 'ANGULAR',
    accent: 'var(--accent-red)',
    link: {
      href: 'https://memory-game-eight-umber.vercel.app/',
      label: 'vercel.app',
    },
    repository: 'https://github.com/mohammeddl/memory-game',
    logo: memoryGame,
  },
  {
    name: 'Fitness',
    description:
      'Our Gym Center is platform for information, programs and memberships of gymnasium.',
    skills: 'HTML - CSS - JS',
    accent: 'var(--accent)',
    link: {
      href: 'https://mohammeddl.github.io/projetFitness/',
      label: 'Fitness.com',
    },
    repository: 'https://github.com/mohammeddl/projetFitness',
    logo: logoFitness,
  },
  {
    name: 'Citronix',
    description:
      'The Citronix project is developing a management application for a lemon farm',
    skills: 'JAVA - SPRINGBOOT - POSTGRESQL - DOCKER - SWAGGER - JENKINS',
    accent: 'var(--accent-green)',
    link: {
      href: 'https://citronix.systems/swagger-ui/index.html',
      label: 'citronix.systems',
    },
    repository: 'https://github.com/mohammeddl/citronix',
    logo: citronix,
  },
  {
    name: 'Employee Management',
    description:
      'Develop an employee management application, allowing users to view, add, edit, and delete employees.',
    skills: 'ANGULAR - RxJS - TypeScript - localStorage',
    accent: 'var(--accent-purple)',
    link: {
      href: 'https://employee-management-lime-zeta.vercel.app/employees',
      label: 'vercel.app',
    },
    repository: 'https://github.com/mohammeddl/employee_management',
    logo: employee,
  },
  {
    name: 'Wiki',
    description:
      'Wiki an effective content management system, combined with a front office, to offer an exceptional user experience.',
    skills: 'HTML - TAILWIND - JS - PHP - SQL',
    accent: 'var(--accent-blue)',
    link: {
      href: 'https://github.com/mohammeddl/WikiProjet.git',
      label: 'github.com',
    },
    logo: logoWiki,
  },
  {
    name: 'Evento',
    description:
      'The company "Evento" aims to develop an innovative platform dedicated to the management and reservation of event tickets.',
    skills: 'HTML - TAILWIND - JS - PHP LARAVEL - PGSQL - DOCKER',
    accent: 'var(--accent-orange)',
    link: {
      href: 'https://github.com/mohammeddl/evento',
      label: 'github.com',
    },
    logo: logoEvanto,
  },
  {
    name: 'Whisper',
    description:
      'The company "Whispere" wants to develop an innovative messaging application that will allow users to exchange messages, photos, documents. Custom commands as webhooks.',
    skills: 'HTML - TAILWIND - JS - PHP LARAVEL - PGSQL - DOCKER',
    accent: 'var(--accent-pink)',
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
    skills: 'HTML - TAILWIND - JS - PHP LARAVEL - SQL',
    accent: 'var(--accent-darkblue)',
    link: {
      href: 'https://github.com/mohammeddl/HireMe',
      label: 'github.com',
    },
    logo: logoHiremee,
  },
  {
    name: 'Nexus',
    description:
      'Nexus Crypto Wallet by offering a platform that provides real-time updates on cryptocurrency prices. This platform allows users to effectively manage their cryptocurrency portfolios and make secure transactions.',
    skills: 'HTML - TAILWIND - JS - PHP - SQL',
    accent: 'var(--accent)',
    link: {
      href: 'https://github.com/Sahtani/Cryptocurrency_management.git',
      label: 'github.com',
    },
    logo: logoNexus,
  },
  {
    name: 'CyberTeck',
    description:
      'The E-commerce project is a web application that allows users to browse, search, and purchase a variety of products online. The application offers a user-friendly and secure experience for online shopping, with features such as user authentication, cart management, order checkout, etc.',
    skills: 'REACTJS - LARAVEL - PGSQL - DOCKER',
    accent: 'var(--accent-red)',
    link: {
      href: 'https://github.com/mohammeddl/cyberTeck.git',
      label: 'github.com',
    },
    logo: cybertech,
  },
]

export default siteMeta
