const api = () => {

    const host = 'http://localhost:8080';

    return {
        add: () => {
            return host + "/add";
        }
    }
};

export default api;