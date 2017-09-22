<style scoped lang='less'>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  @import url("../assets/common/mixin");

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    min-height: ~"calc(100vh - 140px)";
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-text {
    color: white;
  }

  .ivu-menu-item-selected {
    .nuxt-link-active {
      color: #2d8cf0;
    }
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    background: #464c5b;
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    position: relative;
    display: block;
    margin: 15px auto;
    width: 90%;
    height: 30px;
    font-size: 18px;
    line-height: 30px;
    font-weight: bold;
    border-radius: 3px;
    text-align: center;
    color: white;
    background: #5b6270;
    user-select: none;
    .superflash();
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text {
    display: none;
  }

  .ivu-col {
    transition: width .2s ease-in-out;
  }

  .description {
    display: inline-block;
    margin-left: 23px;
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    font-weight: bold;
    vertical-align: middle;
    color: #666;
    user-select: none;
  }

  .disclaimer {
    display: inline-block;
    margin-left: 25px;
    height: 60px;
    line-height: 60px;
    font-size: 12px;
    color: #ddd;
  }

}
</style>
<template>
  <div class="layout">
    <Row type="flex">
      <Col :span="5" class="layout-menu-left">
      <Menu :active-name="pathname" theme="dark" width="auto" @on-select="go">
        <a class="layout-logo-left" href="http://www.fangyongle.com" target="_blank">Skylor.min</a>
        <MenuItem name="/">
          <Icon type="ios-navigate" :size="14"></Icon>
          <span class="layout-text">首页</span>
        </MenuItem>
        <MenuItem name="/segmentfault">
          <Icon type="ios-navigate" :size="14"></Icon>
          <span class="layout-text">SF前端头条</span>
        </MenuItem>
      </Menu>
      </Col>
      <Col :span="19">
      <div class="layout-header">
        <div class="description">
          及时最新信息汇集地
        </div>
        <div class="disclaimer">信息收集于互联网，不承诺其正确性</div>
      </div>
      <div class="layout-content">
        <div class="layout-content-main">
          <nuxt/>
        </div>
      </div>
      <div class="layout-copy">
        2017-present &copy; Skylor.min
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  computed: {
    pathname () {
      console.log(this.$route)
      return this.$route.path || '/'
    }
  },
  mounted () {
  },
  methods: {
    go (pathname = '/') {
      this.$router.push(pathname)
    }
  }
}
</script>