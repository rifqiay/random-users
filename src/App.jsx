import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./components/module/Filter/Filter";
import Search from "./components/module/Search/Search";
import Pagination from "./components/module/Pagination/Pagination";
import Table from "./components/module/Table/Table";
import { fetchData } from "./config/redux/action/GetData";

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.getAllUsers);
  const [gender, setGender] = useState("");
  const [keyword, setKeyword] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const getData = () => {
    dispatch(
      fetchData(gender, keyword, currentPage, postPerPage, sortBy, sort)
    );
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleResetFilter = async () => {
    setGender("");
    setSort("");
    setSortBy("");
  };

  // console.log(sort);
  const handleSearch = () => {
    getData();
  };

  const handleSort = (e) => {
    setSortBy(e.target.name);
    setSort(e.target.value);
    dispatch(
      fetchData(gender, keyword, currentPage, postPerPage, sortBy, sort)
    );
  };

  useEffect(() => {
    getData();
  }, [gender, currentPage, postPerPage, sort, sortBy]);

  // get currentpage
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirtsPost = indexOfLastPost - postPerPage;
  const currentPost = users.slice(indexOfFirtsPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const getPrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  const getNext = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <div className="md:flex gap-10 mt-5 ml-5">
        <Search setKeyword={setKeyword} handleSearch={handleSearch} />
        <Filter
          handleGender={handleGender}
          handleResetFilter={handleResetFilter}
        />
      </div>
      <div className="mt-7 flex justify-center px-3">
        <Table data={currentPost} handleSort={handleSort} />
      </div>
      <div>
        <Pagination
          postPerPage={postPerPage}
          totalPost={users.length}
          paginate={paginate}
          getPrevious={getPrevious}
          getNext={getNext}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default App;
