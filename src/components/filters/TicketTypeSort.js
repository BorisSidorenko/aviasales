import './TicketTypeSort.css';
import { sortTransferOptions } from '../../utils/constants';
import Loading from '../loading/Loading';

export default function TicketTypeSort({ currentSortOption, changeSortOption, isLoading }) {
    const handleOptionChange = (option) => {
        changeSortOption(option);
    }

    return (
        <div className="ticket-type-sort">
            {isLoading && <Loading />}
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
