<template>
    <div>
        <div style="height: 100px; margin-bottom: 20px;">
        <Tabs type="card">
            <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</TabPane>
            <Button @click="handleTabsAdd" size="small" slot="extra">增加</Button>
        </Tabs>
        </div>
        <div style="height: 100px; background: #ffffff; padding: 0 16px; margin-bottom: 20px;">
            <Tabs type="card">
                <TabPane label="全部">全部</TabPane>
                <TabPane label="待预审订单(100)">待预审订单(100)</TabPane>
                <TabPane label="待提报订单(100)">待提报订单(100)</TabPane>
                <TabPane label="待签约订单(100)">待签约订单(100)</TabPane>
                <TabPane label="待请款订单(100)">待请款订单(100)</TabPane>
            </Tabs>
        </div>
        <div class="new-tabs-style2" style="height: 100px; margin-bottom: 20px;">
            <h2 style="margin-bottom: 10px;">详情页，查看页面状态</h2>
            <Tabs type="line">
                <TabPane label="客户信息">客户信息</TabPane>
                <TabPane label="贷款信息">贷款信息</TabPane>
                <TabPane label="附件信息">附件信息</TabPane>
                <TabPane label="审批结果">审批结果</TabPane>
            </Tabs>
        </div>
        <div class="new-tabs-style1" style="height: 100px; margin-bottom: 20px;">
            <h2 style="margin-bottom: 10px;">Tab不可点击状态</h2>
        <Tabs type="line">
            <TabPane label="产品基础信息">产品基础信息</TabPane>
            <TabPane label="渠道配置">渠道配置</TabPane>
            <TabPane label="贴息／车型配置">贴息／车型配置</TabPane>
            <TabPane label="合同配置" disabled>合同配置</TabPane>
            <TabPane label="不可点击文字" disabled>不可点击文字</TabPane>
            <TabPane label="不可点击文字" disabled>不可点击文字</TabPane>
        </Tabs>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tabs: 20
            }
        },
        methods: {
            handleTabsAdd () {
                this.tabs ++;
            }
        }
    }
</script>
