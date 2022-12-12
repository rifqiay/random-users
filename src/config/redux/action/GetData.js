import axios from "axios";

export const fetchData =
  (gender, keyword, currentPage, postPerPage, sortBy, sort) =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `https://randomuser.me/api/?results=19&page=${currentPage}&pageSize=${postPerPage}${
          gender ? `&gender=${gender}` : ""
        }${keyword ? `&keyword=${keyword}` : ""}${
          sortBy ? `&sortBy=${sortBy}&sort=${sort}` : ""
        }`
      );
      const data = res.data.results;
      dispatch({ type: "GET_DATA_SUCCESS", payload: data });
    } catch (error) {
      console.error(error);
    }
  };
