const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]">
      <img src={imgUrl} alt="icon" />
    </div>
    <h1 className="font-bold text-[24px] leading-[30.24px] text-white">
      Title {title}
    </h1>
    <p className="font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
