export default function Header() {
  return (
    <header className="mb-[36px] flex w-[100%] items-center justify-between">
      <div className="text-2xl font-bold lowercase">Devfinder</div>
      <div className="flex items-center gap-4">
        <p className="text-xs tracking-[.21em] text-theme-muted">DARK</p>
        <img src="/icons/icon-moon.svg" alt="half moon icon" />
      </div>
    </header>
  );
}
