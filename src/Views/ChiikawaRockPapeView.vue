<script setup>
import { nextTick, ref } from 'vue';
import chiiGif from '@/assets/Image/chiikawa-rock-paper/chii.gif';
import usagiiGif from '@/assets/Image/chiikawa-rock-paper/Usagii-7.gif';

const selectedChoice = ref('');
const playerChoice = ref('❓');
const computerChoice = ref('❓');
const playerWinCount = ref(0);
const computerWinCount = ref(0);
const drawCount = ref(0);
const resultText = ref('—');
const resultClass = ref('');
const history = ref('');
const total = ref(null);
const animationKey = ref(0);

const emojiMap = { '石頭': '✊', '剪刀': '✌️', '布': '🖐' };

function playSelectedChoice() {
    if (!selectedChoice.value) {
        alert('請先選擇出拳！(｡•́︿•̀｡)');
        return;
    }
    playGame(selectedChoice.value);
}

// 電腦出拳的方法
function getComputerChoice() {

    // 先宣告choices為陣列石頭(0)剪刀(1)布(2)
    const choices = ['石頭', '剪刀', '布'];
    // 使用數學方法 隨機return出0,1,2三個數字
    return choices[Math.floor(Math.random() * choices.length)];
}

//判斷輸贏的方法
function judge(player, computer) {
    if (player === computer) return '平手';
    if (
        (player === '石頭' && computer === '剪刀') ||
        (player === '剪刀' && computer === '布') ||
        (player === '布' && computer === '石頭')
    ) return '玩家贏';
    else return '電腦贏';
}

// 玩一局的方法
function playGame(player) {
    const computer = getComputerChoice();
    const result = judge(player, computer);

    playerChoice.value = emojiMap[player];
    computerChoice.value = emojiMap[computer];
    animationKey.value++;

    if (result === '玩家贏') {
        resultText.value = '🎉 玩家贏！';
        resultClass.value = 'win';
        playerWinCount.value++;
    } else if (result === '電腦贏') {
        resultText.value = '😿 電腦贏！';
        resultClass.value = 'lose';
        computerWinCount.value++;
    } else {
        resultText.value = '🤝 平手！';
        resultClass.value = 'draw';
        drawCount.value++;
    }

    history.value += `玩家: ${player} 電腦: ${computer} 結果: ${result} 玩家贏次數: ${playerWinCount.value} 電腦贏次數: ${computerWinCount.value}\n`;
    nextTick(() => {
        total.value.scrollTop = total.value.scrollHeight;
    });
}
</script>

<template>
    <main class="rock-paper-page">
    <h1>✦ 猜拳遊戲 ✦</h1>
    <p class="subtitle">吉伊卡哇也想贏！(๑˃ᴗ˂)ﻭ</p>

    <div class="game-area">
        <!-- 玩家 -->
        <div class="panel">
            <div class="panel-title">玩家</div>
            <div class="avatar">
                <img :src="usagiiGif" alt="玩家烏薩奇">
            </div>
            <div :key="animationKey" class="choice-display pop">{{ playerChoice }}</div>
            <div class="choices">
                <label>
                    <input v-model="selectedChoice" type="radio" name="player-choice" value="石頭">
                    <div class="choice-btn">✊<span>石頭</span></div>
                </label>
                <label>
                    <input v-model="selectedChoice" type="radio" name="player-choice" value="剪刀">
                    <div class="choice-btn">✌️<span>剪刀</span></div>
                </label>
                <label>
                    <input v-model="selectedChoice" type="radio" name="player-choice" value="布">
                    <div class="choice-btn">🖐<span>布</span></div>
                </label>
            </div>
        </div>

        <!-- 中間 -->
        <div class="center">
            <div class="vs-badge">VS</div>
            <button type="button" id="play-btn" @click="playSelectedChoice">出拳！</button>
            <div class="result-badge" :class="resultClass">{{ resultText }}</div>
        </div>

        <!-- 電腦 -->
        <div class="panel">
            <div class="panel-title">電腦</div>
            <div class="avatar">
                <img :src="chiiGif" alt="電腦吉伊卡哇">
            </div>
            <div :key="animationKey" class="choice-display pop">{{ computerChoice }}</div>
        </div>
    </div>

    <!-- 計分板 -->
    <div class="scoreboard">
        <div class="score-item">
            <span class="score-label">🐭 玩家贏</span>
            <span class="score-num">{{ playerWinCount }}</span>
        </div>
        <div class="score-item">
            <span class="score-label">🤝 平手</span>
            <span class="score-num">{{ drawCount }}</span>
        </div>
        <div class="score-item">
            <span class="score-label">🐱 電腦贏</span>
            <span class="score-num">{{ computerWinCount }}</span>
        </div>
    </div>

    <!-- 歷史紀錄 -->
    <div class="history-wrap">
        <div class="history-title">📜 對戰紀錄</div>
        <textarea id="total" ref="total" :value="history" readonly placeholder="快來出拳吧～"></textarea>
    </div>
    </main>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

