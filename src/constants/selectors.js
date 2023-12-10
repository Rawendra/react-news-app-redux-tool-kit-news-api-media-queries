export const selectQuery=(state) => state.query
export const selectQueryCountryCode=(state) => state.query.countrycode
export const selectHeadLineArticles=(state) => state.query.articles
export const selectIsLoading= state=>state.counter.isLoading