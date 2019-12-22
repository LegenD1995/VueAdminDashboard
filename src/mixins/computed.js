export default {
  computed: {
    setNameAdmin() {
      return `${this.$store.state.user.personalInfo.name} ${this.$store.state.user.personalInfo.family}`
    }
  }
};
