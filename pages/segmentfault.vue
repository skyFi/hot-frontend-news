<template>
<div class="page-segmentfault">
  <div class="segmentfault-container">
    <h1>segmentfault前端头条 - <TimeClock /></h1>
    <ul>
      <li v-for="(item, index) in list" :key="item.href">
        <span :class="{numGreen: item.num < 20, numYellow: item.num >= 20 && item.num < 150, numRed: item.num >= 150}">{{item.num}}</span>
        <a :href="item.href" target="_blank">{{ item.text }}</a>
      </li>
    </ul>
  </div>
  <Page :total="150" :current="page" :page-size="30" @on-change="onPagination" />
</div>
</template>

<script>
import axios from '../plugins/axios'
import TimeClock from '../components/timeclock'

export default {
  async asyncData ({ query }) {
    const page = Number(query.page || 1)
    const res = await axios.get(`segmentfault?page=${page}`)
    return {
      list: res.data,
      page
    }
  },
  methods: {
    onPagination (page) {
      this.$router.push(`segmentfault?page=${page}`)
    }
  },
  components: {
    TimeClock
  }
}
</script>

<style lang="less">
.page-segmentfault {
  @import url("../assets/common/mixin");
  .ivu-page {
    margin: 20px;
    text-align: center;
  }

  .segmentfault-container {
    h1 {
      color: #666;
      font-weight: bold;
    }

    ul {
      padding: 10px;
      li {
        height: 42px;
        a {
          display: inline-block;
          line-height: 42px;
          color: #666;
          font-size: 16px;
          vertical-align: middle;
          transition: all .3s;
          &:hover {
            color: #3399ff;
          }
        }
        span {
          position: relative;
          display: inline-block;
          margin-right: 10px;
          min-width: 32px;
          font-size: 18px;
          font-weight: bold;
          line-height: 42px;
          text-align: center;
          vertical-align: middle;
          user-select: none;
          overflow: hidden;
          cursor: default;
          .superflash();
          &:hover {
            text-shadow: 0, 2px 4px 6px rgba(0, 0, 0, .2);
          }
        }
        .numGreen {
          color: #19be6b;
        }
        .numYellow {
          color: #ff9900;
        }
        .numRed {
          color: #ed3f14;
        }
      }
    }
  }

}
</style>

