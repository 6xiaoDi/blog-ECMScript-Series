<template>
  <div>
    <div>用户信息</div>
    <ul>
      <li v-for="(item, index) in userList" :key="index">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      userList: []
    }
  },
  async created () {
    // 解构赋值
    const { data } = await axios.get('http://jsonplaceholder.typicode.com/users')
    this.userList = data
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
ul {
  padding: 0;
}
</style>
