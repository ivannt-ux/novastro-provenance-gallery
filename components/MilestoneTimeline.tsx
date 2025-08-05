export default function MilestoneTimeline({ milestones }: { milestones: string[] }) {
  if (!milestones?.length) return <p className="text-sm text-gray-500">No milestones yet.</p>;

  return (
    <div className="mt-4 space-y-2 border-l-2 pl-4 border-blue-600">
      {milestones.map((milestone, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-3 top-1.5 w-2 h-2 bg-blue-600 rounded-full"></div>
          <p className="text-sm">{milestone}</p>
        </div>
      ))}
    </div>
  );
}
