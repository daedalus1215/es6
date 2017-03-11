var api = {
    register (payload) {
        console.log(payload)
    }
}


var register = ({email, username, password, firstName}) => {
    api.register({email, username, password, firstName})
}


var components = {
    data: {
        email: 'alex@codecourse.com',
        username: 'alex',
        password: 'password',
        firstName: 'larry'
    }
}




register(components.data);
