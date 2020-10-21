
export default class DateHelper {
    static formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [day,month, year].join('/');
    }

    static getStringFromNumber(number){
        if(number.toString().length == 1)
        {
            return `0${number}: 00`
        } 

        return `${number}: 00`
    }
}

