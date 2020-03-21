
<template>
  <div class="navigate">
    <Menu active-name="1" class="side-menu">
      <MenuGroup title="基础组件">
        <MenuItem v-for="(item,index) in routes.basicRoutes" :key="index" :name="item.name" :to="item.path" v-if="item.path!='/'" :class="{'ivu-menu-item-selected ivu-menu-item-active':item.name==$route.name}">
          {{item['title']}} </MenuItem>
      </MenuGroup>
      <MenuGroup title="自定义组件">
        <MenuItem v-for="(item,index2) in routes.customerRoutes" :key="index2" :to="item.path"  :name="item.name" v-if="item.path!='/'" :class="{'ivu-menu-item-selected ivu-menu-item-active':item.name==$route.name}">
           {{item['title']}} </MenuItem>
      </MenuGroup>
      <MenuGroup title="业务组件">
        <MenuItem v-for="(item,index3) in routes.businessComs" :key="index3" :to="item.path"  :name="item.name" v-if="item.path!='/'" :class="{'ivu-menu-item-selected ivu-menu-item-active':item.name==$route.name}">
          {{item['title']}} </MenuItem>
      </MenuGroup>
    </Menu>
  </div>
</template>

<script>
import { routes } from '@/routes/router'
export default {
  name: 'sidebar',
  data () {
    return {
      routes
    }
  }
}
</script>

<style scoped>

</style>
