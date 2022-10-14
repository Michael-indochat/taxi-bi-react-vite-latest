import RankTable from "./RankTable";

const RankContainer = () => {
  return (
    <div className="border rounded-lg">
      <div className="py-3 px-4 text-black font-sourceSans text-xl font-extrabold">
        Top Five Merchants of the Month
      </div>
      <div className="pb-3 px-4">
        <RankTable />
      </div>
    </div>
  );
}
 
export default RankContainer;