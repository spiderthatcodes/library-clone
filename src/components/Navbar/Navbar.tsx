import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { NavContainer, LayerOne, LayerTwo, LayerThree } from './style';
import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/20/solid';

const Navbar: FC = () => {
    const { pathname } = useLocation();

    const tealButtonText = [
        'Browse',
        'Location & Hours',
        'Calendar',
        'Kids',
        'Teens',
        'Services',
        'About Us',
        'En espanol',
    ];

    return (
        <NavContainer>
            <LayerOne>
                <h1 id='logo'>
                    <span>Phoenix</span>Public<span>Library</span>
                </h1>
                <div>
                    <button className='orange-button'>Translate</button>
                    <button className='orange-button'>My Account</button>
                </div>
            </LayerOne>
            <LayerTwo>
                <div id='button-level'>
                    {tealButtonText.map((text) => (
                        <button className='teal-button' key={text}>{text}</button>
                    ))}
                </div>
                <div id='search-level'>
                    <input
                        type='text'
                        placeholder='Search Phoenix Public Library'
                    />
                    <button className='lime'>
                        <MagnifyingGlassIcon className='icon' />
                    </button>
                    <button className='lime'>
                        <XCircleIcon className='icon' />
                    </button>
                </div>
            </LayerTwo>
            {pathname !== '/' && <LayerThree></LayerThree>}
        </NavContainer>
    );
};

export default Navbar;
