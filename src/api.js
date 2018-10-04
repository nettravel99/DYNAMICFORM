import axios from "axios";

export default {
  user : {
    login: credentials => axios
      .post("http://127.0.0.1:3050/api/auth", {credentials})
      .then(res => res.data.data),
    signup: user => axios
      .post("http://127.0.0.1:3050/api/signup", {user})
      .then(res => res.data.data)

  }
};
