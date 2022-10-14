import HeroImage from '@assets/images/government-bg.svg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/login/Footer";
import Header from "../components/login/Header";
import LoginForm from "../components/login/LoginForm";
// 

const HomePage = () => {
  // setLocalStorage
  const navigate = useNavigate();
  const login = () => {
    localStorage.setItem("user", JSON.stringify({ role: "ADMIN" }));
    navigate("/dashboard");
  };

  // handlePassword
  const [showPassword, setShowPassoord] = useState(false);
  const handleShowPassord = () => {
    console.log("showPassword: ", showPassword);
    setShowPassoord(() => !showPassword);
  };

  // page subTitle
  const [subTitle, setSubtTitle] = useState("/Government");

  console.log("init homePage");

  return (
    <>
      <main
        className="mx-auto flex min-h-screen flex-col gap-12 p-8 pb-0 md:p-[45px]
      xl:max-w-7xl
      "
      >
        {/* loginPage subTitle */}
        <Header subTitle={subTitle} />

        <div className="relative flex min-h-full items-center justify-center md:px-12 lg:px-0 ">
          {/* loginPage image */}
          <div className="hidden sm:contents lg:relative lg:block">
            <img
              src={HeroImage}
              alt="home-image"
              className="hidden w-full object-contain lg:block xl:object-none"
            />
          </div>
          {/* loginPage form */}
          <LoginForm showPassword={showPassword} handleShowPassord={handleShowPassord} login={login} />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default HomePage;
