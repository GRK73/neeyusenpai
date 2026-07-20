const R2 = "https://pub-51e0a21b82b94533b988af3a0dfe4c04.r2.dev/";
const R2_VERSION = "20260720-ch07";

const asset = (id, file, label, kind) => ({
  id,
  file,
  label,
  kind,
  url: `${R2}${encodeURIComponent(`${file}.png`)}?v=${R2_VERSION}`,
});

const images = [
  asset("bg_clubroom", "bg_clubroom", "동아리실", "background"),
  asset("bg_festival", "bg_festival", "축제 거리", "background"),
  asset("bg_festivalbooth", "bg_festivalbooth", "축제 부스 내부", "background"),
  asset("bg_hospital", "bg_hospital", "병원", "background"),
  asset("bg_road", "bg_road", "일반 길", "background"),
  asset("bg_school", "bg_school", "학교 복도", "background"),
  asset("bg_busstaion", "bg_busstaion", "버스 정류장", "background"),
  asset("bg_datestreet", "bg_datestreet", "데이트 거리", "background"),
  asset("bg_resaurant", "bg_resaurant", "레스토랑", "background"),

  asset("emotion_basic", "기본", "기본", "emotion"),
  asset("emotion_surprised", "놀람", "놀람", "emotion"),
  asset("emotion_blank", "멍", "멍", "emotion"),
  asset("emotion_blush", "부끄러움", "부끄러움", "emotion"),
  asset("emotion_pout", "삐짐", "삐짐", "emotion"),
  asset("emotion_sad", "슬픔", "슬픔", "emotion"),
  asset("emotion_awkward", "애매", "애매", "emotion"),
  asset("emotion_wronged", "억울함", "억울함", "emotion"),
  asset("emotion_smile", "웃음", "웃음", "emotion"),

  asset("date_basic", "date_기본", "데이트 기본", "emotion"),
  asset("date_surprised", "date_놀람", "데이트 놀람", "emotion"),
  asset("date_subtle", "date_미묘", "데이트 미묘", "emotion"),
  asset("date_pout", "date_삐짐", "데이트 삐짐", "emotion"),
  asset("date_sad", "date_슬픔", "데이트 슬픔", "emotion"),
  asset("date_wronged", "date_억울", "데이트 억울", "emotion"),
  asset("date_smile", "date_웃음", "데이트 웃음", "emotion"),

  asset("cg_01_bike_charge", "01_bike_charge", "자전거 돌진", "cg"),
  asset("cg_02_hospital_wake_1", "02_hospital_wake_1", "병실에서 깨어남", "cg"),
  asset("cg_02_hospital_wake_2", "02_hospital_wake_2", "살아있어!", "cg"),
  asset("cg_03_pen_focus", "03_palm_number", "펜을 든 니유", "cg"),
  asset("cg_04_palm_number", "04_palm", "손바닥의 번호", "cg"),
  asset("cg_05_sofa_sleeping", "05_sofa_sleeping", "소파에서 자는 니유", "cg"),
  asset("cg_06_sofa_startled", "06_sofa_startled", "벌떡 일어난 니유", "cg"),
  asset("cg_07_interview_1", "07_interview_1", "면접 중 딴청", "cg"),
  asset("cg_07_interview_2", "07_interview_2", "니유의 질문", "cg"),
  asset("cg_08_armup", "08_armup", "팔 동작 시범", "cg"),
  asset("cg_09_helmet", "09_helmet", "헬멧 선물", "cg"),
  asset("cg_10_busshoulder", "10_busshoulder", "버스에서", "cg"),
  asset("cg_11_doghug", "11_doghug", "강아지를 안고", "cg"),
  asset("cg_12_tease", "12_tease", "겁쟁이", "cg"),
  asset("cg_13_dance", "13_dance", "니유의 춤", "cg"),
  asset("cg_14_falldown", "14_falldown", "엉덩방아", "cg"),
  asset("cg_15_drunken", "15_drunken", "취한 니유", "cg"),
  asset("cg_16_drunkensleep", "16_drunkensleep", "취중 잠버릇", "cg"),
  asset("cg_17_charge", "17_charge", "책임지고 연습", "cg"),
  asset("cg_18_dancepractice", "18_dancepractice", "둘만의 연습", "cg"),
  asset("cg_19_festivstart", "19_festivstart", "둘이 된 축제", "cg"),
  asset("cg_20_festivcatch", "20_festivcatch", "붙잡은 소매", "cg"),
  asset("cg_21_festivcatching", "21_festivcatching", "서로의 소매", "cg"),
  asset("cg_22_festivgun", "22_festivgun", "사격 부스", "cg"),
  asset("cg_23_festivphone", "23_festivphone", "내기값 갚는 날", "cg"),
  asset("cg_24_festivhena", "24_festivhena", "이어지는 헤나", "cg"),
  asset("cg_25_festivdart", "25_festivdart", "풍선 다트", "cg"),
  asset("cg_26_festivpic", "26_festivpic", "네 번째 사진", "cg"),
  asset("cg_27_datemeet", "27_datemeet", "약속 장소의 니유", "cg"),
  asset("cg_28_restauranttalk_1", "28_restauranttalk_1", "멈춘 설탕 탑", "cg"),
  asset("cg_28_restauranttalk_2", "28_restauranttalk_2", "니유가 춤추는 이유", "cg"),
  asset("cg_29_bustalk", "29_bustalk", "다음엔 내가 이겨서", "cg"),
  asset("cg_30_readydance", "30_readydance", "무대에 오르기 전", "cg"),
  asset("cg_31_dancing", "31_dancing", "스포트라이트", "cg"),
  asset("cg_32_dancefall", "32_dancefall", "무너지는 조명", "cg"),
  asset("cg_33_rehospital", "33_rehospital", "다시 병실에서", "cg"),
  asset("cg_34_hospitalout", "34_hospitalout", "차가운 책임", "cg"),
  asset("cg_35_hospitalmilk_1", "35_hospitalmilk_1", "새벽의 커피우유", "cg"),
  asset("cg_35_hospitalmilk_2", "35_hospitalmilk_2", "도둑처럼 들킨 니유", "cg"),
  asset("cg_36_campusmeet", "36_campusmeet", "도서관 앞의 거리", "cg"),
  asset("cg_37_alley_1", "37_alley_1", "처음 만난 언덕", "cg"),
  asset("cg_37_alley_2", "37_alley_2", "열흘 만의 얼굴", "cg"),
  asset("cg_38_alleystand", "38_alleystand", "그냥 옆에 있고 싶어서", "cg"),
];

