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
    activeClass: 'is-active',
    counter: 0,
    linkedIn: "<a href='https://linkedin.com/in/rootkt'> Linkedin Profile </a>",
    github: "<a href='https://github.com/oraykt'> Github Profile </a>"
  },
  methods: {
    randomList () {
      this.shoppingList = this.shoppingList.sort(() => Math.random() - 0.5)
    },
    changeActive () {
      this.isActive = !this.isActive
    },
    onClick (event) {
      // v-on:click.stop =  event.stopPropagation()
      // v-on:click.prevent =  event.preventDefault()
      // https://vuejs.org/v2/guide/events.html
      this.counter += 1
    }
  }
})
