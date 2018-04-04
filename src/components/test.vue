<template>
    <div class="test">
      test~~
      {{msg}}
    </div>
</template>

<script>
    export default {
      name: "test",
      data(){
          return {
            msg:"I'm data."
          }
      }
    }
</script>

<style scoped>
.test{
  color: darkred;
}
</style>
