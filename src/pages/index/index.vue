<template>
    <div
        class="wrap"
        @click="link"
    >
        <i-button type="success">
            这是一个iView按钮
        </i-button>
    </div>
</template>

<script>
    export default {
        methods: {
            link() {
                this.$router.push('/pages/home/index')
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrap {
        color: #ccc;
        span {
            color: #999;
        }
    }
</style>
