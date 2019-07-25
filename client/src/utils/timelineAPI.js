import axios from "axios";

const timelineAPI = {
    /*
        "/api/timeline"
        get request for the readAll methods
        post request for the createtimeline methods        
    */
   readAllTimelines: function() {
       return axios.get('/api/timeline');
   },
   createTimeline: function(timelineData) {
       return axios.post('/api/timeline', timelineData);
   },
   /*
        "/api/timeline/:id"
        get request for the readOne methods
        put request for the updateTimeline method
        delete request for the deleteTimeline method
   */
  readTimeline: function(id) {
      return axios.get("/api/timeline/" + id);
  },
  updateTimeline: function(id, timelineData) {
      return axios.put("/api/timeline/" + id, timelineData);
  },
  deleteTimeline: function(id) {
      return axios.delete("/api/timeline/" + id);
  },
}

export default timelineAPI;