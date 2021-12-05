import Ticket from "../ticket/Ticket";
import "./TicketList.css";

export default function TicketList({ tickets, amountTodisplay }) {       
    const ticketsToDisplay = tickets.slice(0, amountTodisplay);

    return (
        <ul className="ticket-list">
            {ticketsToDisplay.length > 0 && ticketsToDisplay.map((ticket) => (
                <li key={`${ticket.carrier}-${ticket.price}`} className="ticket-item">                                    
                    <Ticket ticket={ticket}/>
                </li>
            ))}
        </ul>
    )
}
