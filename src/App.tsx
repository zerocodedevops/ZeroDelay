import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="servicios" element={<Services />} />
        <Route path="contacto" element={<Contact />} />
        {/* Fallback route or 404 can be added here */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
