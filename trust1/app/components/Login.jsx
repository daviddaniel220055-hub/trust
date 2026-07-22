import React from 'react';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  ShieldCheck,
  LogIn
} from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center items-center py-12 font-sans">
      <div className="w-full max-w-[440px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative overflow-hidden">
        
        <div className="h-1.5 w-full bg-[#1a5ae9] absolute top-0 left-0"></div>

        <div className="px-8 pt-10 pb-8 mt-1">
          
          <div className="flex flex-col items-center text-center mb-8">
            <img 
              src="/images/logot.webp"
              alt="TrustPadi Logo" 
              className="w-16 h-16 mb-3 object-contain"
            />
            <h1 className="text-2xl font-bold text-[#0f172a]">Welcome back</h1>
            <p className="text-gray-500 text-sm mt-1">Sign in to your TrustPadi account</p>
          </div>

          <form className="space-y-5">
            
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800 mb-1.5">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="w-full pl-11 pr-3 py-2.5 border-2 border-[#1a5ae9] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-sm font-medium text-gray-800">Password</label>
                <a href="Forgotpassword" className="text-sm text-[#1a5ae9] hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-11 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center cursor-pointer text-gray-400">
                  <Eye size={20} />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#1a5ae9] cursor-pointer hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition duration-200 mt-1 flex items-center justify-center gap-2"
            >
              <LogIn size={20} />
              Sign in
            </button>

          </form>

          <div className="w-full h-px bg-gray-200 my-6"></div>

          <div className="flex flex-col items-center text-center text-sm text-gray-600 gap-1.5">
            <p>
              Don't have an account? <a href="/" className="text-[#1a5ae9] hover:underline font-medium">Create one</a>
            </p>
            <p>
              Need to verify your email? <a href="#" className="text-[#1a5ae9] hover:underline font-medium">Resend link</a>
            </p>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 flex items-center gap-1.5 text-[11px] text-gray-500">
        <ShieldCheck size={12} />
        <span>Your data is encrypted and secure</span>
      </div>

    </div>
  );
};

export default Login;