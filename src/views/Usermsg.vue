<template>
  <div id="usermsg">
  </div>
</template>

<script>
  export default {
    methods: {
      chooseMenu(index) {
        // console.log(index)
        this.$router.push({
          path: index
        }) //router为false时使用push跳转
      },
    },
  }
</script>
<style scoped>

</style>
