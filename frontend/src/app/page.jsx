import Style from "./page.module.scss";

function Home() {
  return (
    <>
      <section>
        <div className={Style.container}>
          <header>
            <h1>Home</h1>
          </header>
          <main>
            <p>main</p>
          </main>
          <footer>
            <p>footer</p>
          </footer>
        </div>
      </section>
    </>
  );
}

export default Home;
