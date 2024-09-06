import "./App.module.css";
import { Header } from "./components/Header/Header.tsx";
import styles from "./App.module.css";
import { accounts, positionsCards } from "./static/data.ts";
import { AccountsCard } from "./components/AccountsCard/AccountsCard.tsx";
import { PositionsCard } from "./components/PositionsCard/PositionsCard.tsx";
import { LoanSection } from "./components/Loan/LoanSection.tsx";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <section className={styles.mainSection}>
          <LoanSection />
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
  );
}

export default App;
