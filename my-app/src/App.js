import './App.css';
import { Input } from './Input';
import { Card } from './Card';

function App() {
  const cities = ['New York', 'Kyiv', 'London']
  return (
    <div className="Main">
      <Input />
      <div className='CardList'>
        {
          cities.map(city =><Card  key={city} city={city}/>)
        }
      </div>


    </div>
  );
}

export default App;
