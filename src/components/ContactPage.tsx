import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, MessageSquare, MapPin, Send } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
  isDarkMode: boolean;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack, isDarkMode }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className={`min-h-screen p-4 md:p-12 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 mb-12 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-black mb-6">Get in Touch</h1>
            <p className="text-xl opacity-70 mb-12 leading-relaxed">
              Have questions about your credit analysis? Our team of experts is here to help you navigate your financial future.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold opacity-50 uppercase tracking-widest">Email Us</p>
                  <p className="font-bold">support@cibilanalyzer.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold opacity-50 uppercase tracking-widest">Live Chat</p>
                  <p className="font-bold">Available 24/7 for Premium Users</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold opacity-50 uppercase tracking-widest">Office</p>
                  <p className="font-bold">Fintech Valley, Mumbai, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-10 rounded-3xl border shadow-2xl ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-70">First Name</label>
                  <input 
                    required
                    type="text" 
                    className={`w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-70">Last Name</label>
                  <input 
                    required
                    type="text" 
                    className={`w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold opacity-70">Email Address</label>
                <input 
                  required
                  type="email" 
                  className={`w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold opacity-70">Message</label>
                <textarea 
                  required
                  rows={4}
                  className={`w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 transition-all ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={submitted}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  submitted 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200'
                }`}
              >
                {submitted ? 'Message Sent!' : <><Send size={20} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
