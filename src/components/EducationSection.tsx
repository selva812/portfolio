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
    <div >
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="space-y-8">
        {educationHistory.map((education, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-indigo-600 dark:border-indigo-400">
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