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
        <div class="image-frame">
          <img :src="resultImage" :alt="result ? `${result.type}烏薩奇` : '烏薩奇體重計'">
        </div>
        <p>{{ result ? `${result.type}烏薩奇` : '準備好測量了嗎？' }}</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.bmi-page {
  min-height: 100vh;
  padding: 48px 24px;
  display: grid;
  place-items: center;
  color: #4d4032;
  background:
    radial-gradient(circle at 12% 18%, rgba(255, 225, 155, 0.62), transparent 27%),
    radial-gradient(circle at 88% 82%, rgba(130, 204, 184, 0.42), transparent 30%),
    #fff8e9;
}

.bmi-card {
  width: min(1120px, 100%);
  min-height: 680px;
  display: grid;
  grid-template-columns: minmax(340px, 0.9fr) minmax(460px, 1.1fr);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(86, 143, 128, 0.22);
  border-radius: 34px;
  box-shadow: 0 28px 70px rgba(83, 105, 91, 0.18);
}

.form-panel {
  padding: 62px 54px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.eyebrow {
  color: #d38a43;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.22em;
}

h1 {
  margin-top: 8px;
  color: #356f65;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
}

.intro {
  margin: 12px 0 30px;
  color: #817466;
  font-size: 0.95rem;
}

label {
  display: block;
  margin-bottom: 18px;
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
  min-height: 58px;
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
  min-height: 58px;
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
  min-height: 112px;
  margin-top: 22px;
  padding: 16px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px 12px;
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
  font-size: 0.82rem;
}

.result-box strong {
  color: #d17737;
  font-size: 2rem;
  line-height: 1;
}

.result-box span {
  font-weight: 700;
}

.image-panel {
  padding: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #d9eee8, #f4ebce);
}

.image-frame {
  width: min(100%, 520px);
  aspect-ratio: 1;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: #fff;
  border: 10px solid rgba(255, 255, 255, 0.72);
  border-radius: 30px;
  box-shadow: 0 20px 44px rgba(67, 104, 92, 0.18);
}

.image-frame img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
    grid-template-columns: 1fr;
  }

  .image-panel {
    grid-row: 1;
  }

  .image-frame {
    width: min(100%, 460px);
  }
}

@media (max-width: 560px) {
  .bmi-page {
    padding: 18px 12px;
  }

  .bmi-card {
    min-height: auto;
    border-radius: 24px;
  }

  .form-panel,
  .image-panel {
    padding: 30px 22px;
  }

  .image-frame {
    border-width: 6px;
    border-radius: 22px;
  }
}
</style>
