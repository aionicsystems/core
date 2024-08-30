import { barrowRate, dia, eth, loanId, netValue } from "./images.ts";
import {
  AccountType,
  OverviewCardType,
  PositionCardType,
  TempTableDataType,
} from "../types/DataTypes.ts";
import { SortableTableDataType } from "../types/TableTypes.ts";

export const overviewCards: OverviewCardType[] = [
  {
    id: 1,
    title: "# 0",
    label: "Loan ID",
    color: "light-skyBlue",
    icon: loanId,
  },
  {
    id: 2,
    title: "$ 0.00",
    label: "Net Value",
    color: "light-gold",
    icon: netValue,
  },
  {
    id: 3,
    title: "7.23%",
    label: "Borrow rate",
    color: "light-blue",
    icon: barrowRate,
  },
];

export const positionsCards: PositionCardType[] = [
  {
    id: 1,
    img: eth,
    volume: "0.00",
    coinType: "ETH",
    badgeType: "text-bg-green",
    badgeText: "Collateral",
  },
  {
    id: 2,
    img: dia,
    volume: "0.00",
    coinType: "dia",
    badgeType: "text-bg-orange",
    badgeText: "Debt",
  },
];

export const accounts: AccountType[] = [
  {
    id: 1,
    balance: "$0.00",
    text: "Balance",
    btnText: "Trade now",
  },
  {
    id: 2,
    balance: "5",
    text: "Strategies",
    btnText: "Show strategies",
  },
];

export const tempTableData: SortableTableDataType<TempTableDataType>[] = [
  {
    id: 1,
    asset: "ANVDA",
    liability: "10001 ANVDA",
    collateral: "100 ETH",
    c_ratio: "135%",
    l_ratio: "125%",
  },
  {
    id: 2,
    asset: "TSLA",
    liability: "15001 ATSLA",
    collateral: "160 ETH",
    c_ratio: "185%",
    l_ratio: "145%",
  },
  {
    id: 3,
    asset: "AAPL",
    liability: "112301 AAPL",
    collateral: "98 ETH",
    c_ratio: "95%",
    l_ratio: "155%",
  },
  {
    id: 4,
    asset: "TSMC",
    liability: "25071 TSMC",
    collateral: "13 ETH",
    c_ratio: "235%",
    l_ratio: "725%",
  },
];
