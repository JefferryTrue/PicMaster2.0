<template>
  <div class="statement">
    <h1 style="text-align: center;margin: 0;">用户协议</h1>
    <div class="container">
        
        <div style="margin: 0; display: flex; justify-content: center">
      <div class="a">
        <div class="b">
          <a href="#">网站简介</a>
          <span
            >PicMaster是一款<strong>免费的</strong>图床工具.<br />在这里,用户可以上传自己本地的图片,并且生成一条图片链接,<br />用户可以将其复制粘贴到自己的博客或网站.</span>
        </div>
        <div class="c">
          <!-- --i是用来计算平面圆柱的动效延迟和距离的
            --w则是用来计算平面圆柱的宽度 -->
          <div class="d" style="--i: 1; --w: 1.5"></div>
          <div class="d" style="--i: 2; --w: 1.6"></div>
          <div class="d" style="--i: 3; --w: 1.4"></div>
          <div class="d" style="--i: 4; --w: 1.7"></div>
          <div class="e" style="--i: 1"></div>
        </div>
        <!-- 设置二维码 -->
        <div class="f" id="A"></div>
      </div>
    </div>

    <div class="card">
      <div class="a">
        <div class="b">
          <a href="#">上传须知</a>
          <span
            ><strong>禁止</strong>上传含有一下内容的图片<br />含有淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪等内容<br />危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一<br />宣扬低俗、庸俗、媚俗内容等对网络生态造成不良影响的内容</span>
        </div>
        <div class="c">
          <!-- --i是用来计算平面圆柱的动效延迟和距离的
            --w则是用来计算平面圆柱的宽度 -->
          <div class="d" style="--i: 1; --w: 1.5"></div>
          <div class="d" style="--i: 2; --w: 1.6"></div>
          <div class="d" style="--i: 3; --w: 1.4"></div>
          <div class="d" style="--i: 4; --w: 1.7"></div>
          <div class="e" style="--i: 1"></div>
        </div>
        <!-- 设置二维码 -->
        <div class="f" id="B"></div>
      </div>
    </div>

    <div class="card">
      <div class="a">
        <div class="b">
          <a href="#">开源公告</a>
          <span
            >本项目使用Vue+express框架搭建<br /><br />本项目在gitee上开源,链接在网页右上角<br /><br />功能正在完善 欢迎大家前来Star~</span>
        </div>
        <div class="c">
          <!-- --i是用来计算平面圆柱的动效延迟和距离的
            --w则是用来计算平面圆柱的宽度 -->
          <div class="d" style="--i: 1; --w: 1.5"></div>
          <div class="d" style="--i: 2; --w: 1.6"></div>
          <div class="d" style="--i: 3; --w: 1.4"></div>
          <div class="d" style="--i: 4; --w: 1.7"></div>
          <div class="e" style="--i: 1"></div>
        </div>
        <!-- 设置二维码 -->
        <div class="f" id="C"></div>
      </div>
    </div>

    <div class="card">
      <div class="a">
        <div class="b">
          <a href="#">技术支持</a>
          <span
            >本项目采用vue.js脚手架<br /><br />采用Node.js express 框架后台<br /><br />七牛云提供数据储存服务</span>
        </div>
        <div class="c">
          <!-- --i是用来计算平面圆柱的动效延迟和距离的
            --w则是用来计算平面圆柱的宽度 -->
          <div class="d" style="--i: 1; --w: 1.5"></div>
          <div class="d" style="--i: 2; --w: 1.6"></div>
          <div class="d" style="--i: 3; --w: 1.4"></div>
          <div class="d" style="--i: 4; --w: 1.7"></div>
          <div class="e" style="--i: 1"></div>
        </div>
        <!-- 设置二维码 -->
        <div class="f" id="D"></div>
      </div>
    </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "statement",
  data() {
    return {};
  },
};
</script>

<style scoped>
.statement {
  display: block;
  margin: 0;
  padding: 0;
  padding-bottom: 120px;
}

.container {
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
}

h1 {
  display: block;
  font-size: 36px;
  width: auto;
  color: #605e2c;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding: 0;
}

span {
  display: block;
  margin-top: 8px;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
}

.title1 {
  font-size: 30px;
  font-weight: 800;
  margin: 0;
}

span p {
  font-size: 20px;
  font-weight: 600;
}

img {
  width: 64px;
  margin-top: 18px;
}

.a {
    min-width: 800px;
  margin: 0;
  position: relative;
  width: 90%;
  height: 400px;
  border: #fff 10px solid;
  background-color: #faa2c6;
  top: 120px;
  border-radius: 20px;
  overflow: hidden;
}
.b {
  position: absolute;
  width: 200px;
  height: 300px;
  left: 0;
  margin: 75px 50px;
  transition: 1s;
}
.b a {
  text-decoration: none;
  color: #fff;
  font: 900 28px "";
}
.b h2 {
  /* 鼠标放开时的动画，第一个值是动画的过渡时间
            第二个值是延迟一秒后执行动画 */
  transition: 0.5s 1s;
  opacity: 0;
  color: rgb(30, 210, 200);
}
.b span {
  transition: 0.5s 1s;
  color: #fff;
  font: 500 24px "";
  position: absolute;
  top: 50px;
  width: 480px;
}
.c {
  position: absolute;
  top: -130px;
  right: -240px;
}
.d,
.e {
  position: absolute;
  right: calc(var(--i) * 100px);
  width: calc(var(--w) * 40px);
  height: 500px;
  overflow: hidden;
  border-radius: 100px;
  transform: rotateZ(220deg) translate(0, 0);
  background: rgb(240, 220, 150);
  transition: 0.5s 0.5s;
}
.d:nth-child(2) {
  background: rgb(240, 190, 230);
}
.e {
  left: -470px;
  top: -140px;
  width: 70px;
  background-color: rgb(90, 220, 150);
}
.a:hover .c div {
  /* 设置延迟动画 */
  transition: 0.5s calc(var(--i) * 0.1s);
  /* 移动的轨迹 */
  transform: rotateZ(220deg) translate(-200px, 400px);
}
.a:hover .b {
  transition: 1s 0.5s;
  left: 370px;
}
.a:hover .b span {
  transition: 1s 0.5s;
  top: 50px;
}

.f {
  width: 250px;
  height: 250px;
  position: absolute;
  background-size: cover;
  margin: 70px;
  opacity: 0;
  transition: 0.5s;
}

#A{
    background-image: url("../../assets/picmaster.svg");

}

#B{
    background-image: url("../../assets/icons8-error-128\(-xxxhdpi\).png");
}

#C{
    background-image: url("../../assets/icons8-github.svg");
}

#D{
    background-image: url("../../assets/logo.png");
}


.a:hover .f {
  transition: 1s 1.3s;
  opacity: 1;
}

.card{
     margin: 0; display: flex; justify-content: center;
    margin: 12px 0 0 0;
}

</style>