import { ArrowRight } from "lucide-react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex fixed w-full z-100 glass-effect premium-shadow justify-between items-center px-16 py-3">
      <ul className="menu flex gap-12 items-center">
        <li className="menu-item flex items-center">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="SendFlow"
              className="w-20 h-20 drop-shadow-lg"
            />
            <span className="font-bold text-3xl bg-linear-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              SendFlow
            </span>
          </a>
        </li>
        <li className="minu-item text-2xl text-text-muted font-medium cursor-pointer transition-all duration-300 hover:text-violet hover:scale-105">
          <a href="#hero">Home</a>
        </li>
        <li className="minu-item text-2xl text-text-muted font-medium cursor-pointer transition-all duration-300 hover:text-violet hover:scale-105">
          <a href="#process"> How It Works</a>
        </li>
        <li className="minu-item text-2xl text-text-muted font-medium cursor-pointer transition-all duration-300 hover:text-violet hover:scale-105">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="auth">
        <div className="btn-auth-group flex items-center gap-6">
          <Link
            to="/auth/login"
            className="text-2xl text-text-primary font-semibold cursor-pointer transition-all duration-300 hover:text-violet"
          >
            Sign In
          </Link>
          <Link
            to="/auth/login"
            className="flex animated-gradient premium-shadow items-center gap-3 rounded-full text-2xl py-3 px-6 cursor-pointer transition-all duration-300 hover:opacity-90 hover:shadow-2xl"
          >
            <span className="text-white font-semibold">Start Sharing</span>
            <ArrowRight className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
