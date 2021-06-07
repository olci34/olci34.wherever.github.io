export default function fetchPlanets() {
  return (dispatch) => {
    fetch("https://wherever-api.herokuapp.com/planets")
      .then((resp) => resp.json())
      .then((planets) => dispatch({ type: "FETCH_PLANETS", payload: planets }));
  };
}
