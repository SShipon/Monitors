import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import Card from "../../components/Cards/Card";
import WebMonitors from "../../components/WebMonitors/WebMonitors";
import Welcome from "../../components/Home/Welcome/Welcome";
import Global from "../../components/Home/Global/Global";


const Content = () => {
  return (
    <div className='main-content'>
      <ContentTop />
     {/* <WebMonitors /> */}
   {/* nitu start */}
      <Welcome></Welcome>
      <Global></Global>

{/* shipon */}
    
      
    </div>
  )
}

export default Content
