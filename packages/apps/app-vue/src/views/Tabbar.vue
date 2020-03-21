<template>
  <VblLayout>
    <h2 id="a1" class="anc">基本用法</h2>
    <MTabbar :tabMenu="tabMenu" :currentIndex="currentIndex" @changeIndex="changeIndex" hasIcon>
      <template slot="up">
        <Button type="primary" custom-icon="iconfont iconbaocun">保存</Button>
        <Button type="primary">提交</Button>
      </template>
    </MTabbar>
    <pre v-highlightjs=""><code>
      &lt;MTabbar :tabMenu="tabMenu" :currentIndex="currentIndex" @changeIndex="changeIndex" hasIcon &gt;
         &lt;template slot="up" &gt;
             &lt;Button type="primary" custom-icon="iconfont iconbaocun"&gt; 保存 &lt;/Button&gt;
             &lt;Button type="primary"&gt; 提交 &lt;/Button&gt;
         &lt;/template&gt;
    &lt;/MTabbar&gt;
    ```
     &lt;script&gt;
      export default {
              name: "tabbar",
              data(){
                  return {
                      currentIndex:0,
                      tabMenu:[
                          { labelCode: 'custInfo', labelName: '客户信息', hasSaved: true },
                          { labelCode: 'fundInfo', labelName: '资方信息', hasSaved: true },
                          { labelCode: 'fileInfo', labelName: '影像信息', hasSaved: true },
                          { labelCode: 'remarkInfo', labelName: '备注信息', hasSaved: false },
                          { labelCode: 'otherInfo', labelName: '附加信息', hasSaved: true ,noIcon:true }
                      ]
                  }
              },
              methods:{
                  changeIndex(val){
                      this.currentIndex = val
                  }
              }
          }
     &lt;/script&gt;
    </code></pre>
    默认都有是否已保存icon, 如果某个页签不需要展示这个icon, 可以这样传
    <pre v-highlightjs=""><code>
      ```
      { labelCode: 'otherInfo', labelName: '附加信息', hasSaved: true ,noIcon:true }
      ```
    </code></pre>

    <h2 id="a2" class="anc margin-t-20">动态加载tab内容</h2>
    <Card>
      我是当前tab的内容
      <Component v-for="(item,index) in tabMenu"
                 :key="index"
                 :tabMenu="tabMenu"
                 :ref="item['labelCode']"
                 :is="item['labelCode']"
                 v-if="currentIndex==index">
      </Component>
    </Card>

    <pre v-highlightjs=""><code>
         &lt;Component v-for="(item,index) in tabMenu"
                   :key="index"
                   :tabMenu="tabMenu"
                   :ref="item['labelCode']"
                   :is="item['labelCode']"
                   v-if="currentIndex==index"&gt;  &lt;/Component&gt;

        ```
        &lt;script&gt;
        import custInfo from "./tabbar-partials/custInfo";
        import fundInfo from "./tabbar-partials/fundInfo";
        import fileInfo from "./tabbar-partials/fileInfo";
        import remarkInfo from "./tabbar-partials/remarkInfo";
        import otherInfo from "./tabbar-partials/otherInfo";
        export default{
             components:{
                  custInfo,fundInfo,fileInfo,remarkInfo,otherInfo
             },
        }
        &lt;/script&gt;
      </code></pre>

    <h2 id="a3" class="anc margin-t-20">没有页签的tabbar</h2>
    <MTabbar :hasTabs="hasTabs" tabTitle="我只是个标题"></MTabbar>
    <pre v-highlightjs=""><code>
      &lt;MTabbar :hasTabs="hasTabs" tabTitle="我只是个标题"&gt;&lt;/MTabbar&gt;
    </code></pre>

    <h2 id="a4" class="anc margin-t-20">api</h2>
    <Card>
      <p>props</p>
      <MTable :tableData="tableData"></MTable>
      <p class="margin-t-20">slots</p>
      <STable :tableData="tableData1"></STable>
      <p class="margin-t-20">events</p>
      <ETable :tableData="tableData2"></ETable>
    </Card>

  </VblLayout>
</template>

<script>
import custInfo from './tabbar-partials/custInfo'
import fundInfo from './tabbar-partials/fundInfo'
import fileInfo from './tabbar-partials/fileInfo'
import remarkInfo from './tabbar-partials/remarkInfo'
import otherInfo from './tabbar-partials/otherInfo'

export default {
  name: 'tabbar',
  data () {
    return {
      currentIndex: 0,
      hasTabs: false,
      tabMenu: [
        { labelCode: 'custInfo', labelName: '客户信息', hasSaved: true },
        { labelCode: 'fundInfo', labelName: '资方信息', hasSaved: true },
        { labelCode: 'fileInfo', labelName: '影像信息', hasSaved: true },
        { labelCode: 'remarkInfo', labelName: '备注信息', hasSaved: false },
        { labelCode: 'otherInfo', labelName: '附加信息', noIcon: true }
      ],
      tableData: [
        {
          attr: 'tabMenu',
          desc: '页签数据',
          type: 'array',
          defaultValue: []
        },
        {
          attr: 'currentIndex',
          desc: '当前页签index',
          type: 'number',
          defaultValue: 0
        }
      ],
      tableData1: [
        {
          attr: 'up',
          desc: '操作按钮例如保存 提交'
        }
      ],
      tableData2: [
        {
          attr: 'currentIndex',
          desc: '切换tab事件',
          returnValue: '当前tab的index'
        }
      ]
    }
  },
  components: {
    custInfo, fundInfo, fileInfo, remarkInfo, otherInfo
  },
  methods: {
    changeIndex (val) {
      this.currentIndex = val
    }
  }
}
</script>

<style scoped>

</style>
