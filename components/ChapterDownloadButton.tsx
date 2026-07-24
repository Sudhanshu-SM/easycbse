export default function ChapterDownloadButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex h-10 md:h-11 max-w-[160px] md:max-w-[180px] items-center justify-center gap-2 rounded-xl border border-[#2A0F14]/10 bg-transparent px-4 font-body text-[14px] font-medium tracking-normal leading-none text-[#2A0F14] transition-all duration-200 ease-out hover:border-[#2A0F14]/20 hover:bg-gradient-to-b hover:from-[#2A0F14]/[0.02] hover:via-[#2A0F14]/[0.05] hover:to-[#2A0F14]/[0.08] hover:shadow-[0_4px_0_rgba(42,15,20,0.12)] hover:-translate-y-1 active:translate-y-0.5 active:shadow-none"
    >
      <svg viewBox="0 0 256 256" height={16} width={18} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="shrink-0 group-hover:translate-y-[1px] transition-transform duration-200">
        <path d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12" />
      </svg>
      <span>Download PDF</span>
    </a>
  );
}
