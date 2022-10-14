import SmartaxSVG from "@assets/smartax.svg";

/**
 * Header Component ，需要將當前 domain 名稱透過 subTitle props 傳入
 * @param {String} subTtile
 * @returns
 */
const Header = ({ subTitle }) => {
  console.log("Header");

  return (
    <div className="flex flex-col justify-start items-start">
      <img src={SmartaxSVG} alt="smartTax-logo" className="object-cover" />
      <p className="sub-title mt-2 text-3xl md:text-4xl font-bold text-primary">
        {subTitle}
      </p>
    </div>
  );
};

export default Header;
