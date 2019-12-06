<script>
    export default {
        created() {
            let logs
            if (mpvuePlatform === 'my') {
                logs = mpvue.getStorageSync({ key: 'logs' }).data || []
                logs.unshift(Date.now())
                mpvue.setStorageSync({
                    key: 'logs',
                    data: logs
                })
            } else {
                logs = mpvue.getStorageSync('logs') || []
                logs.unshift(Date.now())
                mpvue.setStorageSync('logs', logs)
            }
        },
        log() {
            console.log(`log at:${Date.now()}`)
        }
    }
</script>

<style>
</style>
