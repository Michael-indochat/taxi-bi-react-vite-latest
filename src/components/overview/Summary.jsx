const Summary = () => {
  return (
    <div className='
    col-span-2 lg:col-span-2 md:col-span-1
    py-6 px-5 rounded-lg 
    drop-shadow-[2px_3px_15px_rgba(135,135,135,0.2)]
    border
    '>
      {/* 客製化drop-shadow無法顯示 */}
      <div className="
      text-[#5c6c7a] text-sm font-semibold font-sourceSans mb-1.5
      ">
        Daily Tax Revenue
      </div>
      <div className="text-black font-bold">
        Rp
        <span className="text-2xl">
          0
        </span>
      </div>
    </div>
  );
}
 
export default Summary;