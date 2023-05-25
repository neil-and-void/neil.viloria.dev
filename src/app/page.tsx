import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="relative text-black">
        <nav className="flex justify-between py-6 absolute items-center px-8 w-full">
          <div className="flex justify-center items-center">
            <i className="fa-solid fa-bracket-curly" />
            <div className="text-xl">neil.viloria.dev</div>
            <i className="fa-solid fa-bracket-curly-right" />
          </div>

          <div className="flex gap-2 items-center">
            <a
              href="https://drive.google.com/file/d/1D-gKEgBB9q__SfZ46w1tTAnS8urXOcZX/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-black text-white text-xs px-1 h-5 flex justify-center items-center"
            >
              resume
            </a>
            <a
              href="https://github.com/neilZon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/neilzonv/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin text-lg" />
            </a>
          </div>
        </nav>

        <section className="grid grid-cols-[1fr_min-content] container mx-auto xl:px-64 h-screen px-4">
          <div className="text-left self-center">
            <h1 className="text-2xl">My name is Neil.</h1>
            <h1 className="text-6xl font-serif">
              I build <span className="text-cinnabar">beautiful</span>,
              <span className="text-downy">performant</span>
              software
            </h1>
            <a
              className="bg-cinnabar duration-150 hover:bg-cinnabar-300 text-white px-2 py-1 rounded-md text-lg"
              href="mailto: neilzoncviloria@gmail.com"
            >
              Let's chat
            </a>
          </div>

          <div className="rounded-full relative h-60 w-60 self-center">
            <img className="absolute" src="face_1.png" alt="bla" />
          </div>
        </section>

        <section className="container mx-auto xl:px-64 gap-12 h-screen px-4 flex flex-col justify-center">
          <div>
            <h2 className="font-serif text-5xl">A little bit about me...</h2>
            <div className="text-md">
              My name is Neil, and I am a recent graduate in software
              engineering with 1.5 years of professional experience working on
              full-stack development. I am passionate about creating innovative
              software solutions that enrich the lives of users. Currently, I am
              focused on developing Bonavoy, a collaborative adventure planning
              application that aims to simplify the way people plan and
              experience their trips.
            </div>
            <div className="flex justify-center">
              <img src="face_2.png" className="h-60 w-60" alt="me on laptop" />
            </div>
          </div>
        </section>

        <section className="container mx-auto xl:px-64 gap-8 py-64 md:h-screen px-4">
          <h2 className="font-serif text-5xl">Experience</h2>

          <div className="flex">
            <img
              className="h-32 w-32 object-contain"
              src="dapper_labs.png"
              alt="dapper labs logo"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">Dapper Labs</h3>

              <ul className="list-disc pl-8">
                <li>
                  Developed a Golang GraphQL service to facilitate engineers in
                  prototyping Flow apps by allowing them to execute transactions
                  and scripts on a live blockchain development environment.
                </li>
                <li>
                  Improved build times by 83% with a scalable documentation
                  service using React, Remix, Node, Tailwind, TypeScript and
                  Redis{' '}
                  <a href="https://developers.flow.com">
                    https://developers.flow.com
                  </a>
                </li>
                <li>
                  Developed and executed a suite of automated tests for a core
                  CLI tool ensuring that each release was stable and
                  high-quality.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex">
            <img
              className="h-32 w-32 object-contain"
              src="movemate.png"
              alt="movemate logo"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">MoveMate</h3>
              <ul className="list-disc pl-8">
                <li>
                  Developed a NextJS, React, TypeScript, and Redux booking app
                  for move booking which increased conversions by 25% and
                  reduced bounce rates by 75%.
                </li>
                <li>
                  Created a Python-based REST API with FastAPI and MongoDB from
                  scratch for an on-demand booking app and internal dashboard
                  allowing the team to ship new features to market within short
                  timelines.
                </li>
                <li>
                  Built booking management/analytics dashboard with NextJS,
                  React, TypeScript, and Redux for job and invoice management
                  thereby increasing productivity of the operations department.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className=" container mx-auto xl:px-64 px-4">
          <h2 className="font-serif text-5xl pb-12">Project Portfolio</h2>

          <div className="pb-12">
            <img
              src="bonavoy.png"
              alt="bonavoy screenshot"
              className="rounded-md shadow-lg object-contain"
            />
            <div className="text-center">
              <h3 className="font-serif text-2xl">Bonavoy</h3>
              <p>The truly collaborative adventure planner</p>
              <a href="https://bonavoy.com" rel="noreferrer" target="_blank">
                <i className="fa-solid fa-link" />
              </a>
            </div>
          </div>
          <div className="pb-12">
            <div className="flex justify-between">
              {/* <img
					src="until_failure.png"
					alt="until failure screenshot text-center"
					className="rounded-md shadow-md object-contain"
				/>
				<img
					src="until_failure-1.png"
					alt="until failure screenshot text-center"
					className="rounded-md shadow-md object-contain"
				/>
				<img
					src="until_failure-2.png"
					alt="until failure screenshot text-center"
					className="rounded-md shadow-md object-contain"
				/>  */}
            </div>

            <div className="text-center">
              <h3 className="font-serif text-2xl text-center">Until Failure</h3>
              <p>iOS workout app that stores your workouts in the cloud</p>
              <div className="flex justify-center gap-4 w-full">
                <a
                  href="https://apps.apple.com/ca/app/until-failure/id6446661560"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-solid fa-link" />
                </a>
                <a
                  href="https://github.com/neilZon/until-failure-ios"
                  rel="noreferrer"
                  target="_blank"
                >
                  iOS
                  <i className="fa-brands fa-github text-lg" />
                </a>
                <a
                  href="https://github.com/neilZon/until-failure-api"
                  rel="noreferrer"
                  target="_blank"
                >
                  API
                  <i className="fa-brands fa-github text-lg" />
                </a>
              </div>
            </div>
          </div>
          <div className="pb-12">
            <img
              src="ai4buzz.png"
              className="object-contain rounded-md shadow-lg"
              alt="ai 4 buzz"
            />
            <div className="text-center">
              <h3 className="font-serif text-2xl">AI4Buzz</h3>
              <p>Analyze the virality of social media posts with AI</p>
              <a
                href="https://cmput401.ca/projects/a3bc8e93-1275-434e-9e88-f4af38bb276c"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa-solid fa-link" />
              </a>
            </div>
          </div>
          <div className="pb-12">
            <img
              src="epic-app.png"
              className="object-contain rounded-md shadow-lg"
              alt="ai 4 buzz"
            />

            <div className="text-center">
              <h3 className="font-serif text-2xl">Epic App</h3>
              <p>Decentralized Twitter app (Mastodon clone)</p>

              <a
                href="https://github.com/orgs/EpicAppCorp/repositories"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa-solid fa-link" />
              </a>
            </div>
          </div>
        </section>

        <section className="xl:px-64 container mx-auto gap-12 px-4">
          <h1 className="font-serif text-5xl pb-12">
            Open source contributions
          </h1>

          <div className="flex justify-center py-12">
            <div>
              <img
                src="codeedit-window-dark.webp"
                className="object-contain"
                alt="code edit"
              />
              <div className="pb-4">
                <h3 className="font-serif text-2xl">
                  CodeEdit
                  <a
                    href="https://www.codeedit.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-solid fa-link" />
                  </a>
                </h3>
                <p>
                  VSCode alternative that utilizes MacOS native technologies for
                  optimal performance
                </p>
              </div>
              <label htmlFor="contributions">Contributions</label>
              <ul id="contributions" className="list-disc pl-8">
                <li>
                  Editor file drag and drop
                  <a
                    href="https://github.com/CodeEditApp/CodeEdit/pull/1031"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github text-lg" />
                  </a>
                </li>
                <li>
                  window bug fix
                  <a
                    href="https://github.com/CodeEditApp/CodeEdit/pull/1004"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github text-lg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-12">
            <img
              src="flow.png"
              alt="Flow"
              className="object-contain rounded-md shadow-lg"
            />
            <div className="pb-4">
              <h3 className="font-serif text-2xl">
                Flow Developer Portal
                <a
                  href="https://developers.flow.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-solid fa-link" />
                </a>
              </h3>
              <p>
                VSCode alternative that utilizes MacOS native technologies for
                optimal performance
              </p>
            </div>
            <a
              href="https://github.com/onflow/developer-portal/pulls?q=is%3Apr+author%3AneilZon+"
              rel="noreferrer"
              target="_blank"
              className="flex items-center gap-2"
            >
              Contributions
              <i className="fa-brands fa-github text-lg" />
            </a>
          </div>
        </section>

        <section className="xl:px-64 container mx-auto flex flex-col justify-center items-center h-screen px-4">
          <h2 className="font-serif text-5xl">
            Tech I'm interested in working with
          </h2>

          <div className="py-8">
            <div className="flex items-center gap-2">
              <img className="h-8 object-contain" src="next.png" alt="next" />
              <img className="h-8 object-contain" src="react.png" alt="react" />
              <img
                className="h-8 object-contain"
                src="express.png"
                alt="express"
              />
              <img
                className="h-8 object-contain"
                src="graphql.png"
                alt="graphql"
              />
              <img
                className="h-8 object-contain"
                src="tailwind.png"
                alt="tailwind"
              />
            </div>
          </div>
          <div className="py-8">
            <div className="flex items-center justify-end gap-2">
              <img className="h-8 object-contain" src="go.png" alt="express" />
              <img
                className="h-8 object-contain"
                src="ts.png"
                alt="typescript"
              />
              <img
                className="h-8 object-contain"
                src="python.png"
                alt="python"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="text-white bg-black">
        <div className=" container mx-auto flex justify-center md:px-64 py-8">
          <a
            className="bg-cinnabar duration-150 hover:bg-cinnabar-300 text-white px-2 py-1 rounded-md text-sm"
            href="mailto: neilzoncviloria@gmail.com"
          >
            Let's chat
          </a>
        </div>
      </footer>
    </>
  );
}
