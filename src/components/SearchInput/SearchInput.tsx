import { FC } from "react";
import styles from "./SearchInput.module.css";
import { searchGlass } from "../../static/images.ts";

export type SearchInputProps = {
  name: string;
};

export const SearchInput: FC<SearchInputProps> = ({ name }) => {
  return (
    <div className={styles.searchInputWrapper}>
      <label className={styles.searchInputLabel} htmlFor={name}>
        <img src={searchGlass as string} alt="search glass" />
      </label>
      <input
        placeholder={"Search Asset"}
        className={styles.searchInput}
        type="text"
        id={name}
        name={name}
      />
    </div>
  );
};
