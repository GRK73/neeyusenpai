# 니유 선배?

브라우저에서 실행되는 비주얼 노벨 프로젝트입니다. 별도 빌드 없이 정적 파일만으로 동작하며 GitHub Pages로 배포됩니다.

플레이: <https://grk73.github.io/neeyusenpai/>

## 로컬 실행

ES 모듈이나 서버 전용 API를 사용하지 않으므로 `index.html`을 직접 열어도 실행됩니다. 실제 배포 환경과 비슷하게 확인하려면 정적 서버를 사용하세요.

```powershell
python -m http.server 4173
```

그런 다음 <http://localhost:4173>으로 접속합니다.

## 콘텐츠 수정

- `game.js`의 `images`: Cloudflare R2 이미지 목록
- `game.js`의 `story`: 대사와 장면 전환
- `data/sound`: 효과음
- `data`: 로컬 폰트

이미지는 플레이 중 처음 표시되는 순간 갤러리에 해금되며 브라우저의 `localStorage`에 저장됩니다.
