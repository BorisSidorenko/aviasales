import { useState } from 'react';
import './App.css'
import Logo from './components/logo/Logo';
import TransferFilter from './components/filters/TransferFilter';
import TicketTypeFilter from './components/filters/TicketTypeFilter';
import { filterTransferOptions, filterTicketTypeOptions } from './utils/constants';

function App() {
  const [defaultTransferFilter] = filterTransferOptions;
  const [defaultTicketTypeFilter] = filterTicketTypeOptions;
  const [currentTransferFilters, setCurrentTransferFilters] = useState([defaultTransferFilter]);
  const [currentTicketTypeFilter, setCurrentTicketTypeFilter] = useState(defaultTicketTypeFilter);

  return (
    <div className="App">
      <Logo />
      <h1 className="visually-hidden">Страница поиска дешевых авиабилетов</h1>
      <div className="container">
        <TransferFilter currentFilters={currentTransferFilters} changeCurrentFilters={setCurrentTransferFilters}/>
        <TicketTypeFilter currentTicketType={currentTicketTypeFilter} changeTicketType={setCurrentTicketTypeFilter}/>
      </div>
    </div>
  );
}

export default App
