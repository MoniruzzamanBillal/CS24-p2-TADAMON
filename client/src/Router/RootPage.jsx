import { Outlet } from "react-router-dom";
import NavBar from "../Component/Shared/NavBar";
import Footer from "../Component/Shared/Footer";

const RootPage = () => {
  return (
    <div className="RootPageContainer">
      {/* nav container  */}
      <div className="navContainer ">
        <NavBar />
      </div>
      {/* nav container ends  */}

      {/* children components starts  */}
      <div className="childComponents  pt-[4.4rem] ">
        <Outlet />
      </div>
      {/* children components ends  */}

      {/* footer container starts  */}
      <div className="footerContainer">
        <Footer />
      </div>
      {/* footer container ends  */}
    </div>
  );
};

export default RootPage;
