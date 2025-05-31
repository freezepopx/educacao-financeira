import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dicas from './pages/dicas';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dicas" element={<Dicas />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
