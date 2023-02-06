const Bestfullbody = () => {
    return (
      <div className="container mx-auto">
        <div className="px-5 flex flex-col lg:flex-row gap-4">
          <div className="basis-1/2 lg:mt-0 mt-10">
            <img src="../images/Group 3892.png" className="object-cover" alt="Logo" />
          </div>
  
          <div className="basis-1/2">
            <h1 className="font-bold font-mono lg:text-[56px] lg:leading-[73px] mb-9 mt-10 text-[28px] leading-[39px]">
              Healthy in side <br /> <span className="text-blue-400">fresh</span> out side
            </h1>
            <span className="text-sm text-stone-500 ">
              Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular
              exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or
              with your friends at home. Healthy life makes you more excited to live the day
            </span>
  
            <div className=" flex gap-5 my-10">
              <button
                type="button"
                className="bg-blue-700 flex font-medium gap-3 items-center px-10 py-2.5 rounded-lg text-sm text-white"
              >
                <span>Get Started</span>
                <span>
                  <img src="../images/ArrowRight.png" alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Bestfullbody;
  