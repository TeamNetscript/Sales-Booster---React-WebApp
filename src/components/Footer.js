import ficon from "./images/ficon.svg";
import app1 from "./images/app1.png";
import app2 from "./images/app2.png";
import { NavLink } from 'react-router-dom';
import Form from './Form.js';

function Footer(){
	return(

		<div className="Footer">
			<div className="container">
				<div className="footerMain"> 
					<div className="footerTitle">
						<h3>Contact us in any convenient way</h3>
					</div>
					<div className="footerInfo">
						<div className="footerInfoData1">
							<div className="fMail">
								<h3>Sales Booster</h3>
								<p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere repellendus.</p> 
							</div>
							<div className="fMail">
								<h3>Start a project</h3>
								<a href="mailto:contact@salesboost.com"> contact@salesboost.com</a>
								<div className="fSpace"></div>
							</div>
							<div className="fMailx">
      							<Form/>
							</div>
						</div>
					</div>
				</div>
				<div className="copyRights">
					<p>&copy; | Shopify Store. All Right Reserved.</p>
				</div>
			</div>
		</div>

	);
}
export default Footer;