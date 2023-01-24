import * as style from "./styles/app.module.js";

function App() {
  return (
    <div className={style.App}>
      <style.Header>Hello</style.Header>
      <style.Wrapper>
        <h1>Restaurants near me</h1>
      </style.Wrapper>
    </div>
  );
}

export default App;
