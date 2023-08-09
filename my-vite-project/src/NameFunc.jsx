export function NameFunc(props) {
  const { name, age = 30, isProgrammer } = props;
  console.log("Is Programmer:", isProgrammer);
  return (
    <h1>
      {name} is {age} old
    </h1>
  );
}
