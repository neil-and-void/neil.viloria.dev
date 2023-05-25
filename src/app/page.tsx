import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_3fr]">
      {/* side card */}
      <div className="justify-self-stretch">
        <div className=" p-4 sticky top-0">
          <div className="sticky fiex border border-gray-tertiary h-full rounded-3xl	 w-full p-8">
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
              <div>Edmonton, Ab</div>
            </div>

            <div className="flex justify-center gap-2 text-xs text-gray-secondary pb-16">
              <div className="flex rounded-full justify-center items-center border border-gray-tertiary w-8 h-8 cursor-pointer hover:text-primary hover:border-primary">
                <i className="fa-brands fa-github"></i>
              </div>
              <div className="flex rounded-full justify-center items-center border border-gray-tertiary w-8 h-8 cursor-pointer hover:text-primary hover:border-primary">
                Li
              </div>
              <div className="flex rounded-full justify-center items-center border border-gray-tertiary w-8 h-8 cursor-pointer hover:text-primary hover:border-primary">
                Res
              </div>
            </div>

            <button className="w-full rounded-full text-gray-primary bg-primary text-xs py-3 hover:bg-primary/80">
              Let's Chat!
            </button>
          </div>
        </div>
      </div>

      {/* content */}

      <div className="">
        <div>Landing</div>
        <div>About</div>
        <div>Jobs</div>
        <div>Skills</div>
        <div>Project</div>
        <div>Open Source</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div> <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
