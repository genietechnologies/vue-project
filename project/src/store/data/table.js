import sample from "@/store/sample.json";

export default {
  namespaced: true,
  state: {
    headers: [
      {
        text: "ID",
        align: "start",
        value: "ID",
      },
      { text: "회사명", value: "CompanyName" },
      { text: "주소", value: "Address" },
      { text: "City", value: "City" },
      { text: "State", value: "State" },
      { text: "우편번호", value: "Zipcode" },
      { text: "전화번호", value: "Phone" },
      { text: "팩스번호", value: "Fax" },
      { text: "웹사이트", value: "Website" },
    ],
    desserts: sample,
  },
  getters: {},
  mutations: {},
  actions: {},
};
