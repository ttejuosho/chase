import axios from "axios";

export default {
    
// GETS USER INFO
getUser: function (id) {
    return axios.get('/api/users/' + id);
  },

  //Create User in User table and Create User in fav table
createUser: function (newUser) {
    return axios.post("/api/users", newUser)
}

}