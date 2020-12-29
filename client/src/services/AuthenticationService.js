import Api from '@/services/Api'

export default {
    register(credentials){
        return Api().post('/api/register',credentials)
    },
    login(credentials){
        return Api().post('/api/login',credentials)
    },
    getUsers(){
        return Api().get('/api/users')
    }
}



// AuthenticationService.register({
//     email:'test@mail.com',
//     password:'1241212'
// })