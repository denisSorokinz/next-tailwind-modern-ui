'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-2 text-center text-[32px] font-normal text-secondary-white sm:text-[20px]"
      >
        <strong className="font-extrabold text-white">Metaverse</strong> is a
        new thing in the future, where you can enjoy the virtual world by
        feeling like it's really real, you can feel what you feel in this
        metaverse world, because this is really the{' '}
        <strong className="font-extrabold text-white">
          madness of the metaverse
        </strong>{' '}
        of today, using only{' '}
        <strong className="font-extrabold text-white">VR</strong> devices you
        can easily{' '}
        <strong className="font-extrabold text-white">explore</strong> the
        metaverse world you want, turn your dreams into reality. Let's explore
        the madness of the metaverse by scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="Arrow Down"
        className="mt-[28px] h-[28px] w-[18px] cursor-pointer object-contain"
      />
    </motion.div>
  </section>
);

export default About;
