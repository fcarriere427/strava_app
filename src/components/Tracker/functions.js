import daysInYear from '../../utils/functions'

///////////////////////////////////////////////////////////////////////////////////////////////
// renvoie la distance cible pour la date du jour / prend la cible annuelle en entrée
export default function targetToDate(target){
  // calculs locaux pour initier
  let today = new Date();
  let start = new Date(today.getFullYear(), 0, 0);
  let diff = today - start;
  let year = today.getFullYear().toString();
  let day = Math.floor(diff / (1000 * 60 * 60 * 24)); // calcul = secondes dans 1 jour
  let percentOfYear = day / daysInYear(year);
  return Math.round(percentOfYear * target *10)/10; //target to date
}
