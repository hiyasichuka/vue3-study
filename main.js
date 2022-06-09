const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpeg",
      inventory: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2232, color: "greeen" },
        { id: 2235, color: "blue" },
      ],
    };
  },
});
