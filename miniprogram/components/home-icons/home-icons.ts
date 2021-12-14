// components/home-icons/home-icons.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        icons: [
            {
                icon: "../../images/yeusao@2x.png",
                text: "月嫂",
                navgation: "222"
            },
            {
                icon: "../../images/yuer@2x.png",
                text: "育儿",
                navgation: ""
            },
            {
                icon: "../../images/jiazheng@2x.png",
                text: "家政",
                navgation: ""
            },
            {
                icon: "../../images/kanhu@2x.png",
                text: "看护",
                navgation: ""
            },
            {
                icon: "../../images/weisheng@2x.png",
                text: "卫生",
                navgation: ""
            }
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        iconClick(event) {
            console.log('click', event.mark.to)
        }
    }
})
