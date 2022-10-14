import logoEecommSVG from "@assets/logo-eecomm.svg";

const Footer = () => {
  console.log("Footer");
  return (
    <footer className="text-primary-primary footer footer-center bg-transparent mt-4">
      <div>
        <div className="flex items-end justify-center">
          <span className="font-bold text-base text-[#5c6c7a]">Powered by</span>
          <br />
          <img src={logoEecommSVG} alt="ec-logo" className="w-[102px]" />
        </div>
        <p className="text-xs text-[#5c6c7a] mt-0">
          © 2022 PT EECOMM DIGITAL INDONESIA All rights reserved.
        </p>
        <button className=""></button>
      </div>
    </footer>
  );
};

export default Footer;
