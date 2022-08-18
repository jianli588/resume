import {useState} from 'react';
import './Navbar.css'
import Menu from './Menu.js';
import Option from './Option.js'
const Navbar = (props) =>{

    const [menuStatus, setMenuStatus] = useState(false);

    const setMenu = () =>{
        setMenuStatus((prevState) =>{
            return !prevState;
        });
    }

    return(
       <nav className='nav'>
        <label>John</label>
        <Menu choosePage={props.choosePage} pageNum={props.pageNum} menuStatus={menuStatus}></Menu>
        <Option showMenu={setMenu} menuStatus={menuStatus}></Option>
       </nav>
    );

};

export default Navbar;