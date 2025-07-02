/* eslint-disable react/no-unescaped-entities */
import React, { Suspense } from 'react'
import Loading from '../loading'
import DownloadPdf from '../(components)/DownloadPdf'

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className='border-b-4 pb-2 text-[32px] text-green'>{children}</h2>
)
const H4 = ({ children }: { children: React.ReactNode }) => (
  <h4 className='text-[24px] font-extralight text-green'>{children}</h4>
)
const H5 = ({ children }: { children: React.ReactNode }) => (
  <h5 className='pt-2 text-[20px] font-medium text-green'>{children}</h5>
)
const Date = ({ children }: { children: React.ReactNode }) => (
  <span className='text-[14px] font-light text-green'>{children}</span>
)
const P = ({
  className = '',
  children,
}: {
  className?: React.ComponentProps<'div'>['className']
  children: React.ReactNode
}) => (
  <p className={`pt-2 text-[16px] font-light text-green ${className}`}>
    {children}
  </p>
)
const Achievement = ({ children }: { children: React.ReactNode }) => (
  <span className='text-[20px] font-bold text-green'>{children}</span>
)
const ListItem = ({
  markerClassName = '',
  children,
}: {
  markerClassName?: React.ComponentProps<'div'>['className']
  children: React.ReactNode
}) => (
  <div className='flex items-start gap-2'>
    <span
      className={`mt-4 h-2 w-2 shrink-0 rounded-full bg-green ${markerClassName}`}
    />
    <span className='text-[16px] font-light text-green marker:me-4'>
      {children}
    </span>
  </div>
)

