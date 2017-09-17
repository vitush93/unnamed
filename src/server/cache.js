const ttl = (item, def = null) => {
    if (!item) return def;

    if (new Date().getTime() - item.created > item.ttl) {
        return def;
    }

    return item.data;
};

class Cache {

    constructor() {
        this.storage = {};
    }

    has(key) {
        return !!this.get(key);
    }

    rm(key) {
        delete this.storage[key];
    }

    get(key, def = null) {
        return ttl(this.storage[key], def);
    }

    set(key, value, ttl = -1) {
        this.storage[key] = {
            data: value,
            ttl: ttl * 1000,
            created: new Date().getTime()
        };
    }
}

module.exports = Cache;