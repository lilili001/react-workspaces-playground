<template>
  <VblLayout>
    <h2 id="a1" class="anc">1.基本用法</h2>
    <Divider></Divider>

    <Card>
      <MBoxWithTitle2 title="二级标题">我是里面的内容</MBoxWithTitle2>
    </Card>

    <pre v-highlightjs=""><code>
     &lt;MBoxWithTitle2 title="二级标题111"&gt; 我是里面的内容 &lt;/MBoxWithTitle2&gt;
  </code></pre>

    <h2 id="a2" class="margin-t-20 anc">2.配合一级标题使用</h2>
    <MBoxWithTitle1 title="一级标题">
      <MBoxWithTitle2 title="二级标题">我是里面的内容</MBoxWithTitle2>
    </MBoxWithTitle1>

    <pre v-highlightjs=""><code>
      &lt;MBoxWithTitle1 title="一级标题"&gt;
           &lt;MBoxWithTitle2 title="二级标题"&gt;&lt;/MBoxWithTitle2&gt;
      &lt;/MBoxWithTitle1&gt;
  </code></pre>

    <h2 id="a3" class="margin-t-20 anc">3.api</h2>
    <Card>
      <MTable :tableData="tableData"></MTable>
    </Card>

  </VblLayout>
</template>

<script>
export default {
  name: 'BoxWithTitle2Page',
  data () {
    return {
      tableData: [
        {
          attr: 'title',
          desc: '标题',
          type: 'string',
          defaultValue: ''
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
