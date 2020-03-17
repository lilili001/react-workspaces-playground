<template>
    <div>
        <Poptip trigger="hover">
            <div slot="title">悬浮出现的消息</div>
            <div slot="content">
                悬浮出现的消息气泡气泡悬浮出现的消息气泡气泡悬浮出
                悬浮出现的消息气泡气泡悬浮出现的消息气泡气泡悬浮出
            </div>
            <Button>Hover</Button>
        </Poptip>
        <Poptip title="Title" content="content">
            <Button>Click</Button>
        </Poptip>
        <Poptip trigger="focus" title="Title" content="content">
            <Button>Focus</Button>
        </Poptip>
        <Poptip trigger="focus" title="Title" content="content">
            <Input placeholder="Input focus" />
        </Poptip>
    </div>
</template>
<script>
    export default {

    }
</script>
