<template>
  <div>
  <!-- <router-link to="/moments">进入我的朋友圈</router-link> -->
  <router-link to="/moments" class="circle-button">
  <span id="font">点击进入我的朋友圈</span>
      <img src="@/assets/朋友圈.png" alt="Friend Circle" class="circle-icon">
    </router-link>
    <!-- 页面内容 -->
    <FooterNav />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav.vue';

export default {
  components: {
    FooterNav
  }
}
</script>
<style scoped>
.circle-button {
  top: 20px;
  background-color: #b6e7e4;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none; /* 去掉链接的下划线 */
}

.circle-icon {
  width: 30px;
  height: 30px;
}
#font{font: 1.2em sans-serif;}
</style>

