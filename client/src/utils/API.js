import axios from "axios";

export default {
    
// GETS USER INFO
getUser: function (column, value) {
    return axios.get(`/api/users/${column}/${value}`);
  },

  //Create User in User table and Create User in fav table
createUser: function (newUser) {
    return axios.post("/api/users", newUser)
        .then(response => {
        const UserId = { UserId: response.data.id };
        });
    }


}