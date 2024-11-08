import axios from 'axios';

// Making a GET request
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Making a POST request
axios.post('https://api.example.com/data', { key: 'value' })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error posting data:', error);
  });
