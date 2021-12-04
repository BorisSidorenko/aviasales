import Ticket from "../ticket/Ticket";
import "./TicketList.css";

export default function TicketList() {
    return (
        <ul className="ticket-list">
            <Ticket />            
        </ul>
    )
}
