import "./App.module.css";
import { Header } from "./components/Header/Header.tsx";
import styles from "./App.module.css";
import { LoanSection } from "./components/Loan/LoanSection.tsx";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <section className={styles.mainSection}>
          <LoanSection />
        </section>
      </main>
    </div>
  );
}

export default App;
