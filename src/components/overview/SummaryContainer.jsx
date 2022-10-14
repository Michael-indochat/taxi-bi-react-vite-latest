import Summary from './Summary';

const SummaryContainer = () => {

  const mockData = [
    {
      id: 1,
      name: 'Daily Tax Revenue',
      tax: 'Rp',
      count: 0,
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
  ];

  return (
    <div className="w-full lg:w-96 grid grid-cols-2 gap-6 mt-6 lg:mr-6">
      {
        mockData.map(field => (
          <Summary key={field.id} />
        ))
      }
    </div>
  );
}
 
export default SummaryContainer;