import auth from '../app/auth/rouets'
import home from '../app/home/routes'

var router = () => {
    return [auth, home]
}


export default router