<template>
  <VblLayout>
    <h2 id="a1" class="anc">1.基本用法</h2>

    <MBoxWithTitle1>我是没有title的box</MBoxWithTitle1>
    <pre v-highlightjs=""><code>
          &lt;MBoxWithTitle1&gt; 我是没有title的box &lt;/MBoxWithTitle1&gt;
       </code></pre>

    <MBoxWithTitle1 class="margin-t-10" title="我是title1">我是里面的内容1</MBoxWithTitle1>
    <pre v-highlightjs=""><code>
      &lt;MBoxWithTitle1 title="我是title1"&gt; 我是里面的内容1 &lt;/MBoxWithTitle1&gt;
   </code></pre>

    <h2 id="a2" class="anc margin-t-20">2.带展开收起按钮</h2>
    <MBoxWithTitle1 title="我是title2" showCollapseIcon>我是里面的内容2</MBoxWithTitle1>
    <pre v-highlightjs=""><code>
        &lt;MBoxWithTitle1 title="我是title2" showCollapseIcon&gt; 我是里面的内容2 &lt;/MBoxWithTitle1&gt;
     </code></pre>

    <h2 id="a3" class="anc margin-t-20">3.展开收起初始值 此处默认为false</h2>
    <MBoxWithTitle1 title="我是title3" :showBelowContent="showBelowContent" showCollapseIcon>我是里面的内容3</MBoxWithTitle1>
    <pre v-highlightjs=""><code>
        &lt;MBoxWithTitle1 title="我是title3" :showBelowContent="showBelowContent"&gt; 我是里面的内容3 &lt;/MBoxWithTitle1&gt;
        ```
        export default{
          data(){
            return {
              showBelowContent:false,
            }
          }
        }
       </code></pre>

    <h2 class="anc margin-t-20" id="a4">4.api</h2>
    <Card>
      <MTable :tableData="tableData"></MTable>
    </Card>

  </VblLayout>
</template>

<script>
export default {
  name: 'BoxWithTitle1Page',
  data () {
    return {
      showBelowContent: false,
      tableData: [
        {
          attr: 'title',
          desc: '标题',
          type: 'string',
          defaultValue: ''
        },
        {
          attr: 'showCollapseIcon',
          desc: '是否显示展开收起按钮',
          type: 'boolean',
          defaultValue: []
        },
        {
          attr: 'showBelowContent',
          desc: '展开收起初始值',
          type: 'boolean',
          defaultValue: ''
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
