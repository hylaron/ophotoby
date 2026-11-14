export default function Footer() {
  return (
    <footer className="relative w-full bg-transparent pb-8 pt-2">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
        
        {/* Оранжевая стеклянная плашка */}
        <div className="flex flex-wrap text-[13px] sm:text-[14px] items-center justify-between rounded-[1.5rem] border border-[#FF5C1A]/20 bg-white/30 backdrop-blur-xl p-5 sm:p-6 text-black/70 shadow-[0_8px_32px_rgba(255,92,26,0.20)] ">
          <span>© {new Date().getFullYear()} OPHOTO.BY</span>
          
          
          <span>МИНСК · БЕЛАРУСЬ</span>
        </div>
        
      </div>
    </footer>
  );
}