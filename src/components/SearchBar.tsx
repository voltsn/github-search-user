export default function SearchBar() {
  return (
    <form className="bg-white flex w-full items-center gap-2">
      <img src="/icons/icon-search.svg" alt="search icon" className="h-5 w-5" />
      <input
        type="search"
        name="search"
        placeholder="Search github username..."
        className="flex-1 bg-transparent text-xs outline-0"
      />
      <button
        className="rounded-[10px] bg-theme-button-base px-4 py-3 text-sm text-white"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
