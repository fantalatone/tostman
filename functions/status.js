const status_colors = {
    200 : '\x1b[32m',
    404 : '\x1b[31m'
}

module.exports = (status) => {
    return `${status_colors[status]}${status}\x1b[0m`;
}