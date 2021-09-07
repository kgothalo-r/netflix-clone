import React, {useState} from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';
import Logo from '../../images/movie_logo.png';
import Avatar from '../../images/user_avatar.png';
import UserTwo from '../../images/user_two.png';
import UserThree from '../../images/user_three.png';
import UserFour from '../../images/user_four.png';
import SearchBar from '../SearchBar/index';
import Popup from "reactjs-popup";
import { Wrapper, Content, Nav, Navigation, Explore, Menu, MenuItem, Notification, LogoImg } from './Header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [colorChange, setColorchange] = useState(false);
    
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return(
        <Wrapper className={colorChange ? 'navbar colorChange' : 'navbar'}>
            <Content>
                <Link to='/'>
                    <LogoImg src={Logo} alt='page-Logo' />
                </Link>
                <Nav>
                    <Navigation className='active'>Home</Navigation>
                    <Navigation>TV Shows</Navigation>
                    <Navigation>Movies</Navigation>
                    <Navigation>New & Popular</Navigation>
                    <Navigation>My List</Navigation>
                </Nav>
            </Content>
            <Explore>
                <SearchBar className='search' />
                <button>KIDS</button>
                <Popup
                    trigger={<button><FontAwesomeIcon icon={faBell} className='icon'/></button>}
                    position="bottom right"
                    on="hover"
                    closeOnDocumentClick
                    mouseLeaveDelay={300}
                    mouseEnterDelay={0}
                    contentStyle={{ padding: "0px", border: "none" }}
                    arrow={false}
                >
                    <Notification/>
                </Popup>
                <Popup
                    trigger={<button><img src={Avatar} alt="current-user" className='users'/></button>}
                    position="bottom right"
                    on="hover"
                    closeOnDocumentClick
                    mouseLeaveDelay={0}
                    mouseEnterDelay={5}
                    contentStyle={{ padding: "0px", border: "none" }}
                    arrow={false}
                >
                    <Menu>
                        <MenuItem><img src={UserTwo} alt="other-user" className='users'/><span>Kgothalo</span></MenuItem>
                        <MenuItem><img src={UserThree} alt="other-user" className='users'/><span>Tholoana</span></MenuItem>
                        <MenuItem><img src={UserFour} alt="kids" className='users'/><span>Kids</span></MenuItem>
                        <br/>
                        <MenuItem className='manage'><span>Manage Profiles</span></MenuItem>
                        <div className='account'>
                            <MenuItem><a href='fg'>Account</a></MenuItem>
                            <MenuItem><a href='fg'>Help Center</a></MenuItem>
                            <MenuItem><a href='fg'>Sign out of Netflix</a></MenuItem>
                        </div>
                    </Menu>
                </Popup>
                
            </Explore>
        </Wrapper>
    )
};

export default Header;
