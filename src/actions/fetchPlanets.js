import { HEROKU_URL } from "../constants/AppUrlConstants";

export default function fetchPlanets() {
  return (dispatch) => {
    fetch(`${HEROKU_URL}/planets`)
      .then((resp) => resp.json())
      .then((planets) => dispatch({ type: "FETCH_PLANETS", payload: planets }));
  };
}
