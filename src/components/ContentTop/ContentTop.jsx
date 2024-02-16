import { SidebarContext } from "../../context/sidebarContext";
import { iconsImgs } from "../../utils/images";
import { personsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => toggleSidebar()}
        >
          <img src={iconsImgs.menu} alt="" />
        </button>
      </div>
      <div className="content-top-btns">
        <div className="navbar-end flex gap-5">
          <div className="nav-settings">
            <i class="fa-solid fa-gear"></i>
          </div>
          <div className="nav-notification">
            <i class="fa-regular fa-bell"></i>
          </div>
          <div className="nav-userImage">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentTop
