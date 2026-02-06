"use client";

import Spline from "@splinetool/react-spline";

export default function LoginBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        backgroundColor: "#000",
      }}
    >
      {/* <Spline scene="https://prod.spline.design/30gYqjAlLUJzju1f/scene.splinecode" /> 하단 지구 뒷배경 은하수 */}
      <Spline scene="https://prod.spline.design/lUNUL7oLPhC8WSBZ/scene.splinecode" />
      {/* 지구 전체 모델 뒤에 은은한 은하수 */}
    </div>
  );
}
