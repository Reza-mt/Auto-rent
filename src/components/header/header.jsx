import React from 'react'
import { Navbar } from './navbar/navbar'
import { HearoHeaderText } from './heroheader/hearoHeaderText'

const Header = () => {
  return (
    <div className="relative h-[700px] w-full flex flex-col  justify-between">
    
      <div className="absolute inset-0 bg-cover bg-bottom bg-no-repeat before:absolute before:inset-0 before:bg-black/50"
        style={{ backgroundImage: "url('../../../image/Ford.png')", transform: "scaleX(-1)" }}
      ></div>

      <div className="relative z-10 w-full">
        <Navbar />
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        <HearoHeaderText />
      </div>
    </div>
  );
};

export default Header;
