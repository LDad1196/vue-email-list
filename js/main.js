const { createApp } = Vue

createApp({
  data() {
    return {
      arrayMail: [],
    }
  },
  methods: {
    randomMail() {
      for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
          this.arrayMail.push(result.data.response)
          console.log(this.arrayMail[i])
        })
      }
    }
  },
  mounted() {
    this.randomMail()
  }
}).mount('#app')
