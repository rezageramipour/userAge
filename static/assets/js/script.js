var userBirthday = prompt("تاریخ تولد خود را وارد کنید:", 1374);
var old = 1402;
var userAge = old - userBirthday;

if (isNaN(userAge) || userBirthday > 1402) {
    alert("تاریخ تولد وارد شده معتبر نمیباشد.")
} else {
    alert ("سن شما: " + userAge);
}