import Image from 'next/future/image'
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
import portraitImage from '@/images/brian-head.jpg'
import portraitImage2 from '@/images/3L3A0403.jpeg'
import siteMeta from '@/data/siteMeta'
import { NextSeo } from 'next-seo';


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
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
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I'm Daali Mohammed. Full Stack Web Development, 
            </h1>
            <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">
              <p>
              Deeply passionate about coding and creating innovative web solutions. With a dedicated focus on honing my skills, I strive to contribute meaningfully to the world of web development.
              </p>
              <h2>Skills:</h2>
              <p>
                <b>Frontend Development:</b> Proficient in HTML, CSS, JavaScript, React, Next, Angular .
              </p>
              <p>
                <b>Backend Development:</b> Skilled in Java, PHP and Spring Boot framework, Laravel framework, proficient in building robust backend systems to power dynamic web applications.
              </p>
              <p>
                <b>Database Management:</b> Experienced in database management using PgAdmin and PHPMyAdmin, Mongodb, ensuring efficient data storage and retrieval.
              </p>
              <p>
                <b>Containerization:</b> Knowledgeable in containerization techniques using Docker, enhancing deployment processes and scalability.
              </p>
              <h2>Additional Technologies:</h2>
              <p>
                <b>UML :</b> Skilled in creating UML diagrams to visualize and communicate system designs effectively.
              </p>
              <p>
                <b>Object-Oriented Programming (OOP):</b> Experienced in applying OOP principles to develop scalable and maintainable code.
              </p>
              <p>
                <b>Jira/trello:</b>  Familiar with project management tools like Jira/trello for effective collaboration and task tracking.
              </p>
              <p>
                <b>CI/CD:</b> Knowledgeable in CI/CD pipelines using Jenkins et Github Actions, ensuring efficient code integration and deployment.
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