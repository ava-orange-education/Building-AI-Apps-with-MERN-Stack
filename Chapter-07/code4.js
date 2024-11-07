const express = require('express');
   const app = express();

   app.use(express.static('public'));
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));

   app.listen(3000, () => {
     console.log('Server is running on port 3000');
   });
