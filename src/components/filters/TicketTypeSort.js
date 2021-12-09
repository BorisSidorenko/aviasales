import './TicketTypeSort.css';
import { sortTransferOptions } from '../../utils/constants';

export default function TicketTypeSort({ currentSortOption, changeSortOption }) {
    const handleOptionChange = (option) => {
        changeSortOption(option);
    }

    return (
        <div className="ticket-type-sort">
            <nav>
                {sortTransferOptions && Object.entries(sortTransferOptions).map((prop) => {
                    const [key, value] = prop;

                    return (
                        <button key={key} onClick={() => handleOptionChange(value)} className={`type-btn${currentSortOption === value ? " active" : ""}`}>
                            <span>{value}</span>
                        </button>
                    )
                })}
            </nav>
        </div>
    )
}
