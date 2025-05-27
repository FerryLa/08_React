/*
next.config.mjs 파일은 Nest.js애플리케이션의 설정 파일이다.
이 파일은 Next.js 애플리케이션의 설정을 정의하고,
애플리케이션의 동작을 제어하는 데 사용한다.
*/

/** @type {import('next').NextConfig} */ // Next.js 애플리케이션의 설정을 정의하는 타입
const nextConfig = {
  reactStrictMode: true, // 리액트 엄격 모드 활성화
};

export default nextConfig; // nextConfig 객체를 내보내서 Next.js 애플리케이션에서 사용할 수 있도록 한다.
