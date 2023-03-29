import { HEROKU_URL } from "../constants/AppUrlConstants";

export default function fetchTrips() {
  return (dispatch) => {
    fetch(`${HEROKU_URL}/trips`)
      .then((resp) => resp.json())
      .then((trips) => dispatch({ type: "FETCH_TRIPS", payload: trips }));
  };
}
