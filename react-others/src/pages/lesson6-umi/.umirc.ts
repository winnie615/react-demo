/*
 * @Author: Winnie
 * @Date: 2021-05-18 20:38:33
 * @LastEditors: Winnie
 * @LastEditTime: 2021-05-18 21:19:34
 * @Description: 作用
 * @FilePath: /lesson6-umi/.umirc.ts
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/about', component: '@/pages/about' },
    { path: '/more', component: '@/pages/more/index' },
    // { path: '/product/:id', component: '@/pages/product/[id]' },
    {
      path: '/product/:id',
      component: '@/pages/product/_layout',
      routes: [{ path: '/product/:id', component: '@/pages/product/[id]' }],
    },
  ],
  fastRefresh: {},
});
