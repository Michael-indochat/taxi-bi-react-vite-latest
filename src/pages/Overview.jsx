import BigCard from "../components/dashboard/BigCard";
import SmallCard from "../components/dashboard/SmallCard";
import Datepicker from "../partials/actions/Datepicker";
const Overview = () => {
  return (
    <>
      <div className="ml-auto grid grid-flow-col justify-start gap-2 sm:auto-cols-max sm:justify-end">
        {/* Datepicker built with flatpickr */}
        <Datepicker />
        {/* Add view button */}
        <button className="btn bg-indigo-500 text-white hover:bg-indigo-600">
          <svg
            className="h-4 w-4 shrink-0 fill-current opacity-50"
            viewBox="0 0 16 16"
          >
            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
          </svg>
          <span className="ml-2 hidden xs:block">Add view</span>
        </button>
      </div>
      <div className="mb-8 sm:flex sm:items-center sm:justify-between">
        {/* Left: Avatars */}

        {/* Right: Actions */}
      </div>
      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
        {/* Line chart (Acme Plus) */}
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <BigCard />
        <SmallCard />
        <SmallCard />
        <BigCard />
      </div>
    </>
  );
};

export default Overview;