.rock-paper-page {
    min-height: 100vh;
    padding: 48px 24px 64px;
    background:
        radial-gradient(circle at 8% 12%, rgba(255, 214, 225, 0.72), transparent 28%),
        radial-gradient(circle at 92% 82%, rgba(212, 236, 224, 0.72), transparent 30%),
        #fffaf5;
}

h1 {
    width: fit-content;
    margin: 0 auto;
    color: #684b51;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 800;
    letter-spacing: 0.12em;
    text-align: center;
}

/* 隱藏標題兩側的裝飾符號，只保留文字。 */
h1 {
    font-size: 0;
}

h1::after {
    content: "猜拳遊戲";
    font-size: clamp(1.8rem, 4vw, 2.5rem);
}

.subtitle {
    margin: 8px auto 32px;
    color: #a27b83;
    font-size: 0.9rem;
    letter-spacing: 0.08em;
    text-align: center;
}

.game-area {
    width: 100%;
    max-width: 940px;
    margin-inline: auto;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 150px minmax(0, 1fr);
    align-items: center;
    gap: 22px;
}

.panel {
    min-width: 0;
    min-height: 420px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 18px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.88);
    border: 1px solid rgba(220, 190, 195, 0.55);
    border-radius: 30px;
    box-shadow:
        0 20px 50px rgba(112, 76, 82, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
}

.panel-title {
    padding: 6px 18px;
    color: #75575d;
    background: #f7e8e9;
    border-radius: 999px;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.16em;
}

.avatar {
    width: min(100%, 230px);
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 24px;
    background: #f5eee8;
}

.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.choice-display {
    min-height: 52px;
    display: grid;
    place-items: center;
    color: #75575d;
    font-size: 2.45rem;
    line-height: 1;
}

.choices {
    display: flex;
    justify-content: center;
    gap: 8px;
    width: 100%;
}

.choices input[type="radio"] {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

.choice-btn {
    min-width: 64px;
    padding: 10px 12px;
    display: grid;
    place-items: center;
    gap: 5px;
    color: #73575d;
    background: #fffaf7;
    border: 1px solid #ead4d6;
    border-radius: 15px;
    font-size: 1.45rem;
    cursor: pointer;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.choice-btn span {
    color: #98747b;
    font-size: 0.72rem;
    letter-spacing: 0.08em;
}

.choices input[type="radio"]:checked+.choice-btn {
    background: #f5dcdf;
    border-color: #c88f99;
    transform: translateY(-3px);
    box-shadow: 0 8px 18px rgba(140, 91, 99, 0.14);
}

.center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 18px;
}

.vs-badge {
    color: #a68187;
    font-size: 0.78rem;
    font-weight: 900;
    letter-spacing: 0.18em;
}

#play-btn {
    min-width: 126px;
    padding: 13px 24px;
    color: #fff;
    background: linear-gradient(135deg, #ad7781, #8d626a);
    border: none;
    border-radius: 999px;
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.16em;
    cursor: pointer;
    box-shadow: 0 12px 24px rgba(116, 75, 82, 0.24);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

#play-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 28px rgba(116, 75, 82, 0.3);
}

#play-btn:active {
    transform: translateY(0);
}

