import { Container } from "./components/Container/Container";

export const App = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <nav>
          <Container className='navigation__container'/>
        </nav>
        <section>
        <Container className='navigation__container'/>
        </section>
      </main>
      <footer></footer>
    </>
  );
};
