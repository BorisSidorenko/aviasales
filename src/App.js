import { useState } from 'react';
import './App.css'
import Logo from './components/logo/Logo';
import TransferFilter from './components/filters/TransferFilter';
import TicketTypeFilter from './components/filters/TicketTypeFilter';
import TicketList from './components/ticket-list/TicketList';
import { filterTransferOptions, filterTicketTypeOptions } from './utils/constants';

function App() {
  const [defaultTicketTypeFilter] = filterTicketTypeOptions;
  const [currentTransferFilters, setCurrentTransferFilters] = useState(filterTransferOptions);
  const [currentTicketTypeFilter, setCurrentTicketTypeFilter] = useState(defaultTicketTypeFilter);

  return (
    <div className="App">
      <Logo />
      <h1 className="visually-hidden">Страница поиска дешевых авиабилетов</h1>
      <div className="outer-container">
        <TransferFilter currentFilters={currentTransferFilters} changeCurrentFilters={setCurrentTransferFilters}/>
        <div className="inner-container">
          <TicketTypeFilter currentTicketType={currentTicketTypeFilter} changeTicketType={setCurrentTicketTypeFilter}/>
          <TicketList />
        </div>        
      </div>
    </div>
  );
}

export default App
