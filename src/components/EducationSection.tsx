// components/sections/EducationSection.tsx
import React from 'react';
interface Education {
  degree: string;
  institution: string;
  period: string;
  percentage: string;
}

const educationHistory: Education[] = [
  {
    degree: 'B.E. Electrical and Electronics Engineering',
    institution: 'K.L.N College of Engineering',
    period: '2017 - 2021',
    percentage: '82.7%'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'S.D.A Matriculation Higher Secondary School',
    period: '2017',
    percentage: '91.4%'
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'S.D.A Matriculation Higher Secondary School',
    period: '2015',
    percentage: '79.4%'
  }
];

const EducationSection: React.FC = () => {
  return (
<div className="bg-gradient-to-r from-purple-50 via-violet-50 to-pink-50 dark:bg-gradient-to-r dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 p-8 rounded-2xl shadow-lg relative overflow-hidden">
  {/* Optional subtle pattern overlay */}
  <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNBMDA3QUYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNBMDA3QUYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')]"></div>
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="space-y-8">
        {educationHistory.map((education, index) => (
          <div key={index} className="relative pl-8 border-l-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-r-xl shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 dark:border-gray-700">
            <div className="absolute w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full -left-[9px] top-1"></div>
            <div className="mb-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-xl font-semibold">{education.degree}</h3>
                <div className="text-indigo-600 dark:text-indigo-400 font-medium">{education.period}</div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{education.institution}</p>
              <p className="mt-2"><strong>Percentage:</strong> {education.percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;