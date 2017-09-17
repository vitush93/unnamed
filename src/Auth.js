import Lockr from 'lockr';

const Auth = {

    isLoggedIn: () => {
        return Lockr.get('token', null) !== null;
    },

    login: (token) => {
        Lockr.set('token', token);
    },

    logout: (token) => {
        Lockr.rm('token');
    }
};

export default Auth;