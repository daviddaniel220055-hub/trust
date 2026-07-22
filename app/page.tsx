import React from 'react';
import { 
  User, 
  Phone, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  UserPlus,
  ShieldCheck
} from 'lucide-react';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center items-center py-12 font-sans">
      <div className="w-full max-w-[500px] bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] px-8 py-10">
        
        <div className="flex flex-col items-center text-center mb-8">
          <img 
            src="/images/logot.webp"
            alt="TrustPadi Logo" 
            className="w-30 h-30 mb-3 object-contain"
          />
          <h1 className="text-2xl font-bold text-[#0f172a]">Create an account</h1>
          <p className="text-gray-500 text-sm mt-1">Join TrustPadi to help protect yourself and others</p>
        </div>

        <form className="space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800 mb-1">First Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <User size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="John" 
                  className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800 mb-1">Last Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <User size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="Doe" 
                  className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800 mb-1">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <User size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="johndoe123" 
                  className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800 mb-1">Phone Number (11 digits)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Phone size={20} />
                </div>
                <input 
                  type="tel" 
                  placeholder="08012345678" 
                  className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-800 mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Mail size={20} />
              </div>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col relative">
              <label className="text-sm font-medium text-gray-800 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-400"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400">
                  <Eye size={20} />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1.5">Must be at least 8 characters</p>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800 mb-1">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 mt-4 pt-1">
            <input 
              type="radio" 
              id="terms" 
              name="terms" 
              className="w-[18px] h-[18px] text-[#1a5ae9] border-gray-300 focus:ring-[#1a5ae9] cursor-pointer"
            />
            <label htmlFor="terms" className="text-sm text-gray-800 cursor-pointer select-none">
              I agree to the <a href="#" className="text-[#1a5ae9] hover:underline">Terms of Service</a> and <a href="#" className="text-[#1a5ae9] hover:underline">Privacy Policy</a>
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#1a5ae9] hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-200 mt-2 flex items-center justify-center gap-2"
          >
            <UserPlus size={20} />
            Create account
          </button>

        </form>

        <div className="text-center text-sm text-gray-800 mt-6">
          Already have an account? <a href="/login" className="text-[#1a5ae9] hover:underline">Log In</a>
        </div>

      </div>
    </div>
  );
};

export default SignUp;