const R2 = "https://pub-51e0a21b82b94533b988af3a0dfe4c04.r2.dev/neeyu/";

const images = [
  { id: "road", label: "언덕길", url: `${R2}01_road.png` },
  { id: "bike", label: "돌진", url: `${R2}01_bike_charge.png` },
  { id: "wake1", label: "눈을 뜨면", url: `${R2}02_hospital_wake_1.png` },
  { id: "wake2", label: "살아있어!", url: `${R2}02_hospital_wake_2.png` },
  { id: "hospital", label: "병실", url: `${R2}02_hospital.png` },
  { id: "normal", label: "의문의 여자", url: `${R2}기본.png` },
  { id: "awkward", label: "애매한 표정", url: `${R2}애매.png` },
  { id: "smile", label: "웃음", url: `${R2}웃음.png` },
  { id: "number", label: "손바닥 위 번호", url: `${R2}03_palm_number.png` },
  { id: "palm", label: "남겨진 연락처", url: `${R2}04_palm.png` },
];

const byId = Object.fromEntries(images.map((image) => [image.id, image]));

const story = [
  { bg: "road", text: "아침 8시 40분. 1교시 강의까지는 딱 20분." },
  { text: "헤드셋 너머로 흘러나오는 음악이 세상의 볼륨을 반쯤 줄여준다. 이어폰이 아니라 헤드셋을 고집하는 이유가 이거다. 세상이 조용해지니까." },
  { text: "오늘 발표 순서 세 번째였나, 네 번째였나….", thought: true },
  { text: "그런 시답잖은 걸 생각하며 언덕길을 오르고 있었다. 평화로웠다. 적어도 그 소리를 듣기 전까지는." },
  { text: "끼이이이익!", sound: "squeak", effect: "shake", thought: true },
  { text: "헤드셋을 뚫고 들어올 정도의 소리. 금속이 비명을 지르는 것 같은. 나는 반사적으로 뒤를 돌아봤다." },
  { text: "그리고, 봤다." },
  { bg: "bike", text: "내리막 저편에서, 자전거 한 대가 나를 향해 돌진하고 있었다.", effect: "turn" },
  { text: "안장 위에는 여자애 하나가 타고 있었는데—페달을 밟는 것도, 브레이크를 잡는 것도 아니고, 그냥 두 손으로 핸들을 붙든 채 눈을 질끈 감고 있었다." },
  { text: "이상하게도, 그 짧은 순간에 나는 딴생각을 했다." },
  { text: "아, 저 표정. 브레이크가 고장 났—", thought: true },
  { text: "……", sound: "bang", effect: "black" },
  { bg: "wake1", blur: true, text: "시야가 하얗다.", effect: "blink" },
  { text: "아니, 하얀 게 아니라—누군가의 얼굴이 너무 가까이 있어서 초점이 안 맞는 거였다." },
  { blur: false, text: "천천히, 세상이 형태를 되찾는다. 형광등. 낯선 천장. 소독약 냄새. 그리고 코앞에서 나를 들여다보고 있는, 한 여자애의 얼굴." },
  { text: "눈썹은 산처럼 팔자로 휘어 있고, 눈은 금방이라도 울 것처럼 그렁그렁했다. 세상 모든 걱정을 혼자 짊어진 것 같은 표정." },
  { text: "우리는 몇 초간 그렇게 눈만 마주쳤다. 그리고 그 사람이 입을 열었다." },
  { speaker: "girl", text: "…살아있다." },
  { text: "…뭐?" },
  { bg: "wake2", speaker: "girl", text: "살아있어! 다행이다, 진짜, 저 방금 인생에서 제일 빠르게 달렸거든요. 구급차보다 제가 먼저 도착했어요. 아, 근데 그건 자랑이 아니고—" },
  { text: "이 사람 뭐지.", thought: true },
  { text: "방금 나를 친 사람이, 나보다 더 정신없어 보였다." },
  { bg: "hospital", sprite: "normal", speaker: "girl", text: "그러니까, 정리하면요." },
  { text: "그 사람은 손가락을 하나씩 접어가며 말했다. 접는 순서가 엄지, 검지가 아니라 약지부터라는 게 어딘가 불안했다." },
  { sprite: "awkward", speaker: "girl", text: "제가 언덕에서 브레이크가 고장 났고, 그쪽을 쳤고, 그쪽은 다리에 금이 갔고, 그래서 지금 여기 있고—" },
  { text: "접었던 손가락을 활짝 펴며, 그 사람은 선언하듯 말했다. 무슨 대단한 결심이라도 한 표정으로." },
  { speaker: "girl", text: "—그래서 제가 책임질게요." },
  { text: "네? 무슨 책임을요." },
  { speaker: "girl", text: "몰라요." },
  { text: "…몰라?", thought: true },
  { speaker: "girl", text: "근데 책임진다는 말은, 이럴 때 하는 거잖아요. 만화에서 봤어요." },
  { text: "뭐라고 대꾸해야 할지 몰라서, 일단 제일 궁금한 걸 물었다." },
  { text: "…누구세요?" },
  { text: "그 사람은 잠깐 멈칫하더니, 뭔가 대답하려다 말고 갑자기 주변을 두리번거렸다. 메모지나 펜 같은 걸 찾는 것 같았다." },
  { text: "그런데 협탁엔 펜만 있고 쓸 만한 종이가 없었다. 잠깐 고민하던 그 사람은—내 손을 덥석 잡았다." },
  { text: "어, 잠깐—" },
  { bg: "number", sprite: null, text: "말릴 새도 없이 손바닥에 펜이 닿았다. 차갑고 간지러운 감촉. 숫자 열한 개가 삐뚤빼뚤하게 적혀 내려갔다.", effect: "black" },
  { text: "펜을 쥔 손은 정신없어 보였는데, 이상하게 글씨를 쓰는 동안엔 눈빛이 진지했다." },
  { speaker: "girl", text: "치료비든 뭐든, 필요한 거 생기면 연락해요. 진짜로." },
  { text: "다 쓰고 나서, 그 사람은 만족스러운 표정으로 내 손을 놓았다. 손바닥이 아직 따뜻했다." },
  { bg: "hospital", sprite: "smile", text: "이름은—" },
  { speaker: "girl", text: "연락해요!" },
  { text: "내 질문을 자르듯, 그 사람은 벌써 문 쪽으로 걸어가며 손을 흔들었다. 그러곤 나가버렸다." },
  { sprite: null, text: "문이 닫히고, 병실엔 나 혼자 남았다." },
  { text: "나는 손바닥을 내려다봤다." },
  { bg: "palm", text: "삐뚤빼뚤한 번호. 이름도 모르는 사람의 연락처가 잉크로 남아 있었다." },
  { text: "…이름을 안 물어봤네. 아니, 물어봤는데 안 알려준 건가.", thought: true },
  { text: "그게, 그 사람과의 첫 만남이었다." },
];

