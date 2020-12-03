<template>
  <div>
    <label for="upload" class="choose-img" >选择图片上传</label>
    <input type="file" multiple id="upload"
           style="display: none;" accept="image/*"
           @change="onChange" ref="file"
    >
    <p class="tip">提示：一次可选择多张图片，最多不超过9张（单张图片大小 &lt; 1M）</p>
  </div>
</template>

<script>
import OSS from 'cos-js-sdk-v5'
const ACCESSKEY = {
  ID: 'AKIDFK7gyHvDpDOJzRuVihOZqrecMmyuwpHy',
  SECRET: 'deQuHUSBRSntirsSjmb7OMyMNgiVTDgt'
}
const Bucket = 'es-vue-1300655759'
const Region = 'ap-beijing' /* 存储桶所在地域，必须字段 */
export default {
  data () {
    return {
      client: new OSS({
        SecretId: ACCESSKEY.ID,
        SecretKey: ACCESSKEY.SECRET
      }),
      imgList: [], // 存放上传完成的图片的列表
      isUploading: false // 当前图片是否正在上传
    }
  },
  methods: {
    onChange () {
      // 可选链
      const newFiles = this.$refs?.file?.files
      // 校验
      if (newFiles.length > 9) {
        alert('最多可以一次选择9张图片')
        return false
      }
      const files = []
      for (const file of newFiles) {
        const size = file.size / 1024 / 1024 // 把单位转化成M
        if (size > 1) {
          alert('请选择1M以内的图片')
          return false
        }
        files.push(file)
      }
      this.uploadFilesByOSS(files)
    },
    // 上传多图到图床OSS
    uploadFilesByOSS (files) {
      this.isUploading = true
      const uploadRequest = []
      for (const file of files) {
        uploadRequest.push(new Promise((resolve, reject) => {
          this.client.putObject({
            Bucket: Bucket,
            Region: Region,
            Key: `${Math.random()}-${file.name}`,
            StorageClass: 'STANDARD',
            Body: file, // 上传文件对象
            onProgress: function (progressData) {
              console.log(JSON.stringify(progressData))
            }
          }).then(res => {
            console.log(res)
            resolve(res)
          }).catch(err => {
            console.log(err)
            reject(err)
          })
        }))
      }
    }
  }
}
</script>

<style scoped>
  .choose-img {
    display: block;
    width: 150px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: #42b983;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  .tip {
    color: #ccc;
  }

</style>
