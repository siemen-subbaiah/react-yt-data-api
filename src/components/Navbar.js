import React, { useState } from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AppsIcon from '@material-ui/icons/Apps';
import { useHistory } from 'react-router-dom';

const Navbar = ({ getVideos }) => {
  const [value, setValue] = useState('');
  const [toggle, setToggle] = useState(false);

  const history = useHistory();

  const handleSub = (e) => {
    e.preventDefault();
    getVideos(value);
    history.push('/');
  };

  const showSearchBar = () => {
    setToggle(!toggle);
  };

  return (
    <div className='navbar'>
      <div className='left-items'>
        <div className='menu-logo'>
          <MenuIcon />
        </div>
        <div className='yt-logo'>
          <YouTubeIcon className='yt' />
        </div>
      </div>
      <form onSubmit={handleSub}>
        <input
          type='text'
          className='txt'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {toggle ? (
          <input
            type='text'
            className='txt2'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          ''
        )}
        <button className='btn'>
          <SearchIcon />
        </button>
      </form>
      <button className='btn2' onClick={showSearchBar}>
        <SearchIcon />
      </button>
      <div className='right-items'>
        <div className='create-icon'>
          <AddBoxIcon />
        </div>
        <div className='apps-icon'>
          <AppsIcon />
        </div>
        <div className='bell-icon'>
          <NotificationsIcon />
        </div>
        <div className='avatar-icon'>
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
