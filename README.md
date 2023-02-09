# 광고현황 대시보드 및 광고관리 서비스

1. [프로젝트 소개 🚀](#1-프로젝트-소개-)
2. [기술 스택 🛠](#2-기술-스택-)
3. [구현 기능 📍](#3-구현-기능-)
4. [프로젝트 구조 🗂](#4-프로젝트-구조-)
5. [프로젝트 설치 및 실행 ✨](#5-프로젝트-설치-및-실행-)

<br/>

[🌍 배포 링크](https://ad-management-service.vercel.app/)

<br />

## 1. 프로젝트 소개 🚀

- 개요 : 원티드 프론트엔드 프리온보딩 과제 중 Best Practice (**개인프로젝트**❗️)
- 주제 : 광고현황 대시보드 및 광고관리 서비스
- 기간 : 2022.11.05 ~ 2022.11.06

<br />

## 2. 기술 스택 🛠

- React
- Javascript
- Styled-Components
- Recoil
- ApexCharts.js (차트 라이브러리)
- Vercel(배포)

<br />

## 3. 구현 기능 📍

- 대시보드

  - datePicker, 기간 필터
  - 통합광고 현황 (선택기간 & 이전기간(동일 일수) 대비 증감 표시)
  - 차트, 차트필터(지표별 2가지 선택하여 그래프 제공)

- 광고관리

  - 광고 목록 조회
  - 기간별 필터 (전체, 진행중, 마감)

- 메뉴 탭 이동시 필터링 유지 (Recoil 사용))
- 드롭다운 기능 (대시보드 - 차트 필터 / 광고관리 - 기간별 필터)

<br />

## 4. 프로젝트 구조 🗂

```bash
src
├── assets  // 전역 스타일링
├── atoms  // 전역 상태관리 (Recoil)
├── components  // 공용 컴포넌트
├── hooks // dropdown 관련 커스텀 훅
├── pages // 페이지 및 페이지 고유 컴포넌트
└── utils // 지표별 타입 변환 관련 유틸함수
```

<br/>

<br>

## 5. 프로젝트 설치 및 실행 ✨

<br/>

1. Git Clone

```plaintext
$ git clone https://github.com/strongpond/ad-management-service.git
```

2. 프로젝트 패키지 설치

```plaintext
$ npm install
```

3. 프로젝트 실행

```plaintext
$ npm start
```
