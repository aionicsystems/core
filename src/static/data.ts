import { dia, eth } from "./images.ts";
import { AccountType, PositionCardType } from "../types/DataTypes.ts";

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
