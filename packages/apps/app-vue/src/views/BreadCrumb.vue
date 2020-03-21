<template>
  <VblLayout>
    <h2>基本用法</h2>
    <Card>
      <MBreadCrumb></MBreadCrumb>
    </Card>

    <pre v-highlightjs="" class="margin-t-10"><code>
       &lt;MBreadCrumb&gt;&lt;/MBreadCrumb&gt;
    </code></pre>

    <div class="margin-t-20">
      需要在路由中配置 meta
      <pre v-highlightjs=""><code>
      {path: '/breadCrumb',title:'MBreadCrumb 面包屑', name: 'BreadCrumb', component: () => import('@/views/BreadCrumb.vue'),
   meta:{brand:[{label:'新提报中心'},{label:'进件管理',url:'/applySteps'},{label:'去完成'}]} },
    </code></pre>
    </div>
  </VblLayout>
</template>

<script>
export default {
  name: 'BreadCrumb',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  .bread-box {
    padding-left: 20px;
    line-height: 1;
    font-size: 12px;
  }

  span {
    color: #666
  }

  i {
    margin: 0 1px
  }

  .primary:hover {
    color: #1890FF;
    cursor: pointer;
  }
</style>
