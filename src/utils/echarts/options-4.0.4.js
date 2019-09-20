/**
 * Created by SC on 2018/04/26.
 * for echarts-4.0.4
 */

'use strict'
var sc_options = function ($) {

  var rate = g_rate
  var sc_fontFamily = 'Arial';
  var sc_backgroundColor = 'transparent';
  //var sc_color = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
  var sc_color = ["#2df3ff", '#fdd600', "#eaff00", "#ffa200"];
  var loading = {
    text: "",
    color: '#3684D4', //圆圈颜色
    maskColor: 'rgba(37, 55, 81, 0.5)', //背景色
    textColor: '#000', //文本颜色
    zlevel: 0,
  };

  const axis = {
    xAxisLineShow: false,
    yAxisLineShow: false,
    lineColor: '#121f46',
    showTick: false, //是否显示刻度
    showTickY: true, //是否显示刻度
    tickLength: 4 * rate, //刻度长度
    tickLineColor: '#08cbd5',
    labelToX: 11 * rate, // 刻度标签与轴线之间的距离
    labelToY: 3.5 * rate, // 刻度标签与轴线之间的距离
    fontColor: "#fff",
    fontColorX: "#525b7b",
    labelFontSize: 10 * rate,
    splitLineXShow: false,
    splitLineYShow: true,
    fontSize: 9 * rate, //坐标轴名称的文字样式
    yNameGap: 16 * rate, //坐标轴名称与轴线之间的距离
    interval: 2,
  }

  const toolTip = {
    show: true,
    fontSize: 10 * rate,
    backgroundColor: 'rgba(50,50,50,0.7)',
    borderColor: '#333',
    borderWidth: 0,
    padding: 5 * rate,
    color: '#fff',
  }

  const legend = {
    bottom: 18 * rate,
    right: 24 * rate,
    orient: 'horizontal',
    itemGap: 17 * rate,
    itemWidth: 8 * rate,
    itemHeight: 8 * rate,
    borderColor: '#ccc',
    borderWidth: 0, //图例的边框线宽 number
    borderRadius: 0, //边框圆角（顺时针左上，右上，右下，左下）[0, 0, 0, 0]
    inactiveColor: '#ccc', //图例关闭时的颜色
    color: '#fff',
    fontSize: 10 * rate,
    padding: [0, 0, 0, 0]
  }

  const grid = {
    left: 53 * rate,
    top: 30 * rate,
    right: 40 * rate,
    bottom: 60 * rate,
  }

  //折线图
  var line = {
    backgroundColor: sc_backgroundColor,
    title: {
      show: true, //是否显示标题组件 true | false
      text: '', //主标题文本，支持使用 \n 换行
      link: '', //主标题文本超链接
      target: 'blank', //'self' 当前窗口打开 'blank' 新窗口打开
      left: 'center', //离容器左侧的距离 string | number  (20 | '20%' | 'left' | 'center' | 'right')
      top: 'top', //离容器上侧的距离 string | number  (20 | '20%' | 'top' | 'middle' | 'bottom')
      textStyle: {
        color: '#333', //主标题文字的颜色
        fontStyle: 'normal', // 'normal' | 'italic' | 'oblique'
        fontWeight: 'bold', // 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
        fontFamily: sc_fontFamily, // 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: 16, //字体大小
      },
      subtext: '', //副标题文本，支持使用 \n 换行
      sublink: '', //副标题文本超链接
      subtarget: 'blank', //'self' 当前窗口打开 'blank' 新窗口打开
      subtextStyle: {
        color: '#aaa', //主标题文字的颜色
        fontStyle: 'normal', // 'normal' | 'italic' | 'oblique'
        fontWeight: 'normal', // 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
        fontFamily: sc_fontFamily, // 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: 12, //字体大小
      },
      padding: [ //标题内边距，单位px
        5, // 上
        5, // 右
        5, // 下
        5, // 左
      ],
      itemGap: 10, //主副标题之间的间距
    },
    legend: {
      icon: 'rect',
      type: 'plain', //图例的类型    'plain'：普通图例 | 'scroll'：可滚动翻页的图例
      show: true,
      right: legend.right,
      bottom: legend.bottom,
      orient: legend.orient, //图例列表的布局朝向 'horizontal' | 'vertical'
      padding: legend.padding, //上右下左
      itemGap: legend.itemGap, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔
      itemWidth: legend.itemWidth, //图例标记的图形宽度
      itemHeight: legend.itemHeight, //图例标记的图形高度
      borderColor: legend.borderColor, //图例的边框颜色
      borderWidth: legend.borderWidth, //图例的边框线宽 number
      borderRadius: legend.borderRadius, //边框圆角（顺时针左上，右上，右下，左下）[0, 0, 0, 0]
      formatter: function (name) {
        //用来格式化图例文本，支持字符串模板和回调函数两种形式
        //formatter: 'Legend {name}'
        return name;
      },
      selectedMode: true, //图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。 true | false | 'single'(单选) | 'multiple'(多选)
      inactiveColor: legend.inactiveColor, //图例关闭时的颜色
      selected: {}, //图例选中状态表
      /*eg:{
              // 选中'系列1'
              '系列1': true,
              // 不选中'系列2'
              '系列2': false
          }*/
      textStyle: {
        color: legend.color, //主标题文字的颜色
        fontStyle: 'normal', // 'normal' | 'italic' | 'oblique'
        fontWeight: 'normal', // 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
        fontFamily: sc_fontFamily, // 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: legend.color, //字体大小
        padding: 0, //文字块的内边距[0,0,0,0]
      },

      /*//可以在 legend 文字很多的时候对文字做裁剪并且开启 tooltip
          formatter: function (name) {
                  return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
          },
          tooltip: {
              show: true
          },*/

      /*type 为 scroll 时有效的属性
          //如果仅仅想改变图例翻页，一般并不调用 setOption（因为这太重量了），仅仅使用 action legendScroll 即可。
          scrollDataIndex: 0,//图例当前最左上显示项的 dataIndex
          pageButtonItemGap: 5,//图例控制块中，按钮和页信息之间的间隔
          pageButtonGap: null,//图例控制块和图例项之间的间隔 number
          pageButtonPosition: 'end',//图例控制块的位置 'start' | 'end'
          pageFormatter: '{current}/{total}',//图例控制块中，页信息的显示格式
          pageIcons: {
              //legend.orient 为 'horizontal' 时的翻页按钮图标
              horizontal: ['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z'],//[previous page button, next page button] image://url也可
              //legend.orient 为 'vertical' 时的翻页按钮图标
              vertical：['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z']，//[previous page button, next page button]
          },
          pageIconColor: '#2f4554',//翻页按钮的颜色
          pageIconInactiveColor: '#aaa',//翻页按钮不激活时（即翻页到头时）的颜色
          pageIconSize: 15,//翻页按钮的大小。可以是数字，也可以是数组，如 [10, 3]，表示 [宽，高]
          pageTextStyle: {
              color: '#333',
              fontStyle: 'normal',// 'normal' | 'italic' | 'oblique'
              fontWeight:'normal',// 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
              fontFamily: sc_fontFamily,// 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
              fontSize:12,//字体大小
          },
          animation: false,//图例翻页是否使用动画 true | false,
          animationDurationUpdate: 800,//图例翻页时的动画时长
          */
    },
    grid: {
      show: false,
      left: grid.left,
      top: grid.top,
      right: grid.right,
      bottom: grid.bottom,
      containLabel: false, //是否包含坐标轴的刻度标签
      backgroundColor: 'transparent', //网格背景色，默认透明
      borderColor: '#ccc', //网格的边框颜色
      borderWidth: 0,
    },
    color: sc_color,
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        },
        magicType: {
          show: true,
          type: ['line', 'bar']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    tooltip: {
      show: toolTip.show,
      trigger: 'axis', //触发类型 'item' | 'axis' | 'none'
      showContent: true, //是否显示提示框浮层
      alwaysShowContent: false, //是否永远显示提示框内容，默认情况下在移出可触发提示框区域后 一定时间 后隐藏，设置为 true 可以保证一直显示提示框内容
      triggerOn: 'mousemove|click', //提示框触发的条件 'mousemove' | 'click' | 'mousemove|click' | 'none'
      showDelay: 0, //浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。
      hideDelay: 100, //浮层隐藏的延迟，单位为 ms，在 alwaysShowContent 为 true 的时候无效
      enterable: false, //鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
      confine: true, //是否将 tooltip 框限制在图表的区域内。
      transitionDuration: 0.4, //提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
      formatter: '{b} : {c}',
      backgroundColor: toolTip.backgroundColor,
      borderColor: toolTip.borderColor,
      borderWidth: toolTip.borderWidth,
      padding: toolTip.padding,
      textStyle: {
        color: toolTip.color,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: toolTip.fontSize,
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: [{
      show: true,
      position: 'bottom', //'bottom' | 'top' 默认 grid 中的第一个 x 轴在 grid 的下方（'bottom'），第二个 x 轴视第一个 x 轴的位置放在另一侧
      offset: 0, //X 轴相对于默认位置的偏移，在相同的 position 上有多个 X 轴的时候有用。
      type: 'category', //坐标轴类型
      /*
              'value' 数值轴，适用于连续数据
              'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据
              'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度
              'log' 对数轴。适用于对数数据
          */
      name: '', //坐标轴名称
      nameLocation: 'end', //坐标轴名称显示位置。'start' | 'middle' 或者 'center' | 'end'
      nameTextStyle: { //坐标轴名称的文字样式
        //color: '',//坐标轴名称的颜色，默认取 axisLine.lineStyle.color。
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: 12,
        padding: 0,
      },
      nameGap: 15, //坐标轴名称与轴线之间的距离
      nameRotate: null, //坐标轴名字旋转，角度值
      inverse: false, //是否是反向坐标轴。ECharts 3 中新加
      boundaryGap: false,
      /*
              坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
              类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间
              非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效
              eg:	boundaryGap: ['20%', '20%']
          */
      min: null, //坐标轴刻度最小值
      /*
              可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度
              不设置时会自动计算最小值保证坐标轴刻度的均匀分布
              在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）
              当设置成 function 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值
              eg: min: function(value) {
                      return value.min - 20;
                  }
          */
      max: null, //坐标轴刻度最大值
      /*
              可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。
              不设置时会自动计算最大值保证坐标轴刻度的均匀分布。
              在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）
              当设置成 function 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值
              eg:	max: function(value) {
                      return value.max - 20;
                  }
          */
      scale: false, //只在数值轴中（type: 'value'）有效
      /*
              是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用
              在设置 min 和 max 之后该配置项无效。
          */
      splitNumber: 5, //(在类目轴中无效)坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整
      minInterval: 0, //(只在数值轴或时间轴中有效)自动计算的坐标轴最小间隔大小
      //maxInterval: 0,//(只在数值轴或时间轴中有效)自动计算的坐标轴最大间隔大小
      //interval: 0,//强制设置坐标轴分割间隔
      logBase: 10, //对数轴的底数，只在对数轴中（type: 'log'）有效
      silent: false, //坐标轴是否是静态无法交互
      triggerEvent: false, //坐标轴的标签是否响应和触发鼠标事件，默认不响应
      axisLine: { //坐标轴轴线相关设置
        show: axis.xAxisLineShow,
        onZero: true, //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
        onZeroAxisIndex: 0, //当有双轴时，可以用这个属性手动指定，在哪个轴的 0 刻度上
        symbol: 'none', //轴线两边的箭头  ['none', 'arrow']
        symbolSize: [10, 15], //轴线两边的箭头的大小，第一个数字表示宽度（垂直坐标轴方向），第二个数字表示高度（平行坐标轴方向）
        symbolOffset: [0, 0], //轴线两边的箭头的偏移，如果是数组，第一个数字表示起始箭头的偏移，第二个数字表示末端箭头的偏移；如果是数字，表示这两个箭头使用同样的偏移
        lineStyle: {
          color: axis.lineColor,
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        }
      },
      axisTick: { //坐标轴刻度相关设置
        show: axis.showTick,
        alignWithLabel: false, //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
        interval: 'auto', //坐标轴刻度的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
        //inside: true,//坐标轴刻度是否朝内，默认朝外
        length: axis.tickLength, //坐标轴刻度的长度
        lineStyle: {
          color: axis.tickLineColor, //刻度线的颜色，默认取 axisLine.lineStyle.color。
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      axisLabel: { //坐标轴刻度标签的相关设置
        show: true,
        //interval: 0, //坐标轴刻度标签的显示间隔，在类目轴中有效。
        inside: false, //刻度标签是否朝内，默认朝外
        rotate: 0, //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
        margin: axis.labelToX, //刻度标签与轴线之间的距离
        formatter: null, //刻度标签的内容格式器，支持字符串模板和回调函数两种形式。
        showMinLabel: null, //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）。
        showMaxLabel: null, //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
        color: axis.fontColorX, //刻度标签文字的颜色，默认取 axisLine.lineStyle.color
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: axis.labelFontSize,
        padding: 0,
      },
      splitLine: { //坐标轴在 grid 区域中的分隔线
        show: axis.splitLineXShow,
        interval: 'auto', //坐标轴分隔线的显示间隔，在类目轴中有效
        lineStyle: { //
          color: axis.lineColor, //分隔线颜色，可以设置成单个颜色。也可以设置成颜色数组，分隔线会按数组中颜色的顺序依次循环设置颜色。
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      splitArea: { //坐标轴在 grid 区域中的分隔区域，默认不显示
        interval: 'auto', //坐标轴分隔区域的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
        show: false,
        areaStyle: { //分隔区域的样式设置
          color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'], //分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      data: [],
      /*
              eg: {
                  value: ...,
                  textStyle: {
                      color: '#fff',
                      fontStyle: 'normal',
                      fontWeight: normal,
                      fontFamily: 'sans-serif',
                      fontSize: 12,
                      backgroundColor: 'transparent',
                      borderColor: 'transparent',
                      borderWidth: 0,
                      borderRadius: 0,
                      padding: 0,
                  }
              }
          */
    }],
    yAxis: [{
      show: true,
      gridIndex: 0,
      //position: '',//默认 grid 中的第一个 y 轴在 grid 的左侧（'left'），第二个 y 轴视第一个 y 轴的位置放在另一侧。
      offset: 0, //Y 轴相对于默认位置的偏移，在相同的 position 上有多个 Y 轴的时候有用
      type: 'value',
      name: '',
      nameLocation: 'end',
      nameTextStyle: { //坐标轴名称的文字样式
        color: axis.fontColor, //坐标轴名称的颜色，默认取 axisLine.lineStyle.color。
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: axis.fontSize,
        padding: 0,
      },
      nameGap: axis.yNameGap, //坐标轴名称与轴线之间的距离
      nameRotate: null, //坐标轴名字旋转，角度值
      inverse: false, //是否是反向坐标轴。ECharts 3 中新加
      boundaryGap: false,
      /*
              坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
              类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间
              非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效
              eg:	boundaryGap: ['20%', '20%']
          */
      min: null, //坐标轴刻度最小值
      /*
              可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度
              不设置时会自动计算最小值保证坐标轴刻度的均匀分布
              在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）
              当设置成 function 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值
              eg: min: function(value) {
                      return value.min - 20;
                  }
          */
      max: null, //坐标轴刻度最大值
      /*
              可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。
              不设置时会自动计算最大值保证坐标轴刻度的均匀分布。
              在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）
              当设置成 function 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值
              eg:	max: function(value) {
                      return value.max - 20;
                  }
          */
      scale: false, //只在数值轴中（type: 'value'）有效
      /*
              是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用
              在设置 min 和 max 之后该配置项无效。
          */
      splitNumber: 5, //(在类目轴中无效)坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整
      minInterval: 0, //(只在数值轴或时间轴中有效)自动计算的坐标轴最小间隔大小
      //maxInterval: 0,//(只在数值轴或时间轴中有效)自动计算的坐标轴最大间隔大小
      //interval: 0,//强制设置坐标轴分割间隔
      logBase: 10, //对数轴的底数，只在对数轴中（type: 'log'）有效
      silent: false, //坐标轴是否是静态无法交互
      triggerEvent: false, //坐标轴的标签是否响应和触发鼠标事件，默认不响应
      axisLine: { //坐标轴轴线相关设置
        show: axis.yAxisLineShow,
        onZero: true, //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
        onZeroAxisIndex: 0, //当有双轴时，可以用这个属性手动指定，在哪个轴的 0 刻度上
        symbol: 'none', //轴线两边的箭头  ['none', 'arrow']
        symbolSize: [10, 15], //轴线两边的箭头的大小，第一个数字表示宽度（垂直坐标轴方向），第二个数字表示高度（平行坐标轴方向）
        symbolOffset: [0, 0], //轴线两边的箭头的偏移，如果是数组，第一个数字表示起始箭头的偏移，第二个数字表示末端箭头的偏移；如果是数字，表示这两个箭头使用同样的偏移
        lineStyle: {
          color: axis.lineColor,
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        }
      },
      axisTick: { //坐标轴刻度相关设置
        show: axis.showTickY,
        alignWithLabel: false, //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
        interval: 'auto', //坐标轴刻度的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
        inside: false, //坐标轴刻度是否朝内，默认朝外
        length: axis.tickLength, //坐标轴刻度的长度
        lineStyle: {
          color: axis.tickLineColor, //刻度线的颜色，默认取 axisLine.lineStyle.color。
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      axisLabel: { //坐标轴刻度标签的相关设置
        show: true,
        interval: 'auto', //坐标轴刻度标签的显示间隔，在类目轴中有效。
        inside: false, //刻度标签是否朝内，默认朝外
        rotate: 0, //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
        margin: axis.labelToY, //刻度标签与轴线之间的距离
        formatter: null, //刻度标签的内容格式器，支持字符串模板和回调函数两种形式。
        showMinLabel: null, //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）。
        showMaxLabel: null, //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
        color: axis.fontColor, //刻度标签文字的颜色，默认取 axisLine.lineStyle.color
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: axis.labelFontSize,
        padding: 8,
      },
      splitLine: { //坐标轴在 grid 区域中的分隔线
        show: axis.splitLineYShow,
        interval: 'auto', //坐标轴分隔线的显示间隔，在类目轴中有效
        lineStyle: { //
          color: axis.lineColor, //分隔线颜色，可以设置成单个颜色。也可以设置成颜色数组，分隔线会按数组中颜色的顺序依次循环设置颜色。
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      splitArea: { //坐标轴在 grid 区域中的分隔区域，默认不显示
        interval: 'auto', //坐标轴分隔区域的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
        show: false,
        areaStyle: { //分隔区域的样式设置
          color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'], //分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      data: [],
      /*
              eg: {
                  value: ...,
                  textStyle: {
                      color: '#fff',
                      fontStyle: 'normal',
                      fontWeight: normal,
                      fontFamily: 'sans-serif',
                      fontSize: 12,
                      backgroundColor: 'transparent',
                      borderColor: 'transparent',
                      borderWidth: 0,
                      borderRadius: 0,
                      padding: 0,
                  }
              }
          */
    }, {
      show: false,
      gridIndex: 0,
      //position: '',//默认 grid 中的第一个 y 轴在 grid 的左侧（'left'），第二个 y 轴视第一个 y 轴的位置放在另一侧。
      offset: 0, //Y 轴相对于默认位置的偏移，在相同的 position 上有多个 Y 轴的时候有用
      type: 'value',
      name: '',
      nameLocation: 'end',
      nameTextStyle: { //坐标轴名称的文字样式
        //color: '',//坐标轴名称的颜色，默认取 axisLine.lineStyle.color。
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: 12,
        padding: 0,
      },
      nameGap: 15, //坐标轴名称与轴线之间的距离
      nameRotate: null, //坐标轴名字旋转，角度值
      inverse: false, //是否是反向坐标轴。ECharts 3 中新加
      boundaryGap: false,
      /*
              坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
              类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间
              非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效
              eg:	boundaryGap: ['20%', '20%']
          */
      min: null, //坐标轴刻度最小值
      /*
              可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度
              不设置时会自动计算最小值保证坐标轴刻度的均匀分布
              在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）
              当设置成 function 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值
              eg: min: function(value) {
                      return value.min - 20;
                  }
          */
      max: null, //坐标轴刻度最大值
      /*
              可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。
              不设置时会自动计算最大值保证坐标轴刻度的均匀分布。
              在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）
              当设置成 function 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值
              eg:	max: function(value) {
                      return value.max - 20;
                  }
          */
      scale: false, //只在数值轴中（type: 'value'）有效
      /*
              是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用
              在设置 min 和 max 之后该配置项无效。
          */
      splitNumber: 5, //(在类目轴中无效)坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整
      minInterval: 0, //(只在数值轴或时间轴中有效)自动计算的坐标轴最小间隔大小
      //maxInterval: 0,//(只在数值轴或时间轴中有效)自动计算的坐标轴最大间隔大小
      //interval: 0,//强制设置坐标轴分割间隔
      logBase: 10, //对数轴的底数，只在对数轴中（type: 'log'）有效
      silent: false, //坐标轴是否是静态无法交互
      triggerEvent: false, //坐标轴的标签是否响应和触发鼠标事件，默认不响应
      axisLine: { //坐标轴轴线相关设置
        show: axis.yAxisLineShow,
        onZero: true, //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
        onZeroAxisIndex: 0, //当有双轴时，可以用这个属性手动指定，在哪个轴的 0 刻度上
        symbol: 'none', //轴线两边的箭头  ['none', 'arrow']
        symbolSize: [10, 15], //轴线两边的箭头的大小，第一个数字表示宽度（垂直坐标轴方向），第二个数字表示高度（平行坐标轴方向）
        symbolOffset: [0, 0], //轴线两边的箭头的偏移，如果是数组，第一个数字表示起始箭头的偏移，第二个数字表示末端箭头的偏移；如果是数字，表示这两个箭头使用同样的偏移
        lineStyle: {
          color: axis.lineColor,
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        }
      },
      axisTick: { //坐标轴刻度相关设置
        show: axis.showTickY,
        alignWithLabel: false, //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
        interval: 'auto', //坐标轴刻度的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
        inside: false, //坐标轴刻度是否朝内，默认朝外
        length: axis.tickLength, //坐标轴刻度的长度
        lineStyle: {
          color: axis.tickLineColor, //刻度线的颜色，默认取 axisLine.lineStyle.color。
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      axisLabel: { //坐标轴刻度标签的相关设置
        show: true,
        interval: 'auto', //坐标轴刻度标签的显示间隔，在类目轴中有效。
        inside: false, //刻度标签是否朝内，默认朝外
        rotate: 0, //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
        margin: axis.labelToY, //刻度标签与轴线之间的距离
        formatter: null, //刻度标签的内容格式器，支持字符串模板和回调函数两种形式。
        showMinLabel: null, //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）。
        showMaxLabel: null, //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
        color: axis.fontColor, //刻度标签文字的颜色，默认取 axisLine.lineStyle.color
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: axis.labelFontSize,
        padding: 8,
      },
      splitLine: { //坐标轴在 grid 区域中的分隔线
        show: axis.splitLineYShow,
        interval: 'auto', //坐标轴分隔线的显示间隔，在类目轴中有效
        lineStyle: { //
          color: axis.lineColor, //分隔线颜色，可以设置成单个颜色。也可以设置成颜色数组，分隔线会按数组中颜色的顺序依次循环设置颜色。
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      splitArea: { //坐标轴在 grid 区域中的分隔区域，默认不显示
        interval: 'auto', //坐标轴分隔区域的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
        show: false,
        areaStyle: { //分隔区域的样式设置
          color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'], //分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      data: [],
      /*
              eg: {
                  value: ...,
                  textStyle: {
                      color: '#fff',
                      fontStyle: 'normal',
                      fontWeight: normal,
                      fontFamily: 'sans-serif',
                      fontSize: 12,
                      backgroundColor: 'transparent',
                      borderColor: 'transparent',
                      borderWidth: 0,
                      borderRadius: 0,
                      padding: 0,
                  }
              }
          */
    }],
    series: []
  };

  //柱状图
  var bar = {
    backgroundColor: sc_backgroundColor,
    title: {
      show: true, //是否显示标题组件 true | false
      text: '', //主标题文本，支持使用 \n 换行
      link: '', //主标题文本超链接
      target: 'blank', //'self' 当前窗口打开 'blank' 新窗口打开
      left: 'center', //离容器左侧的距离 string | number  (20 | '20%' | 'left' | 'center' | 'right')
      top: 'top', //离容器上侧的距离 string | number  (20 | '20%' | 'top' | 'middle' | 'bottom')
      textStyle: {
        color: '#333', //主标题文字的颜色
        fontStyle: 'normal', // 'normal' | 'italic' | 'oblique'
        fontWeight: 'bold', // 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
        fontFamily: sc_fontFamily, // 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: 16, //字体大小
      },
      subtext: '', //副标题文本，支持使用 \n 换行
      sublink: '', //副标题文本超链接
      subtarget: 'blank', //'self' 当前窗口打开 'blank' 新窗口打开
      subtextStyle: {
        color: '#aaa', //主标题文字的颜色
        fontStyle: 'normal', // 'normal' | 'italic' | 'oblique'
        fontWeight: 'normal', // 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
        fontFamily: sc_fontFamily, // 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: 12, //字体大小
      },
      padding: [ //标题内边距，单位px
        5, // 上
        5, // 右
        5, // 下
        5, // 左
      ],
      itemGap: 10, //主副标题之间的间距
    },
    legend: {
      icon: 'circle',
      type: 'plain', //图例的类型    'plain'：普通图例 | 'scroll'：可滚动翻页的图例
      show: true,
      left: legend.left,
      top: legend.top,
      orient: legend.orient, //图例列表的布局朝向 'horizontal' | 'vertical'
      padding: legend.padding, //上右下左
      itemGap: legend.itemGap, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔
      itemWidth: legend.itemWidth, //图例标记的图形宽度
      itemHeight: legend.itemHeight, //图例标记的图形高度
      borderColor: legend.borderColor, //图例的边框颜色
      borderWidth: legend.borderWidth, //图例的边框线宽 number
      borderRadius: legend.borderRadius, //边框圆角（顺时针左上，右上，右下，左下）[0, 0, 0, 0]
      formatter: function (name) {
        //用来格式化图例文本，支持字符串模板和回调函数两种形式
        //formatter: 'Legend {name}'
        return name;
      },
      selectedMode: true, //图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。 true | false | 'single'(单选) | 'multiple'(多选)
      inactiveColor: legend.inactiveColor, //图例关闭时的颜色
      selected: {}, //图例选中状态表
      /*eg:{
              // 选中'系列1'
              '系列1': true,
              // 不选中'系列2'
              '系列2': false
          }*/
      textStyle: {
        color: legend.color, //主标题文字的颜色
        fontStyle: 'normal', // 'normal' | 'italic' | 'oblique'
        fontWeight: 'normal', // 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
        fontFamily: sc_fontFamily, // 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: legend.color, //字体大小
        padding: 0, //文字块的内边距[0,0,0,0]
      },

      /*//可以在 legend 文字很多的时候对文字做裁剪并且开启 tooltip
          formatter: function (name) {
                  return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
          },
          tooltip: {
              show: true
          },*/

      /*type 为 scroll 时有效的属性
          //如果仅仅想改变图例翻页，一般并不调用 setOption（因为这太重量了），仅仅使用 action legendScroll 即可。
          scrollDataIndex: 0,//图例当前最左上显示项的 dataIndex
          pageButtonItemGap: 5,//图例控制块中，按钮和页信息之间的间隔
          pageButtonGap: null,//图例控制块和图例项之间的间隔 number
          pageButtonPosition: 'end',//图例控制块的位置 'start' | 'end'
          pageFormatter: '{current}/{total}',//图例控制块中，页信息的显示格式
          pageIcons: {
              //legend.orient 为 'horizontal' 时的翻页按钮图标
              horizontal: ['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z'],//[previous page button, next page button] image://url也可
              //legend.orient 为 'vertical' 时的翻页按钮图标
              vertical：['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z']，//[previous page button, next page button]
          },
          pageIconColor: '#2f4554',//翻页按钮的颜色
          pageIconInactiveColor: '#aaa',//翻页按钮不激活时（即翻页到头时）的颜色
          pageIconSize: 15,//翻页按钮的大小。可以是数字，也可以是数组，如 [10, 3]，表示 [宽，高]
          pageTextStyle: {
              color: '#333',
              fontStyle: 'normal',// 'normal' | 'italic' | 'oblique'
              fontWeight:'normal',// 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
              fontFamily: sc_fontFamily,// 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
              fontSize:12,//字体大小
          },
          animation: false,//图例翻页是否使用动画 true | false,
          animationDurationUpdate: 800,//图例翻页时的动画时长
          */
    },
    grid: {
      show: false,
      left: grid.left,
      top: grid.top,
      right: grid.right,
      bottom: grid.bottom,
      containLabel: false, //是否包含坐标轴的刻度标签
      backgroundColor: 'transparent', //网格背景色，默认透明
      borderColor: axis.lineColor, //网格的边框颜色
      borderWidth: 1,
    },
    color: sc_color,
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        },
        magicType: {
          show: true,
          type: ['line', 'bar']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    tooltip: {
      show: toolTip.show,
      trigger: 'axis', //触发类型 'item' | 'axis' | 'none'
      showContent: true, //是否显示提示框浮层
      alwaysShowContent: false, //是否永远显示提示框内容，默认情况下在移出可触发提示框区域后 一定时间 后隐藏，设置为 true 可以保证一直显示提示框内容
      triggerOn: 'mousemove|click', //提示框触发的条件 'mousemove' | 'click' | 'mousemove|click' | 'none'
      showDelay: 0, //浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。
      hideDelay: 100, //浮层隐藏的延迟，单位为 ms，在 alwaysShowContent 为 true 的时候无效
      enterable: false, //鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
      confine: true, //是否将 tooltip 框限制在图表的区域内。
      transitionDuration: 0.4, //提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
      formatter: '{b} : {c}',
      backgroundColor: toolTip.backgroundColor,
      borderColor: toolTip.borderColor,
      borderWidth: toolTip.borderWidth,
      padding: toolTip.padding,
      textStyle: {
        color: toolTip.color,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: toolTip.fontSize,
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: [{
      show: true,
      position: 'bottom', //'bottom' | 'top' 默认 grid 中的第一个 x 轴在 grid 的下方（'bottom'），第二个 x 轴视第一个 x 轴的位置放在另一侧
      offset: 0, //X 轴相对于默认位置的偏移，在相同的 position 上有多个 X 轴的时候有用。
      type: 'category', //坐标轴类型
      /*
              'value' 数值轴，适用于连续数据
              'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据
              'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度
              'log' 对数轴。适用于对数数据
          */
      name: '', //坐标轴名称
      nameLocation: 'end', //坐标轴名称显示位置。'start' | 'middle' 或者 'center' | 'end'
      nameTextStyle: { //坐标轴名称的文字样式
        //color: '',//坐标轴名称的颜色，默认取 axisLine.lineStyle.color。
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: 12,
        padding: 0,
      },
      nameGap: 15, //坐标轴名称与轴线之间的距离
      nameRotate: null, //坐标轴名字旋转，角度值
      inverse: false, //是否是反向坐标轴。ECharts 3 中新加
      boundaryGap: true,
      /*
              坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
              类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间
              非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效
              eg:	boundaryGap: ['20%', '20%']
          */
      min: null, //坐标轴刻度最小值
      /*
              可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度
              不设置时会自动计算最小值保证坐标轴刻度的均匀分布
              在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）
              当设置成 function 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值
              eg: min: function(value) {
                      return value.min - 20;
                  }
          */
      max: null, //坐标轴刻度最大值
      /*
              可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。
              不设置时会自动计算最大值保证坐标轴刻度的均匀分布。
              在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）
              当设置成 function 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值
              eg:	max: function(value) {
                      return value.max - 20;
                  }
          */
      scale: false, //只在数值轴中（type: 'value'）有效
      /*
              是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用
              在设置 min 和 max 之后该配置项无效。
          */
      splitNumber: 5, //(在类目轴中无效)坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整
      minInterval: 0, //(只在数值轴或时间轴中有效)自动计算的坐标轴最小间隔大小
      //maxInterval: 0,//(只在数值轴或时间轴中有效)自动计算的坐标轴最大间隔大小
      //interval: 0,//强制设置坐标轴分割间隔
      logBase: 10, //对数轴的底数，只在对数轴中（type: 'log'）有效
      silent: false, //坐标轴是否是静态无法交互
      triggerEvent: false, //坐标轴的标签是否响应和触发鼠标事件，默认不响应
      axisLine: { //坐标轴轴线相关设置
        show: axis.xAxisLineShow,
        onZero: true, //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
        onZeroAxisIndex: 0, //当有双轴时，可以用这个属性手动指定，在哪个轴的 0 刻度上
        symbol: 'none', //轴线两边的箭头  ['none', 'arrow']
        symbolSize: [10, 15], //轴线两边的箭头的大小，第一个数字表示宽度（垂直坐标轴方向），第二个数字表示高度（平行坐标轴方向）
        symbolOffset: [0, 0], //轴线两边的箭头的偏移，如果是数组，第一个数字表示起始箭头的偏移，第二个数字表示末端箭头的偏移；如果是数字，表示这两个箭头使用同样的偏移
        lineStyle: {
          color: axis.lineColor,
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        }
      },
      axisTick: { //坐标轴刻度相关设置
        show: axis.showTick,
        alignWithLabel: false, //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
        interval: 'auto', //坐标轴刻度的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
        inside: false, //坐标轴刻度是否朝内，默认朝外
        length: axis.tickLength, //坐标轴刻度的长度
        lineStyle: {
          color: axis.tickLineColor, //刻度线的颜色，默认取 axisLine.lineStyle.color。
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      axisLabel: { //坐标轴刻度标签的相关设置
        show: true,
        //interval: 0, //坐标轴刻度标签的显示间隔，在类目轴中有效。
        inside: false, //刻度标签是否朝内，默认朝外
        rotate: 0, //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
        margin: axis.labelToX, //刻度标签与轴线之间的距离
        formatter: null, //刻度标签的内容格式器，支持字符串模板和回调函数两种形式。
        showMinLabel: null, //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）。
        showMaxLabel: null, //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
        color: axis.fontColorX, //刻度标签文字的颜色，默认取 axisLine.lineStyle.color
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: axis.labelFontSize,
        padding: 0,
      },
      splitLine: { //坐标轴在 grid 区域中的分隔线
        show: axis.splitLineXShow,
        interval: 'auto', //坐标轴分隔线的显示间隔，在类目轴中有效
        lineStyle: { //
          color: axis.lineColor, //分隔线颜色，可以设置成单个颜色。也可以设置成颜色数组，分隔线会按数组中颜色的顺序依次循环设置颜色。
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      splitArea: { //坐标轴在 grid 区域中的分隔区域，默认不显示
        interval: 'auto', //坐标轴分隔区域的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
        show: false,
        areaStyle: { //分隔区域的样式设置
          color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'], //分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      data: [],
      /*
              eg: {
                  value: ...,
                  textStyle: {
                      color: '#fff',
                      fontStyle: 'normal',
                      fontWeight: normal,
                      fontFamily: 'sans-serif',
                      fontSize: 12,
                      backgroundColor: 'transparent',
                      borderColor: 'transparent',
                      borderWidth: 0,
                      borderRadius: 0,
                      padding: 0,
                  }
              }
          */
    }],
    yAxis: [{
      show: true,
      gridIndex: 0,
      //position: '',//默认 grid 中的第一个 y 轴在 grid 的左侧（'left'），第二个 y 轴视第一个 y 轴的位置放在另一侧。
      offset: 0, //Y 轴相对于默认位置的偏移，在相同的 position 上有多个 Y 轴的时候有用
      type: 'value',
      name: '',
      nameLocation: 'end',
      nameTextStyle: { //坐标轴名称的文字样式
        color: axis.fontColor, //坐标轴名称的颜色，默认取 axisLine.lineStyle.color。
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: axis.fontSize,
        padding: 0,
      },
      nameGap: axis.yNameGap, //坐标轴名称与轴线之间的距离
      nameRotate: null, //坐标轴名字旋转，角度值
      inverse: false, //是否是反向坐标轴。ECharts 3 中新加
      boundaryGap: false,
      /*
              坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
              类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间
              非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效
              eg:	boundaryGap: ['20%', '20%']
          */
      min: null, //坐标轴刻度最小值
      /*
              可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度
              不设置时会自动计算最小值保证坐标轴刻度的均匀分布
              在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）
              当设置成 function 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值
              eg: min: function(value) {
                      return value.min - 20;
                  }
          */
      max: null, //坐标轴刻度最大值
      /*
              可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。
              不设置时会自动计算最大值保证坐标轴刻度的均匀分布。
              在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）
              当设置成 function 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值
              eg:	max: function(value) {
                      return value.max - 20;
                  }
          */
      scale: false, //只在数值轴中（type: 'value'）有效
      /*
              是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用
              在设置 min 和 max 之后该配置项无效。
          */
      splitNumber: 5, //(在类目轴中无效)坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整
      minInterval: 0, //(只在数值轴或时间轴中有效)自动计算的坐标轴最小间隔大小
      //maxInterval: 0,//(只在数值轴或时间轴中有效)自动计算的坐标轴最大间隔大小
      //interval: 0,//强制设置坐标轴分割间隔
      logBase: 10, //对数轴的底数，只在对数轴中（type: 'log'）有效
      silent: false, //坐标轴是否是静态无法交互
      triggerEvent: false, //坐标轴的标签是否响应和触发鼠标事件，默认不响应
      axisLine: { //坐标轴轴线相关设置
        show: axis.yAxisLineShow,
        onZero: true, //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
        onZeroAxisIndex: 0, //当有双轴时，可以用这个属性手动指定，在哪个轴的 0 刻度上
        symbol: 'none', //轴线两边的箭头  ['none', 'arrow']
        symbolSize: [10, 15], //轴线两边的箭头的大小，第一个数字表示宽度（垂直坐标轴方向），第二个数字表示高度（平行坐标轴方向）
        symbolOffset: [0, 0], //轴线两边的箭头的偏移，如果是数组，第一个数字表示起始箭头的偏移，第二个数字表示末端箭头的偏移；如果是数字，表示这两个箭头使用同样的偏移
        lineStyle: {
          color: axis.lineColor,
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        }
      },
      axisTick: { //坐标轴刻度相关设置
        show: axis.showTick,
        alignWithLabel: false, //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
        interval: 'auto', //坐标轴刻度的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
        inside: false, //坐标轴刻度是否朝内，默认朝外
        length: axis.tickLength, //坐标轴刻度的长度
        lineStyle: {
          color: axis.lineColor, //刻度线的颜色，默认取 axisLine.lineStyle.color。
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      axisLabel: { //坐标轴刻度标签的相关设置
        show: true,
        interval: 'auto', //坐标轴刻度标签的显示间隔，在类目轴中有效。
        inside: false, //刻度标签是否朝内，默认朝外
        rotate: 0, //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
        margin: axis.labelToY, //刻度标签与轴线之间的距离
        formatter: null, //刻度标签的内容格式器，支持字符串模板和回调函数两种形式。
        showMinLabel: null, //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）。
        showMaxLabel: null, //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
        color: axis.fontColor, //刻度标签文字的颜色，默认取 axisLine.lineStyle.color
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: axis.labelFontSize,
        padding: 0,
      },
      splitLine: { //坐标轴在 grid 区域中的分隔线
        show: axis.splitLineYShow,
        interval: 'auto', //坐标轴分隔线的显示间隔，在类目轴中有效
        lineStyle: { //
          color: axis.lineColor, //分隔线颜色，可以设置成单个颜色。也可以设置成颜色数组，分隔线会按数组中颜色的顺序依次循环设置颜色。
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      splitArea: { //坐标轴在 grid 区域中的分隔区域，默认不显示
        interval: 'auto', //坐标轴分隔区域的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
        show: false,
        areaStyle: { //分隔区域的样式设置
          color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'], //分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      data: [],
      /*
              eg: {
                  value: ...,
                  textStyle: {
                      color: '#fff',
                      fontStyle: 'normal',
                      fontWeight: normal,
                      fontFamily: 'sans-serif',
                      fontSize: 12,
                      backgroundColor: 'transparent',
                      borderColor: 'transparent',
                      borderWidth: 0,
                      borderRadius: 0,
                      padding: 0,
                  }
              }
          */
    }, {
      show: false,
      gridIndex: 0,
      //position: '',//默认 grid 中的第一个 y 轴在 grid 的左侧（'left'），第二个 y 轴视第一个 y 轴的位置放在另一侧。
      offset: 0, //Y 轴相对于默认位置的偏移，在相同的 position 上有多个 Y 轴的时候有用
      type: 'value',
      name: '',
      nameLocation: 'end',
      nameTextStyle: { //坐标轴名称的文字样式
        color: axis.fontColor, //坐标轴名称的颜色，默认取 axisLine.lineStyle.color。
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: axis.fontSize,
        padding: 0,
      },
      nameGap: axis.yNameGap, //坐标轴名称与轴线之间的距离
      nameRotate: null, //坐标轴名字旋转，角度值
      inverse: false, //是否是反向坐标轴。ECharts 3 中新加
      boundaryGap: false,
      /*
              坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
              类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间
              非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效
              eg:	boundaryGap: ['20%', '20%']
          */
      min: null, //坐标轴刻度最小值
      /*
              可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度
              不设置时会自动计算最小值保证坐标轴刻度的均匀分布
              在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）
              当设置成 function 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值
              eg: min: function(value) {
                      return value.min - 20;
                  }
          */
      max: null, //坐标轴刻度最大值
      /*
              可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。
              不设置时会自动计算最大值保证坐标轴刻度的均匀分布。
              在类目轴中，也可以设置为类目的序数（如类目轴 data: ['类A', '类B', '类C'] 中，序数 2 表示 '类C'。也可以设置为负数，如 -3）
              当设置成 function 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值
              eg:	max: function(value) {
                      return value.max - 20;
                  }
          */
      scale: false, //只在数值轴中（type: 'value'）有效
      /*
              是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用
              在设置 min 和 max 之后该配置项无效。
          */
      splitNumber: 5, //(在类目轴中无效)坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整
      minInterval: 0, //(只在数值轴或时间轴中有效)自动计算的坐标轴最小间隔大小
      //maxInterval: 0,//(只在数值轴或时间轴中有效)自动计算的坐标轴最大间隔大小
      //interval: 0,//强制设置坐标轴分割间隔
      logBase: 10, //对数轴的底数，只在对数轴中（type: 'log'）有效
      silent: false, //坐标轴是否是静态无法交互
      triggerEvent: false, //坐标轴的标签是否响应和触发鼠标事件，默认不响应
      axisLine: { //坐标轴轴线相关设置
        show: axis.yAxisLineShow,
        onZero: true, //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
        onZeroAxisIndex: 0, //当有双轴时，可以用这个属性手动指定，在哪个轴的 0 刻度上
        symbol: 'none', //轴线两边的箭头  ['none', 'arrow']
        symbolSize: [10, 15], //轴线两边的箭头的大小，第一个数字表示宽度（垂直坐标轴方向），第二个数字表示高度（平行坐标轴方向）
        symbolOffset: [0, 0], //轴线两边的箭头的偏移，如果是数组，第一个数字表示起始箭头的偏移，第二个数字表示末端箭头的偏移；如果是数字，表示这两个箭头使用同样的偏移
        lineStyle: {
          color: axis.lineColor,
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        }
      },
      axisTick: { //坐标轴刻度相关设置
        show: axis.showTick,
        alignWithLabel: false, //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
        interval: 'auto', //坐标轴刻度的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
        inside: false, //坐标轴刻度是否朝内，默认朝外
        length: axis.tickLength, //坐标轴刻度的长度
        lineStyle: {
          color: axis.lineColor, //刻度线的颜色，默认取 axisLine.lineStyle.color。
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      axisLabel: { //坐标轴刻度标签的相关设置
        show: true,
        interval: 'auto', //坐标轴刻度标签的显示间隔，在类目轴中有效。
        inside: false, //刻度标签是否朝内，默认朝外
        rotate: 0, //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
        margin: axis.labelToY, //刻度标签与轴线之间的距离
        formatter: null, //刻度标签的内容格式器，支持字符串模板和回调函数两种形式。
        showMinLabel: null, //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）。
        showMaxLabel: null, //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
        color: axis.fontColor, //刻度标签文字的颜色，默认取 axisLine.lineStyle.color
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: axis.labelFontSize,
        padding: 0,
      },
      splitLine: { //坐标轴在 grid 区域中的分隔线
        show: axis.splitLineYShow,
        interval: 'auto', //坐标轴分隔线的显示间隔，在类目轴中有效
        lineStyle: { //
          color: axis.lineColor, //分隔线颜色，可以设置成单个颜色。也可以设置成颜色数组，分隔线会按数组中颜色的顺序依次循环设置颜色。
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      splitArea: { //坐标轴在 grid 区域中的分隔区域，默认不显示
        interval: 'auto', //坐标轴分隔区域的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
        show: false,
        areaStyle: { //分隔区域的样式设置
          color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'], //分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      /*
              eg: {
                  value: ...,
                  textStyle: {
                      color: '#fff',
                      fontStyle: 'normal',
                      fontWeight: normal,
                      fontFamily: 'sans-serif',
                      fontSize: 12,
                      backgroundColor: 'transparent',
                      borderColor: 'transparent',
                      borderWidth: 0,
                      borderRadius: 0,
                      padding: 0,
                  }
              }
          */
    }],
    series: []
  };

  //饼图
  var pie = {
    backgroundColor: sc_backgroundColor,
    title: {
      show: true, //是否显示标题组件 true | false
      text: '', //主标题文本，支持使用 \n 换行
      link: '', //主标题文本超链接
      target: 'blank', //'self' 当前窗口打开 'blank' 新窗口打开
      left: 'center', //离容器左侧的距离 string | number  (20 | '20%' | 'left' | 'center' | 'right')
      top: 'top', //离容器上侧的距离 string | number  (20 | '20%' | 'top' | 'middle' | 'bottom')
      textStyle: {
        color: '#333', //主标题文字的颜色
        fontStyle: 'normal', // 'normal' | 'italic' | 'oblique'
        fontWeight: 'bold', // 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
        fontFamily: sc_fontFamily, // 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: 16, //字体大小
      },
      subtext: '', //副标题文本，支持使用 \n 换行
      sublink: '', //副标题文本超链接
      subtarget: 'blank', //'self' 当前窗口打开 'blank' 新窗口打开
      subtextStyle: {
        color: '#aaa', //主标题文字的颜色
        fontStyle: 'normal', // 'normal' | 'italic' | 'oblique'
        fontWeight: 'normal', // 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
        fontFamily: sc_fontFamily, // 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: 12, //字体大小
      },
      padding: [ //标题内边距，单位px
        5, // 上
        5, // 右
        5, // 下
        5, // 左
      ],
      itemGap: 10, //主副标题之间的间距
    },
    legend: {
      type: 'plain', //图例的类型    'plain'：普通图例 | 'scroll'：可滚动翻页的图例
      show: true,
      left: 'center',
      top: 'top',
      orient: 'horizontal', //图例列表的布局朝向 'horizontal' | 'vertical'
      padding: [5, 5, 5, 5], //上右下左
      itemGap: 10, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔
      itemWidth: 10, //图例标记的图形宽度
      itemHeight: 10, //图例标记的图形高度
      borderColor: '#ccc', //图例的边框颜色
      borderWidth: 0, //图例的边框线宽 number
      borderRadius: 5, //边框圆角（顺时针左上，右上，右下，左下）[0, 0, 0, 0]
      formatter: function (name) {
        //用来格式化图例文本，支持字符串模板和回调函数两种形式
        //formatter: 'Legend {name}'
        return name;
      },
      selectedMode: true, //图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。 true | false | 'single'(单选) | 'multiple'(多选)
      inactiveColor: '#ccc', //图例关闭时的颜色
      selected: {}, //图例选中状态表
      /*eg:{
              // 选中'系列1'
              '系列1': true,
              // 不选中'系列2'
              '系列2': false
          }*/
      textStyle: {
        color: '#333', //主标题文字的颜色
        fontStyle: 'normal', // 'normal' | 'italic' | 'oblique'
        fontWeight: 'normal', // 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
        fontFamily: sc_fontFamily, // 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: 12, //字体大小
        padding: 0, //文字块的内边距[0,0,0,0]
      },

      /*//可以在 legend 文字很多的时候对文字做裁剪并且开启 tooltip
          formatter: function (name) {
                  return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
          },
          tooltip: {
              show: true
          },*/

      /*type 为 scroll 时有效的属性
          //如果仅仅想改变图例翻页，一般并不调用 setOption（因为这太重量了），仅仅使用 action legendScroll 即可。
          scrollDataIndex: 0,//图例当前最左上显示项的 dataIndex
          pageButtonItemGap: 5,//图例控制块中，按钮和页信息之间的间隔
          pageButtonGap: null,//图例控制块和图例项之间的间隔 number
          pageButtonPosition: 'end',//图例控制块的位置 'start' | 'end'
          pageFormatter: '{current}/{total}',//图例控制块中，页信息的显示格式
          pageIcons: {
              //legend.orient 为 'horizontal' 时的翻页按钮图标
              horizontal: ['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z'],//[previous page button, next page button] image://url也可
              //legend.orient 为 'vertical' 时的翻页按钮图标
              vertical：['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z']，//[previous page button, next page button]
          },
          pageIconColor: '#2f4554',//翻页按钮的颜色
          pageIconInactiveColor: '#aaa',//翻页按钮不激活时（即翻页到头时）的颜色
          pageIconSize: 15,//翻页按钮的大小。可以是数字，也可以是数组，如 [10, 3]，表示 [宽，高]
          pageTextStyle: {
              color: '#333',
              fontStyle: 'normal',// 'normal' | 'italic' | 'oblique'
              fontWeight:'normal',// 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
              fontFamily: sc_fontFamily,// 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
              fontSize:12,//字体大小
          },
          animation: false,//图例翻页是否使用动画 true | false,
          animationDurationUpdate: 800,//图例翻页时的动画时长
          */
    },
    grid: {
      show: false,
      left: '10%',
      top: 30,
      right: '5%',
      bottom: 20,
      containLabel: false, //是否包含坐标轴的刻度标签
      backgroundColor: 'transparent', //网格背景色，默认透明
      borderColor: '#ccc', //网格的边框颜色
      borderWidth: 1,
    },
    color: sc_color,
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        },
        magicType: {
          show: false,
          type: ['line', 'bar']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'item', //触发类型 'item' | 'axis' | 'none'
      showContent: true, //是否显示提示框浮层
      alwaysShowContent: false, //是否永远显示提示框内容，默认情况下在移出可触发提示框区域后 一定时间 后隐藏，设置为 true 可以保证一直显示提示框内容
      triggerOn: 'mousemove|click', //提示框触发的条件 'mousemove' | 'click' | 'mousemove|click' | 'none'
      showDelay: 0, //浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。
      hideDelay: 100, //浮层隐藏的延迟，单位为 ms，在 alwaysShowContent 为 true 的时候无效
      enterable: false, //鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
      confine: true, //是否将 tooltip 框限制在图表的区域内。
      transitionDuration: 0.4, //提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
      formatter: "{a} <br/>{b} : {c} ({d}%)",
      backgroundColor: 'rgba(50,50,50,0.7)',
      borderColor: '#333',
      borderWidth: 0,
      padding: 5,
      textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: 14,
      },
    },
    // visualMap: {
    //   show: false,
    //   min: 80,
    //   max: 600,
    //   inRange: {
    //     colorLightness: [0, 1]
    //   }
    // },
    series: [{
      type: 'pie',
      name: '',
      legendHoverLink: true, //是否启用图例 hover 时的联动高亮
      hoverAnimation: true, //是否开启 hover 在扇区上的放大动画效果
      hoverOffset: 10, //高亮扇区的偏移距离
      selectedMode: false, //选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'，'multiple'，分别表示单选还是多选。
      selectedOffset: 10, //选中扇区的偏移距离
      clockwise: true, //饼图的扇区是否是顺时针排布
      startAngle: 90, //起始角度，支持范围[0, 360]
      minAngle: 0, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
      roseType: false, //是否展示成南丁格尔图，通过半径区分数据大小。'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小 | 'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
      avoidLabelOverlap: true, //是否启用防止标签重叠策略，默认开启，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠
      stillShowZeroSum: true, //是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区
      cursor: 'pointer', //鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 cursor。
      label: { //饼图图形上的文本标签
        show: true,
        position: 'outside', //'outside' | 'inside' | 'center'
        formatter: '{d}%',
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: 14 * rate,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 0,
        padding: 10,
      },
      labelLine: { //标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
        show: false,
        length: 0, //视觉引导线第一段的长度
        length2: 0, //视觉引导项第二段的长度。
        smooth: true, //是否平滑视觉引导线，默认不平滑，可以设置成 true 平滑显示，也可以设置为 0 到 1 的值，表示平滑程度。
        lineStyle: {
          color: '#000',
          width: 1,
          type: 'solid', //'solid' |'dashed' | 'dotted'
          opacity: 1,
        },
        emphasis: { //高亮状态下视觉引导线的样式
          show: false,
          lineStyle: {
            color: '#000',
            width: 1,
            type: 'solid', //'solid' |'dashed' | 'dotted'
            opacity: 1,
          }
        }
      },
      itemStyle: {
        //color: '',//图形的颜色。 默认从全局调色盘 option.color 获取颜色
        borderColor: '#000',
        borderWidth: 0,
        borderType: 'solid',
        opacity: 1,
      },
      emphasis: { //高亮的扇区和标签样式。
        label: { //饼图图形上的文本标签
          show: false,
          position: 'outside', //'outside' | 'inside' | 'center'
          formatter: '{a}',
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: sc_fontFamily,
          fontSize: 12,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 0,
          padding: 0,
        },
        itemStyle: {
          //color: '',//图形的颜色。 默认从全局调色盘 option.color 获取颜色
          borderColor: '#000',
          borderWidth: 0,
          borderType: 'solid',
          opacity: 1,
        },
      },
      center: ['50%', '50%'], //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
      radius: [0, '75%'], //饼图的半径，数组的第一项是内半径，第二项是外半径。
      data: [], //eg {name:'',value:'',selected: false,}
    }]
  };

  //极坐标
  let polar = {
    center: ['45%', '45%'],
    backgroundColor: sc_backgroundColor,
    title: {
      show: true, //是否显示标题组件 true | false
      text: '', //主标题文本，支持使用 \n 换行
      link: '', //主标题文本超链接
      target: 'blank', //'self' 当前窗口打开 'blank' 新窗口打开
      left: 'center', //离容器左侧的距离 string | number  (20 | '20%' | 'left' | 'center' | 'right')
      top: 'top', //离容器上侧的距离 string | number  (20 | '20%' | 'top' | 'middle' | 'bottom')
      textStyle: {
        color: '#333', //主标题文字的颜色
        fontStyle: 'normal', // 'normal' | 'italic' | 'oblique'
        fontWeight: 'bold', // 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
        fontFamily: sc_fontFamily, // 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: 16, //字体大小
      },
      subtext: '', //副标题文本，支持使用 \n 换行
      sublink: '', //副标题文本超链接
      subtarget: 'blank', //'self' 当前窗口打开 'blank' 新窗口打开
      subtextStyle: {
        color: '#aaa', //主标题文字的颜色
        fontStyle: 'normal', // 'normal' | 'italic' | 'oblique'
        fontWeight: 'normal', // 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
        fontFamily: sc_fontFamily, // 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: 12, //字体大小
      },
      padding: [ //标题内边距，单位px
        5, // 上
        5, // 右
        5, // 下
        5, // 左
      ],
      itemGap: 10, //主副标题之间的间距
    },
    legend: {
      icon: 'circle',
      type: 'plain', //图例的类型    'plain'：普通图例 | 'scroll'：可滚动翻页的图例
      show: true,
      right: 12 * g_rate,
      top: 12 * g_rate,
      align: 'left',
      orient: 'vertical', //图例列表的布局朝向 'horizontal' | 'vertical'
      padding: 0, //上右下左
      itemGap: 7 * g_rate, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔
      itemWidth: legend.itemWidth, //图例标记的图形宽度
      itemHeight: legend.itemHeight, //图例标记的图形高度
      borderColor: legend.borderColor, //图例的边框颜色
      borderWidth: legend.borderWidth, //图例的边框线宽 number
      borderRadius: legend.borderRadius, //边框圆角（顺时针左上，右上，右下，左下）[0, 0, 0, 0]
      formatter: function (name) {
        //用来格式化图例文本，支持字符串模板和回调函数两种形式
        //formatter: 'Legend {name}'
        return name;
      },
      selectedMode: true, //图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。 true | false | 'single'(单选) | 'multiple'(多选)
      inactiveColor: legend.inactiveColor, //图例关闭时的颜色
      selected: {}, //图例选中状态表
      /*eg:{
              // 选中'系列1'
              '系列1': true,
              // 不选中'系列2'
              '系列2': false
          }*/
      textStyle: {
        color: legend.color, //主标题文字的颜色
        fontStyle: 'normal', // 'normal' | 'italic' | 'oblique'
        fontWeight: 'normal', // 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
        fontFamily: sc_fontFamily, // 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: legend.color, //字体大小
        padding: 0, //文字块的内边距[0,0,0,0]
      },
    },
    color: sc_color,
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        },
        magicType: {
          show: false,
          type: ['line', 'bar']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'axis', //触发类型 'item' | 'axis' | 'none'
      showContent: true, //是否显示提示框浮层
      alwaysShowContent: false, //是否永远显示提示框内容，默认情况下在移出可触发提示框区域后 一定时间 后隐藏，设置为 true 可以保证一直显示提示框内容
      triggerOn: 'mousemove|click', //提示框触发的条件 'mousemove' | 'click' | 'mousemove|click' | 'none'
      showDelay: 0, //浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。
      hideDelay: 100, //浮层隐藏的延迟，单位为 ms，在 alwaysShowContent 为 true 的时候无效
      enterable: false, //鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
      confine: true, //是否将 tooltip 框限制在图表的区域内。
      transitionDuration: 0.4, //提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
      formatter: "{a} <br/>{b} : {c} ({d}%)",
      backgroundColor: 'rgba(50,50,50,0.7)',
      borderColor: '#333',
      borderWidth: 0,
      padding: 5,
      textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: 14,
      },
    },
    angleAxis: {
      type: 'category',
      data: [],
      z: 10,
      polarIndex: 0, //角度轴所在的极坐标系的索引，默认使用第一个极坐标系
      startAngle: 90, //起始刻度的角度，默认为 90 度，即圆心的正上方。0 度为圆心的正右方。
      clockwise: true, //刻度增长是否按顺时针，默认顺时针。
      inverse: false, //是否是反向坐标轴
      boundaryGap: true, //类目轴中 boundaryGap 可以配置为 true 和 false。非类目轴，包括时间，数值，对数轴，boundaryGap是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效['20%', '20%']
      min: null, //坐标轴刻度最小值。可以设置成特殊值 'dataMin'，此时取数据在该轴上的最小值作为最小刻度。不设置时会自动计算最小值保证坐标轴刻度的均匀分布。在类目轴中，也可以设置为类目的序数
      max: null, //坐标轴刻度最大值。可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。不设置时会自动计算最大值保证坐标轴刻度的均匀分布。在类目轴中，也可以设置为类目的序数
      scale: false, //只在数值轴中（type: 'value'）有效。是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。在设置 min 和 max 之后该配置项无效。
      splitNumber: 5, //坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整
      minInterval: 0, //自动计算的坐标轴最小间隔大小,例如可以设置成1保证坐标轴分割刻度显示成整数。只在数值轴中（type: 'value'）有效。
      logBase: 10, //对数轴的底数，只在对数轴中（type: 'log'）有效
      silent: false, //坐标轴是否是静态无法交互
      triggerEvent: false, //坐标轴的标签是否响应和触发鼠标事件
      axisLine: { //坐标 轴线
        show: true, //是否显示坐标轴轴线
        onZero: true, //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
        lineStyle: {
          color: axis.lineColor,
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        }
      },
      axisTick: { //坐标轴刻度相关设置
        show: false, //是否显示坐标轴刻度。
        alignWithLabel: false, //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
        interval: "auto", //坐标轴刻度的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
        inside: false, //坐标轴刻度是否朝内，默认朝外。
        length: 5, //坐标轴刻度的长度。
        lineStyle: {
          color: axis.lineColor,
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        }
      },
      axisLabel: { //坐标轴刻度标签的相关设置
        show: true,
        interval: 0, //坐标轴刻度标签的显示间隔，在类目轴中有效。
        inside: false, //刻度标签是否朝内，默认朝外
        rotate: 0, //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
        margin: axis.labelToX, //刻度标签与轴线之间的距离
        formatter: null, //刻度标签的内容格式器，支持字符串模板和回调函数两种形式。
        showMinLabel: null, //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）。
        showMaxLabel: null, //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
        color: 'rgba(69,74,78,.7)', //刻度标签文字的颜色，默认取 axisLine.lineStyle.color
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: axis.labelFontSize,
        padding: 0,
      },
      splitLine: { //坐标轴在 grid 区域中的分隔线。
        show: true, //是否显示分隔线。默认数值轴显示，类目轴不显示。
        interval: "auto", //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
        lineStyle: {
          color: axis.lineColor, //分隔线颜色，可以设置成单个颜色。也可以设置成颜色数组，分隔线会按数组中颜色的顺序依次循环设置颜色。
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
    },
    radiusAxis: {
      axisLine: { //坐标轴轴线相关设置
        show: true,
        symbol: 'none', //轴线两边的箭头  ['none', 'arrow']
        symbolSize: [10, 15], //轴线两边的箭头的大小，第一个数字表示宽度（垂直坐标轴方向），第二个数字表示高度（平行坐标轴方向）
        symbolOffset: [0, 0], //轴线两边的箭头的偏移，如果是数组，第一个数字表示起始箭头的偏移，第二个数字表示末端箭头的偏移；如果是数字，表示这两个箭头使用同样的偏移
        lineStyle: {
          color: axis.lineColor,
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        }
      },
      axisTick: { //坐标轴刻度相关设置
        show: false,
        alignWithLabel: false, //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
        interval: 'auto', //坐标轴刻度的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
        inside: false, //坐标轴刻度是否朝内，默认朝外
        length: axis.tickLength, //坐标轴刻度的长度
        lineStyle: {
          color: axis.tickLineColor, //刻度线的颜色，默认取 axisLine.lineStyle.color。
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
      axisLabel: { //坐标轴刻度标签的相关设置
        show: false,
        interval: 0, //坐标轴刻度标签的显示间隔，在类目轴中有效。
        inside: false, //刻度标签是否朝内，默认朝外
        rotate: 0, //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
        margin: axis.labelToX, //刻度标签与轴线之间的距离
        formatter: null, //刻度标签的内容格式器，支持字符串模板和回调函数两种形式。
        showMinLabel: null, //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）。
        showMaxLabel: null, //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
        color: axis.fontColor, //刻度标签文字的颜色，默认取 axisLine.lineStyle.color
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: axis.labelFontSize,
        padding: 0,
      },
      splitLine: { //坐标轴在 grid 区域中的分隔线
        show: true,
        interval: 'auto', //坐标轴分隔线的显示间隔，在类目轴中有效
        lineStyle: { //
          color: axis.lineColor, //分隔线颜色，可以设置成单个颜色。也可以设置成颜色数组，分隔线会按数组中颜色的顺序依次循环设置颜色。
          width: 1,
          type: 'solid',
          shadowBlur: 0,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
      },
    },
    polar: {
      radius: '60%',
      center: ['45%', '45%']
    },
    series: []
  }

  //雷达图
  let radar = {
    backgroundColor: sc_backgroundColor,
    title: {
      show: true, //是否显示标题组件 true | false
      text: '', //主标题文本，支持使用 \n 换行
      link: '', //主标题文本超链接
      target: 'blank', //'self' 当前窗口打开 'blank' 新窗口打开
      left: 'center', //离容器左侧的距离 string | number  (20 | '20%' | 'left' | 'center' | 'right')
      top: 'top', //离容器上侧的距离 string | number  (20 | '20%' | 'top' | 'middle' | 'bottom')
      textStyle: {
        color: '#333', //主标题文字的颜色
        fontStyle: 'normal', // 'normal' | 'italic' | 'oblique'
        fontWeight: 'bold', // 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
        fontFamily: sc_fontFamily, // 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: 16, //字体大小
      },
      subtext: '', //副标题文本，支持使用 \n 换行
      sublink: '', //副标题文本超链接
      subtarget: 'blank', //'self' 当前窗口打开 'blank' 新窗口打开
      subtextStyle: {
        color: '#aaa', //主标题文字的颜色
        fontStyle: 'normal', // 'normal' | 'italic' | 'oblique'
        fontWeight: 'normal', // 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
        fontFamily: sc_fontFamily, // 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: 12, //字体大小
      },
      padding: [ //标题内边距，单位px
        5, // 上
        5, // 右
        5, // 下
        5, // 左
      ],
      itemGap: 10, //主副标题之间的间距
    },
    legend: {
      icon: 'rect',
      type: 'plain', //图例的类型    'plain'：普通图例 | 'scroll'：可滚动翻页的图例
      show: true,
      align: 'left',
      orient: 'horizontal', //图例列表的布局朝向 'horizontal' | 'vertical'
      padding: 0, //上右下左
      itemGap: 7 * g_rate, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔
      itemWidth: legend.itemWidth, //图例标记的图形宽度
      itemHeight: legend.itemHeight, //图例标记的图形高度
      borderColor: legend.borderColor, //图例的边框颜色
      borderWidth: legend.borderWidth, //图例的边框线宽 number
      borderRadius: legend.borderRadius, //边框圆角（顺时针左上，右上，右下，左下）[0, 0, 0, 0]
      formatter: function (name) {
        //用来格式化图例文本，支持字符串模板和回调函数两种形式
        //formatter: 'Legend {name}'
        return name;
      },
      selectedMode: true, //图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。 true | false | 'single'(单选) | 'multiple'(多选)
      inactiveColor: legend.inactiveColor, //图例关闭时的颜色
      selected: {}, //图例选中状态表
      /*eg:{
              // 选中'系列1'
              '系列1': true,
              // 不选中'系列2'
              '系列2': false
          }*/
      textStyle: {
        color: legend.color, //主标题文字的颜色
        fontStyle: 'normal', // 'normal' | 'italic' | 'oblique'
        fontWeight: 'normal', // 'normal' | 'bold' | 'bolder' | 'lighter' | 100(数字)
        fontFamily: sc_fontFamily, // 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
        fontSize: legend.color, //字体大小
        padding: 0, //文字块的内边距[0,0,0,0]
      },
    },
    color: sc_color,
    toolbox: {
      show: false,
      feature: {
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        },
        magicType: {
          show: false,
          type: ['line', 'bar']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    tooltip: {
      show: true,
      trigger: 'item', //触发类型 'item' | 'axis' | 'none'
      showContent: true, //是否显示提示框浮层
      alwaysShowContent: false, //是否永远显示提示框内容，默认情况下在移出可触发提示框区域后 一定时间 后隐藏，设置为 true 可以保证一直显示提示框内容
      triggerOn: 'mousemove|click', //提示框触发的条件 'mousemove' | 'click' | 'mousemove|click' | 'none'
      showDelay: 0, //浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。
      hideDelay: 100, //浮层隐藏的延迟，单位为 ms，在 alwaysShowContent 为 true 的时候无效
      enterable: false, //鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
      confine: true, //是否将 tooltip 框限制在图表的区域内。
      transitionDuration: 0.4, //提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
      //formatter: "{b} : {c} ({d}%)",
      backgroundColor: 'rgba(50,50,50,0.7)',
      borderColor: '#333',
      borderWidth: 0,
      padding: 5,
      textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: sc_fontFamily,
        fontSize: 14,
      },
    },
    radar: {
      center: ["50%", "47%"],
      radius: "63%",
      startAngle: 90, // 起始角度
      splitNumber: 4,
      shape: "circle",
      splitArea: {
        areaStyle: {
          color: 'rgba(36, 173, 255, 0.18)'
        }
      },
      name: {
        textStyle: {
          color: '#525b7b'
        }
      },
      axisLabel: {
        show: false,
        fontSize: 10,
        color: "#586081",
        fontStyle: "normal",
        fontWeight: "normal"
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#17598c",
          width: 1
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(36, 173, 255,.15)"
        }
      },
      indicator: []
    },
    series: []
  }

  var getOption = function (type) {
    switch (type) {
      case "line":
        return line;
      case "bar":
        return bar;
      case "pie":
        return pie;
      case "polar":
        return polar;
      case "radar":
        return radar;
        /*case "scatterTime":
          return scatterTime;
        case "map":
          return map;
        case "pieRink":
          return pieRink;
        case "hot":
          return hot;*/
      default:
        return loading;
    }
  }
  return {
    getOption: getOption
  }
}


export default {
  sc_options
}
