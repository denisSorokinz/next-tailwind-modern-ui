import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex min-w-[210px] flex-1 flex-col sm:max-w-[250px]">
    <div
      className={`${styles.flexCenter} h-[70px] w-[70px] rounded-3xl bg-[#323f5d]`}
    >
      <img src={imgUrl} alt="icon" className="h-1/2 w-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] text-[24px] font-bold leading-[30px] text-white">
      Title {title}
    </h1>
    <p className="mt-4 flex-1 text-lg font-normal leading-8 text-[#b0b0b0]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
