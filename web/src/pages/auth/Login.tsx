import { ArrowRight, Lock, Mail, Share, ShieldCheck } from "lucide-react";
import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import chrome from "../../assets/chrome.svg";

function Login() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-9 bg-[#f9faf5]">
      <div className="border-2  lg:col-span-5">
        <div>
          <div className="icon">
            <Lock className=" text-violet" />
          </div>
          <div className="icon">
            <Share className=" text-violet" />
          </div>
          <div className="icon">
            <ShieldCheck className="text-mint" />
          </div>
        </div>
        <h1>
          'No middleman. Just your <br /> files.'
        </h1>
        <p>
          SendFlow uses WebRTC to move data <br /> peer-to-peer. Your files
          never touch our <br /> servers.
        </p>
        <div>
          <div className="icon">
            <ShieldCheck className="text-mint" />
          </div>
          <div>
            <h3>AES-256 Encrypted</h3>
            <p>Standard P2P Security</p>
          </div>
        </div>
      </div>
      <div className="border-2 py-9 lg:col-span-4">
        <a href="/" className="flex items-center gap-3 pl-7">
          <img src={logo} alt="SendFlow" className="w-20 h-20" />
          <span className="font-bold text-3xl bg-linear-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
            SendFlow
          </span>
        </a>
        <div className="w-[80%] m-auto shadow-xl/30 rounded-4xl box-border p-8">
          <h1 className="text-5xl font-bold">Welcome back 👋</h1>
          <p className="text-xl text-text-muted font-sans py-3">
            Log in to manage your active P2P rooms.
          </p>
          <form className="py-6">
            <label htmlFor="email" className="text-xl  text-text-muted">
              Email Address
            </label>
            <div className="flex items-center  gap-2 border border-text-muted mt-3 mb-6 py-3 px-2 rounded-full">
              <Mail className="text-text-muted" />
              <input
                className=" border-0 text-lg outline-0"
                type="text"
                placeholder="alex@example.com"
              />
            </div>
            <label htmlFor="password" className="text-xl  text-text-muted">
              Password
            </label>
            <div className="flex items-center  gap-2 border border-text-muted mt-3 py-3 px-2 rounded-full">
              <Lock className="text-text-muted" />
              <input
                className=" border-0 text-lg outline-0"
                type="text"
                placeholder="• • • • • • • •"
              />
            </div>

            <div className="flex justify-between my-5">
              <div className="flex gap-3 items-center ">
                <input type="checkbox" className=" scale-140" />
                <label htmlFor="checkbox" className="text-xl">
                  Keep me signed in
                </label>
              </div>
              <a href="#" className=" text-violet font-bold">
                Forgot password ?
              </a>
            </div>
            <button className="flex w-full justify-center font-semibold shadow-sm items-center gap-3 rounded-full text-2xl bg-linear-to-r from-violet to-cyan py-3 px-5 cursor-pointer transition-opacity duration-200 hover:opacity-85">
              <span> Sign In </span>
              <ArrowRight className="text-white" />
            </button>
          </form>
          <div className="">
            <div className="flex pb-6 items-center justify-between">
              <div className=" bg-text-muted w-[35%] h-0.5"></div>
              <p className="text-lg text-center  text-text-muted">
                Or continue with
              </p>
              <div className=" bg-text-muted w-[35%] h-0.5"></div>
            </div>
            <div className="flex gap-4 justify-center">
              <button className="flex w-[50%] justify-center items-center gap-3 py-2 border border-text-muted rounded-full">
                <img src={chrome} alt="Chrome" className="w-8 h-8" />
                <span className=" font-semibold text-xl">Google</span>
              </button>
              <button className="flex w-[50%] justify-center items-center gap-3 py-2 border border-text-muted rounded-full">
                <img src={github} alt="GitHub" className="w-8 h-8" />
                <span>Github</span>
              </button>
            </div>
          </div>
          <div className="flex gap-2 py-8 text-xl justify-center">
            <p className="text-text-muted">Don't have an account ? </p>{" "}
            <a href="" className="text-violet font-bold">
              Create account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
