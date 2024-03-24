import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div className="RootPageContainer">
      {/* nav container  */}
      <div className="navContainer ">
        <h1>nav bar </h1>
        <h1>nav bar </h1>
        <h1>nav bar </h1>
      </div>
      {/* nav container ends  */}

      {/* children components starts  */}
      <div className="childComponents">
        <Outlet />
      </div>
      {/* children components ends  */}

      {/* footer container starts  */}
      <div className="footerContainer">
        <h1>footer</h1>
        <h1>footer</h1>
      </div>
      {/* footer container ends  */}
    </div>
  );
};

export default RootPage;
