interface SkillBarProps {
  skill: string;
  level: number;
}

export default function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{skill}</span>
        <span className="text-gray-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
}