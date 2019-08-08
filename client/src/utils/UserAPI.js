import axios from "axios";

const userAPI = {
    /*
        "/api/event"
        get request for the readAll methods
        post request for the createEvent methods        
    */
   readAllUsers: function() {
       return axios.get('/accounts/users');
   },
   createUser: function(userData) {
       return axios.post('/accounts/users', userData);
   },
   /*
        "/api/event/:id"
        get request for the readOne methods
        put request for the updateEvent method
        delete request for the deleteEvent method
   */
  readUser: function(name) {
      return axios.get("/accounts/" + name);
  }
}

export default userAPI;