import './LanguageLogo.css';

const LanguageLogo = props =>{

    return(
        <span className="tooltip"><span className="tooltiptext">{props.key_value}</span><img className="img-container" src={props.source} alt={props.key_value}></img></span>
    );
}

export default LanguageLogo;