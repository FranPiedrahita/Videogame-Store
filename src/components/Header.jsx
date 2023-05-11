import React from "react";
import { RiShoppingCartLine, RiHeart2Line } from "react-icons/ri";
const Header = () => {
  return (
    <header className="h-[10vh] text-gray-400 py-4 px-10 flex items-center justify-between bg-[#181A20] z-40">
      <ul className="flex items-end gap-6">
        <li>
          <a href="#" className="hover:text-[#E58D27]">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#E58D27]">
            Streams
          </a>
        </li>
        <li>
          <a href="#" className="text-[#E58D27]">
            Games
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#E58D27]">
            News
          </a>
        </li>
      </ul>
      {/* User */}

  <ul className="flex items-center gap-6 text-xl">
  <li>
        <button className="hover:text-[#E58D27]">
          <RiShoppingCartLine />
        </button>
      </li>
      <li>
        <button className="hover:text-[#E58D27]">
          <RiHeart2Line />
        </button>
      </li>
      <li>
        <button>
          <img src="https://img.freepik.com/foto-gratis/hombre-guapo-computadora-portatil_1368-9706.jpg?w=360&t=st=1683836750~exp=1683837350~hmac=20481e462c82e9ce304d46d317010f679abd4d58f16fb09d4a364316efd30769" className="h-6 w-6 object-cover rounded-full"/>
        </button>
      </li>
  </ul>
    </header>
  );
};

export default Header;
