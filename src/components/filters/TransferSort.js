import './TransferSort.css';
import { sortTransferOptions } from '../../utils/constants';

export default function TransferSort({ transferSortOptions, changeCurrentTransferSortOptions }) {
    const [defaultSortOption] = sortTransferOptions;
    const handleSortOptionChange = (option) => {        
        switch (option) {
            case defaultSortOption:
                transferSortOptions.includes(option) ? 
                    changeCurrentTransferSortOptions([]):
                    changeCurrentTransferSortOptions(sortTransferOptions);
                break;            
            default:
                transferSortOptions.includes(option) ? 
                    changeCurrentTransferSortOptions([...transferSortOptions.filter((filter) => filter !== option && filter !== defaultSortOption)]) :                     
                    changeCurrentTransferSortOptions([...transferSortOptions, option].length === sortTransferOptions.length - 1 ? sortTransferOptions : [...transferSortOptions, option]);                     
                break;
        }
    }

    return (
        <div className="transfer-sort">
            <h2 className="transfer-sort__title">Количество пересадок</h2>
            <ul className="transfer-options">
                {sortTransferOptions && sortTransferOptions.map((option) => (
                    <li key={option} className="transfer-options__option">
                        <label>
                            <input 
                                type="checkbox" 
                                className="visually-hidden"
                                checked={transferSortOptions.includes(option)}
                                onChange={() => handleSortOptionChange(option)}
                            />
                            <span>{option}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}
