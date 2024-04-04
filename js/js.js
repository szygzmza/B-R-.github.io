$(window).load(function () {
  $(".loading").fadeOut();
});
$(function () {
  echarts_1();
  echarts_4();
  echarts_31();
  function echarts_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart1"));
    var data = [
      {
        title: "**省",
      },
      ["2022年"],
      [
        {
          name: "私营企业",
          max: 60,
        },
        {
          name: "外商投资企业",
          max: 60,
        },
        {
          name: "国有企业",
          max: 60,
        },
        {
          name: "上市企业",
          max: 60,
        },
        {
          name: "其他",
          max: 60,
        },
      ],
      [48, 30, 14, 7, 1],
    ];
    option = {
      color: ["#9DD060", "#35C96E", "#4DCEF8"],

      tooltip: {},

      radar: {
        center: ["50%", "50%"],
        radius: ["25%", "70%"],

        name: {
          textStyle: {
            color: "#72ACD1",
          },
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.0",

            width: 2,
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.2)",
            width: 1,
            type: "dotted",
          },
        },
        splitArea: {
          areaStyle: {
            color: ["rgba(255,255,255,.1)", "rgba(255,255,255,0)"],
          },
        },
        indicator: data[2],
      },
      series: [
        {
          name: "",
          type: "radar",
          data: [
            {
              areaStyle: {
                normal: {
                  opacity: 0.3,
                },
              },
              value: data[3],
              name: data[1][0],
            },
            {
              areaStyle: {
                normal: {
                  opacity: 0.3,
                },
              },
              value: data[4],
              name: data[1][1],
            },
            {
              areaStyle: {
                normal: {
                  opacity: 0.3,
                },
              },
              value: data[5],
              name: data[1][2],
            },
          ],
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_4() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart4"));
    var myChart2 = echarts.init(document.getElementById("echart3"));
    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["GDP总量（万亿）"],

        top: "2%",
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 35,
      },
      grid: {
        left: "0%",
        top: "40px",
        right: "0%",
        bottom: "0%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [
            "中国",
            "印度",
            "意大利",
            "韩国",
            "俄罗斯",
            "印尼",
            "土耳其",
            "沙特",
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 1,
              type: "solid",
            },
          },

          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 15,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "14",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            //formatter: '{value} %'
            show: true,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "14",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1	)",
              width: 1,
              type: "solid",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          name: "GDP总量（万亿）",
          type: "bar",
          data: [17.7, 3.73, 2.18, 1.7, 1.86, 1.41, 1.15, 1.06],
          barWidth: "30%", //柱子宽度
          // barGap: 1, //柱子之间间距
          itemStyle: {
            normal: {
              color: "#2f89cf",
              opacity: 1,
              barBorderRadius: 5,
            },
          },
        },
      ],
    };
    option2 = {
      //  backgroundColor: '#00265f',
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["2022年", "2023年"],
        top: "5%",
        textStyle: {
          color: "#fff",
          fontSize: "12",
        },

        itemGap: 35,
      },
      grid: {
        left: "0%",
        top: "40px",
        right: "0%",
        bottom: "0",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["2月", "4月", "6月", "8月", "10月", "12月"],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 1,
              type: "solid",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 5,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            //formatter: '{value} %'
            show: true,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1	)",
              width: 1,
              type: "solid",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          name: "2022年",
          type: "line",
          smooth: true,
          data: [176, 173, 197, 192, 178, 186],

          itemStyle: {
            normal: {
              color: "#2f89cf",
              opacity: 1,

              barBorderRadius: 5,
            },
          },
        },
        {
          name: "2023年",
          type: "line",
          smooth: true,
          data: [156, 176, 174, 175, 172, 186],
          barWidth: "15",
          // barGap: 1,
          itemStyle: {
            normal: {
              color: "#62c98d",
              opacity: 1,
              barBorderRadius: 5,
            },
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option2);
    myChart2.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_31() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("fb01"));
    var myChart2 = echarts.init(document.getElementById("fb02"));
    var myChart3 = echarts.init(document.getElementById("fb03"));
    var myChart4 = echarts.init(document.getElementById("fb04"));
    var myChart5 = echarts.init(document.getElementById("myd1"));


    option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
      },
      legend: {
        orient: "vertical",
        top: "25%",
        right: 0,
        itemWidth: 10,
        itemHeight: 10,
        data: ["俄罗斯", "希腊", "阿根廷", "新西兰"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "贸易额占比",
          type: "pie",
          center: ["35%", "50%"],
          radius: ["40%", "50%"],
          color: [
            "#9c27b0",
            "#76ff03",
            "#4cb9cf",
            "#ffa000",
            "#76ff03",
            "#eb295b",
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 6, name: "俄罗斯" },
            { value: 1.3, name: "希腊" },
            { value: 1.4, name: "阿根廷" },
            { value: 1.3, name: "新西兰" },
          ],
        },
      ],
    };
    option2 = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
      },
      legend: {
        orient: "vertical",
        top: "25%",
        right: "8%",
        itemWidth: 10,
        itemHeight: 10,
        data: ["亚洲", "非洲", "欧洲", "美洲","大洋洲"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "学历构成",
          type: "pie",
          center: ["40%", "50%"],
          radius: ["40%", "50%"],
          color: [
            "#62c98d",
            "#2f89cf",
            "#4cb9cf",
            "#e0c828",
            "#e58c00",
            "#eb295b",
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 4.1, name: "亚洲" },
            { value: 1.3, name: "非洲" },
            { value: 2.6, name: "欧洲" },
            { value: 1.9, name: "美洲" },
            { value: 1.7, name: "大洋洲" },
          ],
        },
      ],
    };
    option3 = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
      },
      legend: {
        orient: "vertical",
        top: "center",
        right: 0,
        itemWidth: 10,
        itemHeight: 10,
        data: ["亚洲", "欧洲", "非洲"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "数据",
          type: "pie",
          center: ["35%", "50%"],
          radius: ["40%", "50%"],
          color: [
            "#62c98d",
            "#2f89cf",
            "#4cb9cf",
            "#e0c828",
            "#e58c00",
            "#eb295b",
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 4, name: "亚洲" },
            { value: 3, name: "欧洲" },
            { value: 3, name: "非洲" },
          ],
        },
      ],
    };
    option4 = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: function (p) {
          //其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10];
        },
      },
      legend: {
        orient: "vertical",
        top: "center",
        right: "8%",
        itemWidth: 10,
        itemHeight: 10,
        data: ["印度", "伊朗", "新加坡", "沙特阿拉伯", "俄罗斯", "波兰"],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "WDI占GDP%",
          type: "pie",
          center: ["40%", "50%"],
          radius: ["40%", "50%"],
          color: [
            "#62c98d",
            "#2f89cf",
            "#4cb9cf",
            "#e0c828",
            "#e58c00",
            "#eb295b",
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 49.23, name: "印度" },
            { value: 51.6, name: "伊朗" },
            { value: 336.86, name: "新加坡" },
            { value: 151.92, name: "捷克" },
            { value: 43.77, name: "俄罗斯" },
            { value: 123.94, name: "波兰" },
          ],
        },
      ],
    };
    option5 = {
      grid: {
        left: "0",
        right: "0",
        top: "10%",
        bottom: "24%",
        //containLabel: true
      },
      legend: {
        data: ["亚洲", "非洲", "欧洲"],
        bottom: 0,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: "#fff",
          fontSize: "10",
        },

        itemGap: 5,
      },
      tooltip: {
        show: "true",
        trigger: "item",
      },
      yAxis: {
        type: "value",
        show: false,
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#363e83",
            },
          },
          axisLabel: {
            show: false,
            //   inside: true,
            textStyle: {
              color: "rgba(255,255,255,1)",
              fontWeight: "normal",
              fontSize: "12",
            },
            // formatter:function(val){
            //     return val.split("").join("\n")
            // },
          },
          data: ["签订国家数"],
        },
      ],
      series: [
        {
          name: "亚洲",
          type: "bar",
          barWidth: "20",

          itemStyle: {
            normal: {
              show: true,
              color: "#20aa92",
              barBorderRadius: 50,
              borderWidth: 0,
            },
          },
          zlevel: 2,
          barGap: "100%",
          data: [48],
          label: {
            formatter: "{c}国",
            show: true,
            position: "top",
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
            },
          },
        },
        {
          name: "非洲",
          type: "bar",
          itemStyle: {
            normal: {
              show: true,
              color: "#f4664e",
              barBorderRadius: 50,
              borderWidth: 0,
            },
          },
          zlevel: 2,
          barWidth: "20",
          data: [52],
          label: {
            formatter: "{c}国",
            show: true,
            position: "top",
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
            },
          },
        },
        {
          name: "欧洲",
          type: "bar",
          itemStyle: {
            normal: {
              show: true,
              color: "#0c93dc",
              barBorderRadius: 50,
              borderWidth: 0,
            },
          },
          zlevel: 2,
          barWidth: "20",
          data: [27],
          label: {
            formatter: "{c}国",
            show: true,
            position: "top",
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,.6)",
            },
          },
        },
      ],
    };

    option7 = {
      //  backgroundColor: '#00265f',
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "0",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",

          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 1,
              type: "solid",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 5,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            //formatter: '{value} %'
            show: true,
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "0",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1	)",
              width: 0,
              type: "solid",
            },
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: "2022年",
          type: "line",
          //smooth: true,


          itemStyle: {
            normal: {
              color: "#2f89cf",
              opacity: 1,

              barBorderRadius: 5,
            },
          },
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
    myChart4.setOption(option4);
    myChart5.setOption(option5);

    myChart7.setOption(option7);
    window.addEventListener("resize", function () {
      myChart.resize();
      myChart7.resize();
      myChart2.resize();
      myChart3.resize();
      myChart4.resize();
      myChart5.resize();
    });
  }
});
