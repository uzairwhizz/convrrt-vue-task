export default {
  updateLink({ commit }: { commit: any }, data: String) {
    commit("setSelectedType", data);
  }
};
