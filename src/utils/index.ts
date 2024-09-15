export const formatAddress = (addr: string) => {
  const upperAfterLastTwo = addr.slice(0, 2) + addr.slice(2);
  return `${upperAfterLastTwo.substring(0, 5)}...${upperAfterLastTwo.substring(39)}`;
};

export const formatRatio = (rate: string) => {
  return `${(Number(rate).toFixed(2) / 100).toFixed(2)}%`;
};

export const handleBodyScroll = () => {
  const body = document.body.classList;

  if (body.contains("_lock")) {
    body.remove("_lock");
  } else {
    body.add("_lock");
  }
};
