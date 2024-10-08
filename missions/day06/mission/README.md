## 미션) 한입-씨네마 SSR 적용하기 (with 데이터 페칭)

"한입 씨네마" 프로젝트의 데이터 페칭 기능을 구현하고, SSR로 데이터를 불러오도록 설정합니다.

## 미션 제출 방법

미션 제출은 다음 방법중 하나를 선택하시면 됩니다.

1. 결과 화면 캡쳐
2. GitHub에 프로젝트 업로드 후 링크로 공유

> [정답 보기](https://github.com/winterlood/onebite-next-challenge/blob/main/missions/day06/mission/answer)

## 미션 소개) 한입-씨네마 SSR 적용하기 (with 데이터 페칭)

"한입 씨네마" 프로젝트의 데이터 페칭 기능을 구현하고, SSR로 데이터를 불러오도록 설정합니다.
아래 안내드리는 순서에 따라 미션을 수행해주세요

### 1. 인덱스 페이지 데이터 페칭 구현하기 (SSR)

SSR 방식으로 인덱스 페이지에 필요한 다음 2개의 데이터를 불러오도록 설정합니다.  
데이터 요청 주소는 API 문서를 참고하세요

- recoMovies : 3개의 추천 영화 데이터를 불러옵니다.
- allMovies : 전체 영화 데이터를 불러옵니다.

데이터를 불러오는 함수는 lib 폴더에 별도로 생성하는 것을 권장드리며  
불러온 데이터를 실제로 화면에 렌더링까지 해 주시면 됩니다.

> Hint. 여러개의 API를 요청 할때에는 병렬로 요청을 발송해주는 Promise.all을 사용해보세요!

### 2. 서치 페이지 데이터 페칭 구현하기 (SSR)

검색 결과 데이터를 API 서버로부터 불러와 렌더링합니다.  
데이터 요청 주소는 API 문서를 참고하세요

### 3. 영화 상세 페이지 데이터 페칭 구현하기 (SSR)

하나의 영화 데이터를 API 서버로부터 불러와 렌더링 합니다.  
데이터 요청 주소는 API 문서를 참고하세요
