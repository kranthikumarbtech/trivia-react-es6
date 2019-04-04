// Covert to date dd/mm/yyy

export function toDay(newDate) {
  let todayDate = new Date();
  if (newDate !== undefined) {
    todayDate = new Date(newDate);
  }
  let dd = todayDate.getDate();
  let mm = todayDate.getMonth() + 1; // January is 0!
  let yyyy = todayDate.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  todayDate = dd + '/' + mm + '/' + yyyy;
  return todayDate;
}
