export default function cancelTrip(trip) {
  return (dispatch) => {
    const configTrip = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "DELETE",
    };
    fetch(`https://wherever-api.herokuapp.com/trips/${trip.id}`, configTrip)
      .then((resp) => resp.json())
      .then((trip) => dispatch({ type: "CANCEL_TRIP", payload: trip.id }));
  };
}
