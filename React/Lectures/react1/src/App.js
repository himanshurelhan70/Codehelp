
import User from './components/User';
import Card from './components/Card';

function App() {
  const response = [
    {
      name: 'Himanshu',
      day: 1,
      month: 11,
      year: 1999
    },

    {
      name: 'sahil',
      day: 6,
      month: 3,
      year: 1999
    },

    {
      name: 'preeti',
      day: 13,
      month: 3,
      year: 1997
    }
  ];

  return (
    <div>
      <Card>
        {/* custom html element */}
        <User name={response[0].name}  day={response[0].day}  month={response[0].month}  year={response[0].year}></User>
        <User name={response[1].name}  day={response[1].day}  month={response[1].month}  year={response[1].year}>
          content inside component
        </User>
        <User name={response[2].name}  day={response[2].day}  month={response[2].month}  year={response[2].year}></User>
      </Card>
    </div>
  );
}

export default App;
