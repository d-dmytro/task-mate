import initializeApp from './initialize-app';

const PORT = 3001;

initializeApp()
  .then(app => {
    app.listen(PORT, (err: Error) => {
      if (err) throw err;
      console.log(`Ready on port ${PORT}`);
    });
  })
  .catch(e => {
    console.error('Failed to start', e);
  });
