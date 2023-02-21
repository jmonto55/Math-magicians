import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
