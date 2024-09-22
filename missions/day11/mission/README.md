## 미션) 한입-씨네마 UI 구현하기

"한입 씨네마" 프로젝트의 UI를 미리 구현합니다.

## 미션 제출 방법

미션 제출은 다음 방법중 하나를 선택하시면 됩니다.

1. 결과 화면 캡쳐
   - 페이지 결과물만 주소와 함께 캡쳐하시거나 프로젝트 파일 구조를 함께 캡쳐해주세요
   - 여러장 올리셔도 됩니다!
2. GitHub에 프로젝트 업로드 후 링크로 공유

> [정답 보기](https://github.com/winterlood/onebite-next-challenge/blob/main/missions/day11/mission/answer)

## 미션 소개) 한입-씨네마 UI 구현하기

본격적인 기능 구현에 앞서 **한입 씨네마** 프로젝트의 UI를 미리 구현합니다.  
아래 안내드리는 순서에 따라 미션을 수행해주세요

> Tip 1. Page Router 버전으로 이미 만들어두셨던 컴포넌트, CSS 파일들을 복사-붙여넣기 하시면 편할거에요! App Router 버전에서의 차이점에 대해서만 느껴보세요 😃

> Tip 2. 혹시 과제 수행이 너무너무 귀찮으시다면 딱 오늘 미션만큼은 정답 코드를 그대로 클론하셔도 됩니다! 인증만 올려주세요

> 요구사항만 만족한다면 UI를 구현하는 방식은 자유입니다. 결과물만 비슷하게 만족하면 됩니다.  
> 스타일의 변경을 원하시는 분들께서는 자유롭게 상상력을 발휘하셔도 괜찮습니다.  
> 요구사항을 일부 변경하셔도 괜찮습니다 (리스트에서 아이템의 개수 등)

### 0. 더미데이터 설정하기

이번 미션에서는 아래 그림과 같이 실제 영화 데이터를 렌더링하는 UI를 구현해야 합니다.  
그러나 우리는 아직 API를 통해 데이터를 불러오는 방법에 대해 살펴보지 않았으므로  
일단 JSON 형식의 더미 데이터를 활용해야 합니다.

![alt text](image-2.png)

아래의 토글을 누르면 JSON 형태로 작성된 더미 데이터를 확인할 수 있습니다.  
이 데이터를 복사하신 다음 여러분의 Next 앱에 dummy.json등의 이름으로 저장해주세요  
(강의에서 설명드렸던 더미 데이터를 설정하는 방법과 동일합니다!)

<details>
  <summary>dummy.json 파일 내용 보기</summary>

```json
[
  {
    "id": 1022789,
    "title": "인사이드 아웃 2",
    "releaseDate": "2024-06-11",
    "company": "Walt Disney Pictures, Pixar",
    "genres": ["애니메이션", "가족", "모험", "코미디"],
    "subTitle": "비상! 새로운 감정들이 몰려온다!",
    "description": "13살이 된 라일리의 행복을 위해 매일 바쁘게 머릿속 감정 컨트롤 본부를 운영하는 ‘기쁨’, ‘슬픔’, ‘버럭’, ‘까칠’, ‘소심’. 그러던 어느 날, 낯선 감정인 ‘불안’, ‘당황’, ‘따분’, ‘부럽’이가 본부에 등장하고, 언제나 최악의 상황을 대비하며 제멋대로인 ‘불안’이와 기존 감정들은 계속 충돌한다. 결국 새로운 감정들에 의해 본부에서 쫓겨나게 된 기존 감정들은 다시 본부로 돌아가기 위해 위험천만한 모험을 시작하는데…",
    "runtime": 97,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
  },
  {
    "id": 533535,
    "title": "데드풀과 울버린",
    "releaseDate": "2024-07-24",
    "company": "Marvel Studios, Maximum Effort, 21 Laps Entertainment, 20th Century Studios, Kevin Feige Productions, TSG Entertainment",
    "genres": ["액션", "코미디", "SF"],
    "subTitle": "",
    "description": "히어로 생활에서 은퇴한 후, 평범한 중고차 딜러로 살아가던 ‘데드풀’이 예상치 못한 거대한 위기를 맞아 모든 면에서 상극인 ‘울버린’을 찾아가게 되며 펼쳐지는 도파민 폭발 액션 블록버스터.",
    "runtime": 128,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/4Zb4Z2HjX1t5zr1qYOTdVoisJKp.jpg"
  },
  {
    "id": 1314450,
    "title": "안녕, 할부지",
    "releaseDate": "2024-09-04",
    "company": "ACOMMZ, Everland Resort",
    "genres": ["다큐멘터리", "애니메이션"],
    "subTitle": "사랑을 준 건 나였지만 행복을 준 건 너였어",
    "description": "선물로 찾아온 만남, 예정된 이별. 푸바오의 중국 귀환 일정이 결정되고, 사랑하는 이들의 아쉬움이 커져만 간다. 마침내 다가온 이별의 순간, 푸바오의 행복을 위해 애써 담담해 보였던 강바오와 송바오 역시 흔들리기 시작하는데… 헤어질 때를 알기에 매 순간 진심이고 애틋했던 그들. 1354일, 그동안의 못다 한 이야기. 안녕, 그리고 안녕…",
    "runtime": 95,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/2rDHFtRtAiixl3eWT7h5pae6Tue.jpg"
  },
  {
    "id": 1275096,
    "title": "사랑의 하츄핑",
    "releaseDate": "2024-08-07",
    "company": "SAMG Animation",
    "genres": ["애니메이션", "가족", "모험"],
    "subTitle": "너와 나의 첫번째 이야기",
    "description": "인생의 소울메이트를 꼭 만나길 바라는 로미. 우연한 기회에 하츄핑을 처음 본 뒤, 운명의 인연임을 알아본다. 로미는 하츄핑을 찾기 위해 반대를 무릅쓰고 새로운 길을 떠나지만, 마침내 만나게 된 하츄핑은 인간과의 소통을 거부하는데…",
    "runtime": 86,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/52pyvvUJsn4Z3yEQhlCmzlzCCBm.jpg"
  },
  {
    "id": 1209217,
    "title": "명탐정 코난: 100만 달러의 펜타그램",
    "releaseDate": "2024-04-12",
    "company": "TMS Entertainment, Yomiuri Telecasting Corporation, Shogakukan, TOHO, Nippon Television Network Corporation, Shogakukan-Shueisha Productions",
    "genres": ["애니메이션", "범죄", "미스터리", "액션"],
    "subTitle": "마침내 밝혀지는 괴도 키드의 진실",
    "description": "홋카이도 하코다테에 있는 ‘오노에’ 재벌 가의 창고에 ‘괴도 키드’의 예고장이 도착한다. ‘빅 주얼’만을 노리는 키드가 이번에 노리는 것은 과거 신선조 귀신 부장 ‘히지카타 토시조’와 얽힌 전설적인 검. 검술 대회에 참가하기 위해 하코다테에 방문한 ‘핫토리 헤이지’와 그를 응원하기 위해 온 ‘코난’ 일행도 괴도 키드를 막기 위해 사건에 뛰어들게 된다. 한편, 가슴에 열 십 자(十) 모양의 자상을 입은 시신이 발견되고 ‘죽음의 상인’이라고 불리는 무기상이 용의자로 지목된다. 그 역시 괴도 키드가 찾는 검을 노리고 있었고, 그 검이 오노에 가문이 세대에 걸쳐 지킨 보물을 찾을 열쇠임이 밝혀진다. 검을 쫓는 키드에게 수수께끼의 검사가 습격해 오고, 절체절명의 위기가 닥쳐오는데…!",
    "runtime": 111,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/n5tubyY6HoGzhd3RpTAmfKgrt9Y.jpg"
  },
  {
    "id": 872585,
    "title": "오펜하이머",
    "releaseDate": "2023-07-19",
    "company": "Syncopy, Universal Pictures, Atlas Entertainment",
    "genres": ["드라마", "역사"],
    "subTitle": "나는 이제 죽음이요, 세상의 파괴자가 되었다.",
    "description": "제2차 세계대전 당시 핵무기 개발을 위해 진행되었던 비밀 프로젝트 ‘맨해튼 프로젝트’를 주도한 미국의 물리학자 ‘로버트 오펜하이머’의 이야기",
    "runtime": 181,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/jpD6z9fgNe7OqsHoDeAWQWoULde.jpg"
  },
  {
    "id": 838209,
    "title": "파묘",
    "releaseDate": "2024-02-22",
    "company": "Showbox, MCMC, Pinetown Production",
    "genres": ["미스터리", "공포", "스릴러"],
    "subTitle": "험한 것이 나왔다",
    "description": "미국 LA, 거액의 의뢰를 받은 무당 화림과 봉길은 기이한 병이 대물림되는 집안의 장손을 만난다. 조상의 묫자리가 화근임을 알아챈 화림은 이장을 권하고, 돈 냄새를 맡은 최고의 풍수사 상덕과 장의사 영근이 합류한다. 절대 사람이 묻힐 수 없는 악지에 자리한 기이한 묘. 상덕은 불길한 기운을 느끼고 제안을 거절하지만, 화림의 설득으로 결국 파묘가 시작되고… 나와서는 안될 것이 나왔다.",
    "runtime": 133,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/tw0i3kkmOTjDjGFZTLHKhoeXVvA.jpg"
  },
  {
    "id": 1007127,
    "title": "댓글부대",
    "releaseDate": "2024-03-27",
    "company": "Cinematic Moment",
    "genres": ["범죄", "드라마"],
    "subTitle": "인터넷에서 본 글 어디까지 믿으세요?",
    "description": "실력 있지만 허세 가득한 사회부 기자 임상진.  대기업 만전의 비리를 취재하지만 오보로 판명되며 정직당한다. 그러던 어느 날, 온라인 여론을 조작했다는 의문의 제보자가 찾아오는데…",
    "runtime": 109,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/eR7ybceTRhBFjsdlshXqAAihBFg.jpg"
  },
  {
    "id": 995926,
    "title": "베테랑 2",
    "releaseDate": "2024-09-13",
    "company": "Filmmaker R&K, CJ Entertainment",
    "genres": ["액션", "범죄", "코미디"],
    "subTitle": "죄짓고 살지 말라 그랬지?",
    "description": "가족들도 못 챙기고 밤낮 없이 범죄들과 싸우는 베테랑 형사 서도철과 강력범죄수사대 형사들. 어느 날, 한 교수의 죽음이 이전에 발생했던 살인 사건들과 연관성이 있는 것으로 밝혀지며 전국은 연쇄살인범으로 인해 떠들썩해진다. 이에 단서를 추적하며 수사를 시작한 형사들. 하지만 이들을 비웃기라도 하듯, 연쇄살인범은 다음 살인 대상을 지목하는 예고편을 인터넷에 공개하며 또 한 번 전 국민을 흔들어 놓는다. 강력범죄수사대는 서도철의 눈에 든 정의감 넘치는 막내 형사 박선우를 투입한다. 그리고 사건은 새로운 방향으로 흐르게 되는데...",
    "runtime": 118,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/akqfhtM1Wa1klFi7ijmyNm7Sm1j.jpg"
  },
  {
    "id": 945961,
    "title": "에이리언: 로물루스",
    "releaseDate": "2024-08-13",
    "company": "20th Century Studios, Scott Free Productions, Brandywine Productions",
    "genres": ["공포", "SF"],
    "subTitle": "비명마저 집어삼킬 극강의 공포",
    "description": "2142년, 부모 세대가 맞닥뜨렸던 암울한 미래를 피하려는 청년들이 더 나은 삶을 찾기 위해 식민지를 떠날 계획을 세운다. 하지만 버려진 우주 기지 로물루스에 도착한 이들은 악몽과도 같은 에이리언의 무자비한 공격에 쫓기기 시작한다. 그 누구도 그들의 절규를 들을 수 없는 우주 한가운데, 생존을 위한 치열한 사투를 벌여야 하는데...",
    "runtime": 119,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/bMGcJVd4hXlDcevRJZBK5qROlyP.jpg"
  },
  {
    "id": 787699,
    "title": "웡카",
    "releaseDate": "2023-12-06",
    "company": "Warner Bros. Pictures, Village Roadshow Pictures, The Roald Dahl Story Company, Heyday Films, Domain Entertainment",
    "genres": ["코미디", "가족", "판타지"],
    "subTitle": "세상에서 가장 달콤한 여정 좋은 일은 모두 꿈에서부터 시작된다!",
    "description": "마법사이자 초콜릿 메이커 ‘윌리 웡카’의 꿈은 디저트의 성지, ‘달콤 백화점’에 자신만의 초콜릿 가게를 여는 것. 가진 것이라고는 낡은 모자 가득한 꿈과 단돈 12소베른 뿐이지만 특별한 마법의 초콜릿으로 사람들을 사로잡을 자신이 있다. 하지만 먹을 것도, 잠잘 곳도, 의지할 사람도 없는 상황 속에서 낡은 여인숙에 머물게 된 ‘웡카’는 ‘스크러빗 부인’과 ‘블리처’의 계략에 빠져 눈더미처럼 불어난 숙박비로 인해 순식간에 빚더미에 오른다. 게다가 밤마다 초콜릿을 훔쳐가는 작은 도둑 ‘움파 룸파’의 등장과 ‘달콤 백화점’을 독점한 초콜릿 카르텔의 강력한 견제까지. 세계 최고의 초콜릿 메이커가 되는 길은 험난하기만 한데…",
    "runtime": 117,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/lQ4cwauq2jeTkka9RvdMBTVPLMH.jpg"
  },
  {
    "id": 693134,
    "title": "듄: 파트 2",
    "releaseDate": "2024-02-27",
    "company": "Legendary Pictures",
    "genres": ["SF", "모험"],
    "subTitle": "운명의 반격이 시작된다!",
    "description": "황제의 모략으로 멸문한 가문의 유일한 후계자 폴. 어머니 레이디 제시카와 간신히 목숨만 부지한 채 사막으로 도망친다. 그곳에서 만난 반란군들과 숨어 지내다 그들과 함께 황제의 모든 것을 파괴할 전투를 준비한다. 한편 반란군들의 기세가 높아질수록 불안해진 황제와 귀족 가문은 잔혹한 암살자 페이드 로타를 보내 반란군을 몰살하려 하는데…",
    "runtime": 167,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/8uUU2pxm6IYZw8UgnKJyx7Dqwu9.jpg"
  },
  {
    "id": 696047,
    "title": "시민덕희",
    "releaseDate": "2024-01-24",
    "company": "CJeS Studios, Page One Film",
    "genres": ["코미디", "범죄"],
    "subTitle": "아무도 못 잡으면, 우리가 꼭 잡는다",
    "description": "세탁소 화재로 인해 대출상품을 알아보던 생활력 만렙 덕희에게 어느 날, 거래은행의 손대리가 합리적인 대출상품을 제안하겠다며 전화를 걸어온다. 대출에 필요하다며 이런저런 수수료를 요구한 손대리에게 돈을 보낸 덕희는 이 모든 과정이 보이스피싱이었음을 뒤늦게 인지하고 충격에 빠진다. 전 재산을 잃고 아이들과 거리로 나앉게 생긴 덕희에게 어느 날 손대리가 다시 전화를 걸어오는데… 이번엔 살려달라는 전화다! 경찰도 포기한 사건, 덕희는 손대리도 구출하고 잃어버린 돈도 찾겠다는 일념으로 필살기 하나씩 장착한 직장 동료들과 함께 중국 칭다오로 직접 날아간다.",
    "runtime": 113,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/hu4nI6znjpdLqcq2SLfLRc3CJOQ.jpg"
  },
  {
    "id": 919207,
    "title": "서울의 봄",
    "releaseDate": "2023-11-22",
    "company": "Hive Media Corp",
    "genres": ["드라마", "역사", "스릴러", "전쟁", "범죄"],
    "subTitle": "1979.12.12 그날 밤 철저히 감춰진 9시간",
    "description": "박 대통령의 암살 이후, 계엄령이 선포된다. 국군보안사령관 전두광과 그를 따르는 장교들에 의해 쿠데타가 일어나고 군대가 정치적 행동을 해선 안된다고 믿는 완고한 군인인, 수도방위사령관 이태신은 전두광을 막기 위해 그와 맞서기로 한다. 그들의 갈등이 점차 심화되고, 대혼란 속에서 모두가 갈망하던 서울의 봄은 예상치 못한 방향으로 흘러간다.",
    "runtime": 141,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/ukVVnY9ovwl78WE5KndcpA6SnAm.jpg"
  },
  {
    "id": 786892,
    "title": "퓨리오사: 매드맥스 사가",
    "releaseDate": "2024-05-22",
    "company": "Warner Bros. Pictures, Kennedy Miller Mitchell, Domain Entertainment",
    "genres": ["액션", "모험", "SF"],
    "subTitle": "분노가 깨어나다",
    "description": "문명 붕괴 45년 후, 황폐해진 세상 속 누구에게도 알려지지 않은 풍요가 가득한 녹색의 땅에서 자란 퓨리오사는 바이커 군단의 폭군 디멘투스의 손에 모든 것을 잃고 만다. 가족도 행복도 모두 빼앗기고 세상에 홀로 내던져진 퓨리오사는 반드시 고향으로 돌아가겠다는 어머니와의 약속을 지키기 위해 인생 전부를 건 복수를 시작하는데...",
    "runtime": 149,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/zaUFDdJidS4Nyyd6jb2Ok3Kq4Vo.jpg"
  },
  {
    "id": 1017163,
    "title": "범죄도시 4",
    "releaseDate": "2024-04-24",
    "company": "BA Entertainment, Hong Film, Big Punch Pictures",
    "genres": ["범죄", "액션", "드라마"],
    "subTitle": "거침없이 싹 쓸어버린다",
    "description": "신종 마약 사건 3년 뒤, 괴물형사 마석도와 서울 광수대는 배달앱을 이용한 마약 판매 사건을 수사하던 중 수배 중인 앱 개발자가 필리핀에서 사망한 사건이 대규모 온라인 불법 도박 조직과 연관되어 있음을 알아낸다. 필리핀에 거점을 두고 납치, 감금, 폭행, 살인 등으로 대한민국 온라인 불법 도박 시장을 장악한 특수부대 용병 출신의 빌런 백창기와 한국에서 더 큰 판을 짜고 있는 IT업계 천재 CEO 장동철. 마석도는 더 커진 판을 잡기 위해 장이수에게 뜻밖의 협력을 제안하고 광역수사대는 물론, 사이버수사대까지 합류해 범죄를 소탕하기 시작하는데…",
    "runtime": 109,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/h1YarEjeYurkAwXgfY1RDMVCiin.jpg"
  },
  {
    "id": 831815,
    "title": "다람이 무비: 비키니 시티를 구하라",
    "releaseDate": "2024-08-01",
    "company": "Nickelodeon Movies",
    "genres": ["애니메이션", "코미디", "모험", "가족"],
    "subTitle": "",
    "description": "어느 날 누군가가 비키니 시티를 통째로 바다에서 퍼내 간다. 곧이어 도시를 구하겠다고 나서는 다람쥐 과학자 다람이. 친구인 네모바지 스폰지밥과 함께 텍사스로 모험을 떠난다.",
    "runtime": 86,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/30YnfZdMNIV7noWLdvmcJS0cbnQ.jpg"
  },
  {
    "id": 1091051,
    "title": "빅토리",
    "releaseDate": "2024-08-14",
    "company": "Annapurna Films, East Gate Company, Covenant Pictures",
    "genres": ["코미디", "드라마"],
    "subTitle": "스탠드 업! 텐션 업! 치얼 업!",
    "description": "1999년 세기말, 거제의 댄스 콤비 필선과 미나는 댄스 연습실을 마련하기 위해  서울에서 전학온 치어리더 세현을 내세워 치어리딩 동아리를 만든다. 그렇게 9명의 멤버들이 모여 얼렁뚱땅 탄생한 밀레니엄 걸즈. 치형의 만년 꼴찌 거제상고 축구부를 우승으로 이끌어야만 하는데… 오직 열정만큼은 충만한 생판 초짜 치어리딩 동아리  밀레니엄 걸즈의 모두를 향한 신나는 응원이 펼쳐진다!",
    "runtime": 119,
    "posterImgUrl": "https://media.themoviedb.org/t/p/w300_and_h450_face/tGoNbWpJDPpnW04Cmx19uzeBb3D.jpg"
  }
]
```

</details>

### 1. 타입 설정하기

더미 데이터 설정을 마쳤다면 다음으로는 이 더미데이터를 우리 프로젝트에서 활용하기 위한 타입을 정의해야 합니다.  
src/types.ts 파일을 만든 다음 다음과 같이 MovieData 타입을 정의하고 내보내세요

```TypeScript
export interface MovieData {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  releaseDate: string;
  company: string;
  genres: string[];
  runtime: number;
  posterImgUrl: string;
}
```

여기까지 설정해 주셨다면 이제 밑 준비는 모두 마무리 되었습니다.  
이제 페이지 UI와 각 페이지에 필요한 컴포넌트들을 구현할 차례에요!

### 2. 인덱스 페이지 UI 구현

인덱스(/) 페이지의 UI 요구사항은 다음과 같습니다.

- 검색바 레이아웃이 적용되어야 합니다.
- **"지금 가장 추천하는 영화"** 섹션과 **"등록된 모든 영화"** 섹션이 존재합니다.
  - **"지금 가장 추천하는 영화"** 섹션에는 아래 그림처럼 3개의 **MovieItem 컴포넌트**가 렌더링 됩니다.
  - **"등록된 모든 영화"** 섹션에는 아래 그림처럼 한줄에 5개의 **MovieItem 컴포넌트**가 렌더링 됩니다.
- **MovieItem 컴포넌트**를 클릭하면 `~/movie/[id]` 경로로 이동합니다.
- MovieItem은 더미 데이터를 사용합니다.

![alt text](image.png)

### 3. 서치 페이지 UI 구현

서치(/search) 페이지의 UI 요구사항은 다음과 같습니다.

- 검색바 레이아웃이 적용되어야 합니다.
- 검색 결과로 **MovieItem 컴포넌트**가 한줄에 3개씩 렌더링 됩니다.
  - 현재는 데이터가 없기 때문에 더미 데이터를 렌더링 하면 됩니다.
- MovieItem 컴포넌트를 클릭하면 `~/movie/[id]` 경로로 이동합니다.
- MovieItem은 더미 데이터를 사용합니다.

![alt text](image-1.png)

### 4. 상세 페이지 UI 구현

영화 상세 페이지(movie/[id])의 UI 요구사항은 다음과 같습니다.

- 한입 북스의 도서 상세 페이지와 유사하게 만들면 됩니다.
- 아래 그림처럼 posterImgUrl, title, releaseDate, genres, runtime, company, subTitle, description 필드의 값을 렌더링 하면 됩니다.
- 스타일은 원하시는대로 자유롭게 설정하셔도 됩니다.
- dummy.json에 저장된 하나의 영화 데이터를 활용합니다.

![alt text](image-3.png)