import IndexView from '@/Views/IndexView.vue'
import SkillsView from '@/Views/SkillsView.vue'
import PortfoliosView from '@/Views/PortfoliosView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import IndividualWorkView from '@/Views/IndividualWorkView.vue'
import ChiikawaRockPapeView from '@/Views/ChiikawaRockPapeView.vue'
import RakugoScoreView from '@/Views/RakugoScoreView.vue'
import UsagiBmiView from '@/Views/UsagiBmiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: IndexView,
    },
    {
      path: '/skills',
      component: SkillsView,
    },
    {
      path: '/skills/portfolios',
      component: PortfoliosView,
    },
    {
      path: '/skills/portfolios/chiikawa-rock-paper',
      component: ChiikawaRockPapeView,
    },
    {
      path: '/skills/portfolios/rakugo-score',
      component: RakugoScoreView,
    },
    {
      path: '/skills/portfolios/usagi-bmi',
      component: UsagiBmiView,
    },
    {
      path: '/skills/portfolios/:id',
      component: IndividualWorkView,
    },
  ],
})

export default router
