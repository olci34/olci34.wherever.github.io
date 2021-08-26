import UserForm from "./users/UserForm";
import { Link } from "react-router-dom";
import GreetingOptions from "./users/GreetingOptions";

export default function Greeting() {
  return (
    <div id="greeting">
      <h1 id='welcome-header'>Welcome to Wherever Space Cruise</h1>
      <p>Wherever you are in Solar System and</p>
      <p>wherever you want to go to in Solar System</p>
      <GreetingOptions/>
    </div>
  );
}
