
import React from 'react';
import { Heart, Target, ShieldCheck, Zap, BookOpen, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Our Mission
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-950 brand-font mb-6 leading-tight">
            Empowering the Next Generation of <br />
            <span className="text-indigo-600">Curious Learners</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            KiddoStudy was founded on a simple belief: that high-quality, safe, and engaging early education should be accessible to every child, everywhere.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-100 rounded-3xl -rotate-2"></div>
              <div className="relative bg-white p-8 rounded-3xl border border-indigo-50 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 brand-font mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    KiddoStudy began as a small project by a group of educators and parents who were frustrated by the lack of structured, clean, and distraction-free learning materials online for children aged 3–10.
                  </p>
                  <p>
                    We saw a world where educational tools were either behind expensive paywalls or cluttered with intrusive elements. We decided to build a "Third Space"—a digital playground where learning is the only priority.
                  </p>
                  <p>
                    Today, KiddoStudy serves thousands of families and classrooms, providing a bridge between traditional phonics and modern interactive technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 flex-shrink-0">
                <Heart size={24} fill="currentColor" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 brand-font mb-2">Built with Love</h3>
                <p className="text-gray-500">Every lesson is crafted with the same care we give our own children's education.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 flex-shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 brand-font mb-2">Purpose Driven</h3>
                <p className="text-gray-500">Our goal is to foster "Number Sense" and "Phonic Mastery" through play.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 brand-font mb-2">Safety Guaranteed</h3>
                <p className="text-gray-500">A controlled environment that adheres to strict digital safety guidelines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Pillars */}
      <section className="bg-indigo-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white brand-font mb-4">Our Core Pillars</h2>
            <p className="text-indigo-200">The values that guide every decision we make at KiddoStudy.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Zap, 
                title: 'Interactivity', 
                desc: 'We believe active participation leads to deeper understanding.',
                color: 'text-yellow-400'
              },
              { 
                icon: ShieldCheck, 
                title: 'Zero Clutter', 
                desc: 'A minimalist interface designed for young attention spans.',
                color: 'text-green-400'
              },
              { 
                icon: BookOpen, 
                title: 'Evidence Based', 
                desc: 'Curriculum inspired by proven early literacy frameworks.',
                color: 'text-blue-400'
              },
              { 
                icon: Users, 
                title: 'Community', 
                desc: 'Supporting the ecosystem of parents, teachers, and learners.',
                color: 'text-purple-400'
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-indigo-800/50 border border-indigo-700 p-8 rounded-3xl hover:bg-indigo-800 transition-colors">
                <pillar.icon className={`${pillar.color} mb-6`} size={32} />
                <h4 className="text-xl font-bold text-white mb-3 brand-font">{pillar.title}</h4>
                <p className="text-indigo-200 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Compliance Footer (Hidden or subtle) */}
      <section className="py-12 text-center text-gray-400 text-[10px] uppercase tracking-widest font-medium">
        Educational Content Policy: This page contains no advertising.
      </section>
    </div>
  );
};

export default About;
