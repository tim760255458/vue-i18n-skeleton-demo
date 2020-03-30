<template>
  <div id="app">
    <h1>{{ $t("message.title") }}</h1>
    <div>
      <span style="margin-right: 10px;">切换语言</span>
      <select v-model="locale" class="select-lang">
        <option class="select-lang-item" value="zh">中文</option>
        <option class="select-lang-item" value="en">English</option>
      </select>
    </div>
    <CardItem />
  </div>
</template>

<script>
import CardItem from './components/CardItem'

export default {
  name: 'App',
  components: {
    CardItem
  },
  data () {
    return {
      locale: 'zh'
    }
  },
  watch: {
    locale(newVal) {
      this.$i18n.locale = newVal
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.select-lang {
  width: 100px;
  height: 30px;
  box-shadow: 1px 1px 5px #ddd;
}
</style>
