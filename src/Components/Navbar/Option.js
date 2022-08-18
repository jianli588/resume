import {GrClose, FaGithub, FaLinkedin, FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import './Option.css';
const Option = props =>{

    let icon = <FaBars ></FaBars>;

    if(props.menuStatus){
        icon = <AiOutlineClose></AiOutlineClose>;
    }

    return(
        <div>
            <a href="https://github.com/jianli588" target="_blank"><FaGithub ></FaGithub></a>
            <a href="https://www.linkedin.com/in/john-li-302597242/" target="_blank"><FaLinkedin ></FaLinkedin></a>
            <a onClick={props.showMenu} className="toggler">{icon}</a>
        </div>
    )
    
}

export default Option;