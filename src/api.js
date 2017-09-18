const api = () => {

    const host = 'http://localhost/api/v1';

    return {
        link: () => {
            return host + '/link'
        },

        add: () => {
            return host + '/add';
        },

        user: () => {
            return host + '/user'
        }
    }
};

export default api;