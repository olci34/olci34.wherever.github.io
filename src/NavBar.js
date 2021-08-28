import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    dispatch({
      type: "LOG_OUT",
      payload: {
        zoomInPositions: [-0.2, 0, 1.2],
        errors: [],
        user: { id: "", name: "" },
        planets: [],
        trips: [],
      },
    });
  };

  if (props.signedIn) {
    return (
    <div id="navbar">
      <Link to="/planets">Planets</Link>
      <Link to="/trips">Trips</Link>
      <Link to="/wherever" onClick={handleLogOut}>
        Log Out
      </Link>
    </div>
  );
  } else {
    return (
      <div id='navbar'>
        <Link to="/wherever">Home</Link>
        <Link to="/planets">Planets</Link>
      </div>
    )
  }
  
}
