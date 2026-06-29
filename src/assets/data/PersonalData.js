import movieTheaterImg from '@/assets/Image/portfolio/movie-theater.png'
import chiikawaParkImg from '@/assets/Image/portfolio/chiikawa-generator.png'
import chiikawaRockImg from '@/assets/Image/portfolio/chiikawa-rock-paper.png'
import rakugoImg from '@/assets/Image/portfolio/rakugo-score.png'
import usagiBmiImg from '@/assets/Image/portfolio/usagi-bmi.png'
import japanTourImg from '@/assets/Image/portfolio/japan-tour.png'

import htmlIcon from '@/assets/Image/icon/skills/html5.svg'
import cssIcon from '@/assets/Image/icon/skills/css3.svg'
import jsIcon from '@/assets/Image/icon/skills/javascript.svg'
import vueIcon from '@/assets/Image/icon/skills/vuejs.svg'
import indesignIcon from '@/assets/Image/icon/skills/indesign.svg'
import excelIcon from '@/assets/Image/icon/skills/excel.svg'
import missionIcon from '@/assets/Image/icon/personality/personality-mission.svg'
import learningIcon from '@/assets/Image/icon/personality/personality-learning.svg'
import sportsIcon from '@/assets/Image/icon/personality/personality-sports.svg'
import travelIcon from '@/assets/Image/icon/personality/personality-travel.svg'
import animalIcon from '@/assets/Image/icon/personality/personality-animal.svg'
import helpIcon from '@/assets/Image/icon/personality/personality-help.svg'
import psIcon from '@/assets/Image/icon/skills/photoshop.svg'
import figmaIcon from '@/assets/Image/icon/skills/figma.svg'
import rwdIcon from '@/assets/Image/icon/skills/rwd.svg'
import apiIcon from '@/assets/Image/icon/skills/api.webp'
import qingshuiVeterans from '@/assets/Image/portfolio/qingshuiVeterans.png'
import weatherImg from '@/assets/Image/portfolio/weather-card.png'
import workFlowImg from '@/assets/Image/portfolio/aiworkflow.png'