const byId = Object.fromEntries(images.map((item) => [item.id, item]));
const idByFilename = Object.fromEntries(images.map((item) => [`${item.file}.png`, item.id]));
Object.assign(idByFilename, {
  "02_hospital_wake.png": "cg_02_hospital_wake_1",
  "03_pen_focus.png": "cg_03_pen_focus",
  "04_palm_number.png": "cg_04_palm_number",
});
const galleryImages = images.filter((item) => item.kind === "cg");
const galleryImageIds = new Set(galleryImages.map((item) => item.id));
const UNLOCK_STORAGE_KEY = "neeyu.gallery-unlocked.v3";

const chapterInfo = {
  "프롤로그 — 첫 만남(?)": { index: 0, eyebrow: "PROLOGUE", title: "첫 만남(?)", bg: "bg_road" },
  "1장 — 면접": { index: 1, eyebrow: "CHAPTER 01", title: "면접", bg: "bg_school" },
  "2장 — 환영회": { index: 2, eyebrow: "CHAPTER 02", title: "환영회", bg: "bg_clubroom" },
  "3장 — 연습": { index: 3, eyebrow: "CHAPTER 03", title: "연습", bg: "bg_clubroom" },
  "4장 — 축제": { index: 4, eyebrow: "CHAPTER 04", title: "축제", bg: "bg_festival" },
  "5장 — 내기값": { index: 5, eyebrow: "CHAPTER 05", title: "내기값", bg: "bg_datestreet" },
  "6장 — 스포트라이트": { index: 6, eyebrow: "CHAPTER 06", title: "스포트라이트", bg: "bg_school" },
  "7장 — 언덕": { index: 7, eyebrow: "CHAPTER 07", title: "언덕", bg: "bg_hospital" },
};

