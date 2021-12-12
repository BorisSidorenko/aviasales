import { useState } from 'react';
import { useTickets } from './hooks/useServer'
import './App.css'
import Logo from './components/logo/Logo';
import TransferFilter from './components/filters/TransferFilter';
import TicketTypeSort from './components/filters/TicketTypeSort';
import TicketList from './components/ticket-list/TicketList';
import ShowMoreButton from './components/show-more-button/ShowMoreButton';
import { filterTransferOptions, DISPLAY_TICKETS_BY_DEFAULT, sortTransferOptions } from './utils/constants';
import { getSortedTickets } from "../src/utils/common";

function App() {  
  const { tickets, isPending, error } = useTickets();
  const [currentTransferFilterOptions, setCurrentTransferFilterOptions] = useState(filterTransferOptions);
  const [currentSortOption, setCurrentSortOption] = useState(sortTransferOptions.price);
  const [ticketsToDisplay, setTicketsToDisplay] = useState(DISPLAY_TICKETS_BY_DEFAULT);
  
  return (
    <div className="App">
      <Logo />
      <h1 className="visually-hidden">Страница поиска дешевых авиабилетов</h1>
      <div className="outer-container">
        <TransferFilter transferFilterOptions={currentTransferFilterOptions} changeCurrentTransferFilterOptions={setCurrentTransferFilterOptions} isLoading={isPending}/>
        <div className="inner-container">
          <TicketTypeSort currentSortOption={currentSortOption} changeSortOption={setCurrentSortOption} isLoading={isPending}/>          
          {error && <p>{error}</p>}
          {tickets && <TicketList tickets={getSortedTickets(tickets, currentSortOption)} amountTodisplay={ticketsToDisplay} isLoading={isPending}/>}
          {!isPending &&  tickets && tickets.length > DISPLAY_TICKETS_BY_DEFAULT && <ShowMoreButton changeDisplayTicketsAmount={setTicketsToDisplay}/>}
        </div>        
      </div>
    </div>
  );
}

export default App
