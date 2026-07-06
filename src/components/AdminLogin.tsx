import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Mail, ArrowRight } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'fazalsubhani089@gmail.com' && password === 'Fazal@4301') {
      localStorage.setItem('portfolio_admin', 'true');
      onLogin();
    } else {
      setError('Invalid credentials. Access Denied.');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-offwhite/[0.03] border border-offwhite/10 rounded-2xl p-8 backdrop-blur-xl">
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <Lock className="text-black" size={28} />
            </div>
            <h1 className="text-3xl font-black italic uppercase text-offwhite tracking-tighter">
              Admin <span className="text-transparent stroke-text">Access.</span>
            </h1>
            <p className="text-offwhite/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
              Portfolio Management Console
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-offwhite/60 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-offwhite/30 group-focus-within:text-brand transition-colors">
                  <Mail size={18} />
                </div>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-black/40 border border-offwhite/10 rounded-xl py-4 pl-12 pr-4 text-offwhite placeholder:text-offwhite/20 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all font-medium transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-offwhite/60 ml-1">Secure Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-offwhite/30 group-focus-within:text-brand transition-colors">
                  <Lock size={18} />
                </div>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black/40 border border-offwhite/10 rounded-xl py-4 pl-12 pr-4 text-offwhite placeholder:text-offwhite/20 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all font-medium transition-colors"
                  required
                />
              </div>
            </div>

            {error && (
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-red-500 text-[10px] font-black uppercase tracking-widest text-center"
              >
                {error}
              </motion.p>
            )}

            <button 
              type="submit"
              className="w-full bg-brand text-black font-black uppercase italic py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign In <ArrowRight size={20} />
            </button>
          </form>

          <button 
            onClick={() => window.location.href = '/'}
            className="w-full mt-6 text-offwhite/30 hover:text-offwhite text-[9px] font-black uppercase tracking-widest transition-colors"
          >
            ← Back to Public Site
          </button>
        </div>
      </motion.div>
    </div>
  );
}
