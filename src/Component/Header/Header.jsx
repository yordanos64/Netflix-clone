import './Header.css';
import NetflixLogo from "../../assets/Images/NetflixLogo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Header = () => {
  return (
    <div className= "header_outer_container" > 
    
    
    <div className= "header_container"> 
      <div className= "header_left">
        <ul>
           <li><img src={NetflixLogo} alt="Netflix Logo" width="100" /> </li> 
          <li>Netflix</li>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li> 
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by language</li>
        </ul>
</div>
      <div className= "right_header"> 
        <ul>
        <li><SearchIcon /></li>
         <li><NotificationsIcon /></li>
       <li><AccountBoxIcon /></li>
        <li><ArrowDropDownIcon /></li> 
        </ul>
        </div>

    




      
    </div>
    
    </div>
  );
}

export default Header;