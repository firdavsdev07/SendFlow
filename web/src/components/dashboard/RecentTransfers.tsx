import { FileText } from "lucide-react";

const transfers = [
  { name: "Branding_Assets_2025.zip", size: "342 MB", time: "2 mins ago", status: "complete" },
  { name: "App_Preview_V1.mp4", size: "1.2 GB", time: "1 hour ago", status: "sending" },
  { name: "Invoices_January.pdf", size: "2.4 MB", time: "1 hour ago", status: "complete" },
  { name: "Team_Photo_HighRes.jpg", size: "12.8 MB", time: "5 hours ago", status: "complete" },
  { name: "Source_Code_Archive.tar.gz", size: "89 MB", time: "Yesterday", status: "failed" },
];

function RecentTransfers() {
  return (
    <div className="glass-effect premium-shadow-lg rounded-3xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Recent Transfers</h3>
        <button className="text-violet font-bold text-sm hover:opacity-80">View All History</button>
      </div>

      <div className="space-y-4">
        {transfers.map((file, i) => (
          <div key={i} className="flex items-center justify-between p-4 glass-effect rounded-2xl hover:bg-white/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-violet/10 p-3 rounded-xl">
                <FileText className="w-6 h-6 text-violet" />
              </div>
              <div>
                <h4 className="font-bold">{file.name}</h4>
                <p className="text-sm text-text-muted">{file.size} • {file.time}</p>
              </div>
            </div>
            <span className={`text-sm font-bold px-3 py-1 rounded-full ${
              file.status === 'complete' ? 'bg-mint/20 text-mint' :
              file.status === 'sending' ? 'bg-cyan/20 text-cyan' :
              'bg-coral/20 text-coral'
            }`}>
              {file.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentTransfers;
