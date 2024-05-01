import './style.css'
import {Link} from "react-router-dom";

function Header() {

    return ( 
        <header className="header-main">
            <nav> 
            
            <Link className="qwerty" to="/">QWERTY Solution</Link>
            </nav>            
        </header>
    );
}
export default Header;