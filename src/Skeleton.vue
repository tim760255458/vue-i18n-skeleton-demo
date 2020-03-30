<template>
  <div>
    <div class="skeleton-box">
      <span class="skeleton-logo"></span>
      <div class="skeleton-main">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Skeleton',
  data () {
    return {}
  }
}
</script>
<style scoped>
.skeleton-box {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 10px;
}
.skeleton-logo {
  display: block;
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border-radius: 100%;
  background-color: #f0f0f0;
}
.skeleton-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.skeleton-main > span {
  display: block;
  height: 20px;
  margin-top: 10px;
  background-color: #f0f0f0;
}
.skeleton-main > span:first-child {
  width: 200px;
}
</style>