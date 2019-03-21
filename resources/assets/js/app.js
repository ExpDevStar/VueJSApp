import Vue from 'vue'

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#vue-app',
  data: {
    age: 27,
    firstName: '',
    lastName: ''
  },

  methods: {
    add: function () {
      this.age++
    },

    subtract: function () {
      this.age--
    },

    logfName: function () {
      console.log(this.firstName)
    },

    loglName: function () {
      console.log(this.lastName)
    }
  }
})
