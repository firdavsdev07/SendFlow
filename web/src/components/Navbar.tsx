import { ArrowRight } from "lucide-react";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="flex fixed w-full z-100 bg-white justify-between items-center px-16 py-2 border-b border-border-color">
      <ul className="menu flex gap-12 items-center">
        <li className="menu-item flex items-center">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="SendFlow" className="w-20 h-20" />
            <span className="font-bold text-3xl bg-linear-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              SendFlow
            </span>
          </a>
        </li>
        <li className="minu-item text-2xl text-text-muted font-medium cursor-pointer ">
          <a href="#">Home</a>
        </li>
        <li className="minu-item text-2xl text-text-muted font-medium cursor-pointer ">
          <a href="#"> How It Works</a>
        </li>
        <li className="minu-item text-2xl text-text-muted font-medium cursor-pointer ">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="auth">
        <div className="btn-auth-group flex gap-6">
          <button className="text-2xl text-text-primary font-medium cursor-pointer transition-opacity duration-200 hover:opacity-60">
            Sign In
          </button>
          <button className="flex shadow-sm items-center gap-3 rounded-full text-2xl bg-linear-to-r from-violet to-cyan py-3 px-5 cursor-pointer transition-opacity duration-200 hover:opacity-85">
            <span>Start Sharing</span>
            <ArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
