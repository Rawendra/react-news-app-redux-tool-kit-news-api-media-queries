import { useState } from "react";
import { useDispatch } from "react-redux";
import { udpate, updateCountryCode } from "../../store/querySlice";
import "./Search.css";

function Search() {
  // const _query = useSelector((state) => state.query.value);
  const dispatch = useDispatch();
  const [currentQuery, setCurrentQuery] = useState("");
  const [countryCode, setCountryCode] = useState("US");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(udpate(currentQuery));
    dispatch({type:'GET_HEADLINES'})
  };

  const selectdropdownHandler = (e) => {
    console.log(e.target.value);
    setCountryCode(e.target.value);
    dispatch(updateCountryCode(e.target.value));
  };
  const countryList = [
    { code: "us", countryName: "United States" },
    { code: "in", countryName: "India" },
    { code: "au", countryName: "Australia" },
    { code: "jp", countryName: "Japan" },
  ];
  return (
    <div className="main-header-search-bar-container">
      <form onSubmit={handleSubmit}>
        Search:
        <input
          value={currentQuery}
          placeholder="enter any query and hit go"
          onChange={(e) => {
            setCurrentQuery(e.target.value);
          }}
        />
        <select onChange={selectdropdownHandler}>
          {countryList.map((country, key) => {
            return (
              <option key={key} value={country?.code}>
                {country.countryName}
              </option>
            );
          })}
        </select>
        <button
          className="main-header-search-button"
        
        >
          GO
        </button>
      </form>
    </div>
  );
}

export default Search;
