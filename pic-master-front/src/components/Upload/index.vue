<template>
  <div class="upload">
    <div class="container">
        <label  class="FileInput">
            <img src="../../assets/icons8-upload-64.png" class="uploadlogo">
            <p>请点击<em>此处</em>进行上传</p>
            <input type="file" ref="file" style="display:none" v-on:change="upload">
        </label>
        <p class="tips">*仅允许上传不超过5M的图片</p>
        <p class="tips">*仅允许上传.jpg .PNG格式的图片</p>

        <div class="result">
              <el-input @paste.native.capture.prevent="handlePaste"
              placeholder="图片地址" v-model="imgUrl" class="input-with-copy">
                    <el-button slot="append" icon="el-icon-copy-document" @click="copyUrl(imgUrl)"></el-button>
                </el-input>
                <p class="tips">*点击右侧按钮复制</p>
        </div>

    </div>
  </div>
</template>

<script>
import * as qiniu from 'qiniu-js'
import axios from 'axios'
export default {
    name:'upload',
    data(){
        return {
            imgUrl:'请上传图片后在此处获取地址'
        }
    },
    methods:{
        copyUrl(data){
            let url = data;
            let oInput = document.createElement('input');
            oInput.value = url;
            document.body.appendChild(oInput);
            oInput.select(); // 选择对象;
            console.log(oInput.value)
            document.execCommand("Copy"); // 执行浏览器复制命令
            this.$message({
             message: '已成功复制到剪切板',
                type: 'success'
            });
            oInput.remove()
      },
      upload(){
        if(this.$refs.file.files.length === 0){
          alert('请选择文件');
          return ;
        }
        const config = {
          useCdnDomain: true,
          region: 'z2'
        };
        const observer = {
          next(res){
            // ...
          },
          error(err){
            console.log('上传失败')
          },
          complete(res){
            console.log('上传成功')
          }
        }
        const putExtra = {};
        let file = this.$refs.file.files[0];
        var _token = ''

        var fileBack = "";
        axios.get('api/uploadimg/hashName').then(res => {
          fileBack = res.data.hash;
          axios.get('api/uploadimg/getToken').then(res => {
            console.log(res.data.token)
            _token = res.data.token;
            console.log(fileBack);
            const observable = qiniu.upload(file, fileBack, _token, putExtra, config)
            const subscription = observable.subscribe(observer)
            this.imgUrl = 'http://rju4cbt6f.hn-bkt.clouddn.com/'+fileBack;
        })
        });

        
      }

    }
}
</script>

<style scoped>
.upload{
    text-align: center;
    display: block;
    margin:120px 0 0 0;
    padding: 100px 0 0 0;
}
.container{ 
    display: block;
    margin:0;
    padding: 168px 0 365px 0;
}

.FileInput{
    display: block;
    font-size: 24px;
    padding: 6px;
    width: 80%;
    height: 300px;
    margin-bottom: 20px;
    border: 2px dotted #3d6fa0;
    border-radius: 8px;
    margin: auto;
}

.FileInput:hover{
    cursor: pointer;
    border: 2px dotted #b8becc;
}

.uploadlogo{
    width: 100px;
    margin: 20px;
}

.FileInput p{
    margin: 0;
}

.tips{
    font-size: medium;
    margin: 32px 0 32px 0;
    color: darkgrey;
}

.result{
    margin: auto;
    padding: 0;
    width: 80%;
}

.input-with-copy{
    border-radius: 30px;
}

</style>
