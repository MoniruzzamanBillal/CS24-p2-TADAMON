import AboutCard from "../Component/Shared/AboutCard";
import ContactUs from "../Component/Shared/ContactUs";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeWraper">
        {/* header section satrts  */}
        <div className="headerContainer  text-center mb-10  ">
          <h1 className=" text-5xl py-5 font-semibold ">EcoSync</h1>
          <h1 className=" text-xl w-[60%] m-auto font-medium ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            laudantium quod, ipsum neque natus doloremque ex repellat optio eius
            quos?
          </h1>
        </div>
        {/* header section ends */}
        {/* about section  starts  */}
        <div className="aboutContainer  py-8  m-auto  ">
          <h1 className=" text-4xl mb-8 text-center font-semibold ">
            {" "}
            About us{" "}
          </h1>

          {/* about card starts  */}

          <AboutCard order1="order-last" order2="order-first" />
          <AboutCard order1="order-first" order2="order-last" />
          {/* about card ends   */}
        </div>
        {/* about section  ends  */}
        {/* contact us section starts  */}
        {/* <div className="contactUs      ">
          <ContactUs />
        </div> */}
        {/* contact us section end s */}
      </div>
    </div>
  );
};

export default Home;
