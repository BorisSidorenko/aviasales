import { useState } from 'react';
import { useTickets } from './hooks/useServer'
import './App.css'
import Logo from './components/logo/Logo';
import TransferFilter from './components/filters/TransferFilter';
import TicketTypeSort from './components/filters/TicketTypeSort';
import TicketList from './components/ticket-list/TicketList';
import ShowMoreButton from './components/show-more-button/ShowMoreButton';
import { filterTransferOptions, sortTicketTypeOptions, DISPLAY_TICKETS_BY_DEFAULT } from './utils/constants';

function App() {  
  const { response, isPending, error } = useTickets();
  const [defaultTicketTypeSort] = sortTicketTypeOptions;
  const [currentTransferFilterOptions, setCurrentTransferFilterOptions] = useState(filterTransferOptions);
  const [currentSortOption, setCurrentSortOption] = useState(defaultTicketTypeSort);
  const [ticketsToDisplay, setTicketsToDisplay] = useState(DISPLAY_TICKETS_BY_DEFAULT);
  
  return (
    <div className="App">
      <Logo />
      <h1 className="visually-hidden">Страница поиска дешевых авиабилетов</h1>
      <div className="outer-container">
        <TransferFilter transferFilterOptions={currentTransferFilterOptions} changeCurrentTransferFilterOptions={setCurrentTransferFilterOptions}/>
        <div className="inner-container">
          <TicketTypeSort currentSortOption={currentSortOption} changeSortOption={setCurrentSortOption}/>
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
