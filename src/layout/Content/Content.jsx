import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import Card from "../../components/Cards/Card";
import WebMonitors from "../../components/WebMonitors/WebMonitors";


const Content = () => {
  return (
    <div className='main-content'>
      <ContentTop />
     <WebMonitors />
    </div>
  )
}

export default Content
