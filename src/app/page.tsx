import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="grid grid-cols-[1fr_3fr]">
        {/* side bar */}
        <div className="fixed h-screen flex flex-col justify-center right-0 pr-8">
          <div className="flex flex-col rounded-full border border-gray-tertiary p-2">
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
          </div>
        </div>

        {/* side card */}
        <div className="justify-self-stretch">
          <div className=" p-4 sticky top-0">
            <div className="sticky fiex border border-gray-tertiary h-full rounded-3xl w-full p-8">
              <div className="flex justify-between gap-1 items-center pb-12">
                <div className="text-3xl font-medium">Neil</div>
                <div className="text-xs">Fullstack Engineer</div>
              </div>

              <div className="flex justify-center pb-12">
                <Image
                  src="/face_1.png"
                  alt="face"
                  width={256}
                  height={256}
                  className=" rounded-full bg-gray-secondary/10"
                />
              </div>

              <div className=" text-center pb-8">
                <div>neilzoncviloria@gmail.com</div>
                <div>Edmonton, Ab {'\u{1F1E8}\u{1F1E6}'}</div>
              </div>

              <div className="flex justify-center gap-2 text-xs text-gray-secondary pb-16">
                <Link
                  href="https://github.com/neilZon"
                  target="_blank"
                  rel="noreferrer"
                  className="flex rounded-full justify-center items-center border border-gray-tertiary w-8 h-8 cursor-pointer hover:text-primary hover:border-primary"
                >
                  <i className="fa-brands fa-github"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/neilzonv/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex rounded-full justify-center items-center border border-gray-tertiary w-8 h-8 cursor-pointer hover:text-primary hover:border-primary"
                >
                  Li
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1D-gKEgBB9q__SfZ46w1tTAnS8urXOcZX/view"
                  target="_blank"
                  rel="noreferrer"
                  className="flex rounded-full justify-center items-center border border-gray-tertiary w-8 h-8 cursor-pointer hover:text-primary hover:border-primary"
                >
                  Res
                </Link>
              </div>

              <button className="w-full rounded-full text-gray-primary bg-primary text-xs py-3 hover:bg-primary/80">
                Let&apos;s Chat!
              </button>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="px-2 md:px-32 lg:px-64">
          {/* intro */}
          <section className="flex flex-col justify-center gap-12 py-32">
            <div className="border border-gray-tertiary rounded-full text-xs w-fit px-3 py-0.5 text-gray-secondary">
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

            <button className="w-32 h-32 border border-gray-tertiary rounded-full self-end">
              Projects
            </button>

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
          <section className="flex flex-col justify-center gap-12 py-32">
            <div className="border border-gray-tertiary rounded-full text-xs w-fit px-3 py-0.5 text-gray-secondary">
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
          <section className="py-32 flex flex-col justify-center gap-12">
            <div className="border border-gray-tertiary rounded-full text-xs w-fit px-3 py-0.5 text-gray-secondary">
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
          <section className="py-32 flex flex-col justify-center gap-12">
            <div className="border border-gray-tertiary rounded-full text-xs w-fit px-3 py-0.5 text-gray-secondary">
              My Skills
            </div>
            <h2 className="text-4xl">
              <span className="text-primary">Technologies</span> I&apos;ve
              worked with
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col w-fit items-center text-center gap-4">
                <div className="border rounded-full flex flex-col justify-center border-gray-tertiary items-center aspect-square p-4 hover:border-primary">
                  <Image src="/react.png" alt="react" height={48} width={48} />
                </div>
                <div className="text-xs">React</div>
              </div>
              <div className="flex flex-col w-fit items-center gap-4">
                <div className="border rounded-full flex flex-col justify-center border-gray-tertiary items-center aspect-square p-4 hover:border-primary">
                  <Image src="/next.png" alt="next" height={48} width={48} />
                </div>
                <div className="text-xs">NextJS</div>
              </div>
              <div className="flex flex-col w-fit items-center text-center gap-4">
                <div className="border rounded-full flex flex-col justify-center border-gray-tertiary items-center aspect-square p-4 hover:border-primary">
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
                <div className="border rounded-full flex flex-col justify-center border-gray-tertiary items-center aspect-square p-4 hover:border-primary">
                  <Image src="/node.png" alt="node" height={48} width={48} />
                </div>
                <div className="text-xs">Node</div>
              </div>
              <div className="flex flex-col w-fit items-center text-center gap-4">
                <div className="border rounded-full flex flex-col justify-center border-gray-tertiary items-center aspect-square p-4 hover:border-primary">
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
                <div className="border rounded-full flex flex-col justify-center border-gray-tertiary items-center aspect-square p-4 hover:border-primary">
                  <Image src="/go.png" alt="go" height={48} width={48} />
                </div>
                <div className="text-xs">Go</div>
              </div>
              <div className="flex flex-col w-fit items-center text-center gap-4">
                <div className="border rounded-full flex flex-col justify-center border-gray-tertiary items-center aspect-square p-4 hover:border-primary">
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
                <div className="border rounded-full flex flex-col justify-center border-gray-tertiary items-center aspect-square p-4 hover:border-primary">
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
          <section className="py-32 flex flex-col justify-center gap-12">
            <div className="border border-gray-tertiary rounded-full text-xs w-fit px-3 py-0.5 text-gray-secondary">
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
                    className="rounded-2xl"
                  />
                  <div className="absolute z-10 bottom-0 p-3 gap-2 group-hover:flex hidden text-sm">
                    <div className="rounded-full bg-gray-primary px-2 py-0.5 flex items-center hover:text-white/80">
                      GitHub
                    </div>
                    <div className="rounded-full bg-gray-primary px-2 flex items-center hover:text-white/80">
                      bonavoy.com (preview)
                    </div>
                  </div>
                </div>
                <div className="text-sm group-hover:underline py-4">
                  Bonavoy
                </div>
              </div>
              <div className="col-span-2 group cursor-pointer">
                <div className="bg-gray-secondary rounded-xl aspect-[2/1]"></div>
                <div className="text-sm group-hover:underline py-4">
                  Until Failure
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-gray-secondary rounded-xl aspect-square"></div>
                <div className="text-sm group-hover:underline py-4">
                  Epic App
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-gray-secondary rounded-xl aspect-square"></div>
                <div className="text-sm group-hover:underline py-4">
                  AI4Buzz
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className="bg-[#141315]">
        <div className="flex justify-center flex-col items-center py-24">
          <h4 className="text-4xl pb-4">
            Impressed? <span className="text-primary">Let&apos;s talk</span>.
          </h4>
          <button className="rounded-full text-gray-primary bg-primary text-xs py-3 hover:bg-primary/80 px-4">
            Let&apos;s Chat!
          </button>
        </div>
        <div className="flex justify-center">{'\u{1F1E8}\u{1F1E6}'}</div>
      </footer>
    </div>
  );
}
