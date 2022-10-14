//react-icons
import { IconContext } from 'react-icons';
import { MdStorefront } from 'react-icons/md';

const RankTable = () => {

  //mock-data-head
  const mockData = [
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
  ];

  return (
    <div className='overflow-auto'>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-4 text-[#096bef] text-sm font-sourceSans font-semibold text-left">#</th>
            <th className="px-4 py-4 text-[#096bef] text-sm font-sourceSans font-semibold text-left">Merchant & District</th>
            <th className="px-4 py-4 text-[#096bef] text-sm font-sourceSans font-semibold text-right">Total Receipts</th>
            <th className="px-4 py-4 text-[#096bef] text-sm font-sourceSans font-semibold text-right">Total Transactions(Rp)</th>
            <th className="px-4 py-4 text-[#096bef] text-sm font-sourceSans font-semibold text-right">Tax Revenue(Rp)</th>
          </tr>
        </thead>
        <tbody>
          {
            mockData.map(data => (
              <tr key={data.id} className='hover:bg-[#f9fafb]'>
                <td className='px-4 py-4 whitespace-nowrap'>
                  <div className='flex items-center font-sourceSans'>
                    1.
                    <div className='ml-5'>
                      <IconContext.Provider
                      value={{
                        color: '#ffb200',
                        size: '1.2em'
                      }}
                      >
                        <MdStorefront />
                      </IconContext.Provider>
                    </div>
                  </div>
                </td>
                <td className="flex flex-col px-4 py-4 whitespace-nowrap">
                  <p className='font-sourceSans font-semibold text-base'>
                    Beijing
                  </p>
                  <p className='text-[@44474a] mt-1 text-sm'>
                    Tanah Abang
                  </p>
                </td>
                <td className='px-4 py-4 text-right text-base font-sourceSans whitespace-nowrap'>
                  <p>
                    12
                  </p>
                  <p>
                    (<span className='text-[#22c25a]'>12</span>/0)
                  </p>
                </td>
                <td className='px-4 py-4 text-right font-sourceSans whitespace-nowrap'>
                  125.580,000	
                </td>
                <td className='px-4 py-4 text-right text-[#22c25a] font-sourceSans whitespace-nowrap'>
                  0
                </td>
              </tr>
            ))
          }
        </tbody>
        
      </table>
    </div>
  );
}
 
export default RankTable;