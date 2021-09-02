import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function Trips() {

  const history = useHistory()
  const trips = useSelector(state => state.trips)

  return (
    <div id="trips-div">
      <h2>Reserved Trips</h2>
      <ol>
        {trips.map((t) => (
          <li key={t.id} className="trips">
            <Link to={`/trips/${t.id}`}>
              Destionation(s): {t.planets.map((p) => p.name).join(", ")}
            </Link>
          </li>
        ))}
      </ol>
      <button
        id="new-trip-button"
        onClick={() => history.push("/trips/new")}
        >
        New Trip
      </button>
    </div>
  );
}

export default Trips;
