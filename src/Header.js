import { Icon } from '@iconify/react';
import menuGridO from '@iconify-icons/gg/menu-grid-o';

const Header = () => {
    return(
    <div className='header'>
            <a href='#1'>Почта</a>
            <a href='#2'>Картинки</a>
            <a href='#3'><Icon icon={menuGridO} className='menu' /></a>
            <a href="#4"><div className='avatar'></div></a>
        </div>
        );
}

export default Header;
