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