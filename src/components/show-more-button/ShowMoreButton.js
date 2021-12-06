import "./ShowMoreButton.css";
import { DISPLAY_TICKETS_BY_DEFAULT } from "../../utils/constants";

export default function ShowMoreButton({ changeDisplayTicketsAmount }) {    
    const handleButtonClick = () => changeDisplayTicketsAmount((prev) => prev + DISPLAY_TICKETS_BY_DEFAULT);

    return (
        <button className="btn-more" onClick={handleButtonClick}>
            {`показать ещё ${DISPLAY_TICKETS_BY_DEFAULT} билетов`}
        </button>
    )
}
