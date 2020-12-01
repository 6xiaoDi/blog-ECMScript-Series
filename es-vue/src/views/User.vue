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
  created () {
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res)
        this.userList = res.data
      })
      .catch((err) => {
        console.log(err)
      })
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
