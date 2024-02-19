import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import Card from "../../components/Cards/Card";
import WebMonitors from "../../components/WebMonitors/WebMonitors";
import Welcome from "../../components/Home/Welcome/Welcome";
import Global from "../../components/Home/Global/Global";
import Monitors from "../../components/Home/Monitors/Monitors";
import Recent from "../../components/Home/Recent/Recent";


const Content = () => {
  return (
    <div className='main-content overflow-x-hidden'>
      <ContentTop />
     {/* nitu start */}
      {/* <Welcome></Welcome>
      <Global></Global>
      <Monitors></Monitors> */}
      <Recent></Recent>

{/* shipon */}
    
      
    </div>
  )
}

export default Content
