// api-route.js
const mysql = require('mysql2');
// connection configurations
const connection = mysql.createConnection({
    host: 'tj5iv8piornf713y.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 're2n4z84gpws0cbn',
    password: 'iupdavy6n14u6wfc',
    database: 'r9lh7uwbposuvlg6'
});

// connect to database
connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
})


module.exports = (app) => {
  app.get('/api/cryptos', (req, res) => {
    connection.query('select * from currencies',
        function (error, results) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
  })
}