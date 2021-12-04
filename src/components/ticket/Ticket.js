import "./Ticket.css";

export default function Ticket() {
    return (
        <article className="ticket">
            <div className="ticket-header">
                <p className="price">13 400 Р</p>
                <img src="https://pics.avs.io/110/36/S7.png" className="company-logo" alt="Логотип авиакомпании"/>
            </div>
            <div className="ticket-details">
                <div className="details-header">
                    <p className="route"><span>MOW</span> - <span>HKT</span></p>
                    <p className="duration"><span>в пути</span></p>
                    <p className="stops"><span>1 пересадка</span></p>
                </div>
                <div className="details-info">
                    <p className="route"><span>10:45</span> - <span>08:00</span></p>
                    <p className="duration"><span>21ч 15м</span></p>
                    <p className="stops"><span>HKG</span></p>
                </div>
            </div>
            <div className="ticket-details">
                <div className="details-header">
                    <p className="route"><span>MOW</span> - <span>HKT</span></p>
                    <p className="duration"><span>в пути</span></p>
                    <p className="stops"><span>1 пересадка</span></p>
                </div>
                <div className="details-info">
                    <p className="route"><span>10:45</span> - <span>08:00</span></p>
                    <p className="duration"><span>21ч 15м</span></p>
                    <p className="stops"><span>HKG</span></p>
                </div>
            </div>
        </article>
    )
}
