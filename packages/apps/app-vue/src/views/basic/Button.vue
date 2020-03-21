<template>
  <VblLayout class="bg-white">
    <h2 id="a1" class="anc">主按钮</h2>

    <Button type="primary">正面操作</Button>
    <Button>负面操作</Button>
    <Button disabled>禁用</Button>

    <h2 id="a3" class="anc margin-t-20">带icon按钮</h2>
    <Button type="primary" custom-icon="iconfont iconbaocun">正面</Button>
    <Button custom-icon="iconfont iconbaocun">负面</Button>
    <Button disabled custom-icon="iconfont iconbaocun">禁用</Button>

    <h3 id="a4" class="anc margin-t-20">ghost</h3>
    <Button type="info" class="minfo" ghost custom-icon="iconfont icondr">下载征信授权书模板</Button>
    <Button type="info" class="minfo" ghost>修改产品车型</Button>

    <pre v-highlightjs="" class="margin-t-20"><code>
        &lt;template&gt;
          &lt;VblLayout class="bg-white"&gt;
            &lt;h2 id="a1" class="anc"&gt;主按钮&lt;/h2&gt;
            &lt;Button type="primary"&gt;正面操作&lt;/Button&gt;
            &lt;Button&gt;负面操作&lt;/Button&gt;
            &lt;Button disabled&gt;禁用&lt;/Button&gt;

            &lt;h2 id="a3" class="anc margin-t-20"&gt;带icon按钮&lt;/h2&gt;
            &lt;Button type="primary" custom-icon="iconfont iconbaocun"&gt;正面&lt;/Button&gt;
            &lt;Button custom-icon="iconfont iconbaocun"&gt;负面&lt;/Button&gt;
            &lt;Button disabled custom-icon="iconfont iconbaocun" disabled&gt;禁用&lt;/Button&gt;

            &lt;h3 id="a4" class="anc margin-t-20"&gt;ghost&lt;/h3&gt;
            &lt;Button type="info" class="minfo" ghost  custom-icon="iconfont icondr"&gt;下载征信授权书模板&lt;/Button&gt;
            &lt;Button type="info" class="minfo" ghost&gt;修改产品车型&lt;/Button&gt;
          &lt;/VblLayout&gt;
      &lt;/template&gt;
      </code></pre>
  </VblLayout>
</template>

<script>
export default {
  name: 'ButtonPage',
  data () {
    return {
      num: 10
    }
  }
}
</script>

<style scoped>

</style>
