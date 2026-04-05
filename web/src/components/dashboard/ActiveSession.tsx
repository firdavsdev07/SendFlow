import { Radio, Users } from "lucide-react";

function ActiveSession() {
  return (
    <div className="glass-effect premium-shadow-lg rounded-3xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Active Session</h3>
        <button className="text-violet font-bold text-sm hover:opacity-80">Details</button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-violet font-bold text-sm">
          <Radio className="w-4 h-4" />
          Live Transfer
        </div>
        <h4 className="text-2xl font-bold">Room: #SF-8829-X</h4>
        <p className="text-text-muted flex items-center gap-2">
          <Users className="w-4 h-4" />
          2 peers connected directly
        </p>

        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-semibold">Project_Presentation_Final.mp4</span>
            <span className="text-violet font-bold">68%</span>
          </div>
          <div className="h-2 bg-white/40 rounded-full overflow-hidden">
            <div className="h-full w-[68%] animated-gradient rounded-full"></div>
          </div>
          <div className="flex justify-between text-xs text-text-muted mt-2">
            <span>342.8 MB / 504 MB</span>
            <span>EST. REMAINING: 2m</span>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button className="flex-1 animated-gradient text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">
            Manage Room
          </button>
          <button className="glass-effect border-2 border-coral text-coral font-bold py-3 px-6 rounded-xl hover:bg-coral/10 transition-colors">
            End Session
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActiveSession;
