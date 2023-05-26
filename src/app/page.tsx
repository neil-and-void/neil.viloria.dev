import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  return (
    <div>
      <Script
        src="https://kit.fontawesome.com/e8971d5674.js"
        crossOrigin="anonymous"
      ></Script>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr]">
        {/* side bar */}
        <div className="fixed h-screen md:flex flex-col justify-center right-0 pr-7 hidden">
          <div className="flex flex-col rounded-full border border-gray-tertiary p-2 gap-6 items-center text-sm text-gray-secondary">
            <i className="fa-solid fa-star hover:text-primary cursor-pointer"></i>
            <i className="fa-solid fa-address-card hover:text-primary cursor-pointer"></i>
            <i className="fa-solid fa-file hover:text-primary cursor-pointer"></i>
            <i className="fa-solid fa-chart-simple hover:text-primary cursor-pointer"></i>
            <i className="fa-solid fa-folder hover:text-primary cursor-pointer"></i>
            <i className="fa-brands fa-osi hover:text-primary cursor-pointer"></i>
          </div>
        </div>

        {/* side card */}
        <div className="justify-self-stretch md:block hidden">
          <div className="p-4 sticky top-0">
            <div className="sticky fiex border border-gray-tertiary h-full rounded-3xl w-full p-8">
              <div className="flex justify-between gap-1 items-center pb-12">
                <div className="text-3xl font-medium">Neil</div>
                <div className="text-xs">Fullstack Engineer</div>
              </div>

              <div className="flex justify-center pb-12">
                <Image
                  src="/me.png"
                  alt="me"
                  width={256}
                  height={256}
                  className=" rounded-full bg-gray-secondary/10"
                />
              </div>

              <div className=" text-center pb-8">
                <div>neilzoncviloria@gmail.com</div>
                <div>Edmonton, Ab {'\u{1F1E8}\u{1F1E6}'}</div>
              </div>

              <div className="flex justify-center gap-2 text-sm text-gray-secondary pb-16">
                <a
                  href="https://github.com/neilZon"
                  target="_blank"
                  rel="noreferrer"
                  className="flex rounded-full justify-center items-center border border-gray-tertiary w-8 h-8 cursor-pointer hover:text-primary hover:border-primary"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/neilzonv/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex rounded-full justify-center items-center border border-gray-tertiary w-8 h-8 cursor-pointer hover:text-primary hover:border-primary"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://drive.google.com/file/d/1D-gKEgBB9q__SfZ46w1tTAnS8urXOcZX/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="flex rounded-full justify-center items-center border border-gray-tertiary w-8 h-8 cursor-pointer hover:text-primary hover:border-primary"
                >
                  <i className="fa-solid fa-file"></i>
                </a>
              </div>

              <a
                href="mailto: neilzoncviloria@gmail.com"
                className="w-full rounded-full text-gray-primary bg-primary py-3 hover:bg-primary/80 flex items-center justify-center gap-2 text-sm"
              >
                <i className="fa-solid fa-envelope"></i> Let&apos;s Chat!
              </a>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="px-4 md:max-w-[1024px] justify-self-center md:px-24">
          {/* intro */}
          <section
            id="intro"
            className="flex flex-col justify-center gap-12 h-screen"
          >
            <div className="border border-gray-tertiary rounded-full text-xs w-fit px-3 py-0.5 text-gray-secondary flex gap-2 items-center">
              <i className="fa-solid fa-star"></i>
              Intro
            </div>
            <h1 className="text-5xl">
              Hi my name is <span className="text-primary">Neil</span>, I build
              beautiful, performant software
            </h1>
            <div className="text-gray-secondary text-sm max-w-sm">
              I build cool and performant software and I absolutely love what I
              do.
            </div>

            <a
              className="w-32 h-32 border border-gray-tertiary rounded-full self-end flex justify-center items-center hover:border-primary hover:text-white/80"
              href="#projects"
            >
              Projects
            </a>

            <div className="flex gap-12">
              <div>
                <div className="text-6xl text-primary">1.5</div>
                <div className="text-gray-secondary text-xs">
                  years of experience
                </div>
              </div>

              <div>
                <div className="text-6xl text-primary">4</div>
                <div className="text-gray-secondary text-xs">
                  personal projects shipped
                </div>
              </div>
            </div>
          </section>
          {/* about */}
          <section
            id="about"
            className="flex flex-col justify-center gap-12 py-32"
          >
            <div className="border border-gray-tertiary rounded-full text-xs w-fit px-3 py-0.5 text-gray-secondary flex gap-2 items-center">
              <i className="fa-solid fa-address-card"></i>
              About
            </div>
            <h2 className="text-4xl">
              I&apos;ve always <span className="text-primary">built</span> and{' '}
              <span className="text-primary">tinkered</span> with computers
            </h2>
            <div className="w-3/4 text-gray-secondary">
              From a young age, my love for computers grew through activities
              like modding Minecraft and tinkering with Lua in Roblox. This,
              coupled with my passion for math, led me to pursue a computer
              science major at the University of Alberta. Building projects on
              the side, I discovered my true passion for web development. Now,
              with 1.5 years of experience as a full stack engineer, I continue
              to fuel my passion in this field.
            </div>
          </section>
          {/* resume */}
          <section
            id="resume"
            className="py-32 flex flex-col justify-center gap-12"
          >
            <div className="border border-gray-tertiary rounded-full text-xs w-fit px-3 py-0.5 text-gray-secondary flex gap-2 items-center">
              <i className="fa-solid fa-file"></i>
              Resume
            </div>
            <div>
              <h3 className="text-3xl pb-4">
                My <span className="text-primary">Experience</span>
              </h3>

              <div className="border-l border-gray-tertiary py-10 pl-10 relative">
                <div className="absolute -left-1 -top-2 flex items-center">
                  <div className="h-2 w-2 bg-gray-secondary rounded-full" />
                  <div className="pl-10 text-sm text-gray-secondary">
                    April 2022 - August 2022
                  </div>
                </div>
                <div>Dapper Labs</div>
                <div className="text-xs text-gray-secondary">
                  Vancouver, Canada
                </div>
              </div>

              <div className="border-l border-gray-tertiary py-10 pl-10 relative">
                <div className="absolute -left-1 -top-2 flex items-center">
                  <div className="h-2 w-2 bg-gray-secondary rounded-full" />
                  <div className="pl-10 text-sm text-gray-secondary">
                    August 2020 - August 2021
                  </div>
                </div>
                <div>MoveMate</div>
                <div className="text-xs text-gray-secondary">
                  Montreal, Canada
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl pb-4">
                My <span className="text-primary">Education</span>
              </h3>
              <div className="border-l border-gray-tertiary py-10 pl-10 relative">
                <div className="absolute -left-1 -top-2 flex items-center">
                  <div className="h-2 w-2 bg-gray-secondary rounded-full" />
                  <div className="pl-10 text-sm text-gray-secondary">
                    Graduated 2023
                  </div>
                </div>

                <div>University of Alberta</div>
                <div className="text-xs text-gray-secondary">
                  Major Computer Science, Minor Math
                </div>
              </div>
            </div>
          </section>
          {/* skills */}
          <section
            id="skills"
            className="py-32 flex flex-col justify-center gap-12"
          >
            <div className="border border-gray-tertiary rounded-full text-xs w-fit px-3 py-0.5 text-gray-secondary flex gap-2 items-center">
              <i className="fa-solid fa-chart-simple"></i>
              Skills
            </div>
            <h2 className="text-4xl">
              <span className="text-primary">Technologies</span> I&apos;ve
              worked with
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="flex flex-col w-fit items-center text-center gap-4">
                <div className=" rounded-full flex flex-col justify-center  items-center aspect-square p-4 hover:border-primary">
                  <Image src="/react.png" alt="react" height={48} width={48} />
                </div>
                <div className="text-xs">React</div>
              </div>
              <div className="flex flex-col w-fit items-center gap-4">
                <div className=" rounded-full flex flex-col justify-center  items-center aspect-square p-4 hover:border-primary">
                  <Image src="/next.png" alt="next" height={48} width={48} />
                </div>
                <div className="text-xs">NextJS</div>
              </div>
              <div className="flex flex-col w-fit items-center text-center gap-4">
                <div className=" rounded-full flex flex-col justify-center  items-center aspect-square p-4 hover:border-primary">
                  <Image
                    src="/fastapi.png"
                    alt="fastapi"
                    height={48}
                    width={48}
                  />
                </div>
                <div className="text-xs">FastAPI</div>
              </div>
              <div className="flex flex-col w-fit items-center text-center gap-4">
                <div className=" rounded-full flex flex-col justify-center  items-center aspect-square p-4 hover:border-primary">
                  <Image src="/node.png" alt="node" height={48} width={48} />
                </div>
                <div className="text-xs">Node</div>
              </div>
              <div className="flex flex-col w-fit items-center text-center gap-4">
                <div className=" rounded-full flex flex-col justify-center items-center aspect-square p-4 hover:border-primary">
                  <Image
                    src="/ts.png"
                    alt="typescript"
                    height={48}
                    width={48}
                  />
                </div>
                <div className="text-xs">TypeScript</div>
              </div>
              <div className="flex flex-col w-fit items-center text-center gap-4">
                <div className="p-4">
                  <div className="w-12 h-12 rounded-full flex flex-col justify-center items-center aspect-square p-4 hover:border-primary relative">
                    <Image
                      src="/go.png"
                      alt="go"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-xs">Go ❤️</div>
              </div>
              <div className="flex flex-col w-fit items-center text-center gap-4">
                <div className=" rounded-full flex flex-col justify-center  items-center aspect-square p-4 hover:border-primary">
                  <Image
                    src="/python.png"
                    alt="python"
                    height={48}
                    width={48}
                  />
                </div>
                <div className="text-xs">Python</div>
              </div>
              <div className="flex flex-col w-fit items-center text-center gap-4">
                <div className=" rounded-full flex flex-col justify-center  items-center aspect-square p-4 hover:border-primary">
                  <Image
                    src="/postgres.png"
                    alt="postgres"
                    height={48}
                    width={48}
                  />
                </div>
                <div className="text-xs">Postgres</div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section
            id="projects"
            className="py-32 flex flex-col justify-center gap-12"
          >
            <div className="border border-gray-tertiary rounded-full text-xs w-fit px-3 py-0.5 text-gray-secondary flex gap-2 items-center">
              <i className="fa-solid fa-folder"></i>
              Portfolio
            </div>
            <h3 className="text-4xl pb-4">
              My <span className="text-primary">Projects</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="col-span-2 group cursor-pointer">
                <div className="aspect-[2/1] relative">
                  <Image
                    src="/bonavoy.png"
                    fill
                    alt="bonavoy"
                    className="rounded-2xl object-cover"
                  />
                  <div className="absolute z-10 bottom-0 p-3 gap-2 group-hover:flex hidden text-sm">
                    <a
                      href="https://bonavoy.com"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-gray-primary px-2 flex items-center hover:text-white/80 py-1 gap-1"
                    >
                      <i className="fa-solid fa-link"></i>
                      bonavoy.com (preview)
                    </a>
                  </div>
                </div>
                <div className="text-sm group-hover:underline py-4">
                  Bonavoy
                </div>
              </div>
              <div className="col-span-2 group cursor-pointer">
                <div className="relative aspect-[2/1]">
                  <Image
                    src="/until-failure.png"
                    fill
                    alt="until failure"
                    className="rounded-2xl object-cover"
                  />
                  <div className="absolute z-10 bottom-0 p-3 gap-2 group-hover:flex hidden text-sm">
                    <a
                      href="https://apps.apple.com/ca/app/until-failure/id6446661560"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white text-gray-primary px-2 flex items-center hover:text-gray-primary/80 py-1 gap-1"
                    >
                      <i className="fa-brands fa-app-store"></i>
                      App Store
                    </a>
                    <a
                      href="https://apps.apple.com/ca/app/until-failure/id6446661560"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white text-gray-primary px-2 flex items-center hover:text-gray-primary/80 py-1 gap-1"
                    >
                      <i className="fa-brands fa-github"></i>
                      iOS
                    </a>
                    <a
                      href="https://apps.apple.com/ca/app/until-failure/id6446661560"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white text-gray-primary px-2 flex items-center hover:text-gray-primary/80 py-1 gap-1"
                    >
                      <i className="fa-brands fa-github"></i>
                      API
                    </a>
                  </div>
                </div>
                <div className="text-sm group-hover:underline py-4">
                  Until Failure
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="relative aspect-square">
                  <Image
                    src="/epic-app.png"
                    fill
                    alt="epic app"
                    className="rounded-2xl object-cover"
                  />
                  <div className="absolute z-10 bottom-0 p-3 gap-2 group-hover:flex hidden text-sm">
                    <a
                      href="https://drive.google.com/file/d/14-HMCRz_rZeyd0beVopqfYeRIBcCnFue/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-gray-primary px-2 flex items-center hover:text-white/80 py-1 gap-1"
                    >
                      <i className="fa-solid fa-film"></i>
                      Demo
                    </a>
                  </div>
                </div>
                <div className="text-sm group-hover:underline py-4">
                  Epic App
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-square relative">
                  <Image
                    src="/ai4buzz.png"
                    fill
                    alt="ai4buzz"
                    className="rounded-2xl object-cover"
                  />
                  <div className="absolute z-10 bottom-0 p-3 gap-2 group-hover:flex hidden text-sm">
                    <a
                      href="https://cmput401.ca/projects/a3bc8e93-1275-434e-9e88-f4af38bb276c"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-gray-primary px-2 flex items-center hover:text-white/80 py-1 gap-1"
                    >
                      <i className="fa-solid fa-film"></i>
                      About
                    </a>
                  </div>
                </div>
                <div className="text-sm group-hover:underline py-4">
                  AI4Buzz
                </div>
              </div>
            </div>
          </section>
          {/* portfolio */}
          <section
            id="open-source"
            className="py-32 flex flex-col justify-center gap-12"
          >
            <div className="border border-gray-tertiary rounded-full text-xs w-fit px-3 py-0.5 text-gray-secondary flex gap-2 items-center">
              <i className="fa-brands fa-osi"></i>
              Open Source
            </div>
            <h3 className="text-4xl pb-4">
              Open Source <span className="text-primary">Contributions</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="col-span-2 group cursor-pointer">
                <div className="aspect-[2/1] relative">
                  <Image
                    src="/codeedit.png"
                    fill
                    alt="code edit"
                    className="rounded-2xl object-cover"
                  />
                  <div className="absolute z-10 bottom-0 p-3 gap-2 group-hover:flex hidden text-sm">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.codeedit.app/"
                      className="rounded-full bg-gray-primary px-2 flex items-center hover:text-white/80 py-1 gap-1"
                    >
                      <i className="fa-solid fa-link"></i>
                      Code Edit
                    </a>
                  </div>
                </div>
                <div className="text-sm group-hover:underline py-4">
                  Code Edit
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className="bg-[#141315]">
        <div className="flex justify-center flex-col items-center py-24 gap-12">
          <h4 className="text-4xl pb-4">
            Impressed? <span className="text-primary">Let&apos;s talk</span>.
          </h4>
          <a
            href="mailto: neilzoncviloria@gmail.com"
            className="rounded-full text-gray-primary bg-primary text-xs py-3 hover:bg-primary/80 px-4"
          >
            Let&apos;s Chat!
          </a>
        </div>
        <div className="flex justify-center">{'\u{1F1E8}\u{1F1E6}'}</div>
      </footer>
    </div>
  );
}
