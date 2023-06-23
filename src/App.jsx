import React, {useState} from 'react';
import fetchData from './services/api';
import Card from './components/Card'
import initialData from './utils/initialData';


function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(city).then((res) =>{
      setData(res);
    });
  }

  return (
   <div className='flex flex-col w-full h-screen items-center sm:justify-center p-4'>
    <form onSubmit={handleSubmit} className='fixed bottom-0 w-full flex p-4 sm:relative justify-center'>
      <input type="text" 
      placeholder='City' 
      value={city}
      className='p-3 rounded-lg outline-none w-full flex-1 sm:max-w-[300px] '
      onChange={(event) => setCity(event.target.value)}
      />
      
      <button 
      type='submit'
      className='bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold'
      >
        Pesquisar</button>
    </form>

    <Card data={data} />
   </div>
  );
}

export default App;
