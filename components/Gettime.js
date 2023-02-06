const Gettime = () => {
    return (
      <div className="container mx-auto my-20">
        <div
          className="flex flex-col gap-4 justify-center lg:flex-row lg:mx-0 lg:py-[87px] mx-5 px-5 py-8 md-py-0 rounded-[30px]"
          style={{ background: "linear-gradient(87.05deg, #6462F0 0%, #9190E9 95.5%)" }}
        >
          <div className="flex gap-[30px]">
            <span className="w-[100px] h-[100px] flex items-center justify-center rounded-[20px] trans-card">
              <img src="../images/1st-opt.png" alt="challenge" />
            </span>
            <span className="flex flex-col justify-between text-white">
              <h6 className="font-bold text-xl">
                Get that 11 line <br /> in 30 days
              </h6>
              <a href="#" className="flex items-center gap-4 font-light opacity-50">
                Learn more
                <img src="../images/arrow-right-sm.png" alt="arrow" />
              </a>
            </span>
          </div>
  
          <div className="flex gap-[30px]">
            <span className="w-[100px] h-[100px] flex items-center justify-center rounded-[20px] trans-card">
              <img src="../images/2nd-opt.png" alt="challenge" />
            </span>
            <span className="flex flex-col justify-between text-white">
              <h6 className="font-bold text-xl">
                14 Days <br /> sherd challenge
              </h6>
              <a href="#" className="flex items-center gap-4 font-light opacity-50">
                Learn more
                <img src="../images/arrow-right-sm.png" alt="arrow" />
              </a>
            </span>
          </div>
  
          <div className="flex gap-[30px]">
            <span className="w-[100px] h-[100px] flex items-center justify-center rounded-[20px] trans-card">
              <img src="../images/3rd-opt.png" alt="challenge" />
            </span>
            <span className="flex flex-col justify-between text-white">
              <h6 className="font-bold text-xl">
                Get flat belly <br /> in 30 days
              </h6>
              <a href="#" className="flex items-center gap-4 font-light opacity-50">
                Learn more
                <img src="../images/arrow-right-sm.png" alt="arrow" />
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Gettime;
  