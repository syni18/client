import { debounce } from "lodash";
import { useEffect, useMemo } from "react";

const SearchButton = ({ searchInput, setSearchInput, handleSearch }) => {
  const debouncedHandleSearch = useMemo(
    () => debounce(handleSearch, 300),
    [handleSearch]
  );

  useEffect(() => {
    return () => debouncedHandleSearch.cancel(); // Cleanup debounce on unmount
  }, [debouncedHandleSearch]);
  return (
    <div
      className="[--background:#ffffff] 
        [--color:#000000] 
        [--muted:#ffffff] 
        [--muted-foreground:#9c9c9c] 
        [--border:#2e2e2e] 
        relative inline-flex items-center whitespace-nowrap 
        transition-colors focus-visible:outline-none 
        focus-visible:ring-1 focus-visible:ring-ring 
        disabled:pointer-events-none disabled:opacity-50 
        border border-[--border] bg-[--background] 
        text-[--color] px-4 py-2 justify-start 
        rounded-[0.5rem] text-sm font-normal shadow-none 
        h-8 w-60 sm:w-40"
      type="button"
    >
      <input
        type="search"
        placeholder={searchInput ? "Search products..." : "Search..."}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && searchInput.trim() !== "") {
            debouncedHandleSearch();
          }
        }}
        className={`outline-none inline-flex bg-transparent text-[16px]`}
      />
      <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] flex h-5 select-none items-center gap-1 rounded px-1.5 font-mono text-[10px] font-medium opacity-100 [&_span]:text-xs sm:flex">
        <span>⌘</span>K
      </kbd>
    </div>
  );
};

export default SearchButton;
