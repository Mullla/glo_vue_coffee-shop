export const navigate = {
  methods: {
    navigate(id) {
      this.$router.push({ name: "ItemPage", params: { id } });
    },
  },
}