const express = require('express');
   const app = express();

   app.use((req, res, next) => {
     const err = new Error('Something went wrong');
     err.status = 500;
     next(err);
   });

   app.use((err, req, res, next) => {
     res.status(err.status || 500);
     res.send({ error: err.message });
   });

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
