import Chart from "./Chart";

const ChartContainer = () => {

  const mockData = [
    {
      id: 1
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
    <div className="grid lg:grid-cols-2 mb-6 gap-6">
      {
        mockData.map(chart => (
          <Chart key={chart.id} />
        ))
      }
    </div>
  );
}
 
export default ChartContainer;