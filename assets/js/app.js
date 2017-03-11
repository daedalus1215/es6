//Tagged Temmplate Literals


var emnum = (strings, ...keys) => {
    keys.forEach((value, index) => {
        if (typeof value === 'number') {
            keys[index] = `<em>${value}</em>`
        }
    })
    
    var result = strings[0]
    
    for (let i = 0; i < keys.length; i++) {
        result += keys[i] + strings[i + 1]
    }
    
    
    return result
}



var name = 'Larry'


var messageCount = 20


var greeting = emnum`Hi ${name} you have ${messageCount} messages`


console.log(greeting);








//console.log(greeting);
