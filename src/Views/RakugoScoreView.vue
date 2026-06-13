<script setup>
import { computed, ref } from 'vue'

const keyword = ref('')
const filter = ref('all')
const sort = ref('rank')

const students = [
  { name: '朱音', dojo: '春日亭', score: 95, story: '牡丹燈籠' },
  { name: '鶴一郎', dojo: '三遊亭', score: 82, story: '時蕎麥' },
  { name: '小梅', dojo: '春日亭', score: 78, story: '壽限無' },
  { name: '義彥', dojo: '柳家', score: 67, story: '饅頭怕' },
  { name: '辰三', dojo: '立川', score: 55, story: '芝濱' },
  { name: '花乃', dojo: '三遊亭', score: 90, story: '死神' },
  { name: '源之助', dojo: '桂', score: 43, story: '初天神' },
  { name: '百合', dojo: '柳家', score: 61, story: '猫の皿' },
  { name: '鉄次', dojo: '立川', score: 38, story: '替わり目' },
  { name: '銀之丞', dojo: '桂', score: 73, story: '子別れ' },
]

function getGrade(score) {
  if (score >= 90) return 'S'
  if (score >= 80) return 'A'
  if (score >= 70) return 'B'
  if (score >= 60) return 'C'
  return '落選'
}

const rankedStudents = [...students]
  .sort((a, b) => b.score - a.score)
  .map((student, index) => ({
    ...student,
    grade: getGrade(student.score),
    rank: index + 1,
  }))

const average = (students.reduce((total, student) => total + student.score, 0) / students.length).toFixed(1)
const topStudent = rankedStudents[0]
const bottomStudent = rankedStudents.at(-1)
const failCount = students.filter(student => student.score < 60).length

const visibleStudents = computed(() => {
  const search = keyword.value.trim().toLowerCase()
  const result = rankedStudents.filter(student => {
    const matchesKeyword = !search
      || student.name.toLowerCase().includes(search)
      || student.dojo.toLowerCase().includes(search)

    if (!matchesKeyword) return false
    if (filter.value === 'pass') return student.score >= 60
    if (filter.value === 'fail') return student.score < 60
    if (filter.value === 'top3') return student.rank <= 3
    return true
  })

  return [...result].sort((a, b) => {
    if (sort.value === 'name') return a.name.localeCompare(b.name, 'zh-TW')
    if (sort.value === 'dojo') return a.dojo.localeCompare(b.dojo, 'zh-TW')
    return a.rank - b.rank
  })
})
</script>

<template>
  <main class="rakugo-page">
    <div class="header-band">落語競技大會　成績公示　令和七年度</div>

    <div class="container">
      <RouterLink class="back-link" to="/skills/portfolios/4">
        ← 返回作品介紹
      </RouterLink>

      <header class="hero">
        <p class="hero-sub">Rakugo Competition Results</p>
        <h1>落語競賽<br>分數查詢</h1>
        <div class="hero-deco">春季大會</div>
      </header>

      <section class="stats-grid">
        <article class="stat-card">
          <p class="stat-label">全場平均分</p>
          <p class="stat-value avg">{{ average }}</p>
        </article>
        <article class="stat-card">
          <p class="stat-label">最高分選手</p>
          <p class="stat-value top">{{ topStudent.score }} <small>{{ topStudent.name }}</small></p>
        </article>
        <article class="stat-card">
          <p class="stat-label">最低分選手</p>
          <p class="stat-value bottom">{{ bottomStudent.score }} <small>{{ bottomStudent.name }}</small></p>
        </article>
        <article class="stat-card">
          <p class="stat-label">落選人數</p>
          <p class="stat-value count">{{ failCount }} 人</p>
        </article>
      </section>

      <section class="controls">
        <input v-model="keyword" class="search-input" type="search" placeholder="搜尋選手姓名或道場名稱">
        <select v-model="filter" class="filter-select">
          <option value="all">全部選手</option>
          <option value="pass">合格（60分以上）</option>
          <option value="fail">落選（未滿60分）</option>
          <option value="top3">前三名</option>
        </select>
        <select v-model="sort" class="filter-select">
          <option value="rank">依排名</option>
          <option value="name">依姓名</option>
          <option value="dojo">依道場</option>
        </select>
      </section>

      <p class="section-title">成績一覽 — 共 {{ visibleStudents.length }} 人</p>

      <section class="result-list">
        <article v-for="student in visibleStudents" :key="student.name" class="player-card">
          <div class="rank-badge" :class="`rank-${student.rank <= 3 ? student.rank : 'other'}`">
            {{ student.rank }}
          </div>
          <div class="player-info">
            <p class="player-name">{{ student.name }}</p>
            <p class="player-dojo">{{ student.dojo }}　·　《{{ student.story }}》</p>
          </div>
          <span class="grade-badge" :class="`grade-${student.grade === '落選' ? 'fail' : student.grade.toLowerCase()}`">
            {{ student.grade }}
          </span>
          <span class="score-num" :class="student.score >= 60 ? 'score-pass' : 'score-fail'">
            {{ student.score }}
          </span>
        </article>

        <div v-if="visibleStudents.length === 0" class="no-result">查無相符選手</div>
      </section>

      <footer>朱音落語振興協會　·　審查委員會公告</footer>
    </div>
  </main>
