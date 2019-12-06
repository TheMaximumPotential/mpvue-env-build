module.exports = [
    {
        path: 'pages/index/index',
        name: 'index',
        config: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'home',
            navigationBarTextStyle: 'black',
            'usingComponents': {
                'i-button': '../../../static/iView/button/index'
            }
        }
    },
    {
        path: 'pages/home/index',
        config: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'index',
            navigationBarTextStyle: 'black'
        }
    }
]
