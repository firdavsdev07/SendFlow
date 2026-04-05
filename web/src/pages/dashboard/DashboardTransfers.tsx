import RecentTransfers from "../../components/dashboard/RecentTransfers";

function DashboardTransfers() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-2">Transfers</h1>
        <p className="text-text-muted text-lg">
          View and manage all your file transfers
        </p>
      </div>

      <RecentTransfers />
    </>
  );
}

export default DashboardTransfers;
