<template>
  <span>{{time}}</span>
</template>
<script>
  export default {
    data () {
      return {
        time: new Date().toLocaleString()
      }
    },
    mounted () {
      setInterval(() => {
        this.time = new Date().toLocaleString()
      }, 1000)
    }
  }
</script>
