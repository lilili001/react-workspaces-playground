<template>
  <div class="container VblLayout">
    <MHeader/>
    <Row type="flex" justify="start" class="code-row-bg margin-t-80" :gutter="16">
      <Col span="4" class="wrapper-sidebar">
        <MSidebar/>
      </Col>
      <Col span="16">
        <slot></slot>
      </Col>
      <Col span="3">
        <Affix :offset-top="100">
          <Anchor show-ink>
            <AnchorLink v-for="(item,index) in h2s" :href="'#'+item.id" :title="item.title" :key="index"/>
          </Anchor>
        </Affix>
      </Col>
    </Row>
    <BackTop></BackTop>
  </div>
</template>

<script>
import MHeader from './mheader'
import MSidebar from './sidebar'

export default {
  name: 'Layout',
  components: { MHeader, MSidebar },
  data () {
    return {
      h2s: []
    }
  },
  mounted () {
    var arr = document.querySelectorAll('.anc')
    arr = Array.from(arr)
    arr.forEach(item => {
      this.h2s.push({ title: item.innerText, id: item.id })
    })
  }
}
</script>

<style scoped>

</style>
