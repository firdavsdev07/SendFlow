function StatsCard({ title, value, trend, icon: Icon, iconBg, iconColor }) {
  return (
    <div className="glass-effect premium-shadow rounded-3xl p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-text-muted text-sm font-bold">{title}</span>
        <div className={`${iconBg} p-2 rounded-lg`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
      </div>
      <h2 className="text-4xl font-bold">{value}</h2>
      <p className="text-xs text-mint font-semibold mt-1">{trend}</p>
    </div>
  );
}

export default StatsCard;
