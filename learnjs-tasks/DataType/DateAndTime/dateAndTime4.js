function getDateAgo(date, days) {
    var newDate = new Date(date);
    newDate.setDate(newDate.getDate() - days)
    return newDate.getDate();
}

alert(getDateAgo('2021, 10, 1', 40));