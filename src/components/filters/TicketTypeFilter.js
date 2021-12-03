import './TicketTypeFilter.css';
import { filterTicketTypeOptions } from '../../utils/constants';

export default function TicketTypeFilter({ currentTicketType, changeTicketType }) {
    const handleOptionChange = (type) => {
        changeTicketType(type);
    }

    return (
        <div className="ticket-type-filter">
            <nav>
                {filterTicketTypeOptions && filterTicketTypeOptions.map((type) => (
                    <button key={type} onClick={() => handleOptionChange(type)} className={`type-btn${currentTicketType === type ? " active" : ""}`}>
                        <span>{type}</span>
                    </button>
                ))}
            </nav>
        </div>
    )
}
