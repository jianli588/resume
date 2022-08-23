import { FaGithub, FaLinkedin} from "react-icons/fa";

const LinkIcon = props =>{

    return(
        <span>
        <a href="https://github.com/jianli588" target="_blank"><FaGithub ></FaGithub></a>
        <a href="https://www.linkedin.com/in/john-li-302597242/" target="_blank"><FaLinkedin ></FaLinkedin></a>
        </span>
    );
}

export default LinkIcon;