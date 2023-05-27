import { motion } from 'framer-motion';
import Image from 'next/image';

interface SideCardInterface {
  className?: string;
}

const SideCard = ({ className = '' }: SideCardInterface) => {
  return (
    <motion.div
      className="sticky top-0 text-white"
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
      <div className="sticky fiex border border-gray-tertiary h-full rounded-3xl w-full p-8 bg-gray-primary">
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
          <div>Edmonton, Ab &#127464;&#127462;</div>
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
    </motion.div>
  );
};

export default SideCard;
