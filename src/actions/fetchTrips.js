export default function fetchTrips() {
  return (dispatch) => {
    fetch("https://wherever-api.herokuapp.com/trips")
      .then((resp) => resp.json())
      .then((trips) => dispatch({ type: "FETCH_TRIPS", payload: trips }));
  };
}
