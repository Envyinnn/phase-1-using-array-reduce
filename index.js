const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(batterCount, 0);
    function batterCount(finalCount, area){
        return finalCount + area;
    }