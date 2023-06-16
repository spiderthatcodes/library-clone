import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { NavContainer, LayerOne, LayerTwo, LayerThree } from './style';

const Navbar: FC = () => {
    const { pathname } = useLocation();


    return (
        <NavContainer>
            <LayerOne>
                <h1 id='logo'><span>Phoenix</span>Public<span>Library</span></h1>
                <div>
                    <button className='orange-button'>Translate</button>
                    <button className='orange-button'>My Account</button>
                </div>
            </LayerOne>
            <LayerTwo></LayerTwo>
            {pathname !== '/' && <LayerThree></LayerThree>}
        </NavContainer>
    );
};

export default Navbar;
