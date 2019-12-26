<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    runincre () {
      this.$store.commit('increment')
    }
  },
  mounted () {
    console.log(this.$store.state.count)
    this.runincre()
    console.log(this.$store.state.count)
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

</style>
