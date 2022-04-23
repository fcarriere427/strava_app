// prend un time en absolu en entrée, renvoie une chaine "xh ymn z"
function strTime(data) {
  let moving_time = data.moving_time; // en secondes
  let time_str = '';
  if (moving_time > 3600) {
    let h_moving_time = Math.trunc(moving_time/3600);
    let mn_moving_time = Math.trunc((moving_time - h_moving_time * 3600) / 60);
    let sec_moving_time = Math.round(moving_time - h_moving_time * 3600 - mn_moving_time * 60);
    time_str = h_moving_time + 'h ' + mn_moving_time + 'mn ' + sec_moving_time + 's';
  } else {
    let mn_moving_time = Math.trunc((moving_time) / 60);
    let sec_moving_time = Math.trunc(moving_time - mn_moving_time * 60);
    time_str = mn_moving_time + 'mn ' + sec_moving_time + 's';
  }
  return time_str;
}

// prend une vitesse en m/s, renvoie une chaine "x mn y / km"
function strSpeed(data) {
  let avg_speed = data.average_speed; // en mètres/secondes
  let pace = 1 / avg_speed * 1000; // en secondes par km
  let mn_avg_speed = Math.trunc(pace / 60);
  let sec_avg_speed = Math.round(pace - 60 * mn_avg_speed);
  let speed_str = mn_avg_speed + 'mn' + sec_avg_speed + '/km'
  return speed_str;
}

// prend une date au format standard (2022-02-26T09:52:09Z), renvoie une chaine "JJ/MM/YY à HHhmm"
function strDate(data) {
  let date = data.start_date_local; // ex : 2022-02-26T09:52:09Z
  let newDate = new Date(date);
//  const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  let date_str = newDate.toLocaleDateString('fr-FR') + ' à ' + newDate.toLocaleTimeString('fr-FR');
  return date_str;
}

function daysInYear(year) {
  var days = 0;
  for(var month = 1; month <= 12; month++) {
    days += daysInMonth(month, year);
  }
  return days;
}

// Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

///////////////////////////////////////////////////////////////////////////////////////////////
// renvoie la distance cible pour la date du jour / prend la cible annuelle en entrée
function targetToDate(target){
  // calculs locaux pour initier
  let today = new Date();
  let start = new Date(today.getFullYear(), 0, 0);
  let diff = today - start;
  let year = today.getFullYear().toString();
  let day = Math.floor(diff / (1000 * 60 * 60 * 24)); // calcul = secondes dans 1 jour
  let percentOfYear = day / daysInYear(year);
  return Math.round(percentOfYear * target *10)/10; //target to date
}

export {
   strTime,
   strSpeed,
   strDate,
   daysInYear,
   daysInMonth,
   targetToDate
};
