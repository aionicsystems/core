import styles from "./Loader.module.css";
import { TailSpin } from "react-loader-spinner";

export const SmallLoader = () => {
  return (
    <div className={styles.smallLoaderWrapper}>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#00ADEE"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass={styles.smallLoaderWrapper}
      />
    </div>
  );
};
