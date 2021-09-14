

const Newbirthday = '3 September 2021';

function countdown() {
    const birthdayDate = new Date(Newbirthday);
    const currentDate = new Date();

    const totalseconds = (birthdayDate - currentDate) / 1000;

    const daysss = Math.floor(totalseconds / 3600 / 24);
    const hoursss = Math.floor(totalseconds / 3600) % 24;
    const minutesss = Math.floor(totalseconds / 60) % 60;
    const secondsss = Math.floor(totalseconds) % 60;

    document.getElementById('days').innerHTML= daysss;
    document.getElementById('hours').innerHTML = hoursss;
    document.getElementById('minutes').innerHTML = minutesss;
    document.getElementById('seconds').innerHTML= secondsss;

}

 countdown();
 
 setInterval(countdown, 1000);