import { GlobalStateInterface } from "../../hooks/GlobalStateProvider";
import { AssetType } from "../../types/AssetTypes";
import { LoanType } from "../../types/LoanTypes";
import { 
    liquidationCheck, 
    maxLiquidationAmount, 
    liquidationReward,
    liquidationPayment,
    collectorReward,
    interest,
    timestamp
} from "../../utils/calculations";


export const LoansMutator = (loans: LoanType[], state: Partial<GlobalStateInterface>, collateral: AssetType) => {
    if (collateral && state.userType === "Liquidator") {
        loans = loans.filter((loan) => {
        return liquidationCheck(
            loan.liquidationRatio,
            loan.collateralAmount,
            collateral?.latestPrice,
            collateral.aggregator?.decimals,
            loan.liabilityAmount,
            loan.asset?.latestPrice,
            loan.asset?.aggregator?.decimals,
            loan.precision,
        );
        });
        loans = loans.map(loan => {
        if (state.Window) {
            const newloan = { ...loan }; // Create a new object
            newloan.liquidationAmount = maxLiquidationAmount(
            newloan.collateralAmount,
            collateral.latestPrice,
            collateral.aggregator.decimals,
            newloan.liabilityAmount,
            newloan.asset.latestPrice,
            newloan.asset.aggregator.decimals,
            newloan.liquidationRatio,
            newloan.precision,
            newloan.daoFee,
            newloan.liquidatorFee,
            );

            newloan.liquidatorReward = liquidationReward(
            liquidationPayment(
                newloan.liquidationAmount, 
                newloan.asset.latestPrice, 
                collateral.latestPrice, 
                newloan.asset.aggregator.decimals, 
                collateral.aggregator.decimals, 
                newloan.liquidatorFee, 
                newloan.precision
            ),
            newloan.liquidatorFee,
            newloan.precision,
            )
            return newloan;
        }
        return loan;
        });
    }

    if (collateral && state?.Window?.precision && state.userType === "Collector") {
        loans = loans.map(loan => {
        if (state.Window && state.Window.precision) {
            const newloan = { ...loan }; // Create a new object
            if (timestamp > Number(loan.lastCollection)) {
                newloan.interest = interest(
                    loan.collateralAmount,
                    loan.interestRate,
                    loan.lastCollection,
                    timestamp,
                    state.Window.precision
                );
                newloan.collectorReward = collectorReward(
                    newloan.interest,
                    state.Window.collectorFee,
                    state.Window.precision
                );
            } else {
                newloan.interest = 0;
                newloan.collectorReward = 0;
                console.log("No interest to collect");
            }
            return newloan;
        }
        return loan;
        });
    }
    console.log(loans);
    return loans;
}