import { IconContext } from 'react-icons';
import { MdPlaylistAddCheck } from 'react-icons/md';

const CustomizePopup = ({handleClosePopup}) => {

  const handleSaveChanges = (evt) => {
    evt.preventDefault();

    console.log(evt.target)
  };

  const mock = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            
            {/*header*/}
            <div className="flex justify-between items-center p-5 border-b border-solid border-slate-200 rounded-t">
              <div className="text-3xl font-semibold">
                Customize Dashboard
              </div>
              <div onClick={handleClosePopup} className='hover:cursor-pointer'>
                &#10005;
              </div>
            </div>

            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="flex flex-col">
                <div className='flex'>
                  Summary
                  <IconContext.Provider
                  value={{
                    color: 'red',
                    size: '2em'
                  }}
                  >
                    <MdPlaylistAddCheck />
                  </IconContext.Provider>
                </div>
                <div>
                  Choose 4 indexes for display. Drag to rearrange.
                </div>
                <div>
                  <form>
                    {
                      mock.map(data => (
                        <div key={data.id} className="flex items-center mb-4">
                          <input 
                          id="default-checkbox" 
                          type="checkbox" 
                          value="" 
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label 
                          htmlFor="default-checkbox" 
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            checkbox
                          </label>
                        </div>
                      ))
                    }
                  </form>
                </div>
              </div>
            </div>


            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleClosePopup}
              >
                Cancel
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
 
export default CustomizePopup;