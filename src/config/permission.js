//ChenRuijuan main: chenruijuan@ketangpai.com
import Vue from 'vue'
import config from './index'

Vue.directive('has', {
  bind: function (el, binding) {
    if (!Vue.prototype.$_has(binding.value)) {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      } else {
        el.style.display = "none"
      }
    }
  }
});

Vue.prototype.$_has = function (value) {
  let isExist = false;
  let permissionStr = sessionStorage.getItem(config.proName + "_permission")

  if (permissionStr == undefined || permissionStr == null) {
    return isExist;
  }

  if (value.indexOf("||") > -1) {
    let valArr = value.split("||")
    for (let i = 0; i < valArr.length; ++i) {
      if (permissionStr.indexOf(valArr[i]) > -1) {
        isExist = true
        break
      }
    }

  } else {
    if (permissionStr.indexOf(value) > -1) {
      isExist = true
    }
  }

  return isExist;
};

Vue.directive('!has', {
  bind: function (el, binding) {
    if (!Vue.prototype.$_nhas(binding.value)) {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      } else {
        el.style.display = "none"
      }
    }
  }
});


Vue.prototype.$_nhas = function (value) {
  let isExist = false;
  let permissionStr = sessionStorage.getItem(config.proName + "_permission")

  if (permissionStr == undefined || permissionStr == null) {
    return isExist;
  }

  if (value.indexOf("||") > -1) {
    let valArr = value.split("||")
    for (let i = 0; i < valArr.length; ++i) {
      if (permissionStr.indexOf(valArr[i]) > -1) {
        isExist = true
        break
      }
    }

  } else {
    if (permissionStr.indexOf(value) > -1) {
      isExist = true
    }
  }

  return !isExist;
};