// Import data

// Import components
import './App.css';
import SearchBar from './Components/searchBar.js'
import Directory from './Components/directory.js'
import Gallery from './Components/gallery.js'
import Sidebar from './Components/sidebar';
import Help from './Components/help';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <SearchBar  />
        <Directory /> 
        <Gallery />
        <Sidebar/>
        <Help />
      </div>
    </div>
  );
}

export default App;
