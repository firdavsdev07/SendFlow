import { Plus, Share2 } from "lucide-react";

function QuickActions() {
  return (
    <div className="glass-effect premium-shadow-lg rounded-3xl p-6">
      <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
      
      <div className="space-y-3">
        <button className="w-full glass-effect border-2 border-transparent hover:border-violet p-4 rounded-2xl flex items-start gap-3 transition-all">
          <div className="bg-violet p-3 rounded-xl">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <h4 className="font-bold">Create New Room</h4>
            <p className="text-sm text-text-muted">Setup a secure P2P space instantly</p>
          </div>
        </button>

        <button className="w-full glass-effect border-2 border-transparent hover:border-cyan p-4 rounded-2xl flex items-start gap-3 transition-all">
          <div className="bg-cyan p-3 rounded-xl">
            <Share2 className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <h4 className="font-bold">Broadcast Transfer</h4>
            <p className="text-sm text-text-muted">Share one file to multiple peers</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default QuickActions;
