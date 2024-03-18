
import logoAmazon from '@/images/logos/aws.svg'
import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoXOR from '@/images/logos/xor.jpg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFitness from '@/images/logos/fitness.png'
import logoWiki from '@/images/logos/wiki.png'

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'  
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
    link: { href: 'https://mohammeddl.github.io/projetFitness/', label: 'github.com' },
    logo: logoFitness,
  },
  {
    name: 'Wiki',
    description:
      'Wiki an effective content management system, combined with a front office, to offer an exceptional user experience.',
    link: { href: 'https://github.com/mohammeddl/WikiProjet.git', label: 'github.com' },
    logo: logoWiki,
  },
  {
    name: 'Vanilla OS',
    description:
      'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
    link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
    logo: logoVanilla,
  },
  {
    name: 'Captain Hook',
    description:
      'Custom commands as webhooks.',
    link: { href: 'https://github.com/bketelsen/captainhook', label: 'github.com' },
    logo: logoCaptainhook,
  },


]


export default siteMeta;