const personal = {
    name: "邱詣雯",
    position: '前端工程師 / 學習者',
    personalities: [
        { icon: missionIcon, desc: '使命必達' },
        { icon: learningIcon, desc: '勇於學習' },
        { icon: helpIcon, desc: '樂於助人' },
        { icon: sportsIcon, desc: '熱衷運動' },
        { icon: travelIcon, desc: '熱愛旅遊' },
        { icon: animalIcon, desc: '喜歡動物' },

    ],
    skills: [
        { icon: htmlIcon, name: 'HTML', rating: 4 },
        { icon: cssIcon, name: 'CSS', rating: 4 },
        { icon: jsIcon, name: 'JavaScript', rating: 3 },
        { icon: vueIcon, name: 'Vue.js', rating: 4 },
        { icon: indesignIcon, name: 'InDesign', rating: 5 },
        { icon: excelIcon, name: 'Excel', rating: 5 },
        { icon: figmaIcon, name: 'Figma', rating: 4 },
        { icon: rwdIcon, name: 'RWD', rating: 5 },
        { icon: psIcon, name: 'PS', rating: 4 },
        { icon: apiIcon, name: 'API', rating: 4 },
    ],

    portfolios:
        [
            {
                id: 1,
                image: workFlowImg,
                title: '我的AI工具書',
                shortDesc: '把一個個 AI 想法，做成溫柔好用的小工具。',
                tags: ['vue.js', 'css',  'API'],
                desc: 'FlowSmith 是我放置 AI workflow 與 AI 小工具的作品總集。每個工具都從一個明確需求出發， 練習把輸入、Prompt、AI 回應與介面整理成完整流程。',
                gitHubUrl: 'https://github.com/ccc94633-star/flowsmith',
                demoUrl: 'https://flowsmith-gules.vercel.app/'
            },

            {
                id: 2,
                image: movieTheaterImg,
                title: '雯子的電影院',
                shortDesc: '裡面放著我看過並推薦的電影',
                tags: ['vue.js', 'css', 'Js'],
                desc: '裡面放著我看過並推薦的電影，五星是超級推薦，四星是值得一看！',
                gitHubUrl: 'https://github.com/ccc94633-star/portfolio-my-movies-collections-web/tree/main',
                demoUrl: 'https://ccc94633-star.github.io/portfolio-my-movies-collections-web/'
            },

            {
                id: 3,
                image: qingshuiVeterans,
                title: '清水眷村文化園區',
                shortDesc: '將清水眷村的官網改版的作品',
                tags: ['vue.js', 'css', 'Js'],
                desc: '經過分析後，針對原網站的痛點進行改版，提升使用者閱讀體驗之餘，也加強了查找活動的篩選功能等UX功能。',
                gitHubUrl: 'https://github.com/Digi-Pack/NCHU-11503-QingshuiArtvillage',
                demoUrl: 'https://nchu-11503-qingshui-qrt-village.pages.dev/'
            },

            {
                id: 4,
                image: weatherImg,
                title: '個人風格氣象台',
                shortDesc: '來查詢台灣各縣市的天氣吧。',
                tags: ['vue.js', 'css',  'API', 'Vercel'],
                desc: '可以查詢台灣各縣市的天氣，渲染風格清新宜人。',
                gitHubUrl: 'https://github.com/ccc94633-star/portfolio-weather-card-web',
                demoUrl: 'https://portfolio-weather-card-web.vercel.app/'
            },

            {
                id: 5,
                image: japanTourImg,
                title: '日本城市導覽網頁',
                shortDesc: '可以查詢東京、名古屋、熊本三大城市的好吃好玩有哪些。',
                tags: ['vue.js', 'css', 'Js'],
                desc: '除了可以查詢東京、名古屋、熊本三大城市的好吃好玩有哪些，還暗藏吉伊卡哇彩蛋在裡面。',
                gitHubUrl: 'https://github.com/ccc94633-star/japan-tour-web',
                demoUrl: 'https://ccc94633-star.github.io/japan-tour-web'
            },

            {
                id: 6,
                image: chiikawaParkImg,
                title: '吉伊卡哇樂園島民產生器網頁',
                shortDesc: '吉伊卡哇樂園入島的申請表單',
                tags: ['vue.js', 'css', 'Js'],
                desc: '一個吉伊卡哇樂園入島的申請表單，您可以預覽畫面並開啟討伐模式。',
                gitHubUrl: 'https://github.com/ccc94633-star/portfolio-chiikawa-generator-web',
                demoUrl: 'https://ccc94633-star.github.io/portfolio-chiikawa-generator-web/'

            },

            {
                id: 7,
                image: chiikawaRockImg,
                title: '吉伊卡哇猜拳遊戲網頁',
                shortDesc: '來跟吉伊卡哇玩猜拳吧！',
                tags: ['css', 'Js'],
                desc: '跟吉伊卡哇猜拳遊戲，可以自己決定出拳，並記錄你與吉伊卡哇之間的輸贏。',
                gitHubUrl: null,
                demoUrl: '/skills/portfolios/chiikawa-rock-paper'
            },


            {
                id: 8,
                image: rakugoImg,
                title: '落語競賽分數查詢網頁',
                shortDesc: '動漫【朱音落語】的落語競賽分數查詢網頁',
                tags: ['css', 'Js'],
                desc: '查詢朱音這次落語比賽是第幾名，同時可以查詢每位參賽者的成績。',
                gitHubUrl: null,
                demoUrl: '/skills/portfolios/rakugo-score'
            },


            {
                id: 9,
                image: usagiBmiImg,
                title: '烏薩奇體重計網頁',
                shortDesc: '來測看看你是哪種體型的烏薩奇吧！',
                tags: ['css', 'Js'],
                desc: '一個烏薩奇風格的BMI計算機，可以測看看你是哪種體型的烏薩奇。',
                gitHubUrl: null,
                demoUrl: '/skills/portfolios/usagi-bmi'
            },

        ],
}
export default personal 
