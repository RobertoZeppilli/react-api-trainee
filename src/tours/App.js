import './App.css';
import Tour from './components/Tour'
import Loader from './components/Loader'
import Empty from './components/Empty'

import { useFetch } from './hooks/useFetch'
import { useState, useEffect } from 'react'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const { data, loading } = useFetch(url)
  const [tours, setTours] = useState(data)


  const remove = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    setTours(data)
  }, [data])

  if (tours.length < 1 && !loading) {
    return <Empty />
  }
  return (
    <div className="App">
      {loading ? <Loader /> : tours.map(tour => <Tour key={tour.id} {...tour} remove={remove} />)}
    </div>
  );
}

export default App;
