import "./App.module.css";
import { Header } from "./components/Header/Header.tsx";
import styles from "./App.module.css";
import { LoanSection } from "./components/Loan/LoanSection.tsx";
import '../node_modules/@rainbow-me/rainbowkit/dist/index.css';



function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainStyles}>
        <section className={styles.mainSection}>
          <LoanSection />
        </section>
      </main>
    </div>
  );
}

export default App;