const PdfCvPage = () => {
  return (
    <>
      <div id='lauris-cv'>
        <div className='flex items-start justify-between bg-[#fff] p-12 text-dark-green'>
          <div>
            <h1 className='text-[56px] leading-[3.25rem]'>LAURIS MELDERIS</h1>
            <h3 className='text-[32px]'>Senior Front-End developer</h3>
            <p>Phone: +371 29474237</p>
            <p>Email: lauris.melderis77@gmail.com</p>
            <p>Location: Latvia, Riga (Open for relocation)</p>
            <div>
              <span className='pr-2'>Linkedin:</span>
              <a
                href='https://www.linkedin.com/in/lauris-melderis-48971418b'
                className='border-b-[1px] pb-2'
              >
                https://www.linkedin.com/in/lauris-melderis-48971418b
              </a>
            </div>
          </div>
          <img src='/lauris.jpeg' alt='' className='rounded-[50%]' />
        </div>
        <div className='flex gap-16 p-12'>
          <div className='min-w-[60%]'>
            <H2>EXPERIENCE</H2>
            <div className='flex min-w-[60%] flex-col gap-4'>
              <div>
                <H4>Senior Frontend Developer</H4>
                <H5>Spinwise</H5>
                <Date>02/2025 - Present. Riga, Latvia</Date>
                <ListItem>Maintained 6 complex Next 13 applications.</ListItem>
                <ListItem>
                  Migrated class components to functional components.
                </ListItem>
                <ListItem>
                  Initated, made concrete rules and implemented new design
                  system using storybook.
                </ListItem>
                <ListItem>
                  Connected 8 team members to agree on code writing principles
                  with ESLint and Prettier.
                </ListItem>
              </div>
              <div>
                <H4>Senior Frontend Developer</H4>
                <H5>Accenture</H5>
                <Date>12/2023 - 02/2025. Riga, Latvia</Date>
                <ListItem>Mainted complex React web applications.</ListItem>
                <ListItem>Led intern onboarding process.</ListItem>
                <ListItem>
                  Led and improved the roadmaps for web technologies.
                </ListItem>
                <ListItem>
                  Made significant improvements for the intern onboarding and
                  mentoring program.
                </ListItem>
              </div>
              <div>
                <H4>Front-End Developer</H4>
                <H5>Accenture</H5>
                <Date>12/2022 - 11/2023. Riga, Latvia</Date>
                <ListItem>
                  Developed several complicated UI applications using React with
                  high recognition.
                </ListItem>
                <ListItem>
                  Created common component library, for creating user interfaces
                  incredibly fast.
                </ListItem>
                <ListItem>Managed DevOps and backend services.</ListItem>
                <ListItem>Adapted to Azure Cloud environment.</ListItem>
              </div>
              <div>
                <H4>Junior Front-End Developer</H4>
                <H5>Accenture</H5>
                <Date>09/2021 - 11/2022. Riga, Latvia</Date>
                <ListItem>
                  Developed a strong fundamental knowledge about frontend
                  technologies.
                </ListItem>
                <ListItem>
                  Helped to adjust the React components, following the best code
                  qualities.
                </ListItem>
                <ListItem>
                  Tested each corner case for the React components.
                </ListItem>
                <ListItem>
                  Learnt about Agile/SCRUM/Kanban methodologies and their
                  approaches.
                </ListItem>
              </div>
            </div>
            <br />
            <H2>EDUCATION</H2>
            <div className='flex flex-col gap-4'>
              <div>
                <H4>
                  Bachelor of Engineering - BE, Computer Science and Information
                  Technology
                </H4>
                <H5>Riga Technical University</H5>
                <Date>09/2019 - 06/2022. Riga, Latvia</Date>
              </div>
              <div>
                <H4>Secondary, General Studies</H4>
                <H5>Riga secondary school No 84</H5>
                <Date>09/2016 - 05/2019. Riga, Latvia</Date>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div>
              <H2>Summary</H2>
              <P>
                As a passionate and experienced Frontend Developer specializing
                in React.js and Next.js, who listens a lot to classical, edm and
                rock music to spread some magic across web applications. And as
                a Virgo, I am purely analytical, so I won't left things unsorted
                or miscalculated.If you're looking for a dedicated developer who
                combines technical proficiency with a proactive and adaptable
                approach, I'm excited to connect and explore how I can
                contribute to your product's success.
              </P>
            </div>
            <div>
              <H2>Key achievements</H2>
              <ListItem markerClassName='mt-[1.25rem]'>
                <Achievement>Enhanced Team Training</Achievement>
              </ListItem>
              <div className='pl-4'>
                <P>Improved team productivity through training sessions</P>
              </div>
              <ListItem markerClassName='mt-[1.25rem]'>
                <Achievement>
                  Achieved 99.9% uptime by optimizing web application
                  performance.
                </Achievement>
              </ListItem>
              <div className='pl-4'>
                <P>Improved team productivity through training sessions</P>
              </div>
              <ListItem markerClassName='mt-[1.25rem]'>
                <Achievement>Streamlined Onboarding Process</Achievement>
              </ListItem>
              <div className='pl-4'>
                <P>Reduced onboarding time by 30% with revamped process.</P>
              </div>
              <ListItem markerClassName='mt-[1.25rem]'>
                <Achievement>Built Component Library</Achievement>
              </ListItem>
              <div className='pl-4'>
                <P>
                  Developed component library reducing interface build time by
                  40%.
                </P>
              </div>
            </div>
            <div>
              <H2>Languages</H2>
              <div className='flex flex-col'>
                <div className='flex items-center justify-between gap-1'>
                  <Achievement>English</Achievement>
                  <P className='!p-0'>Advanced</P>
                </div>
                <div className='flex items-center justify-between gap-1'>
                  <Achievement>Latvian</Achievement>
                  <P className='!p-0'>Native</P>
                </div>
                <div className='flex items-center justify-between gap-1'>
                  <Achievement>Russian</Achievement>
                  <P className='!p-0'>Basic</P>
                </div>
              </div>
            </div>
            <div>
              <H2>Skills</H2>
              <H5>Primary</H5>
              <div className='flex gap-1'>
                <P>Next.js</P>
              </div>
              <H5>Core</H5>
              <div className='mt-2 flex flex-wrap gap-1 [&>*]:!p-0'>
                <P>React.js</P> |<P>Node.js</P> |<P>Typescript</P> |
                <P>JavaScript</P> |<P>Storybook</P> |
                <P>Redux.js (Persist, Thunk)</P> |<P>JavaScript</P> |<P>CSS</P>{' '}
                |<P>SCSS</P> |<P>Tailwind</P> |<P>MaterialUI</P> |<P>RestAPI</P>{' '}
                |<P>Jest</P> |<P>Cypress</P> |<P>Apollo GraphQL</P> |
                <P>Microsoft Azure Cloud</P>
              </div>
              <H5>Additional</H5>
              <div className='mt-2 flex flex-wrap gap-1 [&>*]:!p-0'>
                <P>Team leadership</P> |<P>Work environment methodologies</P> |
                <P>Ticket estimation</P> |<P>Ticket creation and structure</P> |
                <P>Roblox studio (Game development)</P> |<P>antv/G6 (JS Lib)</P>{' '}
                |<P>JavaScript</P> |<P>CSS</P> |<P>SCSS</P> |<P>Tailwind</P> |
                <P>MaterialUI</P> |<P>RestAPI</P> |<P>Apollo GraphQL</P>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <DownloadPdf />
      </Suspense>
    </>
  )
}

export default PdfCvPage
