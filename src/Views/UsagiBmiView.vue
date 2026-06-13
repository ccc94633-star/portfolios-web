<script setup>
import { computed, ref } from 'vue'
import defaultImage from '@/assets/Image/usagi-bmi/default.png'
import fatImage from '@/assets/Image/usagi-bmi/fat.png'
import normalImage from '@/assets/Image/usagi-bmi/normal.jpg'
import thinImage from '@/assets/Image/usagi-bmi/thin.png'
import weightImage from '@/assets/Image/usagi-bmi/weight.png'

const weight = ref('')
const height = ref('')
const result = ref(null)

const resultImages = {
  過輕: thinImage,
  正常: normalImage,
  過重: weightImage,
  肥胖: fatImage,
}

const resultImage = computed(() => result.value ? resultImages[result.value.type] : defaultImage)

function calculateBmi() {
  const kg = Number(weight.value)
  const cm = Number(height.value)

  if (!kg || !cm || kg <= 0 || cm <= 0) {
    alert('請正確輸入身高與體重')
    return
  }

  const bmi = kg / ((cm / 100) ** 2)
  let type = '肥胖'

  if (bmi < 18.5) type = '過輕'
  else if (bmi < 24) type = '正常'
  else if (bmi < 27) type = '過重'

  result.value = {
    bmi: bmi.toFixed(2),
    type,
  }
}
</script>

<template>
  <main class="bmi-page">
    <section class="bmi-card">
      <div class="form-panel">
        <p class="eyebrow">USAGI BMI CHECK</p>
        <h1>烏薩奇體重計</h1>
        <p class="intro">輸入身高與體重，看看你屬於哪一種烏薩奇。</p>

        <label>
          <span>體重</span>
          <div class="input-wrap">
            <input v-model="weight" type="number" min="1" step="0.1" placeholder="例如 50">
            <small>kg</small>
          </div>
        </label>

        <label>
          <span>身高</span>
          <div class="input-wrap">
            <input v-model="height" type="number" min="1" step="0.1" placeholder="例如 160">
            <small>cm</small>
          </div>
        </label>

        <button type="button" @click="calculateBmi">開始計算</button>

        <div class="result-box" :class="{ visible: result }">
          <template v-if="result">
            <p>你的 BMI 是</p>
            <strong>{{ result.bmi }}</strong>
            <span>屬於「{{ result.type }}烏薩奇」</span>
          </template>
          <p v-else>結果會顯示在這裡</p>
        </div>
      </div>

      <div class="image-panel">
        <div class="image-frame" :class="{ 'default-frame': !result }">
          <img
            :src="resultImage"
            :class="{ 'default-image': !result }"
            :alt="result ? `${result.type}烏薩奇` : '烏薩奇體重計'"
          >
        </div>
        <p>{{ result ? `${result.type}烏薩奇` : '準備好測量了嗎？' }}</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.bmi-page {
  height: 100vh;
  height: 100dvh;
  width: 100%;
  padding: clamp(16px, 4vh, 40px) 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #4d4032;
  background:
    radial-gradient(circle at 12% 18%, rgba(255, 225, 155, 0.62), transparent 27%),
    radial-gradient(circle at 88% 82%, rgba(130, 204, 184, 0.42), transparent 30%),
    #fff8e9;
}

.bmi-card {
  width: 80vw;
  height: 80vh;
  height: 80dvh;
  max-width: none;
  max-height: none;
  min-height: 0;
  margin: auto;
  display: grid;
  grid-template-columns: minmax(400px, 0.95fr) minmax(520px, 1.05fr);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(86, 143, 128, 0.22);
  border-radius: 34px;
  box-shadow: 0 28px 70px rgba(83, 105, 91, 0.18);
}

