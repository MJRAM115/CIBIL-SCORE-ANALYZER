import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  FileText, 
  History, 
  Lock,
  CheckCircle2,
  Info,
  TrendingUp,
  Target,
  ShieldAlert
} from 'lucide-react';

export type FeatureId = 'ai-attribution' | 'loan-eligibility' | 'detailed-analytics' | 'pdf-reports' | 'historical-mapping' | 'security';

interface FeatureDetailPageProps {
  featureId: FeatureId;
  onBack: () => void;
  isDarkMode: boolean;
}

const FeatureDetailPage: React.FC<FeatureDetailPageProps> = ({ featureId, onBack, isDarkMode }) => {
  const featureData = {
    'ai-attribution': {
      title: "AI Attribution Engine",
      icon: <Zap className="text-amber-500" size={48} />,
      color: "amber",
      desc: "Our proprietary AI engine dissects your CIBIL score growth to reveal exactly which financial behaviors contributed to your success.",
      details: [
        "Real-time factor analysis",
        "Weightage calculation for each action",
        "Behavioral pattern recognition",
        "Predictive growth modeling"
      ],
      longDesc: "Traditional credit reports tell you *what* your score is, but they rarely explain *why* it changed. Our AI Attribution engine bridges this gap by analyzing thousands of data points to attribute specific point increases to actions like reducing credit utilization, clearing overdue payments, or maintaining a perfect payment streak.",
      diagram: (
        <div className="relative h-64 w-full bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent"></div>
          <div className="flex gap-4 items-end h-32">
            <div className="w-12 bg-amber-200 rounded-t-lg h-1/2 flex items-center justify-center text-[10px] font-bold text-amber-800">Util</div>
            <div className="w-12 bg-amber-400 rounded-t-lg h-3/4 flex items-center justify-center text-[10px] font-bold text-amber-900">Pay</div>
            <div className="w-12 bg-amber-600 rounded-t-lg h-full flex items-center justify-center text-[10px] font-bold text-white">Mix</div>
            <div className="w-12 bg-amber-300 rounded-t-lg h-1/3 flex items-center justify-center text-[10px] font-bold text-amber-800">Age</div>
          </div>
          <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-sm border border-slate-200 flex items-center gap-2">
            <TrendingUp size={16} className="text-amber-500" />
            <span className="text-xs font-bold text-slate-700">+45 Points</span>
          </div>
        </div>
      )
    },
    'loan-eligibility': {
      title: "Instant Loan Eligibility",
      icon: <ShieldCheck className="text-emerald-500" size={48} />,
      color: "emerald",
      desc: "Get an immediate underwriting decision based on your credit growth trajectory and risk profile.",
      details: [
        "Automated underwriting logic",
        "Risk level assessment (Low/Med/High)",
        "Rationale for every decision",
        "Audit trail for rapid growth flags"
      ],
      longDesc: "Lenders look for stability and growth. Our Loan Eligibility feature simulates a bank's underwriting process to give you a 'Granted' or 'Rejected' status instantly. We don't just look at the score; we look at the *quality* of the growth, ensuring that your score improvement is genuine and sustainable.",
      diagram: (
        <div className="relative h-64 w-full bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent"></div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-48 h-12 bg-white rounded-full border-2 border-emerald-500 flex items-center justify-center gap-2 shadow-lg">
              <CheckCircle2 className="text-emerald-500" size={20} />
              <span className="font-bold text-emerald-900">APPLICATION GRANTED</span>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold">LOW RISK</div>
              <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold">STABLE GROWTH</div>
            </div>
          </div>
        </div>
      )
    },
    'detailed-analytics': {
      title: "Granular Analytics",
      icon: <BarChart3 className="text-blue-500" size={48} />,
      color: "blue",
      desc: "Deep dive into your credit metrics with interactive charts and factor contribution breakdowns.",
      details: [
        "Interactive gauge visualizations",
        "Factor contribution bar charts",
        "Confidence score metrics",
        "Detailed factor interpretations"
      ],
      longDesc: "Data is only useful if it's understandable. Our Detailed Analytics suite transforms complex credit data into intuitive visualizations. See exactly how much each factor (like credit age or inquiries) is helping or hurting your score, allowing you to focus your efforts where they matter most.",
      diagram: (
        <div className="relative h-64 w-full bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200 p-8">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
          <div className="w-full h-full flex flex-col gap-4">
            <div className="h-4 bg-blue-200 rounded-full w-full relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-blue-600 w-3/4"></div>
            </div>
            <div className="h-4 bg-blue-200 rounded-full w-full relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-blue-600 w-1/2"></div>
            </div>
            <div className="h-4 bg-blue-200 rounded-full w-full relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-blue-600 w-5/6"></div>
            </div>
          </div>
        </div>
      )
    },
    'pdf-reports': {
      title: "Professional PDF Reports",
      icon: <FileText className="text-purple-500" size={48} />,
      color: "purple",
      desc: "Generate and download comprehensive credit analysis reports in a professional PDF format.",
      details: [
        "One-click PDF generation",
        "High-resolution report exports",
        "Formal decision letters",
        "Easy sharing with lenders"
      ],
      longDesc: "Need to show your credit progress to a landlord or a lender? Our PDF Reports feature generates a clean, professional document containing all your analysis results, charts, and loan eligibility status. It's designed to be clear, understandable, and ready for official use.",
      diagram: (
        <div className="relative h-64 w-full bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500 via-transparent to-transparent"></div>
          <div className="w-32 h-40 bg-white rounded-lg shadow-xl border border-slate-200 p-4 flex flex-col gap-2">
            <div className="h-2 bg-purple-100 rounded w-3/4"></div>
            <div className="h-2 bg-slate-100 rounded w-full"></div>
            <div className="h-2 bg-slate-100 rounded w-full"></div>
            <div className="mt-auto h-6 bg-purple-600 rounded w-full"></div>
          </div>
        </div>
      )
    },
    'historical-mapping': {
      title: "Historical Score Mapping",
      icon: <History className="text-rose-500" size={48} />,
      color: "rose",
      desc: "Track your credit journey over time and visualize the path from your starting score to your current peak.",
      details: [
        "Timeline visualizations",
        "Milestone tracking",
        "Historical trend analysis",
        "Comparison with peer benchmarks"
      ],
      longDesc: "Credit health is a marathon, not a sprint. Historical Mapping allows you to visualize your entire credit journey. By mapping your starting score against your current position, you can see the long-term impact of your financial decisions and stay motivated to reach your next milestone.",
      diagram: (
        <div className="relative h-64 w-full bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-500 via-transparent to-transparent"></div>
          <svg className="w-full h-32 px-10" viewBox="0 0 100 20">
            <path d="M0 15 Q 25 15, 50 10 T 100 2" fill="none" stroke="#f43f5e" strokeWidth="1" />
            <circle cx="0" cy="15" r="1" fill="#f43f5e" />
            <circle cx="50" cy="10" r="1" fill="#f43f5e" />
            <circle cx="100" cy="2" r="1" fill="#f43f5e" />
          </svg>
        </div>
      )
    },
    'security': {
      title: "Bank-Grade Security",
      icon: <Lock className="text-indigo-500" size={48} />,
      color: "indigo",
      desc: "Your sensitive financial data is protected by industry-leading encryption and local-first processing.",
      details: [
        "Zero-knowledge architecture",
        "Local data processing",
        "End-to-end encryption",
        "No data persistence on servers"
      ],
      longDesc: "We take your privacy seriously. Our 'Zero-Knowledge' architecture means your sensitive financial data is processed right in your browser. We don't store your credit details on our servers, ensuring that you remain the sole owner of your information while benefiting from our advanced analysis.",
      diagram: (
        <div className="relative h-64 w-full bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent"></div>
          <div className="relative">
            <Lock size={64} className="text-indigo-600" />
            <div className="absolute inset-0 animate-ping bg-indigo-400 rounded-full opacity-20"></div>
          </div>
        </div>
      )
    }
  };

  const data = featureData[featureId];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className={`min-h-screen p-4 md:p-8 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}
    >
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <div className={`p-8 md:p-12 rounded-3xl border shadow-2xl ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className={`p-6 rounded-3xl ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
              {data.icon}
            </div>
            <div>
              <h1 className="text-4xl font-black mb-4 tracking-tight">{data.title}</h1>
              <p className={`text-xl font-medium leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {data.desc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Info size={20} className="text-blue-500" />
                  How it Works
                </h3>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {data.longDesc}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-teal-500" />
                  Key Capabilities
                </h3>
                <ul className="space-y-3">
                  {data.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                      <span className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Target size={20} className="text-rose-500" />
                Visual Overview
              </h3>
              {data.diagram}
              <div className={`p-4 rounded-xl border flex gap-3 ${isDarkMode ? 'bg-blue-950/20 border-blue-900/30 text-blue-200' : 'bg-blue-50 border-blue-100 text-blue-800'}`}>
                <ShieldAlert size={20} className="shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed opacity-90">
                  This feature is part of our core analysis engine and is available to all registered users.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center">
            <button 
              onClick={onBack}
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Explore Other Features
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureDetailPage;
