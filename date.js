exports.getDate = function() {
const options = {weekday: 'long', month: 'long', day: 'numeric'};
const day = new Date().toLocaleString('en-us', options);
return day;
}

exports.getDay = function(){
    const options = {weekday: 'long'};
    const day = new Date().toLocaleString('en-us', options);
    return day;
}
