<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
<template>
    <div>
        <div class="top">
            <Tooltip content="Top Left text" placement="top-start">
                <Button>Top Left</Button>
            </Tooltip>
            <Tooltip content="Top Center text" placement="top">
                <Button>Top Center</Button>
            </Tooltip>
            <Tooltip content="Top Right text" placement="top-end">
                <Button>Top Right</Button>
            </Tooltip>
        </div>
        <div class="center">
            <div class="center-left">
                <Tooltip content="Left Top text" placement="left-start">
                    <Button>Left Top</Button>
                </Tooltip><br><br>
                <Tooltip content="Left Center text" placement="left">
                    <Button>Left Center</Button>
                </Tooltip><br><br>
                <Tooltip content="Left Bottom text" placement="left-end">
                    <Button>Left Bottom</Button>
                </Tooltip>
            </div>
            <div class="center-right">
                <Tooltip content="Right Top text" placement="right-start">
                    <Button>Right Top</Button>
                </Tooltip><br><br>
                <Tooltip content="Right Center text" placement="right">
                    <Button>Right Center</Button>
                </Tooltip><br><br>
                <Tooltip content="Right Bottom text" placement="right-end">
                    <Button>Right Bottom</Button>
                </Tooltip>
            </div>
        </div>
        <div class="bottom">
            <Tooltip content="Bottom Left text" placement="bottom-start">
                <Button>Bottom Left</Button>
            </Tooltip>
            <Tooltip content="Bottom Center text" placement="bottom">
                <Button>Bottom Center</Button>
            </Tooltip>
            <Tooltip content="Bottom Right text" placement="bottom-end">
                <Button>Bottom Right</Button>
            </Tooltip>
        </div>
        <div style="margin: 30px 0;">
            <Tooltip content="悬浮出现的气泡。" theme="light">
            <Button>悬浮于此</Button>
        </Tooltip>
        </div>
        <div style="margin: 30px 0;">
                <Tooltip content="悬浮出现的气泡。">
                    <Button>悬浮于此</Button>
                </Tooltip>
        </div>
        <div style="margin: 30px 0;">
        <Tooltip placement="top" theme="light">
            <Button>悬浮于此</Button>
            <div slot="content">
                <p>这里输入一段长文字</p>
                <p>作为视觉预览。</p>
            </div>
        </Tooltip>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
