import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const user = ref('')
  const pass = ref('')
 

  return {user,pass }
})