.form-panel {
  min-height: 0;
  padding: clamp(22px, 4vh, 44px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.eyebrow {
  max-width: 100%;
  color: #d38a43;
  font-size: clamp(0.58rem, 1vw, 0.72rem);
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: clamp(0.08em, 0.35vw, 0.22em);
  overflow-wrap: anywhere;
}

h1 {
  max-width: 100%;
  margin-top: 8px;
  color: #356f65;
  font-size: clamp(1.75rem, 2.6vw, 2.5rem);
  line-height: 1.2;
  white-space: nowrap;
  letter-spacing: -0.06em;
}

.intro {
  margin: 8px 0 clamp(14px, 2.5vh, 24px);
  color: #817466;
  font-size: 0.95rem;
}

label {
  display: block;
  margin-bottom: clamp(10px, 1.8vh, 16px);
}

label > span {
  display: block;
  margin-bottom: 8px;
  color: #5d5144;
  font-size: 0.86rem;
  font-weight: 700;
}

.input-wrap {
  display: flex;
  align-items: center;
  background: #f7f3e9;
  border: 1px solid #ded5c4;
  border-radius: 14px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.input-wrap:focus-within {
  border-color: #5c9e91;
  box-shadow: 0 0 0 4px rgba(92, 158, 145, 0.13);
}

input {
  width: 100%;
  min-height: clamp(46px, 6.5vh, 58px);
  padding: 0 18px;
  color: #4d4032;
  background: transparent;
  border: 0;
  outline: 0;
  font: inherit;
  font-size: 1.05rem;
}

.input-wrap small {
  padding-right: 18px;
  color: #9b8e7d;
  font-weight: 700;
}

button {
  min-height: clamp(46px, 6.5vh, 58px);
  margin-top: 4px;
  color: #fff;
  background: linear-gradient(135deg, #4c988a, #34766b);
  border: 0;
  border-radius: 15px;
  box-shadow: 0 12px 24px rgba(52, 118, 107, 0.24);
  font: inherit;
  font-weight: 800;
  letter-spacing: 0.12em;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 28px rgba(52, 118, 107, 0.3);
}

.result-box {
  min-height: clamp(96px, 14vh, 126px);
  max-height: 24%;
  margin-top: clamp(10px, 2vh, 18px);
  padding: clamp(10px, 1.8vh, 16px) 20px;
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-content: center;
  gap: clamp(2px, 0.5vh, 5px);
  color: #9a8b79;
  background: #fffaf0;
  border: 1px dashed #dec9a7;
  border-radius: 15px;
  text-align: center;
}

.result-box.visible {
  color: #5b4b3b;
  background: #fff4d9;
  border-style: solid;
}

.result-box p {
  width: 100%;
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.3;
}

.result-box strong {
  color: #d17737;
  font-size: clamp(1.5rem, 4vh, 2.25rem);
  line-height: 1;
}

.result-box span {
  display: block;
  max-width: 100%;
  font-weight: 700;
  font-size: clamp(0.82rem, 1.8vh, 1rem);
  line-height: 1.3;
  overflow-wrap: anywhere;
}

.image-panel {
  min-width: 0;
  min-height: 0;
  padding: clamp(28px, 5vh, 48px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #d9eee8, #f4ebce);
}

.image-frame {
  width: min(100%, 52vh, 560px);
  max-height: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: #fff;
  border: 10px solid rgba(255, 255, 255, 0.72);
  border-radius: 30px;
  box-shadow: 0 20px 44px rgba(67, 104, 92, 0.18);
}

.image-frame.default-frame {
  width: 100%;
  height: 68%;
  max-width: none;
  max-height: none;
  aspect-ratio: auto;
}

.image-frame img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
}

.image-frame img.default-image {
  width: 145%;
  height: 100%;
  max-width: none;
  transform: translateX(-10%);
}

.image-panel > p {
  margin-top: 20px;
  color: #4c776e;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

@media (max-width: 880px) {
  .bmi-card {
    width: 88vw;
    height: 88vh;
    height: 88dvh;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(180px, 0.75fr) minmax(0, 1.25fr);
  }

  .image-panel {
    grid-row: 1;
    padding: 20px;
  }

  .image-frame {
    width: min(100%, 30vh, 300px);
  }

  .image-frame.default-frame {
    width: 100%;
    height: 100%;
    min-height: 0;
  }

  .image-panel > p {
    margin-top: 10px;
    font-size: 0.86rem;
  }

  .form-panel {
    padding: 24px 32px;
  }

  .eyebrow,
  .intro {
    display: none;
  }

  h1 {
    margin: 0 0 14px;
    font-size: clamp(1.45rem, 5vw, 2.2rem);
    white-space: normal;
    overflow-wrap: anywhere;
    letter-spacing: -0.05em;
  }

  label {
    margin-bottom: 10px;
  }

  input,
  button {
    min-height: 48px;
  }

  .result-box {
    min-height: 88px;
    max-height: 22%;
    margin-top: 12px;
    padding: 10px 16px;
  }
}

@media (max-width: 560px) {
  .bmi-page {
    padding: 10px;
  }

  .bmi-card {
    width: 94vw;
    height: 94vh;
    height: 94dvh;
    border-radius: 24px;
    grid-template-rows: minmax(130px, 0.55fr) minmax(0, 1.45fr);
  }

  .form-panel {
    padding: 18px 20px;
  }

  .image-panel {
    padding: 12px;
  }

  .image-frame {
    width: min(100%, 22vh, 190px);
    border-width: 6px;
    border-radius: 22px;
  }

  .image-frame.default-frame {
    width: 100%;
    height: 100%;
    min-height: 0;
    aspect-ratio: auto;
  }

  .image-panel > p {
    display: none;
  }

  h1 {
    margin-bottom: 10px;
  }

  label > span {
    margin-bottom: 4px;
  }

  input,
  button {
    min-height: 44px;
  }

  .result-box {
    min-height: 82px;
    max-height: 24%;
    margin-top: 8px;
  }
}
</style>
