import { FC, useState } from "react";
import { Button } from "../Button/Button.tsx";
import styles from "./IssueLoanForm.module.css";

export type IssueLoanFormProps = {
  loanID?: string;
};

export const IssueLoanForm: FC<IssueLoanFormProps> = ({ loanID }) => {
  const [collateral, setCollateral] = useState<string>("0.00 ETH");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const regex = /^\d+(\.\d{0,2})? ETH$/;
    if (regex.test(value) || value === "") {
      setCollateral(value);
    }
  };

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      id={loanID}
      className={styles.issueLoanForm}
    >
      <p className={styles.issueLoanFormTitle}>Collateral</p>
      <input
        type="text"
        name="collateral"
        id="collateral"
        className={styles.collateralInput}
        value={collateral}
        onChange={handleChange}
        placeholder="0.00 ETH"
      />
      <Button size={"sm"} type={"submit"} btnType={"primary"}>
        Submit
      </Button>
    </form>
  );
};
