"use client";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-12">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 rounded-full flex items-center justify-center border transition-colors disabled:opacity-30"
        style={{ borderColor: "#E2EBFE", color: "#3C7CF7" }}
      >
        ‹
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors"
          style={{
            background: currentPage === page ? "#E2EBFE" : "transparent",
            color: currentPage === page ? "#3C7CF7" : "#999898",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 rounded-full flex items-center justify-center border transition-colors disabled:opacity-30"
        style={{ borderColor: "#E2EBFE", color: "#3C7CF7" }}
      >
        ›
      </button>
    </div>
  );
}