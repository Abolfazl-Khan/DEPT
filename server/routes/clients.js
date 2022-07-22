const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const clients = [
    {
      id: 1,
      title: 'Google',
      logo: 'clientLogo/Google.png',
    },
    {
      id: 2,
      title: "Levi's",
      logo: 'clientLogo/Levis.png',
    },
    {
      id: 3,
      title: 'Netflix',
      logo: 'clientLogo/Netflix.png',
    },
    {
      id: 3,
      title: 'Spotify',
      logo: 'clientLogo/Spotify.png',
    },
    {
      id: 4,
      title: 'Patagonia',
      logo: 'clientLogo/Patagonia.png',
    },
    {
      id: 5,
      title: 'Fujitsu',
      logo: 'clientLogo/Fujitsu.png',
    },
    {
      id: 6,
      title: 'Adyen',
      logo: 'clientLogo/Adyen.png',
    },
    {
      id: 7,
      title: 'AUDI',
      logo: 'clientLogo/Audi.png',
    },
    {
      id: 8,
      title: 'Triumph',
      logo: 'clientLogo/Triumph.png',
    },
    {
      id: 9,
      title: 'Tesla',
      logo: 'clientLogo/Tesla.png',
    },
    {
      id: 10,
      title: 'Asos',
      logo: 'clientLogo/Asos.png',
    },
    {
      id: 11,
      title: 'Takeway',
      logo: 'clientLogo/Takeway.png',
    },
  ];

  return res.status(200).json(clients);
});

module.exports = router;
