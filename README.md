# 진미 | Game · XR — Portfolio

> 배움은 깊게, 나눔은 하게

Unity 게임 · XR 콘텐츠 · 웹앱을 **기획 → 구성 → 설정 → 실제 코드 → 플레이 · 영상** 순서로 보여주는 포트폴리오 사이트입니다.
빌드 도구 없이 HTML · CSS · JS만으로 만들어서, GitHub Pages에 그대로 올라갑니다.

🔗 사이트: `https://mijin1996.github.io` (배포 후)
🔗 GitHub: https://github.com/mijin1996

## 프로젝트

| 프로젝트 | 종류 | 플레이 | 소스 |
|---|---|---|---|
| DodgeGraze | Unity · 3D · Mobile | [GameJolt](https://gamejolt.com/games/DodgeGraze/1111584) | [game-GRAZE](https://github.com/mijin1996/game-GRAZE) |
| BunnyRunning | Unity · 2D | [GameJolt](https://gamejolt.com/games/2D-SideScroll/1108632) | [game-2D](https://github.com/mijin1996/game-2D) |
| TPS · TangTang Goblin Playground | Unity · 3D · TPS | [GameJolt](https://gamejolt.com/games/tps-goblin/1108802) | [game-TPS](https://github.com/mijin1996/game-TPS) |
| Rainbow Beat Saber | Unity · VR | [GameJolt](https://gamejolt.com/games/VRBeatSync/1112300) | [game-VR-BeatSync](https://github.com/mijin1996/game-VR-BeatSync) |
| VR Bowling | Unity · VR | [GameJolt](https://gamejolt.com/games/vr-bowling/1108572) | [game-VR-Bowling](https://github.com/mijin1996/game-VR-Bowling) |
| VR Room103 | Unity · VR | — | [game-VR-Room103](https://github.com/mijin1996/game-VR-Room103) |
| c-master | Web · Cloudflare | [사이트](https://app-c-master.itsjinmi.workers.dev) | [app-c-master](https://github.com/mijin1996/app-c-master) |
| URURU | Web · React | [앱](https://app-ururu.pages.dev) | [app-URURU](https://github.com/mijin1996/app-URURU) |

## 폴더 구성

```
portfolio/
├─ index.html          # 화면 틀 (제목줄 · 탐색기 · 탭 · 상태바)
├─ css/style.css       # 다크 에디터 테마 (색은 :root 변수)
├─ js/
│  ├─ projects.js      # ★ 내용은 전부 여기 — 글 · 링크 · 이미지 · 코드
│  ├─ highlight.js     # C# / JS 코드 색칠 (라이브러리 없음)
│  ├─ inspector.js     # 씬 파일에서 읽은 "오브젝트 → 컴포넌트 → 기능" (인스펙터 탭)
│  ├─ cubes.js         # 버튼 hover 3D 큐브 (Vue Bits Cubes)
│  ├─ noise.js         # 첫 화면 "진미" 필름 노이즈 (Vue Bits Noise)
│  ├─ splash-cursor.js # 마우스를 따라 번지는 유체 효과 (Vue Bits Splash Cursor)
│  └─ main.js          # 화면 그리기 · 탭 · 이미지 확대 · 복사
├─ assets/cursor/     # 픽셀 마우스 커서 arrow.png · pointer.png
└─ assets/img/<id>/    # 프로젝트별 이미지 00.jpg, 01.jpg …
```

## 내용 고치기 (projects.js)

| 하고 싶은 것 | 고칠 곳 |
|---|---|
| 유튜브 영상 넣기 | 해당 프로젝트 `youtube: 'https://youtu.be/영상ID'` |
| 플레이 캡처 넣기 | `assets/img/tps/` 폴더에 `00.jpg` ~ `09.jpg` (또는 .png) 로 넣기만 하면 자동으로 표시 |
| 코드 바꾸기 | `code: [{ name, path, note, src }]` — `path` 는 저장소 안 경로 (🔗 GitHub로 바로 연결) |
| 새 프로젝트 | `PROJECTS` 배열에 같은 모양으로 하나 추가 → 탐색기 · 카드 · 상세가 자동 생성 |

Unity 캡처는 **Game 뷰 1920×1080 → Play → Window › General › Recorder** 또는 `Win + Shift + S` 로 찍고,
1280px 정도로 줄여 jpg로 저장하면 가볍습니다.

## 내 컴퓨터에서 보기

`index.html` 을 더블클릭하면 바로 열립니다 (서버 필요 없음).

## GitHub Pages 배포

1. GitHub에서 새 저장소 **`mijin1996.github.io`** 만들기 (Public)
2. 이 폴더에서
   ```bash
   git init
   git add .
   git commit -m "portfolio: first version"
   git branch -M main
   git remote add origin https://github.com/mijin1996/mijin1996.github.io.git
   git push -u origin main
   ```
3. 저장소 **Settings › Pages › Build and deployment › Source: Deploy from a branch → `main` / `(root)`**
4. 1~2분 뒤 `https://mijin1996.github.io` 접속

이후에는 `git add . && git commit -m "..." && git push` 만 하면 사이트가 자동으로 갱신됩니다.
