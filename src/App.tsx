import "./App.module.css";
import { Header } from "./components/Header/Header.tsx";
import styles from "./App.module.css";
import { chevron, iIcon } from "./static/images.ts";
import { OverviewCard } from "./components/OverviewCard/OverviewCard.tsx";
import { accounts, overviewCards, positionsCards } from "./static/data.ts";
import { Card } from "./components/Card/Card.tsx";
import { AccountsCard } from "./components/AccountsCard/AccountsCard.tsx";
import { PositionsCard } from "./components/PositionsCard/PositionsCard.tsx";
import { WalletProvider } from "./hooks/WalletProvider";

function App() {
  return (
    <WalletProvider>
      <div className={styles.container}>
        <Header />
        <main>
          <section className={styles.mainSection}>
            <div className={styles.overviewHeading}>
              <h2 className={`${styles.sectionTitle} ${styles.overviewTitle}`}>
                Loan Overview
              </h2>
              <div className={styles.sectionSelectWrapper}>
                <select className={styles.sectionSelect}>
                  <option className={styles.sectionSelectOption} value="1">
                    #0
                  </option>
                  <option className={styles.sectionSelectOption} value="2">
                    #1
                  </option>
                  <option className={styles.sectionSelectOption} value="3">
                    #2
                  </option>
                  <option className={styles.sectionSelectOption} value="4">
                    #3
                  </option>
                </select>
                <span className={styles.sectionSelectArrow}>
                  <img src={chevron as string} alt="chevron" />
                </span>
              </div>
            </div>
            <div className={styles.overviewCardsWrapper}>
              {overviewCards.slice(0.2).map((item) => (
                <OverviewCard
                  key={item.id}
                  title={item.title}
                  label={item.label}
                  icon={item.icon as string}
                  color={item.color}
                />
              ))}
            </div>
            <div className={styles.fundsSection}>
              <Card className={styles.fundsSectionCard}>
                <div className={styles.fundsSectionCardInner}>
                  <div>
                    <h5 className={styles.fundsSectionCardTitle}>
                      0.00%
                      <button
                        type="button"
                        className={styles.fundsSectionCardTitleButton}
                      >
                        <img src={iIcon as string} alt="icon" />
                      </button>
                    </h5>
                    <p className={styles.fundsSectionCardSubtitle}>D / C (%)</p>
                  </div>
                  <div>
                    <span className={styles.fundsSectionCardMessage}>
                      No position
                    </span>
                    <p className={styles.fundsSectionCardValue}>
                      Max - <span style={{ fontWeight: "600" }}>68.97</span>%
                    </p>
                  </div>
                </div>
              </Card>
              <Card className={styles.fundsSectionCard}>
                <div>
                  <h5 className={styles.fundsSectionCardTitle}>
                    0.00% / $3,468.08
                  </h5>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                    className={styles.fundsSectionCardSubtitle}
                  >
                    Liquidation (ETH)
                    <button
                      type="button"
                      className={styles.fundsSectionCardTitleButton}
                    >
                      <img src={iIcon as string} alt="icon" />
                    </button>
                  </p>
                </div>
              </Card>
            </div>
            <div className={styles.accountsWrapper}>
              {accounts.map((item) => (
                <AccountsCard
                  balance={item.balance}
                  key={item.id}
                  text={item.text}
                  btnText={item.btnText}
                />
              ))}
            </div>
          </section>
          <section
            className={`${styles.mainSection} ${styles.positionsSection}`}
          >
            <h2 className={styles.sectionTitle}>Your Positions</h2>
            <div className={styles.positionsCardsWrapper}>
              {positionsCards.slice(0, 2).map((item) => (
                <PositionsCard
                  key={item.id}
                  img={item.img as string}
                  volume={item.volume}
                  coinType={item.coinType}
                  badgeType={item.badgeType}
                  badgeText={item.badgeText}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </WalletProvider>
  );
}

export default App;
