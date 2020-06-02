const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection =dbConnection();

  connection.connect(function(err) {
    if (err) throw err;
    console.log('“##Successfully connected to MySQL container##”');
  });


  app.get('/',(req, res)=> {
    connection.query('SELECT * FROM ARTIST', (err, result)=>{
      console.log(result)
      console.log('Hola mundo')
      res.render('news/news',{
        news: result
      })
    });
  });

  // app.post('/news', (req, res) => {
  //   const {title, news} = req.body;
  //   console.log(req.body);
  //   connection.query('INSERT INTO news SET ? ',
  //   {
  //     title,
  //     news
  //   },
  //    (err, result) => {
  //   res.redirect('/');
  //   });

  // });

}