/**
 * 以下为开发的vue插件
 * */
var validate  = {};
validate.install = function (Vue, options) {
  /**
   * 参数 item
   * required true  必填项
   * maxLength  字符串的最大长度
   * min 和 max 必须同时给 min < max  type=number
   * type 手机号 mobile
   *      邮箱   email
   *      网址   url
   * */

  Vue.prototype.$filter_rules = function (item){
    let rules = [];
    if(item.required){
      rules.push({ required: true, message: '该项不能为空!', trigger: 'blur' });
    }
    if(item.type){
      let type = item.type;
      switch(type) {
        case 'username':
          rules.push({ message: '请输入用户名', trigger: 'blur'  });
          break;
        case 'pwd':
          rules.push({pattern: /^[^\u4e00-\u9fa5\s]{6,20}$/, message: '密码格式输入有误', trigger: 'blur'  });
          break;
				case 'uploadname':
          rules.push({pattern: /^[A-Za-z0-9\u4E00-\u9FFF]{0,20}$/, message: '请输入仅含有字母、数字、汉字的20个字符', trigger: 'blur'  });
					break;
					case 'capacityName':
          rules.push({pattern: /^[123456789]\d{10}$/, message: '请输入11位的正整数', trigger: 'blur'  });
					break;
				case 'towerId':
					rules.push({pattern: /^[0-9]+$/, message: '输入错误', trigger: 'blur'  });
					break;
				case 'towerLo':
					rules.push({pattern: /^-?((0|1?[0-7]?[0-9]?)(([.][0-9]{1,4})?)|180(([.][0]{1,4})?))$/, message: '输入错误', trigger: 'blur'  });
					break;
				case 'towerLa':
					rules.push({pattern: /^-?((0|[1-8]?[0-9]?)(([.][0-9]{1,4})?)|90(([.][0]{1,4})?))$/, message: '输入错误', trigger: 'blur'  });
					break;
				case 'Name':
					rules.push({pattern: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/, message: '输入错误', trigger: 'blur'  });
					break;
				case 'phone':
          rules.push({pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur'  });
					break;
				case 'card':
          rules.push({pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '请输入15或者18位身份证号码', trigger: 'blur'  });
					break;
				case 'num':
          rules.push({pattern: /^[1-9]\d*$/, message: '请输入非0的整数', trigger: 'blur'  });
					break;
				case 'float2':
          rules.push({pattern: /^([1-9]+[0-9]*(\.[0-9]{1,2})?|0\.[1-9][0-9]?|0\.0[1-9])$/, message: '正整数且最多两位小数', trigger: 'blur'  });
					break;
        case 'mac':
          rules.push({pattern: /^[A-F0-9]{2}(-[A-F0-9]{2}){5}$|^[A-F0-9]{2}(:[A-F0-9]{2}){5}$/, message: '请输入正确的mac地址', trigger: 'blur'  });
          break;
        case 'ip':
          rules.push({pattern: /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/, message: '请输入正确的ip地址', trigger: 'blur'  });
          break;
        default:
//        rule.push({});
          break;
      }
    }
    return rules;
  };
};

module.exports = validate;
