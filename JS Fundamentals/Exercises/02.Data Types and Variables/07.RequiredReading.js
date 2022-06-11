function requiredReading(pagesToRead, pagesPerHour, days){

    let firstAndSecond = totalTime(pagesToRead, pagesPerHour)
    let readingPerDay = timeByDays(firstAndSecond, days);

    console.log(readingPerDay)
    
    function totalTime(pagesToRead, pagesPerHour){
        return pagesToRead / pagesPerHour;
    }

    function timeByDays (totalTime, days){
        return totalTime / days;
    }
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);