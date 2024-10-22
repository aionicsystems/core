import { FC } from "react";
import styles from "./PositionsCard.module.css";
import { Button } from "../Button/Button.tsx";
import { useGlobalState } from "../../hooks/useGlobalState.tsx";


type PositionsButtonProps = {
  badgeText: string;
};

export const PositionsButton: FC<PositionsButtonProps> = ({
  badgeText,
}) => {
  const { state, setState } = useGlobalState();

  switch (badgeText) {
    case "Debt":
      return state.userType === "Borrower" ? (
        <Button
          btnType={"primary"}
          className={styles.positionsCardActionButton}
          size={"lg"}
          onClick={() => setState && setState({ ...state, isModalOpen: true, modalType: "payment" })}
        >
          Payment
        </Button>
      ) : null;
    case "Collateral":
        return state.loanId && state.userType === "Collector" ? (
            <Button
            btnType={"primary"}
            className={styles.positionsCardActionButton}
            size={"lg"}
            onClick={() => setState({ ...state, isModalOpen: true, modalType: "collect" })}
            >
                Collect
            </Button>
        ) : state.userType === "Liquidator" ? (
            <Button
            btnType={"primary"}
            className={styles.positionsCardActionButton}
            size={"lg"}
            onClick={() => setState && setState({ ...state, isModalOpen: true, modalType: "liquidate" })}
            >
                Liquidate
            </Button>) : null;
      default:
      return null;
  }
};
