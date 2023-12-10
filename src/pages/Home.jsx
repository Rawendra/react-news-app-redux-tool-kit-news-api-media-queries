import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_HEADLINES } from "../constants/sagaEventTypes";
import {
  selectHeadLineArticles,
  selectIsLoading,
} from "../constants/selectors";
import Articles from "./Articles";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const articles = useSelector(selectHeadLineArticles);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch({ type: GET_HEADLINES });
  }, []);
console.log('isLoading',isLoading)
  return (
    <div>
      {!isLoading ? (
        <div className="home-container">
          <div className="home-container-item">
            {" "}
            <Articles articles={articles} />
          </div>
        </div>
      ) : (
        "Content is Loading..."
      )}
    </div>
  );
}
