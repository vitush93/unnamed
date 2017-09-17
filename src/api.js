const api = () => {

    const host = 'http://localhost/api/v1';

    return {
        login: () => {
            return host + '/github/login'
        },

        add: () => {
            return host + '/add';
        }
    }
};

export default api;