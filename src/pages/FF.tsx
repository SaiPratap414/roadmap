import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import styles from "./FF.module.css";

const FF: FunctionComponent = () => {
  return (
    <div className={styles.ff}>
      <header className={styles.theRoadAheadWrapper}>
        <div className={styles.theRoadAhead}>the road ahead</div>
      </header>

      <FrameComponent />

      <img src="/vector.svg" style={{margin: '0 auto'}} />
    </div>
  );
};

export default FF;
