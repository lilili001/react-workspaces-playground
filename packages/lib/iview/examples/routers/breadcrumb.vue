<style>
    .demo-breadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
    }
</style>
<template>
<div>
    <Breadcrumb separator=">">
        <BreadcrumbItem to="/">销售管理</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">进件提报</BreadcrumbItem>
        <BreadcrumbItem>创建订单</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
        <Breadcrumb-item to="/button">Home4</Breadcrumb-item>
        <Breadcrumb-item to="//iviewui.com" target="_blank">Home4</Breadcrumb-item>
        <Breadcrumb-item :to="{name: 'icon', params: { userId: 123 }}">Components</Breadcrumb-item>
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
    <Breadcrumb separator="">
        <Breadcrumb-item href="/">
            <template>Home</template>
            <template slot="separator">
                <b style="color: #ff5500;">-></b>
            </template>
        </Breadcrumb-item>
        <Breadcrumb-item href="/components/page">
            <template>Breadcrumb</template>
            <template slot="separator">
                <b style="color: #ff5500;">-></b>
            </template>
        </Breadcrumb-item>
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
</div>
</template>
<script>
    export default {

    }
</script>