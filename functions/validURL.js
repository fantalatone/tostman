module.exports = (url) => {
    if (!(url.includes("http://")) && !(url.includes("https://"))) {
        return "http://".concat(url);
    }
    return url;
}