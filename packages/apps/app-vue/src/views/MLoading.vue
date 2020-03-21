<template>
  <VblLayout>
    <Card>
      <Button @click="showLoading">显示加载</Button>
    </Card>

    <pre v-highlightjs=""><code>
    this.$mLoading.show(text);
    this.$mLoading.hide();
  </code></pre>

    text默认为 加载中..., 可不传
  </VblLayout>
</template>

<script>
export default {
  name: 'MLoading',
  methods: {
    showLoading () {
      this.$mLoading.show()
      var timer = setTimeout(() => {
        this.$mLoading.hide()
      }, 3000)
    }
  }
}
</script>

<style scoped>

</style>
