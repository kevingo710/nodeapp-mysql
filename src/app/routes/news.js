const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection =dbConnection();

  connection.connect(function(err) {
    if (err) throw err;
    console.log('“##Successfully connected to MySQL container##”');
  });


  app.get('/',(req, res)=> {
    connection.query('SELECT * FROM news', (err, result)=>{
      console.log(result)
      console.log('Hola mundo')
      res.render('news/news',{
        news: result
      })
    })
    
  });

}