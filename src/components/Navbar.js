
import { NavLink } from 'react-router-dom';
import logo from "./images/logow.png";

function Navbar() {
  return (
     <>
      <header>
        <div class="container">
          <navbar>
            <a href="#" className="Logo">Sales Booster</a>
            <ul>
              <NavLink to="/">Why Sales Booster</NavLink>
              {/* <NavLink to="/tips">Tips</NavLink>
              <NavLink to="/venue">Venue</NavLink>
              <NavLink to="/sliders">Slider</NavLink> */}
            </ul> 
            <div className="admin">
              <a href="#Form"><i className="fa fa-arrow-right"></i> Contact Us</a>
            </div>
          </navbar> 
        </div>
      </header>  
    </>
  );

}
export default Navbar; 