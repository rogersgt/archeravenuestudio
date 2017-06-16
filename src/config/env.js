const fs = require('fs');

module.exports = () => {
    fs.readFile(`${__dirname}/.env`, (err, data) => {
        if (err) throw new Error(err);

        const variables = JSON.parse(JSON.stringify(data));
        for (const v in variables) {
            if (variables.hasOwnProperty(v)) {
                const val = variables[v];
                process.env[v] = val;
            }
        }
    });
};
