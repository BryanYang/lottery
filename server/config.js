/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 5,
    title: "",
    text: "特别奖"
  },
  {
    type: 2,
    count: 34,
    text: "一等奖",
    title: "",
    img: "../img/secrit.jpg"
  },
  {
    type: 3,
    count: 50,
    text: "二等奖",
    title: "",
    img: "../img/secrit.jpg"
  },
  {
    type: 4,
    count: 60,
    text: "三等奖",
    title: "",
    img: "../img/secrit.jpg"
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [5, 30, 40, 40];

/**
 * 卡片公司名称标识
 */
const COMPANY = "新华";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
