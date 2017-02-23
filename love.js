$(function() {
  var start = (new Date('2016,5,1')).getTime();

  var tick = setInterval(function(){

    $('#day').text(getDuring(start, 'days') +" day");
    $('#date').text(getDuring(start));
  }, 1000);

  function getDuring(time, type) {
    var during = Date.now() - time;

    var days = Math.floor(during/(24*3600*1000));
    var surplus = during%(24*3600*1000);
    var hours = Math.floor(surplus/(3600*1000));
    var minutes = Math.floor(surplus%(3600*1000)/(60*1000));
    var seconds = Math.floor(surplus%(3600*1000)%(60*1000)/1000);

    hours = hours > 10 ? hours : '0' + hours;
    minutes = minutes > 10 ? minutes : '0' + minutes;
    seconds = seconds > 10 ? seconds : '0' + seconds;

    switch (type) {
      case "days": return days;
      case "hours": return hours;
      case "minutes": return minutes;
      case "seconds": return seconds;
      default: return hours + " hour " + minutes + " minute " + seconds + " second";
    }
  }
})