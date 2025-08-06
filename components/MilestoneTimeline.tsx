// @/components/MilestoneTimeline.tsx

'use client';

import { Milestone } from '@/lib/data';

type Props = {
  milestones: Milestone[];
};

export default function MilestoneTimeline({ milestones }: Props) {
  return (
    <div className="p-4 space-y-4">
      {milestones.map((milestone, index) => (
        <div key={milestone.id} className="border-l-2 border-gray-300 pl-4 relative">
          <div className="absolute -left-2 top-1 w-4 h-4 bg-blue-500 rounded-full"></div>
          <h4 className="text-lg font-semibold">{milestone.title}</h4>
          <p className="text-sm text-gray-500">{milestone.date}</p>
          <p className="text-sm">{milestone.description}</p>
        </div>
      ))}
    </div>
  );
}
