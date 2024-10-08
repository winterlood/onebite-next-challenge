## 미션) App Router 버전 "한입-씨네마" 라우팅 설정하기

App Router 버전의 "한입 씨네마" 프로젝트를 새롭게 생성하고  
프로젝트의 라우팅과 글로벌 및 페이지별 레이아웃을 설정해 봅니다.

## 미션 제출 방법

미션 제출은 다음 방법중 하나를 선택하시면 됩니다.

1. 결과 화면 캡쳐
   - 페이지 결과물만 주소와 함께 캡쳐하시거나 프로젝트 파일 구조를 함께 캡쳐해주세요
   - 여러장 올리셔도 됩니다!
2. GitHub에 프로젝트 업로드 후 링크로 공유

> [정답 보기](https://github.com/winterlood/onebite-next-challenge/blob/main/missions/day09/mission/answer)

## 미션 소개) App Router 버전 "한입-씨네마" 라우팅 설정하기

아래 안내드리는 순서에 따라 미션을 수행해주세요

### 1. 프로젝트 생성하기

App Router를 사용하는 새로운 Next.js 프로젝트를 생성해주세요  
이름은 onebite-cinema-app 또는 자유롭게 설정하시면 됩니다.  
버전은 반드시 RC 버전으로 진행해주세요!!

### 2. 라우팅 설정하기

다음 요구사항을 만족하도록 라우팅을 설정해주세요

- <code>/</code> : 인덱스 페이지
- <code>/search</code> : 검색 페이지
  - q라는 이름의 쿼리스트링을 전달받아 화면에 렌더링합니다.
- <code>/movie/[id]</code> : 영화 상세 페이지
  - id라는 이름의 URL 파라미터를 화면에 렌더링 합니다.

### 3. 레이아웃 설정하기 (스타일 및 기능 제외)

다음 요구사항을 만족하도록 글로벌, 페이지별 레이아웃을 설정해주세요

#### 1. 인덱스, 서치 페이지는 다음 그림처럼 글로벌 레이아웃과 서치바 레이아웃이 중첩 적용됩니다.

- 인덱스 페이지 (~/)  
  ![alt text](image-1.png)

- 서치 페이지 (~/search?q=이정환)  
  ![alt text](image-2.png)

#### 2. 무비 페이지는 다음 그림처럼 오직 글로벌 레이아웃만 적용됩니다.

- 무비 페이지 (~/movie/10)  
  ![alt text](image-3.png)
