
import MenuItem from './MenuItem.js';
import './Menu.css'

const Menu = props =>{

    const MenuObject = [
        {title: 'Home', index:0},
        {title: 'Resume', index:1},
        {title: 'Contact', index:3}
    ];

    let containerClass = 'navbar-list';
    if (props.menuStatus){
        containerClass = 'navbar-list show';
    }

    return (
    <ul className={containerClass}>
        {MenuObject.map(item => <MenuItem title={item.title} index={item.index} choosePage={props.choosePage} key={item.index} currentPage={props.pageNum}></MenuItem>)}
    </ul>
    );
}

export default Menu;