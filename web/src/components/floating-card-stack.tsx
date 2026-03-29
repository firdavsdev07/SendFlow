import { Download, Send, ShieldCheck, Users } from "lucide-react";

function FloatingCardStack() {
  return (
    <div className="pt-56">
      <div className="flex flex-col items-center">
        <h6 className=" bg-fuchsia-200 border  border-violet text-violet font-bold px-8 py-0.5 rounded-full">
          The Process
        </h6>
        <h1 className="text-center text-6xl py-6">Simple, Direct, Powerful</h1>
        <p className="text-center text-2xl text-text-muted">
          We use WebRTC technology to establish a direct pipeline between you
          and <br />
          your recipient. Your files never touch our servers.
        </p>
      </div>
      <div className="flex relative py-30 justify-between">
        <div className="flex flex-col  items-center  ">
          <div className="icon bg-mint p-6  rounded-xl">
            <Users className="text-white w-12 h-12 " />
          </div>
          <h6 className="text-lg pt-4 text-text-muted font-bold">STEP 01</h6>
          <h2 className="text-3xl font-bold my-2">Create Room</h2>
          <p className="text-text-muted text-center text-lg">
            Generate a secure <br />
            peer-to-peer room <br />
            instantly.
          </p>
        </div>
        <div className="flex flex-col justify-center  items-center  ">
          <div className="bg-cyan w-10 h-0.5"></div>
        </div>
        <div className="flex a flex-col  items-center  ">
          <div className="icon bg-cyan p-6  rounded-xl">
            <Send className="text-white w-12 h-12 " />
          </div>
          <h6 className="text-lg pt-4 text-text-muted font-bold">STEP 02</h6>
          <h2 className="text-3xl font-bold my-2">Share Link</h2>
          <p className="text-text-muted text-center text-lg">
            Send the denerated room <br />
            URL to your recipient
          </p>
        </div>
        <div className="w-170 h-170 absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-fuchsia-200 rounded-full"></div>
        <div className="flex flex-col gap-2 justify-center items-center  bg-white shadow-xl rounded-4xl h-50 w-50">
          <img
            src="https://plus.unsplash.com/premium_photo-1661602011150-6c6f8b9ba788?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8"
            alt="#img"
            className=" w-30 h-30 object-cover rounded-2xl"
          />
          <h2 className="text-2xl font-bold">You</h2>
        </div>
        <div className="flex flex-col  items-center  ">
          <div className="icon bg-violet p-6  rounded-xl">
            <ShieldCheck className="text-white w-12 h-12 " />
          </div>
          <h6 className="text-lg pt-4 text-text-muted font-bold">STEP 03</h6>
          <h2 className="text-3xl font-bold my-2">P2P Handshake</h2>
          <p className="text-text-muted text-center text-lg">
            Browsers connect directly
            <br />
            with end-to-end encryption.
          </p>
        </div>
        <div className="flex flex-col justify-center  items-center  ">
          <div className="bg-linear-to-r from-violet-500 to-cyan-500 w-10 h-0.5"></div>
        </div>
        <div className="flex flex-col  items-center  ">
          <div className="icon bg-coral p-6  rounded-xl">
            <Download className="text-white w-12 h-12 " />
          </div>
          <h6 className="text-lg pt-4 text-text-muted font-bold">STEP 04</h6>
          <h2 className="text-3xl font-bold my-2">File Arrives</h2>
          <p className="text-text-muted text-center text-lg">
            Files flow directly to their
            <br />
            device at max speed
          </p>
        </div>
      </div>
    </div>
  );
}

export default FloatingCardStack;
