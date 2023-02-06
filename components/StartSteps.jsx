import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} h-[70px] w-[70px] rounded-3xl bg-[#323f5d]`}
    >
      <span className="text-xl font-bold text-white">0{number}</span>
    </div>
    <p className="ml-[30px] flex-1 text-lg font-normal leading-8 text-[#B0B0B0]">
      {text}
    </p>
  </div>
);

export default StartSteps;
