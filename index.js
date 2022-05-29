const { app, mongoConnect } = require('./server/server');

async function startServer() {
  await mongoConnect();
  
  app.listen(4000, () => {
    console.log('Listening');
  });
}

startServer();