function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-70 h-full border border-gray-500">
          <div className="h-100 border-b border-gray-500">
            <div className="w-full h-10 flex mt-3">
              <img
                src="data:image/png;base64,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"
                alt="ChatGPTImage"
                className="pl-5"
              />
              <span className="pl-7 text-[25px] font-medium cursor-pointer">
                ChatGPT
              </span>
            </div>
            <div className=" w-full h-10 my-7 flex justify-center ">
              <button className="bg-blue-700 flex h-full justify-center items-center w-[250px] cursor-pointer rounded text-[21px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="38px"
                  fill="#e3e3e3"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
                <span className="p-2">New Page</span>
              </button>
            </div>
            <div className="border border-gray-200 w-60 h-10 mx-auto flex justify-center items-center mt-10">
              <button className="cursor-pointer">What Is Programming?</button>
            </div>
            <div className="border border-gray-200 w-60 h-10 mx-auto flex justify-center items-center my-3">
              <button className="cursor-pointer">How to use an API?</button>
            </div>
          </div>
          <div className="h-48 w-full flex  items-center justify-center">
            <div className="size-full flex flex-col items-center justify-center">
              <a
                href="#"
                className="w-[150px] flex text-[14px] font-medium items-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#e3e3e3"
                >
                  <path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z" />
                </svg>
                Home
              </a>
              <a
                href="#"
                className="w-[150px] flex text-[14px] font-medium items-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#e3e3e3"
                >
                  <path d="M200-120v-656.67q0-27 19.83-46.83 19.84-19.83 46.84-19.83h426.66q27 0 46.84 19.83Q760-803.67 760-776.67V-120L480-240 200-120Zm66.67-101.33L480-312l213.33 90.67v-555.34H266.67v555.34Zm0-555.34h426.66-426.66Z" />
                </svg>
                Saved
              </a>
              <a
                href="#"
                className="w-[150px] flex text-[14px] font-medium items-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#fff"
                >
                  <path d="m200-553.67 96.67 41Q313.33-546 332-578q18.67-32 40-62l-71.33-14.33L200-553.67ZM350-472l126.67 126.33q52-22.66 101.33-55.66T662-469q77.33-77.33 115.83-162.5T816.67-812q-95.34.33-180.67 38.83-85.33 38.5-162.67 115.84-34.66 34.66-67.66 84Q372.67-524 350-472Zm212-85.67q-21-21-21-51.83t21-51.83q21-21 52-21t52 21q21 21 21 51.83t-21 51.83q-21 21-52 21t-52-21Zm-3.67 362.34L659-296l-14.33-71.33q-30 21.33-62 39.83t-65.34 35.17l41 97ZM880-875.67q12.33 131-30.5 243.84Q806.67-519 706-418.33q-.67.66-1.33 1.33-.67.67-1.34 1.33l21.34 106.34Q728-292.67 723-277q-5 15.67-17 27.67L536-78.67l-84.67-197.66L281-446.67 83.33-531.33l170.34-170q12-12 27.83-17 15.83-5 32.5-1.67l106.33 21.33q.67-.66 1.34-1 .66-.33 1.33-1 100.67-100.66 213.33-144Q749-888 880-875.67Zm-728.33 552q35-35 85.5-35.5t85.5 34.5q35 35 34.5 85.5t-35.5 85.5q-25.67 25.67-81.5 43-55.84 17.34-162.84 32Q92-185.67 109-241.83q17-56.17 42.67-81.84Zm47 47.34Q186-263 175.33-232.83q-10.66 30.16-17.33 72.5 42.33-6.67 72.5-17.17 30.17-10.5 43.5-23.17 16.67-15.33 17.33-38Q292-261.33 276-278q-16.67-16-39.33-15.5-22.67.5-38 17.17Z" />
                </svg>
                Upgrade to Pro
              </a>
            </div>
          </div>
        </div>
        <div className=" w-full "></div>
      </div>
    </>
  );
}

export default App;