.result-badge {
    min-width: 130px;
    min-height: 42px;
    padding: 9px 16px;
    display: grid;
    place-items: center;
    color: #87676d;
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid #e7d3d5;
    border-radius: 14px;
    font-size: 0.9rem;
    font-weight: 700;
    text-align: center;
    transition: color 0.3s ease, background 0.3s ease, border-color 0.3s ease;
}

.result-badge.win {
    color: #52705d;
    background: #e8f1e9;
    border-color: #bfd1c2;
}

.result-badge.lose {
    color: #956169;
    background: #f6e5e7;
    border-color: #dfbdc2;
}

.result-badge.draw {
    color: #8a744b;
    background: #f4eddb;
    border-color: #ddcfae;
}

.scoreboard {
    width: 100%;
    max-width: 940px;
    margin: 22px auto 0;
    padding: 18px 24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid rgba(220, 190, 195, 0.55);
    border-radius: 22px;
    box-shadow: 0 14px 34px rgba(112, 76, 82, 0.08);
}

.score-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.score-item + .score-item {
    border-left: 1px solid #eadcda;
}

.score-label {
    color: #91747a;
    font-size: 0;
    letter-spacing: 0.08em;
}

.score-item:nth-child(1) .score-label::after {
    content: "玩家贏";
}

.score-item:nth-child(2) .score-label::after {
    content: "平手";
}

.score-item:nth-child(3) .score-label::after {
    content: "電腦贏";
}

.score-label::after {
    font-size: 0.76rem;
}

.score-num {
    color: #684b51;
    font-size: 1.75rem;
    font-weight: 800;
}

.history-wrap {
    width: 100%;
    max-width: 940px;
    margin: 18px auto 0;
    padding: 20px;
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid rgba(220, 190, 195, 0.55);
    border-radius: 22px;
    box-shadow: 0 14px 34px rgba(112, 76, 82, 0.08);
}

.history-title {
    margin-bottom: 10px;
    color: #795c62;
    font-size: 0;
    font-weight: 800;
    letter-spacing: 0.1em;
}

.history-title::after {
    content: "對戰紀錄";
    font-size: 0.82rem;
}

#total {
    width: 100%;
    min-height: 120px;
    padding: 14px 16px;
    color: #725b60;
    background: #faf6f2;
    border: none;
    border-radius: 14px;
    resize: vertical;
    font-family: inherit;
    font-size: 0.82rem;
    line-height: 1.8;
    outline: none;
}

@keyframes pop {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.3);
    }

    100% {
        transform: scale(1);
    }
}

.pop {
    animation: pop 0.35s ease;
}

@media (max-width: 820px) {
    .rock-paper-page {
        padding: 34px 18px 48px;
    }

    .game-area {
        grid-template-columns: 1fr 110px 1fr;
        gap: 14px;
    }

    .panel {
        min-height: 380px;
        padding: 18px 14px;
    }

    .choices {
        gap: 5px;
    }

    .choice-btn {
        min-width: 52px;
        padding: 9px 8px;
    }
}

@media (max-width: 640px) {
    .game-area {
        grid-template-columns: 1fr 1fr;
        align-items: stretch;
    }

    .center {
        grid-column: 1 / -1;
        grid-row: 2;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .panel {
        min-height: auto;
        padding: 16px 10px;
        border-radius: 22px;
    }

    .avatar {
        border-radius: 18px;
    }

    .choices {
        flex-wrap: wrap;
    }

    .choice-btn {
        min-width: 48px;
        font-size: 1.2rem;
    }

    .scoreboard,
    .history-wrap {
        border-radius: 18px;
    }
}

@media (max-width: 420px) {
    .rock-paper-page {
        padding-inline: 12px;
    }

    .game-area {
        gap: 8px;
    }

    .panel {
        padding-inline: 8px;
    }

    .choice-btn {
        min-width: 43px;
        padding-inline: 5px;
    }

    .scoreboard {
        padding-inline: 10px;
    }
}
</style>
