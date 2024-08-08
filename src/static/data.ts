import {barrowRate, dia, eth, loanId, netValue} from "./images.ts";
import {AccountType, OverviewCardType, PositionCardType} from "../types/dataTypes.ts";

export const overviewCards: OverviewCardType[] = [
    {
        id: 1,
        title: '# 0',
        label: 'Loan ID',
        color: 'light-skyBlue',
        icon: loanId,
    },
    {
        id: 2,
        title: '$ 0.00',
        label: 'Net Value',
        color: 'light-gold',
        icon: netValue
    },
    {
        id: 3,
        title: '7.23%',
        label: 'Borrow rate',
        color: 'light-blue',
        icon: barrowRate
    }
]

export const positionsCards: PositionCardType[] = [
    {
        id: 1,
        img: eth,
        volume: '0.00',
        coinType: 'ETH',
        badgeType: 'text-bg-green',
        badgeText: 'Collateral',
    },
    {
        id: 2,
        img: dia,
        volume: '0.00',
        coinType: 'dia',
        badgeType: 'text-bg-orange',
        badgeText: 'Debt',
    }
]

export const accounts: AccountType[] = [
    {
        id: 1,
        balance: '$0.00',
        text: 'Balance',
        btnText: 'Trade now'
    },
    {
        id: 2,
        balance: '5',
        text: 'Strategies',
        btnText: 'Show strategies'
    },
]