</template>

<style scoped>
.rakugo-page {
  --sumi: #1a1410;
  --kaki: #3d2b1f;
  --beni: #c0392b;
  --kin: #d4a017;
  --washi: #f5efe3;
  --washi-dim: #c9bfaa;
  min-height: 100vh;
  color: var(--washi);
  background-color: var(--sumi);
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255, 255, 255, 0.025) 39px, rgba(255, 255, 255, 0.025) 40px),
    repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255, 255, 255, 0.025) 39px, rgba(255, 255, 255, 0.025) 40px);
  font-family: 'Noto Sans TC', 'Microsoft JhengHei', sans-serif;
}

.header-band {
  padding: 7px 16px;
  color: rgba(255, 255, 255, 0.9);
  background: linear-gradient(#ca4638, var(--beni));
  text-align: center;
  font-size: 0.72rem;
  letter-spacing: 0.35em;
}

.container {
  width: min(100% - 32px, 980px);
  margin: 0 auto;
  padding: 42px 0 64px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 7px 13px;
  color: var(--washi);
  border: 1px solid rgba(212, 160, 23, 0.45);
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.back-link:hover,
.back-link:focus-visible {
  color: var(--sumi);
  background: var(--kin);
}

.hero {
  padding: 24px 0 34px;
  text-align: center;
}

.hero::before {
  content: '';
  display: block;
  width: 58px;
  height: 3px;
  margin: 0 auto 18px;
  background: var(--beni);
}

.hero-sub,
.stat-label,
.section-title {
  color: var(--kin);
  letter-spacing: 0.24em;
}

.hero-sub {
  margin-bottom: 8px;
  font-size: 0.78rem;
  text-transform: uppercase;
}

h1 {
  color: var(--washi);
  font-family: serif;
  font-size: clamp(2.2rem, 7vw, 3.6rem);
  line-height: 1.16;
  letter-spacing: 0.08em;
}

.hero-deco {
  margin-top: 18px;
  color: var(--washi-dim);
  font-size: 0.8rem;
  letter-spacing: 0.3em;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 12px 0 28px;
}

.stat-card {
  padding: 20px 14px;
  background: var(--kaki);
  border: 1px solid rgba(212, 160, 23, 0.26);
  border-radius: 10px;
  text-align: center;
}

.stat-label {
  margin-bottom: 8px;
  font-size: 0.68rem;
}

.stat-value {
  font-family: serif;
  font-size: 2rem;
  font-weight: 700;
}

.stat-value small {
  color: var(--washi-dim);
  font-size: 0.55em;
}

.avg { color: #f0d060; }
.top { color: #f39c12; }
.bottom { color: #9aa3a4; }
.count { color: #e86a5b; }

.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.search-input,
.filter-select {
  min-width: 0;
  min-height: 44px;
  padding: 10px 14px;
  color: var(--washi);
  background: var(--kaki);
  border: 1px solid rgba(212, 160, 23, 0.32);
  border-radius: 7px;
  font: inherit;
  outline: none;
}

.search-input {
  flex: 1;
  min-width: 200px;
}

.search-input::placeholder {
  color: #a69d8b;
}

.search-input:focus,
.filter-select:focus {
  border-color: var(--beni);
  box-shadow: 0 0 0 3px rgba(192, 57, 43, 0.18);
}

.section-title {
  margin-bottom: 12px;
  padding-left: 10px;
  border-left: 3px solid var(--beni);
  font-size: 0.76rem;
}

.result-list {
  display: grid;
  gap: 10px;
}

.player-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 18px;
  background: #293846;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.player-card:hover {
  transform: translateX(4px);
  border-color: rgba(212, 160, 23, 0.4);
}

.rank-badge {
  width: 40px;
  height: 40px;
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  border: 2px solid rgba(255, 255, 255, 0.14);
  border-radius: 50%;
  color: var(--washi-dim);
  font-weight: 700;
}

.rank-1 { color: #f0c040; border-color: #d4a017; background: rgba(212, 160, 23, 0.2); }
.rank-2 { color: #d0d0d0; border-color: #aaa; background: rgba(180, 180, 180, 0.15); }
.rank-3 { color: #cd7f32; border-color: #a0601e; background: rgba(176, 120, 60, 0.2); }

.player-info {
  min-width: 0;
  flex: 1;
}

.player-name {
  font-family: serif;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.player-dojo {
  margin-top: 3px;
  color: var(--washi-dim);
  font-size: 0.74rem;
  overflow-wrap: anywhere;
}

.grade-badge {
  padding: 4px 10px;
  border: 1px solid;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
}

.grade-s { color: #f0c040; border-color: #d4a017; }
.grade-a { color: #55d98d; border-color: #27ae60; }
.grade-b { color: #7ec8f5; border-color: #2980b9; }
.grade-c { color: #aab8bb; border-color: #7f8c8d; }
.grade-fail { color: #e87a70; border-color: var(--beni); }

.score-num {
  min-width: 48px;
  text-align: right;
  font-family: serif;
  font-size: 1.55rem;
  font-weight: 800;
}

.score-fail { color: #e74c3c; }
.no-result { padding: 48px; color: var(--washi-dim); text-align: center; }

footer {
  margin-top: 42px;
  padding-top: 20px;
  color: var(--washi-dim);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
  font-size: 0.72rem;
  letter-spacing: 0.24em;
}

@media (max-width: 720px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .controls { flex-wrap: wrap; }
  .search-input { flex-basis: 100%; }
  .filter-select { flex: 1 1 calc(50% - 5px); }
}

@media (max-width: 520px) {
  .container { width: min(100% - 20px, 980px); }
  .header-band {
    padding-inline: 10px;
    letter-spacing: 0.18em;
  }
  .hero { padding-block: 32px; }
  .controls { gap: 8px; }
  .filter-select { flex-basis: 100%; width: 100%; }
  .player-card {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 8px 10px;
    padding: 13px 12px;
  }
  .rank-badge { width: 34px; height: 34px; }
  .player-info { grid-column: 2; grid-row: 1 / span 2; }
  .player-dojo { white-space: normal; }
  .grade-badge {
    grid-column: 3;
    grid-row: 2;
    padding-inline: 7px;
    text-align: center;
  }
  .score-num {
    grid-column: 3;
    grid-row: 1;
    min-width: 38px;
    font-size: 1.3rem;
  }
  .no-result { padding: 36px 16px; }
  footer { letter-spacing: 0.12em; }
}

@media (hover: none) {
  .player-card:hover {
    transform: none;
  }
}
</style>
