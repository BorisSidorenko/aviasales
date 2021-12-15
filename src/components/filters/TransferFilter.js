import './TransferFilter.css';
import { filterOptions, filterOptionsMap } from '../../utils/constants';
import Loading from '../loading/Loading';

export default function TransferFilter({ transferFilterOptions, changeCurrentTransferFilterOptions, isLoading }) {
    const allOptions = [...filterOptionsMap.keys()];    

    const handleFilterOptionChange = (option) => {    
        switch (option) {
            case filterOptions.ALL:
                transferFilterOptions.includes(option) ? 
                    changeCurrentTransferFilterOptions([]):
                    changeCurrentTransferFilterOptions(allOptions);
                break;            
            default:
                transferFilterOptions.includes(option) ? 
                    changeCurrentTransferFilterOptions([...transferFilterOptions.filter((filter) => filter !== option && filter !== filterOptions.ALL)]) :                     
                    changeCurrentTransferFilterOptions([...transferFilterOptions, option].length === allOptions.length - 1 ? allOptions : [...transferFilterOptions, option]);                     
                break;
        }
    }

    return (
        <div className="transfer-filter">
            <h2 className="transfer-filter__title">Количество пересадок</h2>
            {isLoading && <Loading />}
            <ul className="transfer-options">
                {allOptions && allOptions.map((option) => (
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
