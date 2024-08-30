export type OverviewCardType = {
  id: number;
  title: string;
  label: string;
  color: string;
  icon: unknown;
};

export type PositionCardType = {
  id: number;
  img: unknown;
  volume: string;
  coinType: string;
  badgeType: string;
  badgeText: string;
};

export type AccountType = {
  id: number;
  balance: string;
  text: string;
  btnText: string;
};

export type SelectOption = {
  label: string | number;
  value: string | number;
};

export type TempTableDataType = {
  id: number;
  asset: string;
  liability: string;
  collateral: string;
  c_ratio: string;
  l_ratio: string;
};
