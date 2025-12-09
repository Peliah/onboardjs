const StatCard = ({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string;
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}) => (
  <div
    className={`relative overflow-hidden rounded-2xl p-8 text-white ${color}`}
  >
    <div className="absolute -right-8 -top-8 opacity-10">
      <Icon width={24} height={24} />
    </div>
    <p className="text-sm font-medium opacity-90 mb-2">{label}</p>
    <p className="text-4xl font-black">{value}</p>
  </div>
);

export default StatCard;
