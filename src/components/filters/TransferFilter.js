import './TransferFilter.css';
import { filterTransferOptions } from '../../utils/constants';
import Loading from '../loading/Loading';

export default function TransferFilter({ transferFilterOptions, changeCurrentTransferFilterOptions, isLoading }) {
    const [defaultFilterOption] = filterTransferOptions;
    const handleFilterOptionChange = (option) => {        
        switch (option) {
            case defaultFilterOption:
                transferFilterOptions.includes(option) ? 
                    changeCurrentTransferFilterOptions([]):
                    changeCurrentTransferFilterOptions(filterTransferOptions);
                break;            
            default:
                transferFilterOptions.includes(option) ? 
                    changeCurrentTransferFilterOptions([...transferFilterOptions.filter((filter) => filter !== option && filter !== defaultFilterOption)]) :                     
                    changeCurrentTransferFilterOptions([...transferFilterOptions, option].length === filterTransferOptions.length - 1 ? filterTransferOptions : [...transferFilterOptions, option]);                     
                break;
        }
    }

    return (
        <div className="transfer-filter">
            <h2 className="transfer-filter__title">Количество пересадок</h2>
            {isLoading && <Loading />}
            <ul className="transfer-options">
                {filterTransferOptions && filterTransferOptions.map((option) => (
                    <li key={option} className="transfer-options__option">
                        <label>
                            <input 
                                type="checkbox" 
                                className="visually-hidden"
                                checked={transferFilterOptions.includes(option)}
                                onChange={() => handleFilterOptionChange(option)}
                            />
                            <span>{option}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}
