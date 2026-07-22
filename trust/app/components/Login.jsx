import React from 'react';

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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
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
                <a href="#" className="text-sm text-[#1a5ae9] hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M12 15.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                  </svg>
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-11 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center cursor-pointer text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#1a5ae9] cursor-pointer hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition duration-200 mt-1"
            >
              Sign in
            </button>

          </form>

          <div className="w-full h-px bg-gray-200 my-6"></div>

          <div className="flex flex-col items-center text-center text-sm text-gray-600 gap-1.5">
            <p>
              Don't have an account? <a href="#" className="text-[#1a5ae9] hover:underline font-medium">Create one</a>
            </p>
            <p>
              Need to verify your email? <a href="#" className="text-[#1a5ae9] hover:underline font-medium">Resend link</a>
            </p>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 flex items-center gap-1.5 text-[11px] text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0zm-6 3a3 3 0 100-6 3 3 0 000 6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 4.142-3.358 7.5-7.5 7.5s-7.5-3.358-7.5-7.5" />
        </svg>
        <span>Your data is encrypted and secure</span>
      </div>

    </div>
  );
};

export default Login;