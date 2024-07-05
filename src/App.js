import { Provider,lightTheme } from '@adobe/react-spectrum';
import Airports from './components/Airports';
import Airportsdetails from './components/Airportsdetails';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
    <div className="app-container">
      <Sidebar />
      <Provider colorScheme="light" theme={lightTheme}>
      <Routes>
        <Route exact path='/' element={<Airports />} />
        <Route exact path='/airport-details' element={<Airportsdetails /> } />
      </Routes>
      </Provider>
      </div>
    </>
  );
}

export default App;
