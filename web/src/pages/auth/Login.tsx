import { ArrowRight, Lock, Mail, Share2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import chrome from "../../assets/chrome.svg";

function Login() {
  return (
    <div className="grid grid-cols-1 relative lg:grid-cols-9 bg-[#f9faf5] min-h-screen">
      <div className="flex flex-col justify-center items-center bg-[linear-gradient(155deg,#faf0ff_0%,#f5e1fc_50%,#edeefc_100%)] lg:col-span-5 px-16 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-violet/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[-60px] w-60 h-60 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex border-2 border-dashed border-fuchsia-200 rounded-full w-72 h-72 justify-center items-center">
          <div className="absolute bottom-10 left-0 bg-white rounded-2xl shadow-lg p-3">
            <Lock className="w-7 h-7 text-violet" />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Share2 className="w-16 h-16 text-violet" />
          </div>
          <div className="absolute top-10 right-0 bg-white rounded-2xl shadow-lg p-3">
            <ShieldCheck className="w-7 h-7 text-mint" />
          </div>
        </div>

        <h2 className="text-5xl font-bold text-center text-text-primary mt-8 leading-snug">
          No middleman.<br />Just your files.
        </h2>
        <p className="text-center text-text-muted text-xl mt-3 leading-relaxed">
          SendFlow uses WebRTC to move data<br />peer-to-peer. Your files never touch our servers.
        </p>

        <div className="flex absolute bottom-10 left-10 items-center bg-white p-6 gap-3 rounded-3xl shadow-sm">
          <div className="p-3 bg-[#e3faf4] rounded-2xl">
            <ShieldCheck className="text-mint" />
          </div>
          <div>
            <h3 className="font-semibold">AES-256 Encrypted</h3>
            <p className="text-text-muted font-semibold">Standard P2P Security</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:col-span-4 bg-white px-16 shadow-[-8px_0_30px_rgba(0,0,0,0.06)]">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center gap-2 mb-10">
            <img src={logo} alt="SendFlow" className="w-10 h-10" />
            <span className="font-bold text-xl bg-linear-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              SendFlow
            </span>
          </Link>

          <h1 className="text-3xl font-bold text-text-primary tracking-tight">Sign in to your account</h1>
          <p className="text-sm text-text-muted mt-2 mb-8">
            Welcome back — your files are waiting.
          </p>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-text-primary uppercase tracking-widest">
                Email
              </label>
              <div className="flex items-center gap-3 border border-[#e5e7eb] bg-[#fafafa] rounded-xl px-4 py-3 focus-within:bg-white focus-within:border-violet focus-within:ring-3 focus-within:ring-violet/10 transition-all duration-200">
                <Mail className="w-4 h-4 text-[#c0c4cc] shrink-0" />
                <input
                  className="flex-1 text-sm outline-none bg-transparent text-text-primary placeholder:text-[#c0c4cc]"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-text-primary uppercase tracking-widest">
                  Password
                </label>
                <a href="#" className="text-xs text-violet font-medium hover:opacity-70 transition-opacity">
                  Forgot password?
                </a>
              </div>
              <div className="flex items-center gap-3 border border-[#e5e7eb] bg-[#fafafa] rounded-xl px-4 py-3 focus-within:bg-white focus-within:border-violet focus-within:ring-3 focus-within:ring-violet/10 transition-all duration-200">
                <Lock className="w-4 h-4 text-[#c0c4cc] shrink-0" />
                <input
                  className="flex-1 text-sm outline-none bg-transparent text-text-primary placeholder:text-[#c0c4cc]"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex gap-2 items-center mt-1">
              <input type="checkbox" id="remember" className="accent-violet" />
              <label htmlFor="remember" className="text-sm text-text-muted cursor-pointer select-none">
                Keep me signed in
              </label>
            </div>

            <button className="flex w-full justify-center font-semibold items-center gap-2 rounded-xl text-sm text-white bg-linear-to-r from-violet to-cyan py-3.5 cursor-pointer transition-opacity duration-200 hover:opacity-85 mt-1">
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#f0f0f0]"></div>
            <span className="text-xs text-[#c0c4cc] uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-[#f0f0f0]"></div>
          </div>

          <div className="flex gap-3">
            <button className="flex flex-1 justify-center items-center gap-2 py-3 border border-[#e5e7eb] bg-white rounded-xl hover:bg-[#fafafa] transition-colors duration-200 text-sm font-medium text-text-primary">
              <img src={chrome} alt="Google" className="w-4 h-4" />
              Google
            </button>
            <button className="flex flex-1 justify-center items-center gap-2 py-3 border border-[#e5e7eb] bg-white rounded-xl hover:bg-[#fafafa] transition-colors duration-200 text-sm font-medium text-text-primary">
              <img src={github} alt="GitHub" className="w-4 h-4" />
              GitHub
            </button>
          </div>

          <p className="text-sm text-center text-text-muted mt-8">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-violet font-semibold hover:opacity-70 transition-opacity">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
