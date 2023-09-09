import './Template/assets/css/main.css'
import './App.css';
import Header from './componets/Header';
import Cart from './componets/Cart';
import MainContent from './componets/MainContent';
import SIdeBar from './componets/SIdeBar';

function App() {
  return (
    <div className="App">
      <div id = "wrapper" >
        <Header />
        <Cart />
        <MainContent />
        <SIdeBar />
      </div>
    </div>
  );
}

export default App;
