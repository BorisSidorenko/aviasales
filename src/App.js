import { useState } from 'react';
import './App.css'
import Logo from './components/logo/Logo';
import TransferSort from './components/filters/TransferSort';
import TicketTypeFilter from './components/filters/TicketTypeFilter';
import TicketList from './components/ticket-list/TicketList';
import { sortTransferOptions, filterTicketTypeOptions } from './utils/constants';

function App() {
  const [defaultTicketTypeFilter] = filterTicketTypeOptions;
  const [currentTransferSortOptions, setCurrentTransferSortOptions] = useState(sortTransferOptions);
  const [currentTicketTypeFilter, setCurrentTicketTypeFilter] = useState(defaultTicketTypeFilter);

  return (
    <div className="App">
      <Logo />
      <h1 className="visually-hidden">Страница поиска дешевых авиабилетов</h1>
      <div className="outer-container">
        <TransferSort transferSortOptions={currentTransferSortOptions} changeCurrentTransferSortOptions={setCurrentTransferSortOptions}/>
        <div className="inner-container">
          <TicketTypeFilter currentTicketType={currentTicketTypeFilter} changeTicketType={setCurrentTicketTypeFilter}/>
          <TicketList />
        </div>        
      </div>
    </div>
  );
}

export default App