const $ = (selector) => document.querySelector(selector);
const loadingScreen = $("#loading-screen");
const titleScreen = $("#title-screen");
const gameScreen = $("#game-screen");
const sceneBg = $("#scene-bg");
const sceneSprite = $("#scene-sprite");
const sceneStage = $("#scene-stage");
const sceneCurtain = $("#scene-curtain");
const dialogueText = $("#dialogue-text");
const speakerName = $("#speaker-name");
const dialogueBox = $("#dialogue-box");
const endCard = $("#end-card");
const nameDialog = $("#name-dialog");
const galleryDialog = $("#gallery-dialog");
const imageDialog = $("#image-dialog");

let nickname = localStorage.getItem("neeyu.nickname") || "";
let savedUnlocks = [];
try {
  savedUnlocks = JSON.parse(localStorage.getItem("neeyu.unlocked") || "[]");
} catch {
  localStorage.removeItem("neeyu.unlocked");
}
let unlocked = new Set(savedUnlocks.filter((id) => byId[id]));
let storyIndex = 0;
let currentBg = "";
let currentSprite = "";
let typingTimer = null;
let isTyping = false;
let fullText = "";

function setScreen(screen) {
  document.querySelectorAll(".screen").forEach((item) => item.classList.toggle("is-active", item === screen));
}

