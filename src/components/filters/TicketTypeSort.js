import './TicketTypeSort.css';
import { sortTicketTypeOptions } from '../../utils/constants';

export default function TicketTypeSort({ currentSortOption, changeSortOption }) {
    const handleOptionChange = (option) => {
        changeSortOption(option);
    }

    return (
        <div className="ticket-type-sort">
            <nav>
                {sortTicketTypeOptions && sortTicketTypeOptions.map((option) => (
                    <button key={option} onClick={() => handleOptionChange(option)} className={`type-btn${currentSortOption === option ? " active" : ""}`}>
                        <span>{option}</span>
                    </button>
                ))}
            </nav>
        </div>
    )
}
