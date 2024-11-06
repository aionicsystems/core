import "./App.module.css";
import { Header } from "./components/Header/Header.tsx";
import styles from "./App.module.css";
import { LoanSection } from "./components/Loan/LoanSection.tsx";
import '../node_modules/@rainbow-me/rainbowkit/dist/index.css';
import { GraphSection } from "./components/Graph/GraphSection.tsx";



function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainStyles}>
        <section className={styles.mainSection}>
          <GraphSection />
          <LoanSection />
        </section>
      </main>
    </div>
  );
}

export default App;
