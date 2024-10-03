import { FC } from "react";
import styles from "./UserTypeDropdown.module.css";

type UserTypeDropdownProps = {
  userTypes: string[];
  onSelect: (userType: string) => void;
};

export const UserTypeDropdown: FC<UserTypeDropdownProps> = ({ userTypes, onSelect }) => {
  return (
    <div className={styles.dropdown}>
      {userTypes.map((type) => (
        <div key={type} className={styles.dropdownItem} onClick={() => onSelect(type)}>
          {type}
        </div>
      ))}
    </div>
  );
};