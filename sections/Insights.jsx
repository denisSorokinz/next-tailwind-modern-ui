'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import { insights } from '../constants';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText
        titleElement={<>Insight about metaverse</>}
        textStyles="text-center"
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        transition={{ staggerChildren: 0.5 }}
        className="mt-[50px] flex flex-col gap-[30px]"
      >
        {insights.map((insight) => (
          <InsightCard key={insight.title} {...insight} />
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Insights;
