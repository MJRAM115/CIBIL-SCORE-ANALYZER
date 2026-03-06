import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Info, Target, Users, Award } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
  isDarkMode: boolean;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack, isDarkMode }) => {
  return (
    <div className={`min-h-screen p-4 md:p-12 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 mb-12 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-5xl font-black mb-6">Our Mission</h1>
            <p className="text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">
              We believe credit transparency is a fundamental right. Our platform was built to demystify the complex algorithms that govern financial freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-3xl border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
              <Target className="text-teal-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Precision Analytics</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Using advanced heuristic modeling, we provide point-by-point attribution for every financial action you take.
              </p>
            </div>
            <div className={`p-8 rounded-3xl border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
              <Users className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">User Centric</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Designed for the modern borrower, our interface simplifies complex data into actionable insights.
              </p>
            </div>
          </div>

          <div className={`p-10 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white`}>
            <Award className="mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-4">The Standard in Credit Attribution</h2>
            <p className="text-lg opacity-90 leading-relaxed mb-8">
              Since 2024, we've helped over 500,000 users understand their credit journey. Our engine is trusted by leading fintech innovators for its accuracy and explainability.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                <p className="text-2xl font-bold">96%</p>
                <p className="text-xs opacity-70 uppercase tracking-widest">Accuracy</p>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                <p className="text-2xl font-bold">500K+</p>
                <p className="text-xs opacity-70 uppercase tracking-widest">Users</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