const sceneCues = [
  { match: "살아있어! 다행이다", bg: "cg_02_hospital_wake_2", sprite: null },
  { match: "그러니까, 정리하면요.", bg: "bg_hospital", sprite: "emotion_basic" },
  { match: "제가 언덕에서 브레이크가 고장 났고", sprite: "emotion_awkward" },
  { match: "—그래서 제가 책임질게요.", sprite: "emotion_basic" },
  { match: "몰라요.", sprite: "emotion_blank" },
  { match: "근데 책임진다는 말은", sprite: "emotion_smile" },
  { match: "내 질문을 자르듯", bg: "bg_hospital", sprite: "emotion_smile" },
  { match: "문이 닫히고, 병실엔 나 혼자 남았다.", sprite: null },

  { match: "동아리실은 생각보다 조용했다.", bg: "bg_clubroom", sprite: null },
  { match: "어! 그때 그—", bg: "bg_clubroom", sprite: "emotion_surprised" },
  { match: "…누구시더라?", sprite: "emotion_blank" },
  { match: "…아! 자전거!", sprite: "emotion_surprised" },
  { match: "…어. 이거 좀 곤란한데.", sprite: "emotion_awkward" },
  { match: "그 사람은 잠깐 나를 빤히 보더니 씩 웃었다.", sprite: "emotion_smile" },
  { match: "오. 저는 비둘기요.", sprite: "emotion_smile" },
  { match: "부장. 얘 붙여요.", sprite: "emotion_smile" },
  { match: "강아지 좋아한대요. 됐어요.", sprite: "emotion_smile" },
  { match: "…내 팔을 봤잖아.", sprite: "emotion_basic" },

  { match: "그리고 그 주 금요일, 부장이 공지를 띄웠다.", bg: "bg_clubroom", sprite: "emotion_basic" },
  { match: "야, 신입. 물 좀.", bg: "bg_clubroom", sprite: "emotion_basic" },
  { match: "…너 요즘 왜 그래?", sprite: "emotion_awkward" },
  { match: "내가 책임지고 무대 세울게.", sprite: "emotion_basic" },
  { match: "연습은 지옥이었다.", bg: "bg_clubroom", sprite: "emotion_basic" },
  { match: "연습이 거듭될수록, 이상한 게 하나둘 늘었다.", bg: "bg_clubroom", sprite: "emotion_basic" },
  { match: "그거야! 방금 그거! 한 번 더!", sprite: "emotion_smile" },
  { match: "…너 그 말 어디서 배웠어?", sprite: "emotion_surprised" },
  { match: "흐음. 역시.", sprite: "emotion_smile" },
  { match: "그것도 한 12퍼센트쯤.", sprite: "emotion_awkward" },
  { match: "봤지? 늘었잖아.", sprite: "emotion_smile" },
  { match: "싫어. 성장 서사가 한눈에 보이는데.", sprite: "emotion_pout" },

  { match: "축제에서 니유 선배와 다니는 건", bg: "bg_festival", sprite: "emotion_basic" },
  { match: "오. 너 지금 나 잡았다?", sprite: "emotion_smile" },
  { match: "잘했어. 나 잘 잃어버려.", sprite: "emotion_smile" },
  { match: "사격 부스에서 사달이 났다.", bg: "bg_festivalbooth", sprite: "emotion_basic" },
  { match: "이거 무효야. 바람 불었어.", sprite: "emotion_wronged" },
  { match: "…총이 휘었어.", sprite: "emotion_pout" },
  { match: "니유는 내기에 진지한 사람이야.", sprite: "date_basic" },
  { match: "나는 내기에 진지한 사람이야.", sprite: "emotion_basic" },
  { match: "다음은 헤나 부스였다.", bg: "bg_festivalbooth", sprite: "emotion_basic" },
  { match: "그거 완전 퍼즐이네.", sprite: "emotion_smile" },
  { match: "오오. 진짜 이어진다. 신기해.", sprite: "emotion_smile" },
  { match: "중앙 광장에서는 학생회가", bg: "bg_festival", sprite: "emotion_basic" },
  { match: "봤어? 이제 음악이 널 끌고 가는 게 아니라", sprite: "emotion_smile" },
  { match: "사달은 다트 부스에서 났다.", bg: "bg_festivalbooth", sprite: "emotion_basic" },
  { match: "저 부스 재미없겠더라.", sprite: "emotion_awkward" },
  { match: "…괜찮아?", sprite: "emotion_sad" },
  { match: "해가 지기 전, 마지막으로 인생네컷을 찍었다.", bg: "bg_festivalbooth", sprite: "emotion_basic" },
  { match: "아. 망했다.", sprite: "emotion_awkward" },

  { match: "구두는 뛸 때 불편해.", bg: "bg_datestreet", sprite: "date_basic" },
  { match: "내기값 갚는 날이잖아.", sprite: "date_smile" },
  { match: "야, 근데 저거 여름에도 파나?", sprite: "date_surprised" },
  { match: "선배가 데려간다던 파스타집은", bg: "bg_datestreet", sprite: "date_basic" },
  { match: "이상하다. 분명 여기서 꺾으면", sprite: "date_subtle" },
  { match: "안 와봤어. 전단지에서 봤어.", sprite: "date_smile" },
  { match: "전단지는 그날 코 푸는 데 썼어.", sprite: "date_wronged" },
  { match: "자리에 앉자마자 선배는 메뉴판을", bg: "bg_resaurant", sprite: "date_basic" },
  { match: "그 말 벌써 세 번째예요.", sprite: "date_subtle" },
  { match: "…어떻게 알았지.", sprite: "date_surprised" },
  { match: "많은 거랑 느린 거랑 달라.", bg: "bg_resaurant", sprite: "date_sad" },
  { match: "아. 티라미수.", sprite: "date_smile" },
  { match: "너는 왜 춤이 배우고 싶었어.", sprite: "date_basic" },
  { match: "그럼 거의 찾았네.", sprite: "date_smile" },
  { match: "헤어지는 길, 버스 정류장까지", bg: "bg_datestreet", sprite: "date_basic" },
  { match: "정류장에 도착하고", bg: "bg_busstaion", sprite: "date_basic" },
  { match: "간다. 월요일에 봐.", sprite: "date_smile" },

  { match: "공연 당일.", bg: "bg_school", sprite: null },
  { match: "조였다며.", sprite: "emotion_basic" },
  { match: "그럼 시작을 30분 미뤄?", sprite: "emotion_awkward" },
  { match: "…확인했다잖아. 가자.", sprite: "emotion_basic" },
  { match: "자! 쫄지 마.", sprite: "emotion_smile" },

  { match: "의사 선생님이 갈비뼈에 금 갔대.", bg: "bg_hospital", sprite: "emotion_sad" },
  { match: "치료비는 내가 낼게.", sprite: "emotion_awkward" },
  { match: "다, 책임질게.", sprite: "emotion_sad" },
  { match: "문자를 보내봤다.", phoneAction: "open" },
  { match: "다음 날 새벽, 나는 알람을", phoneAction: "close" },
  { match: "선배야말로 얼굴 안 보고 간다면서요.", bg: "bg_hospital", sprite: "emotion_awkward" },
  { match: "우유, 흔들어 마셔.", sprite: "emotion_awkward" },
  { match: "퇴원하고 동아리실에 갔다.", bg: "bg_clubroom", sprite: null },
  { match: "그리고 그 주 목요일, 캠퍼스에서", bg: "bg_school", sprite: null },
  { match: "무리하지 마시고", sprite: "emotion_sad" },
  { match: "그날 저녁, 나는 학교를 뒤졌다.", bg: "bg_school", sprite: null },
  { match: "설마가 아니길 바라면서", bg: "bg_road", sprite: null },
];

