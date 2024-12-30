import { useMemo } from "react";

type ExampleProps = {
  getData: () => string;
};

function MyComponent(props: ExampleProps) {
  const data = useMemo(props.getData, [props.getData]);
  return <span>{data}</span>;
}

function App() {
  return (
    <>
      <MyComponent getData={() => "hey"} />
      <p>test</p>
    </>
  );
}

export default App;
