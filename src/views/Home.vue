<template>
  <div>
    <a-menu
      :default-selected-keys="['1']"
      :open-keys.sync="openKeys"
      mode="inline"
      :inlineIndent=30
      @click="handleClick"
      :inline-collapsed="collapsed"
    >
      <a-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title"><a-icon type="mail" /><span>折线图</span></span>
        <a-menu-item-group key="g1">
          <template slot="title"> <a-icon type="qq" /><span>基础折线图</span> </template>
          <a-menu-item key="1">
            <router-link to="/g2lineChart"></router-link>
            基础折线图
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/g2mutlineChart"></router-link>
            多折线图
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group key="g2" title="Item 2">
          <a-menu-item key="3">
            Option 3
          </a-menu-item>
          <a-menu-item key="4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <span slot="title"><a-icon type="appstore" /><span>柱状图</span></span>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <span slot="title"><a-icon type="setting" /><span>面积图</span></span>
        <a-menu-item key="9">
          Option 9
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1'],
      collapsed: false,
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
};
</script>
