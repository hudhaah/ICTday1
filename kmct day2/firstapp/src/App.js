import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import Statebasics from './components/Statebasics';
import Counter from './components/Counter';
import Listmap from './components/Listmap';
import Api from './components/Api';
import Sampleuse from './components/Sampleuse';
import Cardget from './components/Cardget';
function App() {
  return (
    <div className="App">
       
      <Navbar/>
      <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/sin' element={<Signup/>}/>
      <Route path='/sb' element={<Statebasics/>}/>
      <Route path='/co' element={<Counter/>}/>
      <Route path='/mp' element={<Listmap/>}/>
      <Route path='/ap' element={<Api/>}/>
      <Route path='/sam' element={<Sampleuse/>}/>
      <Route path='/card' element={<Cardget/>}/>
      </Routes>
       
        
     
    
     
    </div>
  );
}

export default App;
