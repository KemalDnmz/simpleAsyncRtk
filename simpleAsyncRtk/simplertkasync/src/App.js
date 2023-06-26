import { fetch } from './postSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Posts from './components/Posts';

function App() {
  

 const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetch())
  },[dispatch])

  return (
    <div className="App">
      <h2>This Student</h2>
     <Posts/>
    </div>
  );
}

export default App;
