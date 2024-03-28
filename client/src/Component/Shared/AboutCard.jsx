const AboutCard = () => {
  return (
    <div className="AboutCardContainer mb-3 ">
      <div className="AboutCardWrapper">
        {/* about card starts  */}

        <div className="   w-[85%] m-auto flex sm:flex-row flex-col justify-between items-center border border-gray-300  overflow-hidden rounded-lg shadow-md bg-gray-200  md:h-80">
          {/* <!-- image - start --> */}
          <div className=" order-last h-36  bg-gray-300 sm:order-none sm:h-auto w-[40%] ">
            <img
              src="https://i.ibb.co/KV9cmsw/pexels-samet-olako-lu-10974684.jpg"
              loading="lazy"
              alt="Photo by Andras Vas"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* <!-- image - end --> */}

          {/* <!-- content - start --> */}
          <div className=" order-first flex  flex-col px-12 w-[60%] ">
            <p className="  text-gray-900 text-xl  ">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text.
            </p>
          </div>
          {/* <!-- content - end --> */}
        </div>
        {/* about card ends   */}
      </div>
    </div>
  );
};

export default AboutCard;
