angular.module('MyApp')
.factory('TimeServices', [
  function() {
    return {
      getWorkedHours: function(timesheets) {
        let durations = [];
        timesheets.forEach((timesheet) => {
          durations.push(timesheet.timesheetTotalHours);
        });

        let totalDurations = durations.slice(1)
          .reduce((prev, cur) => moment.duration(cur).add(prev),
            moment.duration(durations[0]));

        let timesheetTotalHours = moment.duration(totalDurations).asMilliseconds();
        return parseMillisecondsIntoReadableTime(timesheetTotalHours);
      }
    }
    
    function parseMillisecondsIntoReadableTime(milliseconds){
      //Get hours from milliseconds
      var hours = milliseconds / (1000*60*60);
      var absoluteHours = Math.floor(hours);
      var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

      //Get remainder from hours and convert to minutes
      var minutes = (hours - absoluteHours) * 60;
      var absoluteMinutes = Math.floor(minutes);
      var m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;

      //Get remainder from minutes and convert to seconds
      // var seconds = (minutes - absoluteMinutes) * 60;
      // var absoluteSeconds = Math.floor(seconds);
      // var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

      return `${h}hrs ${m}mins`;
    }
}]);
