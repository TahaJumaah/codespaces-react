import Card from "./Components/Card";
import singers from "./Singers";

function App() {
  return <Card title={singers.map((singer) => singer.singerName)} />;
}

export default App;
