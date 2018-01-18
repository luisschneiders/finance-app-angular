angular.module('MyApp')
.factory('DefaultServices', ['$http', 'moment', function($http, moment) {
  let top = {};
  let monthAndYear = null;

  return {
    getSettings: function() {
      let settings = $http.get(`/settings`, {cache: true})
          .then(function(response){
            return response.data;
          })
          .catch(function(error) {
            return error.data;
          });
      return settings;
    },
    setTop: function(data) {
      top.pageTitle = data.pageTitle;
      top.buttonTitle = data.buttonTitle;
      top.buttonUrl = data.buttonUrl;
      top.buttonDisplay = data.buttonDisplay;
    },
    getTop: function() {
      return top;
    },
    setMonthAndYear: function(data) {
      let date = data.toString().split('/').join('-');
      date = date + '-01';
      monthAndYear = new Date(date);
    },
    getMonthAndYear: function() {
      return monthAndYear;
    }
  }
}]);