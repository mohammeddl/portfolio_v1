import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  MastodonIcon
} from '@/components/SocialIcons'
const portraitImage = '/brian-head.jpg'
const portraitImage2 = '/3L3A0403.jpeg'
import siteMeta from '@/data/siteMeta'
import { NextSeo } from 'next-seo';


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <span className="flex">
          <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
          <span className="ml-4">{children}</span>
        </span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function DownloadIcon(props) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      aria-hidden="true" 
      {...props}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage2}
                alt=""
                width={512}
                height={512}
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Daali Mohammed. Full Stack Web Developer
            </h1>
            <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">
              <p>
              Deeply passionate about coding and creating innovative web solutions. With a dedicated focus on honing my skills, I strive to contribute meaningfully to the world of web development.
              </p>

              <h2>Technical Skills</h2>

              <p>
                <b>Back-end:</b> JAVA | Spring Boot | J2EE | Spring Core | JPA | JUnit
              </p>
              <p>
                <b>Front-end:</b> HTML | TailwindCSS | TypeScript | ReactJs | NextJs | Angular
              </p>
              <p>
                <b>DevOps:</b> DigitalOcean | Docker | Jenkins | Github Actions | Maven
              </p>
              <p>
                <b>Databases:</b> MySQL | PostgreSQL | Oracle | MongoDB
              </p>
              <p>
                <b>Tools:</b> Drawio UML | Git | GitHub | Jira | Trello
              </p>
              <p>
                <b>Methodologies:</b> Agile | Scrum
              </p>
              <p>
                <b>UI/UX:</b> Figma | Adobe Photoshop | Adobe Illustrator
              </p>

              <h2>Areas of Interest</h2>
              <p>
                Software Architecture | Clean Code Practices | Continuous Learning
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={siteMeta.author.instagram} icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href={siteMeta.author.github} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={siteMeta.author.linkedin} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMeta.author.email}`}
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                {siteMeta.author.email}
              </SocialLink>
              
              <li className="flex mt-4">
                <a
                  href="/CV_Daali_Mohammed.pdf"
                  download
                  className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                >
                  <DownloadIcon className="flex-none w-6 h-6 transition stroke-zinc-500 group-hover:stroke-teal-500" />
                  <span className="ml-4">Download My Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}