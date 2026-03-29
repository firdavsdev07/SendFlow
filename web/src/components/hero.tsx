import { ArrowRight, Users, Zap } from "lucide-react";

function Hero() {
  return (
    <section className="hero grid lg:grid-cols-2 gap-32">
      <div className="left-card">
        <h5 className="border border-border-color rounded-full w-80 flex justify-center items-center gap-4 py-1.5 px-1 mb-10">
          <Zap className="text-coral " />
          <span className=" font-medium">
            ⚡ P2P • Zero Storage • Encrypted
          </span>
        </h5>
        <h1 className="text-8xl">
          Share Files <br />
          <span className="bg-linear-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
            Instantly
          </span>
          <br />
          Zero Trace
        </h1>
        <p className="text-text-muted pt-6 text-3xl">
          Secure, direct browser-to-browser file transfers <br /> without
          intermediate servers. The fastest way to move <br /> data privately.
        </p>
        <div className="flex items-center py-12 gap-4 font-medium">
          <a
            href="#"
            className="flex items-center gap-3 rounded-full text-2xl bg-linear-to-r from-violet to-cyan  py-3 px-5 cursor-pointer "
          >
            <span>Start Sharing</span>
            <ArrowRight className="text-white" />
          </a>
          <a href="#" className="text-2xl">
            How It Works
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div className="imgs flex -space-x-6">
            <img
              src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-12 h-12 object-cover  rounded-full border-4 border-white"
              alt="#img"
            />
            <img
              src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-12 h-12 object-cover  rounded-full border-4 border-white"
              alt="#img"
            />
            <img
              src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-12 h-12 object-cover  rounded-full border-4 border-white"
              alt="#img"
            />
            <img
              src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-12 h-12 object-cover  rounded-full border-4 border-white"
              alt="#img"
            />{" "}
          </div>
          <p className="font-bold">
            <span>12k+</span>
            <span className="text-text-muted">
              {" "}
              people sharing securely today
            </span>
          </p>
        </div>
      </div>
      <div className="right-card flex justify-center items-center ">
        <div className="card w-140 h-110   relative">
          <div className="absolute top-0 left-0 z-30 flex flex-col justify-center items-start pl-6 w-70 h-50 bg-violet rounded-4xl">
            <div className=" bg-indigo-300 p-2 rounded-xl">
              <Users className="text-white" />
            </div>
            <h3 className="text-white text-2xl font-bold pt-4 pb-2">
              Create Room
            </h3>
            <p className="text-border-color font-bold">Ready to sync</p>
          </div>
          <div className="absolute top-[20%] w-[80%] z-20 h-65 bg-cyan-400 rounded-4xl p-6">
            <div className="absolute top-4 right-4 bg-cyan-300 text-white text-sm px-3 py-1 rounded-full">
              78%
            </div>
            <div className="w-full h-2 bg-white/40 rounded-full mt-28 overflow-hidden">
              <div className="h-full w-[78%] bg-white rounded-full"></div>
            </div>
          </div>
          <div className="absolute bottom-0 right-15 z-10 flex flex-col justify-center items-start pl-6 w-70 h-40 bg-coral rounded-4xl">
            <div className=" bg-indigo-300 p-2 rounded-xl">
              <Users className="text-white" />
            </div>
            <h3 className="text-white text-2xl font-bold pt-4 pb-2">
              Lightning Speed
            </h3>
            <p className="text-border-color font-bold">Ready to sync</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
