// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    text: '',
    vShowText: '',
    shoppingList: ['Sugar', 'Bread', 'Kabanos', 'Milk', 'Newspaper'],
    friend: {
      name: 'Asia',
      age: 30,
      job: 'Accountant'
    },
    isActive: false,
    activeClass: 'is-active'
  },
  methods: {
    randomList  () {
      this.shoppingList = this.shoppingList.sort(() => Math.random() - 0.5)
    },
    changeActive () {
      this.isActive = !this.isActive
    }
  }
})
