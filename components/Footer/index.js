import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-20 gap-10 bg-footer text-moderate-cyan">
      <h1 className="font-sans text-4xl font-black">sunnyside</h1>
      <div className="flex md:gap-10 text-center items-center justify-center">
        <a href="#" className="hover:text-white duration-100">
          About
        </a>
        <a href="#" className="hover:text-white duration-100">
          Services
        </a>
        <a href="#" className="hover:text-white duration-100">
          Projects
        </a>
      </div>
      <div className="flex gap-8 mt-8">
        <AiFillFacebook className="text-2xl hover:text-white cursor-pointer duration-100" />
        <AiOutlineInstagram className="text-2xl hover:text-white cursor-pointer duration-100" />
        <AiOutlineTwitter className="text-2xl hover:text-white cursor-pointer duration-100" />
        <FaPinterest className="text-2xl hover:text-white cursor-pointer duration-100" />
      </div>
    </footer>
  );
}
