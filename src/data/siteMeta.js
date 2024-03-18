
import logoAmazon from '@/images/logos/aws.svg'
import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoXOR from '@/images/logos/xor.jpg'
import logoEvanto from '@/images/logos/evanto.png'
import logoFitness from '@/images/logos/fitness.png'
import logoWiki from '@/images/logos/wiki.png'
import logoWhisper from '@/images/logos/whisper.png'  
import logoHiremee from '@/images/logos/hiremee.png'  
const siteMeta = {
    title: "Brian Ketelsen",
    description: "Brian Ketelsen is a developer advocate, keynote speaker, author, and open source practitioner.",
    copyright: "Brian Ketelsen, CC-BY-SA",
    author: {
        name: "Daali mohammed",
        email: "daali.22.ss@gmail.com",
        instagram: "https://instagram.com/mohammed_dl1",
        github: "https://github.com/mohammeddl",
        linkedin: "https://ma.linkedin.com/in/daali-mohammed-85736b271/",
    },
    siteUrl: "https://brian.dev"
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
    link: { href: 'https://mohammeddl.github.io/projetFitness/', label: 'github.com' },
    logo: logoFitness,
  },
  {
    name: 'Wiki',
    description:
      'Wiki an effective content management system, combined with a front office, to offer an exceptional user experience.',
    skills: 'HTML-TAILWIND-JS-PHP-SQL',
    link: { href: 'https://github.com/mohammeddl/WikiProjet.git', label: 'github.com' },
    logo: logoWiki,
  },
  {
    name: 'Evento',
    description:
      'The company "Evento" aims to develop an innovative platform dedicated to the management and reservation of event tickets. ',
    skills: 'HTML-TAILWIND-JS-PHP LARAVEL-PGSQL-DOCKER',
    link: { href: 'https://github.com/mohammeddl/WikiProjet.git', label: 'github.com' },
    logo: logoEvanto,
  },
  {
    name: 'Whisper',
    description:
      'The company "Whispere" wants to develop an innovative messaging application that will allow users to exchange messages, photos, documents.Custom commands as webhooks.',
    skills: 'HTML-TAILWIND-JS-PHP LARAVEL-PGSQL-DOCKER',
    link: { href: 'https://github.com/zinebMachrouh/Whisper.git', label: 'github.com' },
    logo: logoWhisper,
  },
  {
    name: 'HireMe',
    description:
      'HireMe wants to develop a job platform allowing users to find job opportunities and companies to publish their offers.',
    skills: 'HTML-TAILWIND-JS-PHP LARAVEL-SQL',
    link: { href: 'https://github.com/mohammeddl/HireMee.git', label: 'github.com' },
    logo: logoHiremee,
  },
  {
    name: 'HireMe',
    description:
      'HireMe wants to develop a job platform allowing users to find job opportunities and companies to publish their offers.',
    skills: 'HTML-TAILWIND-JS-PHP LARAVEL-SQL',
    link: { href: 'https://github.com/mohammeddl/HireMee.git', label: 'github.com' },
    logo: logoHiremee,
  },


]


export default siteMeta;