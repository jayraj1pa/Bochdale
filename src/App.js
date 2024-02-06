import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import First from './Components/first';
import Footer from './Components/Footer';


function App() { const [searchQuery, setSearchQuery] = useState('');

const handleSearchChange = (query) => {
  setSearchQuery(query);
};

return (
  <>
      <NavBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
    <First searchQuery={searchQuery} />
    <Footer/>
  </>
  );
}

export default App;