const effectCues = [
  { match: "끼이이이익", sound: "squeak", effect: "shake" },
  { match: "시야가 하얗다.", effect: "blink" },
  { match: "빵—!", sound: "bang", effect: "black" },
  { match: "빵!", sound: "bang", effect: "black" },
  { match: "쾅—!", sound: "bang", effect: "black" },
];

function parseStory(markdown) {
  const steps = [];
  const lines = markdown.replace(/\r/g, "").replace(/\\/g, "").split("\n");
  let paragraph = [];
  let pendingVisual;
  let pendingChapter;
  let hasStarted = false;
  let currentChapter = chapterInfo["프롤로그 — 첫 만남(?)"];
  let baseBackground = currentChapter.bg;
  let visibleBackground = "";

  const decorate = (step) => {
    if (pendingChapter) {
      step.chapter = pendingChapter;
      step.bg = pendingChapter.bg;
      step.sprite = null;
      baseBackground = pendingChapter.bg;
      visibleBackground = pendingChapter.bg;
      pendingChapter = null;
    }
    if (pendingVisual) {
      step.bg = pendingVisual;
      step.sprite = null;
      visibleBackground = pendingVisual;
      pendingVisual = undefined;
    }
    const cue = sceneCues.find((item) => step.text?.includes(item.match));
    if (cue) {
      const cueValues = Object.fromEntries(Object.entries(cue).filter(([key]) => key !== "match"));
      Object.assign(step, cueValues);
      if (cue.bg) {
        visibleBackground = cue.bg;
        if (!cue.bg.startsWith("cg_")) baseBackground = cue.bg;
      } else if (cue.sprite && visibleBackground.startsWith("cg_")) {
        step.bg = baseBackground;
        visibleBackground = baseBackground;
      }
    }
    const effect = effectCues.find((item) => step.text?.includes(item.match));
    if (effect) Object.assign(step, Object.fromEntries(Object.entries(effect).filter(([key]) => key !== "match")));
    steps.push(step);
  };

  const flushParagraph = () => {
    if (!paragraph.length) return;
    let text = paragraph.join(" ").trim();
    paragraph = [];
    const thought = /^\*[^*].*\*$/.test(text);
    if (thought) text = text.slice(1, -1).trim();
    if (text) decorate({ text, thought });
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();
    const heading = line.match(/^##\s+(.+)$/);

    if (heading?.[1].startsWith("에필로그")) {
      flushParagraph();
      break;
    }
    if (heading) {
      flushParagraph();
      hasStarted = true;
      currentChapter = chapterInfo[heading[1]] || currentChapter;
      pendingChapter = currentChapter;
      continue;
    }
    if (!hasStarted) continue;

    if (!line || line === "---") {
      flushParagraph();
      continue;
    }

    if (line === "당신의 답변은?") {
      flushParagraph();
      decorate({ type: "answer", text: line });
      continue;
    }
    if (line.includes("입력 후 페이드아웃")) continue;

    const visualLine = line.startsWith("*![") && line.endsWith(")*") ? line.slice(1, -1) : line;
    const imageMatch = visualLine.match(/^!\[[^\]]*\]\((?:images\/)?([^\)]+)\)$/);
    if (imageMatch) {
      flushParagraph();
      pendingVisual = idByFilename[imageMatch[1]];
      continue;
    }

    if (/^>\s*\*\*선택지/.test(line)) {
      flushParagraph();
      const prompt = line.replace(/^>\s*\*\*/, "").replace(/\*\*$/, "").trim();
      const options = [];
      let cursor = index + 1;
      while (cursor < lines.length) {
        const candidate = lines[cursor].trim();
        if (!candidate) {
          cursor += 1;
          continue;
        }
        if (!candidate.startsWith(">")) break;
        const optionMatch = candidate.match(/^>\s*[A-Z]\.\s*(?:「(.+?)」|(.+?))\s*→\s*(.+)$/);
        if (optionMatch) options.push({ label: (optionMatch[1] || optionMatch[2]).trim(), result: optionMatch[3].trim() });
        cursor += 1;
      }
      index = cursor - 1;
      decorate({ type: "choice", text: prompt.replace(/^선택지\s*\d*\s*[—-]?\s*/, ""), options });
      continue;
    }

    const dialogue = line.match(/^>\s*([^:]+):\s*(?:"([\s\S]+)"|「([\s\S]+)」)$/);
    if (dialogue) {
      flushParagraph();
      const isPhoneMessage = dialogue[3] !== undefined;
      decorate({
        type: isPhoneMessage ? "phone" : undefined,
        speaker: dialogue[1].trim(),
        text: (dialogue[2] || dialogue[3]).trim(),
      });
      continue;
    }

    if (line.startsWith(">")) continue;
    paragraph.push(line);
  }

  flushParagraph();
  return steps;
}

