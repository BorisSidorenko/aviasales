import './Logo.css';
import logo from '../../assets/Logo.svg';

export default function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="Логотип Авиасейлс"/>
        </div>
    )
}
