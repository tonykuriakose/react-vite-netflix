import React from "react";
import NavBar from "../components/NavBar";
import hero_banner from "../../src/assets/hero_banner.jpg";
import hero_title from "../../src/assets/hero_title.png";
import play_icon from "../../src/assets/play_icon.png";
import info_icon from "../../src/assets/info_icon.png";
import TitleCard from "../components/TitleCard";

const Home = () => {
  return (
    <div
      className="relative w-full h-[75vh] bg-black"
      style={{
        backgroundImage: `linear-gradient(to right,transparent,rgba(0,0,0,0.75)),url(${hero_banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavBar />
      <div>
        <img src={hero_banner} alt="" />
        <div className="absolute bottom-0 w-full pl-[6%] pb-6 text-white">
          <img src={hero_title} alt="" className="w-[9%] max-1-[420px] mb-8" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern insstanbul embarks on a quest to save the city from a
            immortal enemy
          </p>
          <div className="flex gap-4 mb-[50px]">
            <button className="flex items-center gap-3 px-5 py-2 text-[15px] font-semibold text-white bg-[#6d6d6eb3] rounded-md hover:bg-[#6d6d6e66]">
              <img
                src={play_icon}
                alt="Play Button"
                className="w-[25px] object-contain"
              />
              Play
            </button>

            <button className="flex items-center gap-3 px-5 py-2 text-[15px] font-semibold text-white bg-[#6d6d6eb3] rounded-md hover:bg-[#6d6d6e66]">
              <img
                src={info_icon}
                alt="Info Icon"
                className="w-[25px] object-contain"
              />
              More Info
            </button>
          </div>
        </div>
      </div>
      <TitleCard />
    </div>
  );
};

export default Home;
