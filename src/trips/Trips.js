import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

function Trips(props) {
  return (
    <div id="trips-div">
      <h2>Reserved Trips</h2>
      <ol>
        {props.trips.map((t) => (
          <li key={t.id} className="trips">
            <Link to={`/trips/${t.id}`}>
              Destionation(s): {t.planets.map((p) => p.name).join(", ")}
            </Link>
          </li>
        ))}
      </ol>
      <button
        id="new-trip-button"
        onClick={() => props.history.push("/trips/new")}
      >
        New Trip
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  // could be done with useSelector() hook
  return {
    trips: [...state.trips],
  };
};
export default withRouter(connect(mapStateToProps)(Trips));
