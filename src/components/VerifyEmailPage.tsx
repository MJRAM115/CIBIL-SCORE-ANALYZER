import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, RefreshCw, LogOut, CheckCircle2 } from 'lucide-react';
import { getFirebaseAuth } from '../firebase';
import { sendEmailVerification } from 'firebase/auth';

interface VerifyEmailPageProps {
  userEmail: string;
  isDarkMode: boolean;
  onLogout: () => void;
  onVerified: () => void;
}

const VerifyEmailPage: React.FC<VerifyEmailPageProps> = ({ userEmail, isDarkMode, onLogout, onVerified }) => {
  const [isResending, setIsResending] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const handleResend = async () => {
    setIsResending(true);
    setError('');
    setMessage('');
    try {
      const auth = getFirebaseAuth();
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
        setMessage('Verification email sent! Please check your inbox.');
      }
    } catch (err: any) {
      if (err.code === 'auth/too-many-requests') {
        setError('Too many requests. Please wait a minute before resending.');
      } else {
        setError(err.message || 'Failed to resend email.');
      }
    } finally {
      setIsResending(false);
    }
  };

  const handleCheckVerified = async () => {
    setIsChecking(true);
    setError('');
    try {
      const auth = getFirebaseAuth();
      if (auth.currentUser) {
        await auth.currentUser.reload();
        if (auth.currentUser.emailVerified) {
          onVerified();
        } else {
          setError('Email is not verified yet. Please check your inbox and click the verification link.');
        }
      }
    } catch (err: any) {
      setError('Failed to check verification status.');
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className={`p-10 rounded-3xl border shadow-2xl text-center ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail size={40} />
          </div>
          
          <h1 className={`text-2xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Verify your email</h1>
          <p className={`text-sm mb-8 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            We've sent a verification link to <br/>
            <span className="font-bold text-blue-600">{userEmail}</span>
          </p>

          {error && (
            <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-600 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          {message && (
            <div className="mb-6 p-4 bg-teal-50 border border-teal-200 text-teal-700 rounded-xl text-sm font-medium flex items-center justify-center gap-2">
              <CheckCircle2 size={18} />
              {message}
            </div>
          )}

          <div className="space-y-4">
            <button 
              onClick={handleCheckVerified}
              disabled={isChecking}
              className="w-full py-4 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isChecking ? <RefreshCw className="animate-spin" size={20} /> : <CheckCircle2 size={20} />}
              I've verified my email
            </button>

            <button 
              onClick={handleResend}
              disabled={isResending}
              className={`w-full py-4 rounded-xl font-bold border transition-all flex items-center justify-center gap-2 disabled:opacity-70 ${
                isDarkMode 
                  ? 'border-slate-700 text-slate-300 hover:bg-slate-800' 
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <RefreshCw size={18} className={isResending ? "animate-spin" : ""} />
              Resend verification email
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
            <button 
              onClick={onLogout}
              className="text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 flex items-center justify-center gap-2 mx-auto transition-colors"
            >
              <LogOut size={16} />
              Sign in with a different account
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyEmailPage;
