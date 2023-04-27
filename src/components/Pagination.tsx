import React, { useState } from "react";

type PaginationProps = {
  onPageChanged: Function;
  totalRecords: number;
  pageSize: number;
  pageLimit: number;
};

export const Pagination = ({
  totalRecords,
  pageLimit,
  pageSize,
  onPageChanged,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalRecords / pageSize);

  var startPageIndex = Math.max(currentPage - pageLimit, 1);
  var endPageIndex = Math.min(currentPage + pageLimit, totalPages);


  const getRange = (from: number, to: number, step: number = 1) => {
    let i = from;
    const range = [];
    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  const pages = getRange(startPageIndex, endPageIndex);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onPageChanged(pageNumber);
  };

  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => handleClick(currentPage - 1)}
          >
            Prev
          </button>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
          >
            <button onClick={() => handleClick(page)} className="page-link">
              {page}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => handleClick(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
