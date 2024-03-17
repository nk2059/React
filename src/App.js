import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Theme/Layout';

function App() {
  return (
    <div>
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/user-management" element={<h1>user management</h1>} />
          <Route path="/faq" element={<h1>faq</h1>} />
          <Route path="/contact" element={<h>Contact</h>} />
        </Route>
      </Routes>
    </BrowserRouter>








    </div>
  );
}

export default App;
