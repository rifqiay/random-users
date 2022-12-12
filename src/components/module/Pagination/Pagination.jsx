import React from "react";

const Pagination = ({
  postPerPage,
  totalPost,
  paginate,
  getPrevious,
  getNext,
  currentPage,
}) => {
  const pageNumber = [];
  const lastPage = Math.ceil(totalPost / postPerPage);
  for (let i = 1; i <= lastPage; i++) {
    pageNumber.push(i);
  }
  return (
    <>
      <div className="flex gap-3 cursor-pointer mt-5 justify-end mr-10 ">
        <button
          className="border-2 py-2 px-4 hover:boreder-2 hover:border-blue-500 hover:text-blue-600 font-semibold rounded-sm disabled:text-gray-400 disabled:border-gray-200"
          disabled={currentPage === 1 ? true : false}
          onClick={getPrevious}
        >
          Prev
        </button>

        {pageNumber.map((number) => (
          <div key={number}>
            <button
              className={`border-2 py-2 px-4 font-semibold rounded-sm ${
                currentPage === number &&
                "border-2 border-blue-500 text-blue-500 "
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </div>
        ))}

        <button
          disabled={currentPage === lastPage ? true : false}
          className="border-2 py-2 px-4 hover:boreder-2 hover:border-blue-500 hover:text-blue-600 font-semibold rounded-sm disabled:text-gray-400 disabled:border-gray-200"
          onClick={getNext}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
