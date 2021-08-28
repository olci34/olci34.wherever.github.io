import GreetingOptions from "./users/GreetingOptions";

export default function Greeting() {
  return (
    <div id="greeting">
      <h1 id='welcome-header'>Welcome to Wherever Space Cruise</h1>
      <p>Sign in or sign up to book a trip.</p>
      <p>Learn more about the planets without signing up.</p>
      <GreetingOptions/>
    </div>
  );
}