let story = [];

async function loadStory() {
  const response = await fetch(`${encodeURI(STORY_SOURCE_URL)}?v=${R2_VERSION}`, { cache: "no-store" });
  if (!response.ok) throw new Error(`스토리 원고를 불러오지 못했습니다. (${response.status})`);
  story = parseStory(await response.text());
  if (!story.length) throw new Error("스토리 원고에서 플레이할 장면을 찾지 못했습니다.");
}

const $ = (selector) => document.querySelector(selector);
const titleScreen = $("#title-screen");
const gameScreen = $("#game-screen");
const sceneBg = $("#scene-bg");
const spriteLayers = [$("#scene-sprite-a"), $("#scene-sprite-b")];
const sceneStage = $("#scene-stage");
const sceneCurtain = $("#scene-curtain");
const dialogueText = $("#dialogue-text");
const speakerName = $("#speaker-name");
const dialogueBox = $("#dialogue-box");
const choicePanel = $("#choice-panel");
const choiceTitle = $("#choice-title");
const choiceButtons = $("#choice-buttons");
const phonePanel = $("#phone-panel");
const phoneMessages = $("#phone-messages");
const answerPanel = $("#answer-panel");
const answerInput = $("#story-answer");
const endCard = $("#end-card");
const nameDialog = $("#name-dialog");
const galleryDialog = $("#gallery-dialog");
const imageDialog = $("#image-dialog");

let nickname = localStorage.getItem("neeyu.nickname") || "";
let savedUnlocks = [];
try {
  savedUnlocks = JSON.parse(localStorage.getItem(UNLOCK_STORAGE_KEY) || "[]");
} catch {
  localStorage.removeItem(UNLOCK_STORAGE_KEY);
}

let unlocked = new Set(savedUnlocks.filter((id) => galleryImageIds.has(id)));
let runtimeStory = [];
let storyIndex = 0;
let currentBg = "";
let currentSprite = "";
let visibleSpriteLayer = 0;
let spriteTransitionToken = 0;
let typingTimer = null;
let isTyping = false;
let fullText = "";
let awaitingChoice = false;
let awaitingAnswer = false;
let phoneIsOpen = false;
let activeChapter = chapterInfo["프롤로그 — 첫 만남(?)"];

function setScreen(screen) {
  document.querySelectorAll(".screen").forEach((item) => item.classList.toggle("is-active", item === screen));
}

