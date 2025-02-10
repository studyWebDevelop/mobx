import { toJS } from "mobx";
import { postsStore } from "./store/postsStore";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  console.log(toJS(postsStore.posts));
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
