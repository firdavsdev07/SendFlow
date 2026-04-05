import { ArrowRight, Lock, Mail, Share2, ShieldCheck, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import chrome from "../../assets/chrome.svg";

function Register() {
  return (
    <div className="grid grid-cols-1 relative lg:grid-cols-9 min-h-screen bg-gradient-to-br from-cream via-violet/5 to-cyan/5">
      {/* Left */}
      <div className="flex flex-col justify-center items-center bg-[linear-gradient(155deg,#faf0ff_0%,#f5e1fc_50%,#edeefc_100%)] lg:col-span-5 px-16 relative overflow-hidden">
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-violet/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-60px] right-[-60px] w-60 h-60 bg-cyan/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="relative flex border-2 border-dashed border-violet/30 rounded-full w-72 h-72 justify-center items-center">
          <div className="absolute bottom-10 left-0 glass-effect premium-shadow rounded-2xl p-3 transition-transform duration-300 hover:scale-110">
            <Lock className="w-7 h-7 text-violet" />
          </div>
          <div className="glass-effect premium-shadow-lg rounded-2xl p-5 transition-transform duration-300 hover:scale-110">
            <Share2 className="w-16 h-16 text-violet" />
          </div>
          <div className="absolute top-10 right-0 glass-effect premium-shadow rounded-2xl p-3 transition-transform duration-300 hover:scale-110">
            <ShieldCheck className="w-7 h-7 text-mint" />
          </div>
        </div>

        <h2 className="text-5xl font-bold text-center text-text-primary mt-8 leading-snug">
          Start sharing.<br />No limits.
        </h2>
        <p className="text-center text-text-muted text-xl mt-3 leading-relaxed">
          Create your free account and transfer<br />files directly — no servers, no tracking.
        </p>

        <div className="flex absolute bottom-10 left-10 items-center glass-effect premium-shadow-lg p-6 gap-3 rounded-3xl transition-transform duration-300 hover:scale-105">
          <div className="p-3 bg-mint/10 rounded-2xl">
            <ShieldCheck className="text-mint" />
          </div>
          <div>
            <h3 className="font-bold">AES-256 Encrypted</h3>
            <p className="text-text-muted font-semibold">Standard P2P Security</p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col justify-center items-center lg:col-span-4 glass-effect px-16 premium-shadow-lg">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center gap-2 mb-10 transition-opacity duration-300 hover:opacity-80">
            <img src={logo} alt="SendFlow" className="w-10 h-10 drop-shadow-md" />
            <span className="font-bold text-xl bg-linear-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              SendFlow
            </span>
          </Link>

          <h1 className="text-3xl font-bold text-text-primary tracking-tight">Create your account</h1>
          <p className="text-sm text-text-muted mt-2 mb-8">
            Free forever. No credit card required.
          </p>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-primary uppercase tracking-widest">
                Full Name
              </label>
              <div className="flex items-center gap-3 glass-effect border-2 border-transparent rounded-xl px-4 py-3 focus-within:border-violet focus-within:premium-shadow transition-all duration-200">
                <User className="w-4 h-4 text-violet shrink-0" />
                <input
                  className="flex-1 text-sm outline-none bg-transparent text-text-primary placeholder:text-text-muted/50"
                  type="text"
                  placeholder="Alex Johnson"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-primary uppercase tracking-widest">
                Email
              </label>
              <div className="flex items-center gap-3 glass-effect border-2 border-transparent rounded-xl px-4 py-3 focus-within:border-violet focus-within:premium-shadow transition-all duration-200">
                <Mail className="w-4 h-4 text-violet shrink-0" />
                <input
                  className="flex-1 text-sm outline-none bg-transparent text-text-primary placeholder:text-text-muted/50"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-primary uppercase tracking-widest">
                Password
              </label>
              <div className="flex items-center gap-3 glass-effect border-2 border-transparent rounded-xl px-4 py-3 focus-within:border-violet focus-within:premium-shadow transition-all duration-200">
                <Lock className="w-4 h-4 text-violet shrink-0" />
                <input
                  className="flex-1 text-sm outline-none bg-transparent text-text-primary placeholder:text-text-muted/50"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex gap-2 items-start mt-1">
              <input type="checkbox" id="terms" className="accent-violet mt-0.5" />
              <label htmlFor="terms" className="text-sm text-text-muted cursor-pointer select-none leading-relaxed">
                I agree to the{" "}
                <a href="#" className="text-violet font-bold hover:opacity-80 transition-opacity">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-violet font-bold hover:opacity-80 transition-opacity">Privacy Policy</a>
              </label>
            </div>

            <button className="flex w-full justify-center font-bold items-center gap-2 rounded-xl text-sm text-white animated-gradient py-3.5 cursor-pointer transition-all duration-300 hover:opacity-90 premium-shadow mt-1">
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-violet/20"></div>
            <span className="text-xs text-text-muted uppercase tracking-widest font-semibold">or</span>
            <div className="flex-1 h-px bg-violet/20"></div>
          </div>

          <div className="flex gap-3">
            <button className="flex flex-1 justify-center items-center gap-2 py-3 glass-effect border-2 border-transparent rounded-xl hover:border-violet transition-all duration-300 text-sm font-semibold text-text-primary premium-shadow">
              <img src={chrome} alt="Google" className="w-4 h-4" />
              Google
            </button>
            <button className="flex flex-1 justify-center items-center gap-2 py-3 glass-effect border-2 border-transparent rounded-xl hover:border-violet transition-all duration-300 text-sm font-semibold text-text-primary premium-shadow">
              <img src={github} alt="GitHub" className="w-4 h-4" />
              GitHub
            </button>
          </div>

          <p className="text-sm text-center text-text-muted mt-8">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-violet font-bold hover:opacity-80 transition-opacity">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
