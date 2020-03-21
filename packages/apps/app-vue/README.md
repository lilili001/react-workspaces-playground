签约系统重点简介

1. tab页签
tab页签根据接口pageInitStatus来, 资方特殊, 需要根据也没判断, 还需前端map中是否有资方
2. tab页签对应的模块, 使用Component is的形式引入对应的组件
3. hasSaved高亮 通过主页面例如 sign/index.vue 传到各个component中, 里面使用watch监听改动
4. fujian:附件文件fileInfo,里面调用一个component daleiFujian,传入 :page="page" :query="query"
   该文件还有附件保存的作用
  daleiFujian 根据不同的页面, 调用不同的附件模板 这个文件主要针对有必传 非必传的模块
5. remark 模块根据不同的页面调用不同的接口  