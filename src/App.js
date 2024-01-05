import "./styles.css";
import Comments from "./components/comments";
import { data } from "./data";

export default function App() {
  return (
    <div>
      <h1>Nested Comments</h1>
      <Comments data={data} />
    </div>
  );
}
