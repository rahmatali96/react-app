const name = "Robots";

function displayMessage() {
  return "Wow";
}

function Hello() {
  return (
    <div>
      <h3>Hello from a component!</h3>
      <h3>Hello from a component {name}!</h3>
      <h3>Hello from a component {displayMessage()}!</h3>
    </div>
  );
}

export default Hello;
