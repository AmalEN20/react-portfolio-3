import React from "react";
import WorkImg from "../assets/projects/Calculator.png";
import realEstate from "../assets/projects/Calculator.png";
import JobsProject from "../assets/projects/jobs-app.png"
import SocialMedia from "../assets/projects/SocialMedia.png"
import WearYouWander from "../assets/projects/WearYouWander.png"
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-blue-600">
            Work
          </p>
          <p className="py-6 text-black"> Check out some of my recent work</p>
        </div>

        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}

          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <spna className="text-2xl font-bold text-white tracking-wider">
                React JS Applicaation
              </spna>
              <div className="pt-8 text-center">
                <a target="blank" href="https://amalen20.github.io/Calculator/" >
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 fonr-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="blank" href="https://github.com/AmalEN20/Calculator">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 fonr-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${JobsProject})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <spna className="text-2xl font-bold text-white tracking-wider">
                React JS Applicaation
              </spna>
              <div className="pt-8 text-center">
                <a target="blank" href="https://github.com/AmalEN20/react-jobs-project">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 fonr-bold text-lg">
                    Demo
                  </button>
                </a>
                <a  target="blank" href="https://github.com/AmalEN20/react-jobs-project">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 fonr-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
                    {/* Grid Item */}

                    <div
            style={{ backgroundImage: `url(${SocialMedia})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <spna className="text-2xl font-bold text-white tracking-wider">
                React JS Applicaation
              </spna>
              <div className="pt-8 text-center">
                <a target="blank" href="https://github.com/AmalEN20/MatchMyNeeds">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 fonr-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="blank" href="https://github.com/AmalEN20/MatchMyNeeds">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 fonr-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WearYouWander})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <spna className="text-2xl font-bold text-white tracking-wider">
                React JS Applicaation
              </spna>
              <div className="pt-8 text-center">
                <a target="blank" href="https://amalen20.github.io/WearYouWander/">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 fonr-bold text-lg">
                    Demo
                  </button>
                </a>
                <a target="blank" href="https://github.com/AmalEN20/WearYouWander">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 fonr-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
                    {/* Grid Item */}

                    <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <spna className="text-2xl font-bold text-white tracking-wider">
                React JS Applicaation
              </spna>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 fonr-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 fonr-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <spna className="text-2xl font-bold text-white tracking-wider">
                React JS Applicaation
              </spna>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 fonr-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 fonr-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
