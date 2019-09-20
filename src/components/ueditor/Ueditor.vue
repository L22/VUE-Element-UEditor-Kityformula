<template>
  <div>
    <script :id="id"  :defaultMsg="writeMsg" type="text/plain" ></script>
  </div>
</template>

<script>
import '../../../static/ueditor/ueditor.config.js'
import '../../../static/ueditor/ueditor.all.js'
import '../../../static/ueditor/lang/zh-cn/zh-cn.js'

//引入公式插件
import '../../../static/ueditor/kityformula-plugin/addKityFormulaDialog.js'
import '../../../static/ueditor/kityformula-plugin/getKfContent.js'
import '../../../static/ueditor/kityformula-plugin/defaultFilterFix.js'

export default {
    name: "UEditor",
    props: {
        id: {
            type: String
        },
        config: {
            type: Object
        },
        writeMsg:{
        	type: String
        },
        
    },
//  components:{util},
    data() {
        return {
            editor: null,
            isinit:false,
        }
    },    
    mounted() {
        //初始化UE
        const _this = this;
        this.editor = UE.delEditor(this.id);
        this.editor = UE.getEditor(this.id,this.config);
        this.editor.addListener("ready",function(){
//      	setTimeout(function(){//过段时间在加载
//      		if(_this.writeMsg!=''){_this.editor.setContent(_this.writeMsg);alert("000")}
//      	},500)
           _this.isinit=true;
        })
        
        
        
    },
    destoryed() {
        this.editor.destory();
    },
    methods:{
        getUEContent: function(){
            return this.editor.getContent();
        },
        getContentTxt: function(){
            return this.editor.getContentTxt();
        },
         setUEContent: function(val){
//       	console.log(this.isinit);
         	if(this.isinit){
             return this.editor.setContent(val);
         	}else{
         		 const _this = this;
         		setTimeout(function(){//过段时间在加载
        		  _this.setUEContent(val);
        	},500)
         	}
        },
    }
}
</script>