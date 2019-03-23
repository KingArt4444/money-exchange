// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var localcurr = currency;
    var obj = {};
    if(localcurr > 10000){
         obj.error = "You are rich, my friend! We don't have so much coins for exchange";
        return obj;
    } else if(localcurr < 0){
        return obj;
    }else{
        for(var i = 1;;i++){
            if(localcurr >= 50){
                obj.H = i;
                localcurr -= 50;
            }
            else{
                break;
            }
        }
        
        for(var i = 1;;i++){
            if(localcurr >= 25){
                obj.Q = i;
                localcurr -= 25;
            }
            else{
                break;
            }
        }
        
        for(var i = 1;;i++){
            if(localcurr >= 10){
                obj.D = i;
                localcurr -= 10;
            }
            else{
                break;
            }
        }
        
        for(var i = 1;;i++){
            if(localcurr >= 5){
                obj.N = i;
                localcurr -= 5;
            }
            else{
                break;
            }
        }
        
        for(var i = 1;;i++){
            if(localcurr >= 1){
                obj.P = i;
                localcurr -= 1;
            }
            else{
                break;
            }
        }
        return obj;
    }
}
