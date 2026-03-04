import SkillBar from '@/components/SkillBar';

export default function AboutPage() {
  const skills = [
    { skill: 'JavaScript', level: 90 },
    { skill: 'TypeScript', level: 80 },
    { skill: 'React', level: 85 },
    { skill: 'Next.js', level: 75 },
  ];
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-gray-700 mb-6">I am a passionate developer with experience in building modern web applications. My expertise includes full-stack development with a focus on performance and user experience.</p>
      <h2 className="text-2xl font-bold mt-6 mb-2">Skills</h2>
      <div className="space-y-2">
        {skills.map((s) => (
          <SkillBar key={s.skill} skill={s.skill} level={s.level} />
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-6 mb-2">Experience Timeline</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Senior Developer at Tech Corp (2022-Present)</li>
        <li>Frontend Engineer at Startup Inc (2020-2022)</li>
        <li>Freelance Web Developer (2018-2020)</li>
      </ul>
    </div>
  );
}