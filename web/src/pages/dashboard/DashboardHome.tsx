import { ArrowUpRight, Radio, Shield, Upload } from "lucide-react";
import StatsCard from "../../components/dashboard/StatsCard";
import ActiveSession from "../../components/dashboard/ActiveSession";
import QuickActions from "../../components/dashboard/QuickActions";

function DashboardHome() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-2">Good morning, Alex 👋</h1>
        <p className="text-text-muted text-lg">
          You have <span className="text-violet font-bold">1 active session</span> and <span className="font-bold">2 transfers</span> pending.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="ACTIVE ROOMS"
          value={12}
          trend="↑ +2% today"
          icon={Radio}
          iconBg="bg-violet/10"
          iconColor="text-violet"
        />
        <StatsCard
          title="SENT FILES"
          value={48}
          trend="↑ +12% today"
          icon={ArrowUpRight}
          iconBg="bg-coral/10"
          iconColor="text-coral"
        />
        <StatsCard
          title="RECEIVED FILES"
          value={23}
          trend="↑ +8% today"
          icon={Upload}
          iconBg="bg-cyan/10"
          iconColor="text-cyan"
        />
        <StatsCard
          title="PRIVACY LEVEL"
          value="100%"
          trend="Fully encrypted"
          icon={Shield}
          iconBg="bg-mint/10"
          iconColor="text-mint"
        />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <ActiveSession />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>
    </>
  );
}

export default DashboardHome;
