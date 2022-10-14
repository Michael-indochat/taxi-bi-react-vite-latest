import { useEffect, useState } from "react";
import ChartContainer from "../components/overview/ChartContainer";
import CustomizeBtn from "../components/overview/CustomizeBtn";
import CustomizePopup from "../components/overview/CustomizePopup";
import MapContainer from "../components/overview/MapContainer";
import RankContainer from "../components/overview/RankContainer";
import SummaryContainer from "../components/overview/SummaryContainer";
;
// import Datepicker from "../partials/actions/Datepicker";
const Overview = () => {
  const [showCustomizePopup, setShowCustomizePopup] = useState(false);

  useEffect(() => {
    if (showCustomizePopup === true) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "unset");
  }, [showCustomizePopup]);

  const handleShowPopup = () => {
    setShowCustomizePopup(true);
  };

  const handleClosePopup = () => {
    setShowCustomizePopup(false);
  };

  return (
    <div className="dashboard">
      {/* <PageHeader title="Overview" /> */}
      {showCustomizePopup && (
        <CustomizePopup handleClosePopup={handleClosePopup} />
      )}

      <div className="mt-2 flex flex-wrap items-center justify-between">
        <div className="font-sourceSans text-lg font-medium text-[#8b959e]">
          Last Updated On: Wednesday, 12 October 2022 - 03:26 PM GMT+8
        </div>
        <CustomizeBtn handleShowPopup={handleShowPopup} />
      </div>

      <div className="mb-6 flex flex-wrap">
        <SummaryContainer />
        <MapContainer />
      </div>

      <div>
        <ChartContainer />
        <RankContainer />
      </div>
    </div>
  );
};

export default Overview;
