import { useState } from 'react';
import { useTickets } from './hooks/useServer'
import './App.css'
import Logo from './components/logo/Logo';
import TransferSort from './components/filters/TransferSort';
import TicketTypeFilter from './components/filters/TicketTypeFilter';
import TicketList from './components/ticket-list/TicketList';
import ShowMoreButton from './components/show-more-button/ShowMoreButton';
import { sortTransferOptions, filterTicketTypeOptions, DISPLAY_TICKETS_BY_DEFAULT } from './utils/constants';

function App() {  
  const { response, isPending, error } = useTickets();
  const [defaultTicketTypeFilter] = filterTicketTypeOptions;
  const [currentTransferSortOptions, setCurrentTransferSortOptions] = useState(sortTransferOptions);
  const [currentTicketTypeFilter, setCurrentTicketTypeFilter] = useState(defaultTicketTypeFilter);
  const [ticketsToDisplay, setTicketsToDisplay] = useState(DISPLAY_TICKETS_BY_DEFAULT);
  
  return (
    <div className="App">
      <Logo />
      <h1 className="visually-hidden">Страница поиска дешевых авиабилетов</h1>
      <div className="outer-container">
        <TransferSort transferSortOptions={currentTransferSortOptions} changeCurrentTransferSortOptions={setCurrentTransferSortOptions}/>
        <div className="inner-container">
          <TicketTypeFilter currentTicketType={currentTicketTypeFilter} changeTicketType={setCurrentTicketTypeFilter}/>
          {isPending && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {response && <TicketList tickets={response.tickets} amountTodisplay={ticketsToDisplay}/>}
          {response && response.tickets.length > DISPLAY_TICKETS_BY_DEFAULT && <ShowMoreButton changeDisplayTicketsAmount={setTicketsToDisplay}/>}
        </div>        
      </div>
    </div>
  );
}

export default App
