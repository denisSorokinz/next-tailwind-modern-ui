'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { socials } from '../constants';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} relative py-8`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h4 className="text-[44px] font-bold text-white md:text-[64px]">
          Enter the Metaverse
        </h4>
        <button
          type="button"
          className="flex h-fit items-center gap-[12px] rounded-[32px] bg-[#25618b] py-4 px-6"
        >
          <img
            src="/headset.svg"
            alt="Headset"
            className="h-[24px] w-[24px] object-contain"
          />
          <span className="text-[16px] font-normal uppercase text-white">
            Enter Metaverse
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10 md:mt-[80px]" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="text-[24px] font-extrabold uppercase text-white">
            Metaversus
          </h4>
          <p className="text-[14px] font-normal text-white opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.5 }}
            className="flex gap-4"
          >
            {socials.map((social) => (
              <motion.img
                variants={{
                  hidden: { y: -50, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { type: 'spring' } },
                }}
                key={social.name}
                src={social.url}
                alt={social.name}
                className="h-[24px] w-[24px] cursor-pointer object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
