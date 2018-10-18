import Vue from 'vue'

const app = new Vue({
  el: '#vue-app',
  data: {
    age: 27
  },

  methods: {
    add: function () {
      this.age++
    },

    subtract: function () {
      this.age--
    }
  }
})
