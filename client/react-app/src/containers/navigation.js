import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

class Navigation extends Component {
    render(){
        return (
            <div className="navigation">
                <nav>
                    <ul>
                        <li className="menu"><Link to="./video">VIDEO</Link></li>
                        <li className="menu"><Link to="./cctv">CCTV</Link></li>
                        <li className="home"><Link to="./">HOME</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;
