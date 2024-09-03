import { FC } from "react";
import { TailSpin } from "react-loader-spinner";
import styles from "./Loader.module.css";

export const Loader: FC = () => {
  return (
    <div className={styles.loaderWrapper}>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#00ADEE"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass={styles.loaderWrapper}
      />
    </div>
  );
};
