import { HEROKU_URL } from "../constants/AppUrlConstants";

export default function cancelTrip(trip) {
  return (dispatch) => {
    const configTrip = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "DELETE",
    };
    fetch(`${HEROKU_URL}/trips/${trip.id}`, configTrip)
      .then((resp) => resp.json())
      .then((trip) => dispatch({ type: "CANCEL_TRIP", payload: trip.id }));
  };
}
