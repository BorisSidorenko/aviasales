import './TransferFilter.css';
import { filterTransferOptions } from '../../utils/constants';

export default function TransferFilter({ currentFilters, changeCurrentFilters }) {
    const [defaultFilterOption] = filterTransferOptions;
    const handleFilterChange = (option) => {        
        switch (option) {
            case defaultFilterOption:
                currentFilters.includes(option) ? 
                    changeCurrentFilters([]):
                    changeCurrentFilters(filterTransferOptions);
                break;            
            default:
                currentFilters.includes(option) ? 
                    changeCurrentFilters([...currentFilters.filter((filter) => filter !== option && filter !== defaultFilterOption)]) :                     
                    changeCurrentFilters([...currentFilters, option].length === filterTransferOptions.length - 1 ? filterTransferOptions : [...currentFilters, option]);                     
                break;
        }
    }

    return (
        <div className="transfer-filter">
            <h2 className="transfer-filter__title">Количество пересадок</h2>
            <ul className="transfer-options">
                {filterTransferOptions && filterTransferOptions.map((option) => (
                    <li key={option} className="transfer-options__option">
                        <label>
                            <input 
                                type="checkbox" 
                                className="visually-hidden"
                                checked={currentFilters.includes(option)}
                                onChange={() => handleFilterChange(option)}
                            />
                            <span>{option}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}