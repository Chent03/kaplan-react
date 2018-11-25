const path = require('path');
const fs = require('fs');
const util = require('util');
const _ = require('lodash');
const moment = require('moment');

const readFile = util.promisify(fs.readFile);

module.exports = (app) => {
    app.get('/api/lessons', async (req, res) => {
        try{
            let data = await readFile(path.resolve(__dirname, "../channel.json"), 'utf8');
            data = _.chain(JSON.parse(data))
                    .groupBy((lesson) => moment(lesson.time).format("YYYY-MM-DD"))
                    .toPairs()
                    .sortBy((r) => r[0])
            res.status(200).send(data)
        } catch(err) {
            res.status(422).send('Cannot find lessons')
        }
    })
}