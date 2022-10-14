import { Outlet } from "react-router-dom";

const InnerContent = () => {
  return (
    <div className="inner-content text-lg font-bold text-white w-full">
      {/* container */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default InnerContent;