function preloadImage(item, timeout = 10000) {
  return new Promise((resolve) => {
    const image = new Image();
    let settled = false;
    const finish = (ok) => {
      if (settled) return;
      settled = true;
      resolve({ ...item, ok });
    };
    image.onload = () => finish(true);
    image.onerror = () => finish(false);
    image.src = item.url;
    window.setTimeout(() => finish(false), timeout);
  });
}

async function preloadAssets() {
  let completed = 0;
  let failed = 0;
  let cursor = 0;
  const worker = async () => {
    while (cursor < images.length) {
      const item = images[cursor];
      cursor += 1;
      const result = await preloadImage(item);
      completed += 1;
      if (!result.ok) failed += 1;
      const percent = Math.round((completed / images.length) * 100);
      $("#loading-bar").style.width = `${percent}%`;
      $("#loading-percent").textContent = `${percent}%`;
      $("#loading-status").textContent = `장면 이미지 ${completed} / ${images.length}`;
    }
  };
  await Promise.all(Array.from({ length: 4 }, worker));
  $("#loading-status").textContent = failed ? `준비 완료 · 불러오지 못한 이미지 ${failed}개` : "준비 완료";
  return failed;
}

function saveUnlocks() {
  localStorage.setItem(UNLOCK_STORAGE_KEY, JSON.stringify([...unlocked]));
}

function unlockImage(id) {
  if (!galleryImageIds.has(id) || unlocked.has(id)) return;
  unlocked.add(id);
  saveUnlocks();
  updateGalleryState();
}

function updateGalleryState() {
  const count = unlocked.size;
  const galleryButton = $("#gallery-button");
  galleryButton.disabled = count === 0;
  galleryButton.classList.toggle("is-locked", count === 0);
  $("#gallery-count").textContent = String(count).padStart(2, "0");
  $("#game-gallery-count").textContent = String(count).padStart(2, "0");
  $("#gallery-button-copy").textContent = count ? `${galleryImages.length}장 중 ${count}장 해금` : "게임에서 이미지를 발견하면 열려요";
}

