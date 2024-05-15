const { createApp } = Vue

createApp({

    data() {
        return {
            numero: null,
            indirizzo: 'https://flynn.boolean.careers/exercises/api/random/int'
        }
    },
    methods: {
        getNumero() {
            axios.get(this.indirizzo).then((result) => { //attenzione all'arrow function!!

                

            });
        }
    },
    mounted() {
        console.log("App montata");

        this.getNumero();
    }

}).mount('#app');