import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import MainRoute from './Route/MainRoute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoute />
      <Footer />
    </div>
  );
}

export default App;
