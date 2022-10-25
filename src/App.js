import StageInternal from "./UI/StageInternal";
import Tools from "./UI/Tools";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.Tools}>
        <Tools />
      </div>
      <StageInternal />
    </div>
  );
}

export default App;
