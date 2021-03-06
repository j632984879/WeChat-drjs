// components/home-banner/home-banner.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        banners: {
            type: Array,
            value: []
        },
        indicatorDots: {
            type: Boolean,
            value: true
        },
        vertical: {
            type: Boolean,
            value: false
        },
        autoplay: {
            type: Boolean,
            value: true
        },
        interval: {
            type: Number,
            value: 2000
        },
        duration: {
            type: Number,
            value: 500
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    /**
     * 组件的方法列表
     */
    methods: {
    }
})
