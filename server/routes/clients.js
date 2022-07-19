const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const clients = [
    {
      id: 1,
      title: 'Google',
      logo: 'Google.png',
    },
    {
      id: 2,
      title: "Levi's",
      logo: 'Levis.png',
    },
    {
      id: 3,
      title: 'Netflix',
      logo: 'Netflix.png',
    },
    {
      id: 3,
      title: 'Spotify',
      logo: 'Spotify.png',
    },
    {
      id: 4,
      title: 'Patagonia',
      logo: 'Patagonia.png',
    },
    {
      id: 5,
      title: 'Fujitsu',
      logo: 'Fujitsu.png',
    },
    {
      id: 6,
      title: 'Adyen',
      logo: 'Adyen.png',
    },
    {
      id: 7,
      title: 'AUDI',
      logo: 'Audi.png',
    },
    {
      id: 8,
      title: 'Triumph',
      logo: 'Triumph.png',
    },
    {
      id: 9,
      title: 'Tesla',
      logo: 'Tesla.png',
    },
    {
      id: 10,
      title: 'Asos',
      logo: 'Asos.png',
    },
    {
      id: 11,
      title: 'Takeway',
      logo: 'Takeway.png',
    },
  ];

  return res.status(200).json(clients);
});

module.exports = router;
