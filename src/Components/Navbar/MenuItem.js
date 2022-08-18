import './MenuItem.css'

const MenuItem = props =>{

    let classList = "hover-underline-animation"
    if(props.index === props.currentPage){
        classList = "current-page";
    }

    return(
        <li onClick={() =>props.choosePage(props.index)}>
            <label className={classList}>{props.title}</label>
        </li>
    );

};

export default MenuItem;