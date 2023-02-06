'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, isActive, handleClick }) => {
  const variants = fadeIn('right', 'spring', 0.5, 0.75);
  delete variants.show.transition.delay;

  return (
    <motion.div
      variants={variants}
      className={`relative flex h-[700px] min-w-[170px] cursor-pointer items-center justify-center overflow-hidden rounded-[24px] text-white transition-[flex] duration-[0.7s] ease-out-flex ${
        isActive ? 'flex-[10] lg:flex-[3.5]' : 'flex-[2] lg:flex-[0.5]'
      }`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute h-full w-full object-cover"
      />
      {isActive ? (
        <div className="absolute bottom-0 w-full flex-col justify-start bg-[rgba(0,0,0,0.5)] p-8">
          <div
            className={`${styles.flexCenter} glassmorphism mb-[16px] h-[60px] w-[60px] rounded-[24px]`}
          >
            <img
              src="/headset.svg"
              alt="Headset"
              className="h-1/2 w-1/2 object-contain"
            />
          </div>
          <p className="text-[16px] font-normal uppercase leading-[20px] text-white">
            Enter the Metaverse
          </p>
          <h2 className="mt-[24px] text-[24px] font-semibold text-white sm:text-[32px]">
            {title}
          </h2>
        </div>
      ) : (
        <motion.h3 className="absolute z-0 text-[18px] font-semibold text-white sm:text-[26px] lg:bottom-20 lg:origin-[0,0] lg:rotate-[-90deg]">
          {title}
        </motion.h3>
      )}
    </motion.div>
  );
};

export default ExploreCard;