function renderGallery() {
  const grid = $("#gallery-grid");
  grid.replaceChildren();
  galleryImages.forEach((item, index) => {
    const isUnlocked = unlocked.has(item.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `gallery-item${isUnlocked ? "" : " is-locked"}`;
    button.disabled = !isUnlocked;
    button.setAttribute("aria-label", isUnlocked ? item.label : `잠긴 이미지 ${index + 1}`);
    if (isUnlocked) {
      const img = document.createElement("img");
      img.src = item.url;
      img.alt = "";
      const label = document.createElement("span");
      label.textContent = `${String(index + 1).padStart(2, "0")} · ${item.label}`;
      button.append(img, label);
      button.addEventListener("click", () => openViewer(item));
    }
    grid.append(button);
  });
}

function openGallery() {
  renderGallery();
  galleryDialog.showModal();
}

function openViewer(item) {
  $("#viewer-image").src = item.url;
  $("#viewer-caption").textContent = item.label;
  imageDialog.showModal();
}

function beginGame() {
  const input = $("#nickname");
  input.value = nickname;
  nameDialog.showModal();
  window.setTimeout(() => input.focus(), 50);
}

function setPhoneOpen(open, reset = false) {
  phoneIsOpen = open;
  phonePanel.classList.toggle("is-visible", open);
  phonePanel.setAttribute("aria-hidden", String(!open));
  if (reset) phoneMessages.replaceChildren();
}

function addPhoneMessage(step) {
  if (!phoneIsOpen) setPhoneOpen(true, true);
  const outgoing = step.speaker === "U";
  const group = document.createElement("div");
  group.className = `phone-message ${outgoing ? "is-outgoing" : "is-incoming"}`;

  const bubble = document.createElement("p");
  bubble.textContent = step.text;
  group.append(bubble);

  if (outgoing) {
    const receipt = document.createElement("small");
    receipt.textContent = "읽음";
    group.append(receipt);
  }

  phoneMessages.append(group);
  requestAnimationFrame(() => group.classList.add("is-visible"));
  phoneMessages.scrollTo({ top: phoneMessages.scrollHeight, behavior: "smooth" });
}

function clearSprites(immediate = false) {
  spriteTransitionToken += 1;
  currentSprite = "";
  spriteLayers.forEach((layer) => {
    layer.classList.remove("is-visible");
    if (immediate) layer.removeAttribute("src");
    else window.setTimeout(() => layer.removeAttribute("src"), 650);
  });
}

function startStory() {
  runtimeStory = story.map((step) => ({ ...step, options: step.options?.map((option) => ({ ...option })) }));
  storyIndex = 0;
  currentBg = "";
  clearSprites(true);
  awaitingChoice = false;
  awaitingAnswer = false;
  choicePanel.hidden = true;
  answerPanel.hidden = true;
  setPhoneOpen(false, true);
  sceneCurtain.classList.remove("fade-to-black");
  sceneBg.removeAttribute("src");
  endCard.classList.remove("is-visible");
  dialogueBox.hidden = false;
  setScreen(gameScreen);
  showStep(runtimeStory[storyIndex]);
}

function changeBackground(id) {
  if (!id || id === currentBg || !byId[id]) return;
  currentBg = id;
  sceneBg.style.opacity = "0";
  window.setTimeout(() => {
    sceneBg.src = byId[id].url;
    unlockImage(id);
  }, 220);
}

function changeSprite(id) {
  if (id === undefined || id === currentSprite) return;
  if (!id) {
    clearSprites(false);
    return;
  }
  if (!byId[id]) return;

  currentSprite = id;
  const token = ++spriteTransitionToken;
  const oldLayer = spriteLayers[visibleSpriteLayer];
  const incomingIndex = visibleSpriteLayer === 0 ? 1 : 0;
  const incomingLayer = spriteLayers[incomingIndex];
  incomingLayer.classList.remove("is-visible");
  incomingLayer.style.zIndex = "3";
  oldLayer.style.zIndex = "2";
  let revealed = false;

  const reveal = () => {
    if (revealed || token !== spriteTransitionToken) return;
    revealed = true;
    requestAnimationFrame(() => incomingLayer.classList.add("is-visible"));
    window.setTimeout(() => {
      if (token !== spriteTransitionToken) return;
      oldLayer.classList.remove("is-visible");
      oldLayer.removeAttribute("src");
      visibleSpriteLayer = incomingIndex;
    }, 650);
  };

  incomingLayer.onload = reveal;
  incomingLayer.onerror = () => incomingLayer.classList.remove("is-visible");
  incomingLayer.src = byId[id].url;
  if (incomingLayer.complete) {
    if (incomingLayer.decode) incomingLayer.decode().then(reveal).catch(reveal);
    else reveal();
  }
}

function playSound(id) {
  const audio = $(`#sfx-${id}`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function playEffect(effect) {
  if (!effect) return;
  if (effect === "black") {
    sceneCurtain.classList.remove("flash-black");
    void sceneCurtain.offsetWidth;
    sceneCurtain.classList.add("flash-black");
  }
  if (effect === "shake") {
    sceneStage.classList.remove("turn-effect");
    void sceneStage.offsetWidth;
    sceneStage.classList.add("turn-effect");
  }
  if (effect === "blink") {
    sceneStage.classList.remove("blink-effect");
    void sceneStage.offsetWidth;
    sceneStage.classList.add("blink-effect");
  }
}

function typeText(text) {
  window.clearInterval(typingTimer);
  fullText = text;
  dialogueText.textContent = "";
  isTyping = true;
  let index = 0;
  typingTimer = window.setInterval(() => {
    index += 1;
    dialogueText.textContent = text.slice(0, index);
    if (index >= text.length) {
      window.clearInterval(typingTimer);
      isTyping = false;
    }
  }, 24);
}

function updateChapter(chapter) {
  if (!chapter) return;
  activeChapter = chapter;
  $("#chapter-eyebrow").textContent = chapter.eyebrow;
  $("#chapter-title").textContent = chapter.title;
}

function resolveSpeaker(step) {
  if (!step.speaker || step.speaker === "U") return nickname;
  if (step.speaker === "N") return activeChapter.index === 0 ? "???" : "니유 선배";
  return step.speaker;
}

function showChoice(step) {
  awaitingChoice = true;
  choiceTitle.textContent = step.text;
  choiceButtons.replaceChildren();
  step.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span>${option.label}`;
    button.addEventListener("click", () => selectChoice(option));
    choiceButtons.append(button);
  });
  choicePanel.hidden = false;
}

function selectChoice(option) {
  awaitingChoice = false;
  choicePanel.hidden = true;
  const resultSprite = option.result.includes("도망") ? "emotion_blush" : option.result.includes("천천히") ? "emotion_smile" : "emotion_basic";
  const resultScene = activeChapter.index === 4 ? { bg: "bg_festival", sprite: resultSprite } : {};
  runtimeStory.splice(
    storyIndex + 1,
    0,
    { speaker: "U", text: option.label },
    { text: option.result, ...resultScene },
  );
  storyIndex += 1;
  showStep(runtimeStory[storyIndex]);
}

function showAnswer() {
  awaitingAnswer = true;
  answerInput.value = "";
  answerPanel.hidden = false;
  window.setTimeout(() => answerInput.focus(), 80);
}

function finishChapterSeven(answer) {
  awaitingAnswer = false;
  localStorage.setItem("neeyu.final-answer", answer);
  answerPanel.hidden = true;
  setPhoneOpen(false);
  sceneCurtain.classList.add("fade-to-black");
  window.setTimeout(() => {
    dialogueBox.hidden = true;
    clearSprites(false);
    endCard.classList.add("is-visible");
  }, 900);
}

function showStep(step) {
  updateChapter(step.chapter);
  changeBackground(step.bg);
  changeSprite(step.sprite);
  if (typeof step.blur === "boolean") sceneBg.classList.toggle("is-blurred", step.blur);
  if (step.phoneAction === "open") setPhoneOpen(true, true);
  if (step.phoneAction === "close") setPhoneOpen(false);

  const isNeeyu = step.speaker === "N";
  speakerName.textContent = step.type === "choice" ? "선택" : resolveSpeaker(step);
  speakerName.classList.toggle("is-girl", isNeeyu);
  speakerName.classList.toggle("is-other", Boolean(step.speaker && !["N", "U"].includes(step.speaker)));
  dialogueText.classList.toggle("is-thought", Boolean(step.thought));

  if (step.type === "phone") {
    window.clearInterval(typingTimer);
    isTyping = false;
    fullText = "";
    dialogueBox.hidden = true;
    addPhoneMessage(step);
  } else {
    dialogueBox.hidden = false;
    typeText(step.text);
  }

  playSound(step.sound);
  playEffect(step.effect);
  if (step.type === "choice") showChoice(step);
  if (step.type === "answer") showAnswer();
}

function advanceStory() {
  if (!gameScreen.classList.contains("is-active") || endCard.classList.contains("is-visible") || awaitingChoice || awaitingAnswer) return;
  if (isTyping) {
    window.clearInterval(typingTimer);
    dialogueText.textContent = fullText;
    isTyping = false;
    return;
  }
  storyIndex += 1;
  if (storyIndex >= runtimeStory.length) {
    dialogueBox.hidden = true;
    clearSprites(false);
    endCard.classList.add("is-visible");
    return;
  }
  showStep(runtimeStory[storyIndex]);
}

function goHome() {
  window.clearInterval(typingTimer);
  isTyping = false;
  awaitingChoice = false;
  awaitingAnswer = false;
  choicePanel.hidden = true;
  answerPanel.hidden = true;
  setPhoneOpen(false, true);
  updateGalleryState();
  setScreen(titleScreen);
}

$("#start-button").addEventListener("click", beginGame);
$("#gallery-button").addEventListener("click", openGallery);
$("#game-gallery-button").addEventListener("click", openGallery);
$("#end-gallery-button").addEventListener("click", openGallery);
$("#gallery-close").addEventListener("click", () => galleryDialog.close());
$("#viewer-close").addEventListener("click", () => imageDialog.close());
$("#name-cancel").addEventListener("click", () => nameDialog.close());
$("#home-button").addEventListener("click", goHome);
$("#end-home-button").addEventListener("click", goHome);
$("#advance-area").addEventListener("click", advanceStory);
$("#next-button").addEventListener("click", advanceStory);

$("#name-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const value = $("#nickname").value.trim();
  if (!value) return;
  nickname = value;
  localStorage.setItem("neeyu.nickname", nickname);
  nameDialog.close();
  startStory();
});

$("#answer-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = answerInput.value.trim();
  if (!answer) return;
  finishChapterSeven(answer);
});

[galleryDialog, imageDialog].forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

document.addEventListener("keydown", (event) => {
  if (!gameScreen.classList.contains("is-active") || nameDialog.open || galleryDialog.open || imageDialog.open) return;
  if (awaitingAnswer) return;
  if (awaitingChoice && /^Digit[12]$/.test(event.code)) {
    const option = runtimeStory[storyIndex].options[Number(event.code.slice(-1)) - 1];
    if (option) selectChoice(option);
    return;
  }
  if (event.code === "Enter" || event.code === "Space") {
    event.preventDefault();
    advanceStory();
  }
});

sceneBg.addEventListener("error", () => { sceneBg.style.opacity = "0"; });
sceneBg.addEventListener("load", () => { sceneBg.style.opacity = "1"; });

updateGalleryState();

async function initialize() {
  try {
    const [, failed] = await Promise.all([loadStory(), preloadAssets()]);
    await new Promise((resolve) => window.setTimeout(resolve, failed ? 900 : 450));
    setScreen(titleScreen);
    window.setTimeout(() => titleScreen.classList.add("animate-title"), 120);
  } catch (error) {
    console.error(error);
    $("#loading-status").textContent = "이야기를 불러오지 못했습니다. 새로고침해 주세요.";
    $("#loading-percent").textContent = "ERROR";
  }
}

initialize();
