import "./Ticket.css";
import { getHoursAndMinutesFromMinutes } from "../../utils/common"; 

export default function Ticket({ ticket }) {   
    const { price, carrier, segments} = ticket; 

    const getStopsHeader = ({ stops }) => {        
        switch (stops.length) {
            case 0:
                return "прямой";
            case 1:
                return `${stops.length} пересадка`;
            case 2: 
            case 3: 
            case 4:
                return `${stops.length} пересадки`;
            case 5:
                return `${stops.length} пересадок`;
            default:
                return `${stops.length} пересадок`;
        }
    }
    const getStopsFromSegment = ({ stops }) => stops.length > 0 ? stops.join(", ") : "—";

    const getPrice = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return (
        <article className="ticket">
            <div className="ticket-header">
                <p className="price">{`${getPrice(price)} Р`}</p>
                <img src={`https://pics.avs.io/110/36/${carrier}.png`} className="company-logo" alt={`Логотип авиакомпании ${carrier}`}/>
            </div>
            {segments.map((segment) => (
                <div className="ticket-details" key={`${segment.origin}${price}${carrier}`}>
                    <div className="details-header">
                        <p className="route"><span>{segment.origin}</span> - <span>{segment.destination}</span></p>
                        <p className="duration"><span>в пути</span></p>
                        <p className="stops"><span>{getStopsHeader(segment)}</span></p>
                    </div>
                    <div className="details-info">
                        <p className="route"><span>10:45</span> – <span>08:00</span></p>
                        <p className="duration"><span>{getHoursAndMinutesFromMinutes(segment.duration)}</span></p>
                        <p className="stops"><span className={segment.stops.length > 0 ? "" : "no-stops"}>{getStopsFromSegment(segment)}</span></p>
                    </div>                
                </div>     
            ))}       
        </article>
    )
}
