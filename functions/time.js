const time_colors = [
    {min: 0, max: 100, c : '\x1b[32m'},
    {min: 101, max: 700, c : '\x1b[33m'},
    {min: 701, max: 9999, c : '\x1b[31m'},
]

module.exports = (time) => {
    const level = time_colors.filter(t => {
        if (t.min < time && t.max > time) return true;
        return false;
    });
    return `${level[0].c}${time}`;
}