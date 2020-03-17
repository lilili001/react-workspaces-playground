<template>
    <div>
        <h2 style="font-size: 16px; margin-bottom: 20px;">不可操作且不可关闭提示框</h2>
        <Button type="primary" @click="infolink">Display infolink prompt</Button>
        <br/><br/>
        <Button type="primary" @click="info">Display info prompt</Button>
        <br/><br/>
        <Button @click="success">Display success prompt</Button>
        <br/><br/>
        <Button @click="warning">Display warning prompt</Button>
        <br/><br/>
        <Button @click="error">Display error prompt</Button>
        <br/><br/>
        <Button @click="loading">Display loading...</Button>
        <br/><br/>
        <Button @click="closable">Display a closable message</Button>
    </div>
</template>
<script>
    export default {
        methods: {
            info () {
                this.$Message.info({
                    content: '这是一条普通的提示',
                    duration: 1000,
                    background: true
                });
                this.$Message.success({
                    content: '这是一条普通的提示',
                    duration: 1000,
                    background: true
                });
                this.$Message.warning({
                    content: '这是一条普通的提示',
                    duration: 1000,
                    background: true
                });
                this.$Message.error({
                    content: '这是一条普通的提示',
                    duration: 1000,
                    background: true
                });
            },
            infolink () {
                this.$Message.info({
                    content: '这是一条询问消息，会主动消失。',
                    duration: 0
                });
                this.$Message.success({
                    content: '这是一条成功消息，会主动消失。',
                    duration: 0
                });
                this.$Message.warning({
                    content: '这是一条询问消息，会主动消失。',
                    duration: 0
                });
                this.$Message.error({
                    content: '这是一条异常消息，会主动消失。',
                    duration: 0
                });
            },
            success () {
                this.$Message.success('This is a success tip');
            },
            warning () {
                this.$Message.warning('This is a warning tip');
            },
            error () {
                this.$Message.error('This is an error tip');
            },
            loading () {
                const msg = this.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
                setTimeout(msg, 3000);
            },
            closable () {
                this.$Message.info({
                    content: 'Tips for manual closing',
                    duration: 1000,
                    closable: true
                });
            }
        }
    }
</script>
