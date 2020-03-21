<template>
    <VblLayout>
      <h2 id="a1" class="anc">组件维护说明</h2>
      <h3>1. copy 组件到 components目录</h3>
      <h3>2. 全局引入组件</h3>
      <pre v-highlightjs=""><code >
        src/com.js
      </code></pre>
      <h3>3. 建路由</h3>
      <pre v-highlightjs=""><code >
        src/routes/router.js
      </code></pre>
    </VblLayout>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style scoped>

</style>
