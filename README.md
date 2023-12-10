# steps used to create the project
npm create vite@latest
npm install react-router-dom localforage match-sorter sort-by
npm install @reduxjs/toolkit
npm install react-redux


# creating redux store

///added store
1) configure Store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    query:querySlice
  },
});

2)create slice--> refer src\store\counterSlice.js


3) added provider to App with store attach
import { Provider } from "react-redux";
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
4) consume in the component

import { useSelector, useDispatch } from "react-redux";

...within component
  const dispatch = useDispatch();

..calling     dispatch(udpate(currentQuery));
...  accessing store  const _query = useSelector((state) => state.query.value);


screenshots:

<img width="956" alt="image" src="https://github.com/Rawendra/react-news-app-redux-tool-kit-news-api-media-queries/assets/38812338/03c69115-8ca1-4bd0-aa68-56332f46d60e">
