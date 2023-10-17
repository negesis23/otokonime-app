import {
 createStore
} from 'framework7/lite';

const store = createStore({
 state: {
  isDark: (localStorage.isDark === 'true' || localStorage.isDark === undefined),
 },
 actions: {
  setIsDark({
   state
  }, isDark) {
   if (isDark) {
    document.documentElement.classList.add('dark')
   } else {
    document.documentElement.classList.remove('dark')
   }
   state.isDark = isDark;
   localStorage.isDark = isDark;
  }
 },
 getters: {
  isDark({
   state
  }) {
   return state.isDark
  }
 }
})

export default store;