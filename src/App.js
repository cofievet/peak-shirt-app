import Counter from "./Counter";

export default function App() {
  return (
    <>
      <h1 className="App">Hello!</h1>
      <p>Lorem Ipsum</p>
      <Counter />
      <Counter defaultCounter={100} step={20} />
    </>
  );
}
