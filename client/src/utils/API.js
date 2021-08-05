import axios from "axios";

export default {
    login: function (user) {
        return axios.post("/user/login", user)
    },
    register: function (user) {
        return axios.post("/user/", user)
    },
    logout: function () {
        return axios.post("/user/logout")
    },
}