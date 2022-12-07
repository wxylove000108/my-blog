/*
 * @Author: 王鑫宇 937219635@qq.com
 * @Date: 2022-08-21 11:21:28
 * @LastEditors: 王鑫宇 937219635@qq.com
 * @LastEditTime: 2022-08-23 15:05:06
 * @FilePath: \blog-mine\docs\.vitepress\config.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 王鑫宇 937219635@qq.com, All Rights Reserved. 
 */
import { defineConfig } from "vitepress";
import mdItCustomAttrs  from 'markdown-it-custom-attrs'


export default defineConfig({
    title: "Record",
    description: "hello world",
    base: "/",
    markdown:{
       config:(md) => {
        md.use(mdItCustomAttrs,'image',{
        'data-fancybox':"gallery"
        })
    }
    },
    head: [
        ["link", { rel: "icon", type: "image/svg+xml", href: "logo.svg" }],
        ["link",{ rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" }],
        ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
    ],
    lastUpdated: true,
    themeConfig: {
        logo: "/logo.svg",
        nav: [
            { text: "首页", link: "/" },
            { text: "我的笔记", link: "/daily/" },
            { text: "前端面试", link: "/javascript/" },
            { text: "react学习", link: "/life/" },
            { text: "我的掘金", link: "https://juejin.cn/user/3483706528631166" },
            { text: "关于我", link: "/me/" },
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/wxylove000108" }],
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2022-07-27～present 王鑫宇",
        },

        sidebar: {
            "/life/": [{
                text: '生活感悟',
                items: [
                    { text: "社会", link: "/life/" },
                    { text: "社会", link: "/life/" },
                    { text: "2022-06年中总结", link: "/life/2022-06" },
                    { text: "2021-12年终总结", link: "/life/2021-12" },
                ]
            }],
            "/javascript/": [{
                text: 'JavaScript积累',
                items: [
                    { text: "社会", link: "/javascript/" },
                    { text: "2022-06年中总结", link: "/life/2022-06" },
                    { text: "2021-12年终总结", link: "/life/2021-12" },
                ]
            }],
            "/daily/": [{
                    text: "",
                    items: [
                        { text: "unocss安装与使用", link: "/daily/" },
                    ],
                },
            ],
        },
    },
    vite: {
        server: {
            host: true,
            port: 3000,
            open: true,
            proxy: {
                '/so': {
                    target: 'http://139.159.245.209:5000', // 代理接口
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/so/, '')
                }
            }
        },
    },
});