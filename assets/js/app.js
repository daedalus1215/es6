var storage = {
    get (key, success, error) {
        let value = localStorage.getItem(key)
        
        if (value === null) {
            error(`${key} could not be found`);
            return
        }
        
        success(value)
            
    },
    
    put (key, value) {
        localStorage.setItem(key, value)
    }
    
}

storage.put('name', 'larry');

storage.get('age', (value) => {
    console.log(value)
}, (error) => {
    console.log(error)
}
        )
