module.exports = function swapCase(str = ''){
newStr=''
    for(lettre of str)
        {
            if (isUpperCase(lettre))
                newStr += lettre.toLowerCase()
            else
                newStr += lettre.toUpperCase()
        } 
        return newStr.trim()
    }

function isUpperCase(element){
    return element == element.toUpperCase()
}