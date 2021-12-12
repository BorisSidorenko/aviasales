import "./TicketTemplate.css";
import Loading from "../loading/Loading";

export default function TicketTemplate() {
    return (
        <>
            <Loading />
            <div className="ticket-template">
                <div className="ticket-template-header">
                    <div className="ticket-template-price"></div>
                    <div className="ticket-template-logo"></div>                
                </div>
                <div className="ticket-template-details">
                    <div className="ticket-template-row">
                        <div className="ticket-template-header">
                            <div className="wrapper">
                                <div className="route-header"></div>
                                <div className="route"></div>
                            </div>
                            <div className="wrapper">
                                <div className="duration-header"></div>
                                <div className="duration"></div>
                            </div>
                            <div className="wrapper">
                                <div className="stops-header"></div>
                                <div className="stops"></div>
                            </div>
                        </div>   
                    </div>
                    <div className="ticket-template-row">
                        <div className="ticket-template-header">
                            <div className="wrapper">
                                <div className="route-header"></div>
                                <div className="route"></div>
                            </div>
                            <div className="wrapper">
                                <div className="duration-header"></div>
                                <div className="duration"></div>
                            </div>
                            <div className="wrapper">
                                <div className="stops-header"></div>
                                <div className="stops"></div>
                            </div>
                        </div>
                    </div>                 
                </div>                
            </div>
        </>
    )
}
