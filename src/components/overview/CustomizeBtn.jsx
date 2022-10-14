import { IconContext } from "react-icons";
import { MdOutlineTune } from 'react-icons/md';

const CustomizeBtn = ({handleShowPopup}) => {

  return (
    <button 
    onClick={handleShowPopup}
    className="text-[#5c6c7a] text-base font-sourceSans border-2 rounded border-[#8b959b] px-3 py-2 inline-flex items-center"
    type='button'>
      <IconContext.Provider
      value={{
        className: '',
      }}>
        <MdOutlineTune />
      </IconContext.Provider>
      <span className="pl-1">
        Customize
      </span>
    </button>
  );
}
 
export default CustomizeBtn;