//Tagged Temmplate Literals


var test = (strings, ...keys) => {
    console.log(strings, keys);
}



var name = 'Larry'


var messageCount = 20


var greeting = test `Hi ${name} you have ${messageCount} messages`












//console.log(greeting);
