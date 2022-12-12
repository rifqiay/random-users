import React from "react";

const Filter = ({ handleGender, handleResetFilter }) => {
  return (
    <>
      <section>
        <h4>Gender</h4>
        <div className="flex gap-3">
          <div className="w-72 border-2 p-2">
            <select
              className="w-full focus:outline-none"
              onChange={handleGender}
            >
              <option value="">All</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <button
            className="p-2 border-2 rounded-md"
            onClick={handleResetFilter}
          >
            Reset Filter
          </button>
        </div>
      </section>
    </>
  );
};

export default Filter;
