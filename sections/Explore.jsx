'use client';

import { useState } from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [activeId, setActiveId] = useState(exploreWorlds[1].id);

  return (
    <section id="explore" className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={classnames(styles.innerWidth, 'mx-auto', 'flex', 'flex-col')}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          titleElement={
            <>
              Choose the world you want
              <br className="hidden md:block" /> to explore
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.5 }}
          className="mt-[50px] flex flex-col gap-5 lg:flex-row"
        >
          {exploreWorlds.map((world) => (
            <ExploreCard
              key={world.id}
              {...world}
              isActive={world.id === activeId}
              handleClick={setActiveId}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Explore;
