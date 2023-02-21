import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <nav>
          <Container className="navigation__container" />
        </nav>
        <section>
          <Container className="navigation__container" />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
