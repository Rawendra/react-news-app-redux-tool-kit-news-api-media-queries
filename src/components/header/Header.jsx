import "./Header.css";
import Search from "../search/Search";
function Header() {
  return (
    <div className="header-main-container">
      <div className="header-main-container-main-title">NEWS TODAY</div>
      <div>
        <Search />
      </div>
      <div className="header-main-side-options">
        <>
          <div className="header-main-side-options-item">ABOUT</div>
          <div className="header-main-side-options-item">HOME</div>
          <div className="header-main-side-options-item"> CONTACT US</div>
        </>
      </div>
    </div>
  );
}

export default Header;
