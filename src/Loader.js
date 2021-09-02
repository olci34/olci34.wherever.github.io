import PropagateLoader from "react-spinners/PropagateLoader";

export default function Loader(props) {
  return (
    <div id="spinner">
      <PropagateLoader size={25} loading={props.loader} color={"#d9ed92"} />
    </div>
  );
}
