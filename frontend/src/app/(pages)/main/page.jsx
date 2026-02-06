"use client";
import Style from "./main.module.scss";

// 메인 관제 페이지

function page() {
  return (
    <>
      <section>
        <div className={Style.maincontainer}>
          <header></header>
          <main></main>
          <footer></footer>
        </div>
      </section>
    </>
  );
}

export default page;
