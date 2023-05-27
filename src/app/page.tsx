'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';

import Modal from '../components/Modal';
import SideCard from '@/components/SideCard';

const fadeBottomVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'linear',
      duration: 0.3,
    },
  },
};

const fadeRightVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: -200,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'linear',
      duration: 0.3,
    },
  },
};

const techGridVariants: Variants = {
  offscreen: {
    y: 75,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'linear',
      duration: 0.3,
    },
  },
};

export default function Home() {
  const observer = useRef<IntersectionObserver>();
  const [activeId, setActiveId] = useState<string>('');
  const [showCard, setShowCard] = useState<boolean>(false);

  const sections = [
    {
      id: 'intro',
      icon: <i className="fa-solid fa-star"></i>,
    },
    {
      id: 'about',
      icon: <i className="fa-solid fa-address-card"></i>,
    },
    {
      id: 'resume',
      icon: <i className="fa-solid fa-file"></i>,
    },
    {
      id: 'skills',
      icon: <i className="fa-solid fa-chart-simple"></i>,
    },
    {
      id: 'projects',
      icon: <i className="fa-solid fa-folder"></i>,
    },
    {
      id: 'open-source',
      icon: <i className="fa-brands fa-osi"></i>,
    },
  ];

  useEffect(() => {
    const headings = sections.map((sections) => {
      return document.getElementById(sections.id);
    });

    observer.current = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((e) => {
          if (e.intersectionRatio > 0.5) {
            setActiveId(e.target.id);
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    headings.forEach((e) => e && observer.current?.observe(e));

    return () => observer.current?.disconnect();
  }, []);

  return (
    <div>
      <Script
        src="https://kit.fontawesome.com/e8971d5674.js"
        crossOrigin="anonymous"
      />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] relative">
        {/* side bar */}
        <motion.div
          className="fixed h-screen md:flex flex-col justify-start pt-4 right-0 pr-7 hidden top-0 w-fit z-10"
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            offscreen: {
              opacity: 0,
            },
            onscreen: {
              opacity: 1,
              transition: {
                type: 'linear',
                duration: 0.5,
              },
            },
          }}
        >
          <div className="flex flex-col rounded-full border border-gray-tertiary p-2 gap-6 items-center text-sm text-gray-secondary">
            {sections.map((section) => {
              return (
                <a
                  href={`#${section.id}`}
                  key={section.id}
                  className={clsx('hover:text-primary duration-300', {
                    'text-primary': section.id === activeId,
                  })}
                >
                  {section.icon}
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* side card */}
        <div className="p-4 justify-self-stretch md:block hidden">
          <SideCard />
        </div>

        {/* side card for mobile view */}
        <div className="fixed md:hidden right-0 bottom-0 p-4 z-10">
          <button
            className="bg-primary rounded-full p-2 flex items-center gap-2 text-gray-primary text-sm cursor-pointer hover:bg-primary/80"
            onClick={() => setShowCard(true)}
          >
            <i className="fa-solid fa-circle-info"></i>Info
          </button>
        </div>

        {/* modal */}
        <Modal show={showCard}>
          <SideCard />
          <div className="pt-2 flex justify-center items-center w-full">
            <button
              className="text-red-500 rounded-full text-lg bg-white aspect-square w-10 h-10 flex justify-center items-center hover:bg-white/75"
              onClick={() => setShowCard(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </Modal>

        {/* content */}
        <div className="px-6 md:max-w-[1024px] justify-self-center md:px-24 relative">
          {/* intro */}
          <motion.section
            id="intro"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={{
              offscreen: {
                opacity: 0,
              },
              onscreen: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="flex flex-col justify-center gap-12 h-screen"
          >
            <motion.div
              className="border border-gray-tertiary rounded-full text-xs w-fit px-3 py-0.5 text-gray-secondary flex gap-2 items-center"
              variants={{
                offscreen: {
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  transition: {
                    duration: 0.15,
                  },
                },
              }}
            >
              <i className="fa-solid fa-star"></i>
              Intro
            </motion.div>
            <motion.h1 className="text-5xl" variants={fadeBottomVariants}>
              <div>
                Hi my name is <span className="text-primary">Neil</span>.
              </div>
              <div>I build beautiful, performant software</div>
            </motion.h1>
            <motion.div
              className="text-gray-secondary text-sm max-w-sm"
              variants={fadeBottomVariants}
            >
              I build cool and performant software and I absolutely love what I
              do.
            </motion.div>

            <motion.a
              variants={fadeRightVariants}
              className="w-32 h-32 border border-gray-tertiary rounded-full self-end flex flex-col justify-center items-center hover:border-primary hover:text-white/80 gap-2"
              href="#projects"
            >
              Projects
              <i className="fa-solid fa-arrow-down text-gray-secondary"></i>
            </motion.a>

            <div className="flex gap-12">
              <motion.div
                variants={{
                  offscreen: {
                    opacity: 0,
                    y: 200,
                  },
                  onscreen: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      duration: 0.3,
                    },
                  },
                }}
              >
                <div className="text-6xl text-primary">1.5</div>
                <div className="text-gray-secondary text-xs">
                  years of experience
                </div>
              </motion.div>

              <motion.div
                variants={{
                  offscreen: {
                    opacity: 0,
                    y: 200,
                  },
                  onscreen: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      duration: 0.3,
                    },
                  },
                }}
              >
                <div className="text-6xl text-primary">4</div>
                <div className="text-gray-secondary text-xs w-[100px]">
                  projects shipped
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* about */}
          <motion.section
            id="about"
            className="flex flex-col justify-center gap-12 py-32"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={{
              offscreen: {
                opacity: 0,
              },
              onscreen: {
                opacity: 1,
                transition: {
                  type: 'linear',
                  duration: 0.2,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div
              className="border border-gray-tertiary rounded-full text-xs w-fit px-3 py-0.5 text-gray-secondary flex gap-2 items-center"
              variants={{
                offscreen: { opacity: 0 },
                onscreen: { opacity: 1 },
              }}
            >
              <i className="fa-solid fa-address-card"></i>
              About
            </motion.div>
            <motion.h2
              className="text-4xl"
              variants={{
                offscreen: { opacity: 0, y: 200 },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'linear',
                    duration: 0.3,
                  },
                },
              }}
            >
              I&apos;ve always <span className="text-primary">built</span> and{' '}
              <span className="text-primary">tinkered</span> with computers
            </motion.h2>
            <motion.div
              className="w-3/4 text-gray-secondary"
              variants={{
                offscreen: { opacity: 0, y: 200 },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'linear',
                    duration: 0.3,
                  },
                },
              }}
            >
              From a young age, my love for computers grew through activities
              like modding Minecraft and tinkering with Lua in Roblox. This,
              coupled with my passion for math, led me to pursue a computer
              science major at the University of Alberta. Building projects on
              the side, I discovered my true passion for web development. Now,
              with 1.5 years of experience as a full stack engineer, I continue
              to fuel my passion in this field.
            </motion.div>
          </motion.section>

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

              <motion.div
                className="border-l border-gray-tertiary py-10 pl-10 relative"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={{
                  offscreen: {
                    opacity: 0,
                  },
                  onscreen: {
                    transition: {
                      type: 'linear',
                      staggerChildren: 0.1,
                    },
                    opacity: 1,
                  },
                }}
              >
                <motion.div
                  className="absolute -left-1 -top-2 flex items-center"
                  variants={{
                    offscreen: {
                      opacity: 0,
                      y: 100,
                    },
                    onscreen: {
                      transition: {
                        type: 'linear',
                        duration: 0.3,
                      },
                      opacity: 1,
                      y: 0,
                    },
                  }}
                >
                  <div className="h-2 w-2 bg-gray-secondary rounded-full" />
                  <div className="pl-10 text-sm text-gray-secondary">
                    April 2022 - August 2022
                  </div>
                </motion.div>
                <motion.div
                  variants={{
                    offscreen: {
                      opacity: 0,
                      y: 100,
                    },
                    onscreen: {
                      transition: {
                        type: 'linear',
                        duration: 0.3,
                      },
                      opacity: 1,
                      y: 0,
                    },
                  }}
                >
                  Dapper Labs
                </motion.div>
                <motion.div
                  className="text-xs text-gray-secondary"
                  variants={{
                    offscreen: {
                      opacity: 0,
                      y: 100,
                    },
                    onscreen: {
                      transition: {
                        type: 'linear',
                        duration: 0.3,
                      },
                      opacity: 1,
                      y: 0,
                    },
                  }}
                >
                  Vancouver, Canada
                </motion.div>
              </motion.div>

              <motion.div
                className="border-l border-gray-tertiary py-10 pl-10 relative"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={{
                  offscreen: {
                    opacity: 0,
                  },
                  onscreen: {
                    transition: {
                      type: 'linear',
                      staggerChildren: 0.1,
                    },
                    opacity: 1,
                  },
                }}
              >
                <motion.div
                  className="absolute -left-1 -top-2 flex items-center"
                  variants={{
                    offscreen: {
                      opacity: 0,
                      y: 100,
                    },
                    onscreen: {
                      transition: {
                        type: 'linear',
                        duration: 0.3,
                      },
                      opacity: 1,
                      y: 0,
                    },
                  }}
                >
                  <div className="h-2 w-2 bg-gray-secondary rounded-full" />
                  <div className="pl-10 text-sm text-gray-secondary">
                    August 2020 - August 2021
                  </div>
                </motion.div>
                <motion.div
                  variants={{
                    offscreen: {
                      opacity: 0,
                      y: 100,
                    },
                    onscreen: {
                      transition: {
                        type: 'linear',
                        duration: 0.3,
                      },
                      opacity: 1,
                      y: 0,
                    },
                  }}
                >
                  MoveMate
                </motion.div>
                <motion.div
                  className="text-xs text-gray-secondary"
                  variants={{
                    offscreen: {
                      opacity: 0,
                      y: 100,
                    },
                    onscreen: {
                      transition: {
                        type: 'linear',
                        duration: 0.3,
                      },
                      opacity: 1,
                      y: 0,
                    },
                  }}
                >
                  Montreal, Canada
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={{
                offscreen: {
                  opacity: 0,
                },
                onscreen: {
                  transition: {
                    type: 'linear',
                    staggerChildren: 0.1,
                  },
                  opacity: 1,
                },
              }}
            >
              <h3 className="text-3xl pb-4">
                My <span className="text-primary">Education</span>
              </h3>
              <div className="border-l border-gray-tertiary py-10 pl-10 relative">
                <motion.div
                  className="absolute -left-1 -top-2 flex items-center"
                  variants={{
                    offscreen: {
                      opacity: 0,
                      y: 100,
                    },
                    onscreen: {
                      transition: {
                        type: 'linear',
                        duration: 0.3,
                      },
                      opacity: 1,
                      y: 0,
                    },
                  }}
                >
                  <div className="h-2 w-2 bg-gray-secondary rounded-full" />
                  <div className="pl-10 text-sm text-gray-secondary">
                    Graduated 2023
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    offscreen: {
                      opacity: 0,
                      y: 100,
                    },
                    onscreen: {
                      transition: {
                        type: 'linear',
                        duration: 0.3,
                      },
                      opacity: 1,
                      y: 0,
                    },
                  }}
                >
                  University of Alberta
                </motion.div>
                <motion.div
                  className="text-xs text-gray-secondary"
                  variants={{
                    offscreen: {
                      opacity: 0,
                      y: 100,
                    },
                    onscreen: {
                      transition: {
                        type: 'linear',
                        duration: 0.3,
                      },
                      opacity: 1,
                      y: 0,
                    },
                  }}
                >
                  Major Computer Science, Minor Math
                </motion.div>
              </div>
            </motion.div>
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
            <motion.div
              className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={{
                offscreen: {
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  transition: {
                    when: 'beforeChildren',
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              <motion.div
                className="flex flex-col w-fit items-center text-center gap-4"
                variants={techGridVariants}
              >
                <div className=" rounded-full flex flex-col justify-center  items-center aspect-square p-4 hover:border-primary">
                  <Image src="/react.png" alt="react" height={48} width={48} />
                </div>
                <div className="text-xs">React</div>
              </motion.div>
              <motion.div
                className="flex flex-col w-fit items-center gap-4"
                variants={techGridVariants}
              >
                <div className=" rounded-full flex flex-col justify-center  items-center aspect-square p-4 hover:border-primary">
                  <Image src="/nextjs.png" alt="next" height={48} width={48} />
                </div>
                <div className="text-xs">NextJS</div>
              </motion.div>
              <motion.div
                className="flex flex-col w-fit items-center text-center gap-4"
                variants={techGridVariants}
              >
                <div className=" rounded-full flex flex-col justify-center  items-center aspect-square p-4 hover:border-primary">
                  <Image
                    src="/fastapi.png"
                    alt="fastapi"
                    height={48}
                    width={48}
                  />
                </div>
                <div className="text-xs">FastAPI</div>
              </motion.div>
              <motion.div
                className="flex flex-col w-fit items-center text-center gap-4"
                variants={techGridVariants}
              >
                <div className=" rounded-full flex flex-col justify-center  items-center aspect-square p-4 hover:border-primary">
                  <Image src="/node.png" alt="node" height={48} width={48} />
                </div>
                <div className="text-xs">Node</div>
              </motion.div>
              <motion.div
                className="flex flex-col w-fit items-center text-center gap-4"
                variants={techGridVariants}
              >
                <div className=" rounded-full flex flex-col justify-center items-center aspect-square p-4 hover:border-primary">
                  <Image
                    src="/ts.png"
                    alt="typescript"
                    height={48}
                    width={48}
                  />
                </div>
                <div className="text-xs">TypeScript</div>
              </motion.div>
              <motion.div
                className="flex flex-col w-fit items-center text-center gap-4"
                variants={techGridVariants}
              >
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
              </motion.div>
              <motion.div
                className="flex flex-col w-fit items-center text-center gap-4"
                variants={techGridVariants}
              >
                <div className=" rounded-full flex flex-col justify-center  items-center aspect-square p-4 hover:border-primary">
                  <Image
                    src="/python.png"
                    alt="python"
                    height={48}
                    width={48}
                  />
                </div>
                <div className="text-xs">Python</div>
              </motion.div>
              <motion.div
                className="flex flex-col w-fit items-center text-center gap-4"
                variants={techGridVariants}
              >
                <div className=" rounded-full flex flex-col justify-center  items-center aspect-square p-4 hover:border-primary">
                  <Image
                    src="/postgres.png"
                    alt="postgres"
                    height={48}
                    width={48}
                  />
                </div>
                <div className="text-xs">Postgres</div>
              </motion.div>
              <motion.div
                className="flex flex-col w-fit items-center text-center gap-4"
                variants={techGridVariants}
              >
                <div className=" rounded-full flex flex-col justify-center  items-center aspect-square p-4 hover:border-primary">
                  <Image
                    src="/graphql.png"
                    alt="graphql"
                    height={48}
                    width={48}
                  />
                </div>
                <div className="text-xs">GraphQL</div>
              </motion.div>
            </motion.div>
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
              <motion.div
                className="col-span-2 group cursor-pointer"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={{
                  offscreen: {
                    opacity: 0,
                    y: 100,
                  },
                  onscreen: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'linear',
                      duration: 0.2,
                    },
                  },
                }}
              >
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
                  Bonavoy{' '}
                  <span className="text-gray-secondary">
                    The truly collaborative trip planner.
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="col-span-2 group cursor-pointer"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={{
                  offscreen: {
                    opacity: 0,
                    y: 100,
                  },
                  onscreen: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'linear',
                      duration: 0.2,
                    },
                  },
                }}
              >
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
                      href="https://github.com/neilZon/until-failure-ios"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white text-gray-primary px-2 flex items-center hover:text-gray-primary/80 py-1 gap-1"
                    >
                      <i className="fa-brands fa-github"></i>
                      iOS
                    </a>
                    <a
                      href="https://github.com/neilZon/until-failure-api"
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
                  <span className="text-gray-secondary">
                    {' '}
                    Your workouts, anywhere, anytime, stored in the cloud.
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="group cursor-pointer justify-self-stretch"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={{
                  offscreen: {
                    opacity: 0,
                    y: 100,
                  },
                  onscreen: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'linear',
                      duration: 0.2,
                    },
                  },
                }}
              >
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
                  <span className="text-gray-secondary">
                    {' '}
                    Twitter clone capstone project.
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="group cursor-pointer justify-self-stretch"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={{
                  offscreen: {
                    opacity: 0,
                    y: 100,
                  },
                  onscreen: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'linear',
                      duration: 0.2,
                    },
                  },
                }}
              >
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
                      className="rounded-full bg-white text-gray-primary px-2 flex items-center hover:text-gray-primary/80 py-1 gap-1"
                    >
                      <i className="fa-solid fa-circle-info"></i>
                      About
                    </a>
                  </div>
                </div>
                <div className="text-sm group-hover:underline py-4">
                  AI4Buzz
                  <span className="text-gray-secondary">
                    {' '}
                    Analyze the virality of social media posts.
                  </span>
                </div>
              </motion.div>
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
            <motion.div
              className="grid md:grid-cols-2 gap-4"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={{
                offscreen: {
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  transition: {
                    type: 'linear',
                    duration: 0.5,
                  },
                },
              }}
            >
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
                      className="rounded-full bg-white text-gray-primary px-2 flex items-center hover:text-gray-primary/80 py-1 gap-1"
                    >
                      <i className="fa-solid fa-link"></i>
                      Code Edit
                    </a>
                    <a
                      href="https://github.com/CodeEditApp/CodeEdit/pulls?q=is%3Apr+is%3Aclosed+neilzon"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white text-gray-primary px-2 flex items-center hover:text-gray-primary/80 py-1 gap-1"
                    >
                      <i className="fa-brands fa-github"></i>PR&apos;s
                    </a>
                  </div>
                </div>
                <div className="text-sm group-hover:underline py-4">
                  Code Edit
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
      <footer className="bg-[#141315] pt-24 pb-2">
        <div className="flex justify-center flex-col items-center pb-12 gap-12">
          <h4 className="text-4xl pb-4">
            Impressed? <span className="text-primary">Let&apos;s talk</span>.
          </h4>
          <a
            href="mailto: neilzoncviloria@gmail.com"
            className="rounded-full text-gray-primary bg-primary text-xs py-3 hover:bg-primary/80 px-4"
          >
            Contact Me
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href="https://github.com/neilZon"
            target="_blank"
            rel="noreferrer"
            className="flex rounded-full justify-center items-center w-8 h-8 cursor-pointer hover:text-primary "
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/neilzonv/"
            target="_blank"
            rel="noreferrer"
            className="flex rounded-full justify-center items-center w-8 h-8 cursor-pointer hover:text-primary"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
