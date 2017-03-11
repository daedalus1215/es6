var register = (email, name, lname) => {
    console.log('Registered', email, name, lname)
}

var payload = ['alex@codeCourse', 'larry', 'adams'];



register(...payload);