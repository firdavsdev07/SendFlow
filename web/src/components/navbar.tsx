import { ArrowRight, Zap } from "lucide-react";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-16 py-6 border-b border-violet">
      <ul className="menu flex gap-12 items-center">
        <li className="menu-item">
          <a href="/" className="flex items-center gap-3">
            <div className="icon bg-violet flex justify-center items-center p-2 rounded-lg">
              <Zap className=" text-white w-10 h-10" />
            </div>
            <span className="text-violet font-bold text-4xl">SendFlow</span>
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
          <button className="text-2xl text-text-primary font-medium cursor-pointer ">Sign In</button>
          <button className="flex items-center gap-3 rounded-full text-2xl bg-linear-to-r from-violet to-cyan text-white py-3 px-5 cursor-pointer ">
            <span>Start Sharing</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
