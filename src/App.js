import './App.css'
import Logo from './components/Logo/Logo';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div className="App">
      <Logo />
      <h1 className="visually-hidden">Страница поиска дешевых авиабилетов</h1>
      <div className="container">
        <Filter />
      </div>
    </div>
  );
}

export default App
