//Tagged Temmplate Literals


var emnum = (strings, ...keys) => {
    keys.forEach((value, index) => {
        if (typeof value === 'number') {
            keys[index] = `<em>${value}</em>`
        }
    })
    
    console.log(keys);
}



var name = 'Larry'


var messageCount = 20


var greeting = emnum`Hi ${name} you have ${messageCount} messages`











//console.log(greeting);
