import Ticket from "../ticket/Ticket";
import "./TicketList.css";
import TicketTemplate from "../ticket/TicketTemplate";

export default function TicketList({ tickets, amountTodisplay, isLoading }) {       
    const ticketsToDisplay = tickets.slice(0, amountTodisplay);

    return (
        <ul className="ticket-list">
            {isLoading && (
                <li className="ticket-item ticket-item-loading">
                    <TicketTemplate />
                </li>
            )}
            {!isLoading && ticketsToDisplay.length > 0 && ticketsToDisplay.map((ticket) => (
                <li key={`${ticket.carrier}-${ticket.price}`} className="ticket-item">                                    
                    <Ticket ticket={ticket}/>
                </li>
            ))}
        </ul>
    )
}
