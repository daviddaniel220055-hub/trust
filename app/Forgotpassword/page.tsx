import { Mail, Shield } from "lucide-react";

export default function ResetPassword() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xl">
       
        <div className="flex justify-center mb-5">
          <div className="text-blue-500">
            <Shield size={40} strokeWidth={1.8} />
            
          </div>
        </div>

       
        <h1 className="text-3xl font-bold text-black text-center">
          Reset your Password
        </h1>

        <p className="text-gray-400 text-center mt-3 mb-8">
          Enter your email to receive a reset link
        </p>

       
        <form className="space-y-5">
          <div>
            <p className="block text-white font-medium mb-2">
              Email
            </p>

            <div className="flex items-center bg-gray-100 border-none  rounded-lg px-4 h-12">
              <Mail className="text-gray-500 mr-3" size={18} />

              <input
                type="email"
                placeholder="you@example.com"
                className="bg-transparent w-full outline-none text-white placeholder:text-gray-600"
              />
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Remember password?{" "}
            <a
              href="/login"
              className="text-blue-500 font-medium hover:underline"
            >
              Login
            </a>
          </p>

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold cursor-pointer"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}