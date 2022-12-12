import moment from "moment";
import React from "react";
import Sort from "../Sort/Sort";

const Table = ({ data, handleSort }) => {
  return (
    <>
      <table className="w-full">
        <tr>
          <th className="border-2 p-2 bg-slate-100 font-semibold">Username</th>
          <th className="border-2 p-2 bg-slate-100 font-semibold">
            <div className="flex justify-around">
              Name{" "}
              <Sort
                name="name"
                idasc="nameasc"
                idsc="namedsc"
                onClick={handleSort}
              />
            </div>
          </th>
          <th className="border-2 p-2 bg-slate-100 font-semibold">
            <div className="flex justify-around">
              Email{" "}
              <Sort
                name="email"
                idasc="emailasc"
                idsc="emaildsc"
                onClick={handleSort}
              />
            </div>
          </th>
          <th className="border-2 p-2 bg-slate-100 font-semibold">
            <div className="flex justify-around">
              Gender{" "}
              <Sort
                name="gender"
                idasc="genderasc"
                idsc="genderdsc"
                onClick={handleSort}
              />
            </div>
          </th>
          <th className="border-2 p-2 bg-slate-100 font-semibold">
            <div className="flex justify-around">
              Registered Date{" "}
              <Sort
                name="registered"
                idasc="registeredasc"
                idsc="registereddsc"
                onClick={handleSort}
              />
            </div>
          </th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border-b-2 p-3 font-semibold">
              {item.login.username}
            </td>
            <td className="border-b-2 p-3 font-semibold">{`${item.name.title} ${item.name.first} ${item.name.last}`}</td>
            <td className="border-b-2 p-3 font-semibold">{item.email}</td>
            <td className="border-b-2 p-3 font-semibold">{item.gender}</td>
            <td className="border-b-2 p-3 font-semibold">
              {moment(item.registered.date).format("DD-MM-YYYY hh:mm")}
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Table;
