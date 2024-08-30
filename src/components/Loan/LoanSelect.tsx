import { FC } from "react";
import styles from "./LoanSelect.module.css";
import { chevron } from "../../static/images.ts";
import { SelectOption } from "../../types/DataTypes.ts";

export type LoanSelectProps = {
  options: SelectOption[];
  onChangeAction?: () => void;
};

export const LoanSelect: FC<LoanSelectProps> = ({
  options,
  onChangeAction,
}) => {
  return (
    <div className={styles.sectionSelectWrapper}>
      <select
        onChange={() => (onChangeAction ? onChangeAction() : null)}
        className={styles.sectionSelect}
      >
        {options.map((option) => (
          <option
            key={option.value}
            className={styles.sectionSelectOption}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      <span className={styles.sectionSelectArrow}>
        <img src={chevron as string} alt="chevron" />
      </span>
    </div>
  );
};
