module.exports = function countSubstring(str='',substring){
    let newStr = 0

        if (str.match(/^([A-Z])/g))
            newStr =+ 1 

        return newStr
}