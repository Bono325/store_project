import logo from './logo.svg';
import './Template/assets/css/main.css'
import './App.css';
import Header from './componets/Header';
import Cart from './componets/Cart';
import Scripts from './componets/Scripts';

function App() {
  return (
    <div className="App">
      <Header />
      <Cart />
      <Scripts />
    </div>
  );
}

export default App;
