<!-- ChenRuijuan main: chenruijuan@ketangpai.com-->
<template>
  <div class="not-found">
    <div class="not-found-content">
      <h1>404</h1>
      <p>哎呀，您找的页面丢失了~~</p>
      <!-- <a class="link" @click="goToHome">返回首页>></a> -->
      <div>
        <img src="../assets/img/404/404.png" alt="404"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    goToHome(){
      this.$router.replace('/index')
    }
  }
}

</script>
<style lang='scss' scoped>
  .not-found {
    width: 100%;
    background-color: #fff;
    cursor: default;
  }
  .not-found-content {
    height: 100vh;
    padding-top: 100px;
    margin: 0 auto;
    color: #6a6a6a;
    box-sizing: border-box;
    text-align: center;
  }
  h1 {
    font-size: 50px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
  }

  a {
    display: inline-block;
    color: #6a6a6a;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 50px;
  }

  img {
    width: 266px;
  }

  .link{
    cursor: pointer;
    color: #58BEE9;
    font-size: 18px;

    &:hover{
      color: #0067da;
    }
  }
</style>
