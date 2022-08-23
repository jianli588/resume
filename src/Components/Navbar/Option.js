import { FaGithub, FaLinkedin, FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import './Option.css';
import LinkIcon from '../Common/LinkIcon.js'
const Option = props =>{

    let icon = <FaBars ></FaBars>;

    if(props.menuStatus){
        icon = <AiOutlineClose></AiOutlineClose>;
    }

    return(
        <div>
            <LinkIcon></LinkIcon>
            <a onClick={props.showMenu} className="toggler">{icon}</a>
        </div>
    )
    
}

export default Option;