'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    animate="show"
    className={`${styles.xPaddings} relative py-8`}
  >
    <div className="gradient-01 absolute inset-0 w-1/2" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="Search"
        className="h-[24px] w-[24px] object-contain"
      />
      <h2 className="text-[24px] font-extrabold uppercase leading-[30px] text-white">
        Metaversus
      </h2>
      <img
        src="/menu.svg"
        alt="Menu"
        className="h-[24px] w-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
