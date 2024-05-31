const MorningSlot = [
    {
        id: 1,
        time: '11:30 AM'
    }
]

const AfternoonSlot = [
    {
        id: 1,
        time: '12:00 PM'
    },
    {
        id: 2,
        time: '12:30 PM'
    },
    {
        id: 3,
        time: '01:00 PM'
    },
    {
        id: 4,
        time: '01:30 PM'
    },
    {
        id: 5,
        time: '02:00 PM'
    }
]

const EveningSlot = [
    {
        id: 1,
        time: '6:00 PM'
    },
    {
        id: 2,
        time: '6:30 PM'
    },
    {
        id: 3,
        time: '7:00 PM'
    },
    {
        id: 4,
        time: '7:30 PM'
    },
]

const today = new Date();
const date = today.toLocaleDateString();
let count = 1;

const dateFormat = (inputDate, num) =>
{
    const months = [
        {month: 'January', days:31},
        {month: 'February', days:28}, 
        {month: 'March', days:31},
        {month: 'April', days:30},
        {month: 'May', days:31},
        {month: 'June', days:30},
        {month: 'July', days:31},
        {month: 'August', days:31},
        {month: 'September', days:30},
        {month: 'October', days:30},
        {month: 'November', days:31},
        {month: 'August', days:31},
        {month: 'December', days:30}]

    let dd = Number(inputDate.slice(0,2)) +num;
    const mm = inputDate.slice(3,5);
    const yyyy = inputDate.substr(6,10);
    const monthObject = months[Number(mm) - 1];
    let month = monthObject.month
    if(dd>monthObject.days)
    {
        month = months[Number(mm)].month;
        dd = count;
        count++;
    }
    return month +' ' +dd +', ' +yyyy;
}

const dates = [
    {
        id: 1,
        date: 'Today',
        slots: '5 slots available'
    },
    {
        id: 2,
        date: 'Tomorrow',
        slots: '7 slots available'
    },
    {
        id: 3,
        date: dateFormat(date, 2),
        slots: '9 slots available'
    },
    {
        id: 4,
        date: dateFormat(date, 3),
        slots: '12 slots available'
    },
    {
        id: 5,
        date: dateFormat(date, 4),
        slots: '12 slots available'
    },
    {
        id: 6,
        date: dateFormat(date, 5),
        slots: '14 slots available'
    },
    {
        id: 7,
        date: dateFormat(date, 6),
        slots: '15 slots available'
    },
]


export {MorningSlot, AfternoonSlot, EveningSlot, dates}