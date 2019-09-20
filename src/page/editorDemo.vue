<template>
	<section>

        	<Ueditor :writeMsg="defaultMsg1"  :id="ueditor1" :config="config1"  ref="ue1" ></Ueditor> 
                      
            <el-button  @click="submitForm()">提交</el-button>
            <el-button  @click="setCont()">设置</el-button>

  	 
	</section>	
</template>

<script>

	import Ueditor from '@/components/ueditor/Ueditor.vue';
	

	export default {
		data() {
			return {
//				富文本
	        defaultMsg1:'7477667',
	        ueditor1:'ueditor1',
	        config1: {
            //   serverUrl:"http://dw2.mywkzj.com/core/upload/ueditor?type=40&schid=19",//这个编辑器上传内容的存储地址，这个地址需要问后端要
            // serverUrl:'http://10.131.8.221/controller.php',
            serverUrl: apiLink + "/uploadApi/baiduEditor",
            
	          toolbars: [
                 ['fullscreen','bold','underline', 'italic','strikethrough','forecolor','fontfamily', 'fontsize','justifyleft', 'justifycenter', 'justifyright','insertcode','simpleupload','custombtn','complexformulas','insertvideo']
               ],
	          autoHeightEnabled: false,
              autoFloatEnabled: false,//不允许滚动时固定在顶部
              initialContent:'请输入内容...(如果是填空题请用{***}来表示横线)',   //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
              autoClearinitialContent:true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
              initialFrameWidth: null,
              initialFrameHeight: 300,
              BaseUrl: '',
              UEDITOR_HOME_URL: 'static/ueditor/',
              zIndex:'100',//修改编辑器层级
	        },
	         
	       
			}
		},
		methods: {
			//点击提交按钮  获取编辑器内容
			submitForm(){
				console.log("编辑器内容："+this.$refs.ue1.getUEContent());
			},

			//点击设置按钮  插入编辑器内容
			setCont(){
				this.$refs.ue1.setUEContent('<p>你点击了设置</p>');
			},

		},
		mounted() {

		},
		components: {
          Ueditor
      },
      watch:{

      },
     
	}

</script>

<style scoped>

</style>