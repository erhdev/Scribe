import axios from "axios";

const eventAPI = {
    /*
        "/api/event"
        get request for the readAll methods
        post request for the createEvent methods        
    */
   readAllEvents: function() {
       return axios.get('/api/event');
   },
   createEvent: function(eventData) {
       return axios.post('/api/event', eventData);
   },
   /*
        "/api/event/:id"
        get request for the readOne methods
        put request for the updateEvent method
        delete request for the deleteEvent method
   */
  readEvent: function(id) {
      return axios.get("/api/event/" + id);
  },
  updateEvent: function(id, eventData) {
      return axios.put("/api/event/" + id, eventData);
  },
  deleteEvent: function(id) {
      return axios.delete("/api/event/" + id);
  },
  /*
        "/api/event/:id/:session"
        put request for the big boy special sauce custom method
  */
 pushEvent: function(id, sessionid, eventData) {
     return axios.put(`/api/event/${id}/${sessionid}`, eventData);
 }
}

export default eventAPI;