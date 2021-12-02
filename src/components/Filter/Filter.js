import './Filter.css';
import { filterTransferOptions } from '../../utils/constants';

export default function Filter() {
    return (
        <div className="filter-transfer">
            <h2 className="filter-transfer__title">Количество пересадок</h2>
            <ul className="transfer-options">
                {filterTransferOptions && filterTransferOptions.map((option) => (
                    <li key={option} className="transfer-options__option">
                        <label>
                            <input type="checkbox" className="visually-hidden"/>
                            <span>{option}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}
