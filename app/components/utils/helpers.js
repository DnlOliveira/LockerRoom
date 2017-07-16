import axios from 'axios';

var helper = {

  //Will query the db for all images to display in gallery
  getAllImages() {
    return axios.get("/api");
  },

  //Will query the db for user-saved images
  getSavedItems() {

  },

  //Will delete user-saved items
  deleteSavedItems() {

  }

}; //helper

export default helper;
