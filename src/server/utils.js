exports.parseHashtags = (inputText) => {
    const regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
    const matches = [];
    let match;

    while ((match = regex.exec(inputText))) {
        matches.push(match[1]);
    }

    return matches;
};

exports.createTagModels = (tags) => {
    return tags.map((tag) => {
        return {
            name: tag,
            count: 1
        }
    });
};