function preloadImage(item, timeout = 8000) {
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
  const total = images.length;
  const tasks = images.map(async (item) => {
    const result = await preloadImage(item);
    completed += 1;
    if (!result.ok) failed += 1;
    const percent = Math.round((completed / total) * 100);
    $("#loading-bar").style.width = `${percent}%`;
    $("#loading-percent").textContent = `${percent}%`;
    $("#loading-status").textContent = `장면 이미지 ${completed} / ${total}`;
    return result;
  });

  await Promise.all(tasks);
  $("#loading-status").textContent = failed ? `준비 완료 · 불러오지 못한 이미지 ${failed}개` : "준비 완료";
  await new Promise((resolve) => window.setTimeout(resolve, failed ? 900 : 450));
  setScreen(titleScreen);
  window.setTimeout(() => titleScreen.classList.add("animate-title"), 120);
}

function saveUnlocks() {
  localStorage.setItem("neeyu.unlocked", JSON.stringify([...unlocked]));
}

function unlockImage(id) {
  if (!id || !byId[id] || unlocked.has(id)) return;
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
  $("#gallery-button-copy").textContent = count ? `${images.length}장 중 ${count}장 해금` : "게임에서 이미지를 발견하면 열려요";
}

function renderGallery() {
  const grid = $("#gallery-grid");
  grid.replaceChildren();
  images.forEach((item, index) => {
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

function startStory() {
  storyIndex = 0;
  currentBg = "";
  currentSprite = "";
  endCard.classList.remove("is-visible");
  dialogueBox.hidden = false;
  setScreen(gameScreen);
  showStep(story[storyIndex]);
}

function changeImage(element, id, type) {
  if (type === "bg") {
    if (!id || id === currentBg) return;
    currentBg = id;
    element.style.opacity = "0";
    window.setTimeout(() => {
      element.src = byId[id].url;
      element.style.opacity = "1";
      unlockImage(id);
    }, 220);
    return;
  }

  if (id === undefined) return;
  if (!id) {
    currentSprite = "";
    element.classList.remove("has-image");
    window.setTimeout(() => element.removeAttribute("src"), 450);
    return;
  }
  if (id === currentSprite) return;
  currentSprite = id;
  element.classList.remove("has-image");
  window.setTimeout(() => {
    element.src = byId[id].url;
    element.classList.add("has-image");
    unlockImage(id);
  }, 180);
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
  if (effect === "turn" || effect === "shake") {
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

function showStep(step) {
  changeImage(sceneBg, step.bg, "bg");
  changeImage(sceneSprite, step.sprite, "sprite");
  if (typeof step.blur === "boolean") sceneBg.classList.toggle("is-blurred", step.blur);
  const isGirl = step.speaker === "girl";
  speakerName.textContent = isGirl ? "???" : nickname;
  speakerName.classList.toggle("is-girl", isGirl);
  dialogueText.classList.toggle("is-thought", Boolean(step.thought));
  typeText(step.text);
  playSound(step.sound);
  playEffect(step.effect);
}

function advanceStory() {
  if (!gameScreen.classList.contains("is-active") || endCard.classList.contains("is-visible")) return;
  if (isTyping) {
    window.clearInterval(typingTimer);
    dialogueText.textContent = fullText;
    isTyping = false;
    return;
  }
  storyIndex += 1;
  if (storyIndex >= story.length) {
    dialogueBox.hidden = true;
    endCard.classList.add("is-visible");
    return;
  }
  showStep(story[storyIndex]);
}

function goHome() {
  window.clearInterval(typingTimer);
  isTyping = false;
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

[galleryDialog, imageDialog].forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

document.addEventListener("keydown", (event) => {
  if (!gameScreen.classList.contains("is-active") || nameDialog.open || galleryDialog.open || imageDialog.open) return;
  if (event.code === "Enter" || event.code === "Space") {
    event.preventDefault();
    advanceStory();
  }
});

sceneBg.addEventListener("error", () => { sceneBg.style.opacity = "0"; });
sceneBg.addEventListener("load", () => { sceneBg.style.opacity = "1"; });
sceneSprite.addEventListener("error", () => sceneSprite.classList.remove("has-image"));

updateGalleryState();
preloadAssets();
