"use client";
// 기본 홈 '/' 페이지 수정 ㄴㄴ

import dynamic from "next/dynamic";
import Style from "./home.module.scss";

// Spline 지구 모델 백그라운드
const LoginBackground = dynamic(() => import("@/components/earth/newEarth"), {
  ssr: false,
});

function Home() {
  return (
    <>
      {/* Spline 3d 모델 백그라운드 메인 페이지만 적용 */}
      <LoginBackground />
      <section className={Style.container}>
        {/*div 메인 컨테이너 */}
        <div className={Style.maincontainer}>
          {/* <header></header> 헤더는 필요시 사용 */}
          <main>
            {/* 로그인폼 */}
            <div className={Style.loginbox}>
              <img src="mainico.png" alt="" />
              <form action="/login" method="post" className={Style.loginForm}>
                <input type="email" placeholder="이메일을 입력해주세요" />
                <input type="password" placeholder="비밀번호를 입력해주세요" />
                <button type="submit">로그인</button>
              </form>
            </div>
          </main>
          {/* <footer></footer> 풋터 필요시 사용 ~~*/}
        </div>
      </section>
    </>
  );
}

export default Home;
