import { createStore } from "vuex";

const storeData = createStore({
  state: {
    dataFoodHomeDade: [
      {
        id: 1,
        title: "Spicy Beef Tendon",
        src: '2019/10/MG_6508-400x270.jpg"',
        price: 68.0,
      },
      {
        id: 2,
        title: "Fried pillow cake",
        src: "2018/09/Bánh-gối-60.000-400x270.jpg",
        price: 89.0,
      },
      {
        id: 3,
        title: "Ho Tay shirmp cake",
        src: "2018/09/Bánh-tôm-hồ-Tây-68000-400x270.jpg",
        price: 89.0,
      },
      {
        id: 4,
        title: "Salted chicken feet",
        src: "2020/03/Chân-gà-ngâm-muối-sả-80.000-400x270.jpg",
        price: 106.0,
      },
      {
        id: 5,
        title: "Fried fermented pork",
        src: '2018/09/Nem-chua-rán-65.000-400x270.jpg"',
        price: 79.0,
      },
      {
        id: 6,
        title: "Fermented pork",
        src: "2018/09/Nem-chua-tươi-60.000-400x270.jpg",
        price: 78.0,
      },
    ],

    menuProduct: [
      { id: 1, title: "Main Course" },
      { id: 2, title: "Light-meal Dishes" },
      { id: 3, title: "Signature hotpot" },
      { id: 4, title: "Beverages" },
      { id: 5, title: "Desserts" },
    ],
  },

  getters: {},

  mutations: {},
  
  actions: {},
});

export default storeData;
