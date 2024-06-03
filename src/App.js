// import logo from './logo.svg';
import Header from './mycomponents/Header';
import Sidebar from './mycomponents/Sidebar';
import Body from './mycomponents/Body';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='flex'>
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
