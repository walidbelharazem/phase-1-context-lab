function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}

function createEmployeeRecords(Arrays){
    return Arrays.map(array => createEmployeeRecord(array));
}

function createTimeInEvent(timedate){
    const dateTime = timedate.split(" ");
this.timeInEvents.push({
    type:'TimeIn',
    hour: parseInt(dateTime[1]),
    date: dateTime[0] 
})
return this;
}

function createTimeOutEvent(timedate){
    const dateTime = timedate.split(" ");
this.timeOutEvents.push({
    type:'TimeOut',
    hour: parseInt(dateTime[1]),
    date: dateTime[0] 
})
return this;}

function hoursWorkedOnDate(date){
    const TimeIn = this.timeInEvents.find(event =>event.date === date).hour;
    const TimeOut = this.timeOutEvents.find(event =>event.date === date).hour;
    return (TimeOut - TimeIn)/100;
}


function wagesEarnedOnDate(date){
    const hoursworked =  hoursWorkedOnDate.call(this,date);
    return hoursworked * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName){ return srcArray.find(name => name.firstName === firstName)
}

function calculatePayroll(array){
    return array.reduce((total,employee) =>{ return total + allWagesFor.bind(employee)();},0)
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {return e.date})
    const payable = eligibleDates.reduce(function (memo, d) {return memo + wagesEarnedOnDate.call(this, d)}.bind(this), 0) 
    return payable
}