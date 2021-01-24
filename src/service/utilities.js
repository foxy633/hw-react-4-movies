import queryString from "query-string";

export const getParsedSearchQuery = (props) => {
  return queryString.parse(props.location.search).query;
};
