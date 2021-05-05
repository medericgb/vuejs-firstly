const app = Vue.createApp({
  data() {
    return {
      firstname: "John",
      lastname: "Doe",
      email: "johndoe@mail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },

  methods: {
    async getUser() {
      const res = fetch("https://randomuser.me/api");
      const { results } = await (await res).json();
      console.log(results);

      this.firstname = "Sam";
      this.lastname = "Smith";
      this.email = "samsmith@mail.com";
      this.gender = "female";
      this.picture = "https://randomuser.me/api/portraits/women/10.jpg";
    },
  },
});

app.mount("#app");
