<template>
  <div class="footer-nav">
    <router-link to="/message" class="nav-item">
      <img src="@/assets/消息.png" alt="message" class="nav-icon">
      <span>微信</span>
    </router-link>
    <router-link to="/addressbookt" class="nav-item">
      <img src="@/assets/通讯录.png" alt="addressbook" class="nav-icon">
      <span>通讯录</span>
    </router-link>
    <router-link to="/discover" class="nav-item">
      <img src="@/assets/发现.png" alt="discover" class="nav-icon">
      <span>发现</span>
    </router-link>
    <router-link to="/me" class="nav-item">
      <img src="@/assets/我的.png" alt="me" class="nav-icon">
      <span>我</span>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    uploadIcon(event) {
      const file = event.target.files[0];
      // 处理上传的图标文件
    }
  }
}
</script>

<style>
.footer-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid #ccc;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
  padding: 10px 0;
}

.nav-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
}
</style>
