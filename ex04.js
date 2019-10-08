module.exports = function capitalize(str='', restToLoweropt = false){
    if(restToLoweropt=false){
        return str.charAt(0).toUpperCase() + str.slice(1)  
    }
    else {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    
}