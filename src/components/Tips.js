import v3 from "./images/v3.jpg";
import v5 from "./images/sales.jpg";
import Whatsapp from "./images/whatsapp.svg";

function Tips(){
	return( 

    <div className="App">
      <div className="container">
        <div className="Tips pb-100">
        	<div className="tipsleft">
            <span>TRACKUNG POST</span>
        		<h2>Advanced Viewer Tracker for Consistent Posting</h2>
            <p>perspiciatis unde omnis iste natus error sit voluptatemperspiciatis unde omnis iste natus error sit voluptatemperspiciatis unde omnis iste natus error sit voluptatemperspiciatis unde omnis iste natus</p>
            <ul>
              <li><i className="fa fa-check"></i> perspiciatis unde omnis iste natus error sit voluptatem</li>
              <li><i className="fa fa-check"></i> unde omnis iste natus error sit voluptatem</li>
              <li><i className="fa fa-check"></i> perspiciatis unde omnis iste natus error sit voluptatem</li>
            </ul>
            <div className="buttons">
              <a href="#Form">Get a Quote</a>
              <a href="javascript:;"><img src={Whatsapp} alt=""/> Whatsapp messages</a>
            </div>
      	  </div>
      	  <div className="tipsRight">
            <img src={v5} alt="" />
      	  </div>
        </div>
        <div className="Tips">
          <div className="tipsRight">
            <img src={v5} alt="" />
          </div>
          <div className="tipsleft">
            <span>TRACKUNG POST</span>
            <h2>Advanced Viewer Tracker for Consistent Posting</h2> 
            <p>perspiciatis unde omnis iste natus error sit voluptatemperspiciatis unde omnis iste natus error sit voluptatemperspiciatis unde omnis iste natus error sit voluptatemperspiciatis unde omnis iste natus error sit voluptatemperspiciatis unde omnis iste natus error sit voluptatem</p>
            <p>Unde omnis iste natus error sit voluptatemperspiciatis unde omnis iste natus error unde omnis iste natus error sit voluptatem</p>
            <div className="buttons mt-10">
              <a href="#Form">Get a Quote</a>
              <a href="javascript:;"><img src={Whatsapp} alt=""/> Whatsapp messages</a>
            </div>
          </div>
        </div>
      </div>
    </div> 

	);
} 
export default Tips;