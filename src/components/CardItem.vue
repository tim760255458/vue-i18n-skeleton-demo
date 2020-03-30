<template>
  <div class="card-box">
    <p>{{ $t("message.hello") }}</p>
    <p>{{ $t("message.title") }}</p>
  </div>
</template>
<script>
export default {
  name: 'CardItem'
}
</script>
<style scoped>
.card-box {
  width: 400px;
  box-sizing: border-box;
  box-shadow: 1px 1px 5px #ddd;
  color: #333;
  margin: 0 auto;
}
</style>