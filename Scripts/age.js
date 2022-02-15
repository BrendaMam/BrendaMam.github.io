function age() {

  var birthday = document.getElementById('birthday').value;

  var dateBirthday = new Date(birthday);
  var today = new Date()

  var month = today.getMonth();
  var day = today.getDate();
  var year = today.getFullYear();

  today.setDate(day);
  today.setMonth(month);
  today.setFullYear(year);

  age = Math.floor(((today - dateBirthday) / (1000 * 60 * 60 * 24) / 365));

  // console.log ('La edad es: ' + age + ' Años')
  mixpanel.track("age", {"Edad": age});
}