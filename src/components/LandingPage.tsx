import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  FileText, 
  History, 
  Lock,
  ArrowRight,
  Mail,
  Info
} from 'lucide-react';

import { FeatureId } from './FeatureDetailPage';

interface LandingPageProps {
  onLogin: () => void;
  onNavigate: (page: 'ABOUT' | 'CONTACT') => void;
  onFeatureClick: (id: FeatureId) => void;
  isDarkMode: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onNavigate, onFeatureClick, isDarkMode }) => {
  const features = [
    {
      id: 'ai-attribution' as FeatureId,
      icon: <Zap className="text-amber-500" />,
      title: "AI Attribution",
      desc: "Understand exactly which financial actions moved your score."
    },
    {
      id: 'loan-eligibility' as FeatureId,
      icon: <ShieldCheck className="text-emerald-500" />,
      title: "Loan Eligibility",
      desc: "Instant underwriting decisions based on credit growth patterns."
    },
    {
      id: 'detailed-analytics' as FeatureId,
      icon: <BarChart3 className="text-blue-500" />,
      title: "Detailed Analytics",
      desc: "Granular breakdown of utilization, credit mix, and payment history."
    },
    {
      id: 'pdf-reports' as FeatureId,
      icon: <FileText className="text-purple-500" />,
      title: "PDF Reports",
      desc: "Professional credit analysis reports ready for export."
    },
    {
      id: 'historical-mapping' as FeatureId,
      icon: <History className="text-rose-500" />,
      title: "Historical Mapping",
      desc: "Track your credit journey from starting score to current peak."
    },
    {
      id: 'security' as FeatureId,
      icon: <Lock className="text-indigo-500" />,
      title: "Bank-Grade Security",
      desc: "Your data is processed locally with zero-knowledge architecture."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            CIBIL Score <span className="text-teal-400">Analyzer</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto opacity-90 font-medium">
            The world's most advanced CIBIL attribution engine. Analyze past growth and unlock your lending potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onLogin}
              className="px-8 py-4 bg-white text-blue-900 rounded-2xl font-bold text-lg shadow-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group"
            >
              Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('ABOUT')}
              className="px-8 py-4 bg-blue-700/50 text-white border border-blue-400/30 rounded-2xl font-bold text-lg backdrop-blur-md hover:bg-blue-700/70 transition-all"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className={`py-24 px-4 ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Key Platform Features</h2>
            <div className="w-20 h-1.5 bg-teal-500 mx-auto rounded-full"></div>
            <p className={`mt-4 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Click on any feature to learn more about how it helps you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => onFeatureClick(f.id)}
                className={`p-8 rounded-3xl border transition-all hover:shadow-xl cursor-pointer group ${
                  isDarkMode 
                    ? 'bg-slate-900 border-slate-800 hover:border-blue-500/50' 
                    : 'bg-white border-slate-100 hover:border-blue-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                  isDarkMode ? 'bg-slate-800 group-hover:bg-slate-700' : 'bg-slate-50 group-hover:bg-blue-50'
                }`}>
                  {f.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 flex items-center justify-between ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {f.title}
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                </h3>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className={`py-12 border-t ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-100'}`}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-teal-500" size={24} />
            <span className={`font-bold text-xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>CIBIL Analyzer</span>
          </div>
          <div className="flex gap-8">
            <button onClick={() => onNavigate('ABOUT')} className="text-sm font-medium hover:text-teal-500 transition-colors">About</button>
            <button onClick={() => onNavigate('CONTACT')} className="text-sm font-medium hover:text-teal-500 transition-colors">Contact</button>
            <button onClick={onLogin} className="text-sm font-medium hover:text-teal-500 transition-colors">Login</button>
          </div>
          <p className="text-xs text-slate-500">© 2026 CIBIL Analyzer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
