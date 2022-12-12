import React from "react";
import { BsCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

const Sort = ({ name, idasc, idsc, onClick }) => {
  return (
    <>
      <ul>
        <li>
          <input
            type="radio"
            name={name}
            id={idasc}
            value="ascend"
            className="hidden peer"
            onClick={onClick}
          />
          <label
            htmlFor={idasc}
            className="text-slate-400 peer-checked:text-indigo-600"
          >
            <BsCaretUpFill className="cursor-pointer" />
          </label>
        </li>
        <li>
          <input
            type="radio"
            name={name}
            id={idsc}
            value="descend"
            className="hidden peer"
            onClick={onClick}
          />
          <label
            htmlFor={idsc}
            className="cursor-pointer text-slate-400 peer-checked:text-indigo-600"
          >
            <BsFillCaretDownFill />
          </label>
        </li>
      </ul>
    </>
  );
};

export default Sort;
