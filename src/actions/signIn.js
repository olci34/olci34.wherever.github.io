import { HEROKU_URL } from "../constants/AppUrlConstants";

export default function signIn(sentUser) {
  return (dispatch) => {
    const configUser = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({ user: sentUser }),
    };
    return fetch(`${HEROKU_URL}/signin`, configUser)
      .then((resp) => resp.json())
      .then((receivedUser) => {
        if (receivedUser.errors) {
          alert(receivedUser.errors);
        } else {
          dispatch({ type: "SIGN_IN", payload: receivedUser });
        }
      })
  };
}
