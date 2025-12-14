'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const educationData = [
  {
    id: 1,
    degree: 'Research Assistant in Astronomy',
    institution: 'Westlake University',
    location: 'Hangzhou, China',
    period: 'Jun 2025 - Present',
    description: 'Specializing in theoretical and simulation astronomy with focus on dynamics of planetary systems. Conducting research on evolution of protoplanetary disks and AGN accretion disks.',
    achievements: [
      ],
    publications: [
      '[Publication] Zhuoya Cao, Yaping Li*, Douglas N.C. Lin, Shude Mao, Planet Migration in Protoplanetary Disks with Rims, under review by the Astrophysical Journal',
      '[Publication] Xiaochen Zheng, Zhuoya Cao*, Shigeru Ida, Douglas N.C. Lin, Shude Mao, A Robust Launching Mechanism for Freely-Floating Planets from Host Stars with Close-in Planets, under review by the Astrophysical Journal',
      ],
    posters: [
      '[Poster] Zhuoya Cao, Yaping Li, Douglas N.C. Lin, Shude Mao, Planet Migration in Protoplanetary Disks with Rims. The International Conference on Exoplanets and Planet Formation, Dec 2025, Shanghai, China',
      '[Poster] Zhuoya Cao, Yaping Li, Douglas N.C. Lin, Shude Mao, Convergent and Divergent Planet Migration Driven by a Dead Zone in Protoplanetary Disks. The 247th AAS Annual Meeting, Jan 2026, Phoenix, United States'
    ]
  },
  {
    id: 2,
    degree: 'B.Sc. in Mechanics and Astronomy',
    institution: 'Tsinghua University',
    location: 'Beijing, China',
    period: 'Aug 2021 - Jun 2025',
    description: 'Comprehensive foundation in astronomy and dynamics, incl. fluid mechanics and N-body dynamics.',
    achievements: [
      'Full GPA for astronomy courses (4.0/4.0)',
      'Scholarship for Comprehensive Excellence of Tsinghua University',
      'Tsinghua Xuetang Scholarship (for Tsien Excellence Program)',
      'Minister of Sports, Student Union of Xingjian College',
      'Undergraduate research project on planetary dynamics and super resolution',
      ],
    publications: [
      'Zhuoya Cao*, Abraham Loeb, Morgan MacLeod, On the coincidence between the close passage of HD7977 and the Pliocene-Pleistocene transition, accepted by Scientific Reports, doi: 10.48550/arXiv.2511.11814',
      'Zhuoya Cao, Fujiang Yu, Mingyu Li, Zheng Cai*, HST to JWST Super-Resolution Imaging by ControlNet, in preparation'
    ],
    posters: [
      'Zhuoya Cao, Abraham Loeb, Morgan MacLeod, A Comet Shower at the Pliocene-Pleistocene Transition Triggered by the Close Approach of HD7977. The Annual Meeting of the Earth 2.0 Space Mission, Aug 2025, Shanghai, China'
    ]
  },
  {
    id: 3,
    degree: 'Exchange Undergraduate in Astronomy',
    institution: 'Kyoto University',
    location: 'Kyoto, Japan',
    period: 'Sep 2023 - Feb 2024',
    description: 'Complement fundation in astronomy from cosmology, stellar physics to planetary physics',
    achievements: [
      'Undergraduate research intern on astronomical image reduction from Seimei telescope'
    ],
    publications: [
    ],
    posters: [
    ]
  }
];

export default function EducationTimeline() {
  return (
    <div className="max-w-4xl mx-auto">
      {educationData.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 last:mb-0"
        >
          <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{item.institution}, {item.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{item.period}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{item.description}</p>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                    Achievements
                  </h4>
                  <ul className="space-y-1 list-disc list-inside ml-1 text-muted-foreground">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                    Publications
                  </h4>
                  <ul className="space-y-1 list-disc list-inside ml-1 text-muted-foreground">
                    {item.publications.map((publication, i) => (
                      <li key={i}>{publication}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                    Posters
                  </h4>
                  <ul className="space-y-1 list-disc list-inside ml-1 text-muted-foreground">
                    {item.posters.map((poster, i) => (
                      <li key={i}>{poster}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}