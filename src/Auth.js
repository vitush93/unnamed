import Lockr from 'lockr';

const Auth = {

    token: () => {
        return Lockr.get('token', '');
    },

    isLoggedIn: () => {
        return Lockr.get('token', null) !== null;
    },

    login: (token) => {
        Lockr.set('token', token);
    },

    logout: () => {
        Lockr.rm('token');
        Lockr.rm('user');
    },

    setUser: (user) => {
        Lockr.set('user', user.data);
    },

    getUser: () => {
        return Lockr.get('user', null);
    }
};

export default Auth;