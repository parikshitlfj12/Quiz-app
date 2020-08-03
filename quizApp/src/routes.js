import Author from './components/author.vue'
import User from './components/user.vue'
import Home from './components/home.vue'
import Quiz from './components/quiz.vue'
import Score from './components/score.vue'

export default [
  { path: '/', component: Home},
  { path: '/author', component: Author},
  { path: '/user', component: User},
  { path: '/user/quiz/:id', component: Quiz},
  { path: '/user/score/:id', component: Score}
]