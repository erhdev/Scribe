import axios from "axios";

const infoAPI = {
    /*
        "/api/info"
        get request for the readAll methods
        post request for the createinfo methods        
    */
   readAllInfo: function(user) {
       return axios.get(`/api/info/${user}`);
   },
   createInfo: function(user, infoData) {
       return axios.post(`/api/info/${user}`, infoData);
   },
   /*
        "/api/info/:id"
        get request for the readOne methods
        put request for the updateinfo method
        delete request for the deleteinfo method
   */
  readInfo: function(id) {
      return axios.get("/api/info/" + id);
  },
  updateInfo: function(id, infoData) {
      return axios.put("/api/info/" + id, infoData);
  },
  deleteInfo: function(id) {
      return axios.delete("/api/info/" + id);
  },
  /*
        "/api/info/:id/:session"
        put request for the big boy special sauce custom method
  */
 pushInfo: function(id, event, infoData) {
     return axios.put(`/api/info/${id}/${event}`, infoData);
 }
}

export default infoAPI;