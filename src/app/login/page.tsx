export default function LoginPage() {
    return (
       <div className="min-h-screen flex items-center justify-center bg-[#E2C99E]"> 
  <div className="bg-[#FFF]/80 rounded-2xl shadow-xl p-8 w-full max-w-md border-2 border-[#414B9E]">
    <h1 className="text-3xl font-bold text-center text-[#414B9E] mb-6">Login</h1>
    <form>
      <div className="mb-4">
        <label className="block text-sm text-[#AA74A0] mb-2" htmlFor="email">Email</label> 
        <input
          className="w-full px-4 py-2 rounded-lg bg-[#9792CB] border border-[#414B9E] text-[#414B9E] placeholder-[#AA74A0] focus:outline-none focus:ring-2 focus:ring-[#414B9E] transition"
          type="email"
          id="email"
          required />
      </div>
      <div className="mb-6">
        <label className="block text-sm text-[#AA74A0] mb-2" htmlFor="password">Password</label>
        <input
          className="w-full px-4 py-2 rounded-lg bg-[#9792CB] border border-[#414B9E] text-[#414B9E] placeholder-[#AA74A0] focus:outline-none focus:ring-2 focus:ring-[#414B9E] transition"
          type="password"
          id="password"
          required />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-[#852736] hover:bg-[#AA74A0] text-white font-semibold rounded-lg transition"> 
        Sign In
      </button>
    </form>
    <p className="mt-6 text-center text-sm text-[#852736]">
      Forgot your password?
      <a href="#" className="underline text-[#414B9E] hover:text-[#9792CB]">Click here</a>
    </p>
  </div>
</div>

    )
}