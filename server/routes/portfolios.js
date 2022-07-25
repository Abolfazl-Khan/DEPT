const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { categoryId, industryId } = req.query;

  const allPortfolios = [
    {
      id: '1000',
      title: 'A Summer island in the Netherlands',
      companyName: 'BOL.COM',
      image: 'portfolioImage/BOL.png',
      categoryId: '150',
      industryId: '103',
    },
    {
      id: '1001',
      title: 'Not some average banking website',
      companyName: 'KEMPEN',
      image: 'portfolioImage/KEMPEN.png',
      categoryId: '151',
      industryId: '101',
    },
    {
      id: '1002',
      title: 'Beautiful design meets innovative technology',
      companyName: 'PHILIPS',
      image: 'portfolioImage/PHILIPS.png',
      categoryId: '153',
      industryId: '103',
    },
    {
      id: '1003',
      title: 'A 100 years of Mondriaan & De Stijl',
      companyName: 'GEMEENTEMUSEUM',
      image: 'portfolioImage/GEMEENTEMUSEUM.png',
      categoryId: '152',
      industryId: '101',
    },
    {
      id: '1004',
      title: 'Rethinking the entire online ecosystem',
      companyName: 'FLORENSIS',
      image: 'portfolioImage/FLORENSIS.png',
      categoryId: '153',
      industryId: '103',
    },
    {
      id: '1005',
      title:
        'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
      companyName: 'MICROSOFT',
      image: null,
      categoryId: '152',
      industryId: '101',
    },
    {
      id: '1006',
      title:
        'Integrating existing content into O’Neills’s new e-commerce platform',
      companyName: 'O’NEILL',
      image: null,
      categoryId: '152',
      industryId: '101',
    },
    {
      id: '1007',
      title:
        'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
      companyName: 'MICROSOFT',
      image: null,
      categoryId: '152',
      industryId: '101',
    },
    {
      id: '1008',
      title: 'Delivering clarity on a global scale',
      companyName: 'BE LIGHTNING',
      image: 'portfolioImage/BE-LIGHTNING.png',
      categoryId: '151',
      industryId: '102',
    },
    {
      id: '1009',
      title: 'Swipe to find your next holiday destination',
      companyName: 'TUI',
      image: 'portfolioImage/TUI.png',
      categoryId: '153',
      industryId: '101',
    },
    {
      id: '1010',
      title: 'Starting with delivering through drones',
      companyName: 'AMAZON',
      image: null,
      categoryId: '152',
      industryId: '101',
    },
    {
      id: '1011',
      title:
        'Integrating existing content into O’Neills’s new e-commerce platform',
      companyName: 'O’NEILL',
      image: null,
      categoryId: '152',
      industryId: '101',
    },
    {
      id: '1012',
      title:
        'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
      companyName: 'MICROSOFT',
      image: null,
      categoryId: '152',
      industryId: '101',
    },
    {
      id: '1013',
      title: 'Rethinking the entire online ecosystem',
      companyName: 'FLORENSIS',
      image: 'portfolioImage/FLORENSIS2.png',
      categoryId: '152',
      industryId: '101',
    },
    {
      id: '1014',
      title: 'A campaign for the limited edition letter packs',
      companyName: 'CHOCOMEL',
      image: 'portfolioImage/CHOCOMEL.png',
      categoryId: '153',
      industryId: '102',
    },
    {
      id: '1015',
      title: 'Live like a champion with Jerome Boateng',
      companyName: 'JBL',
      image: 'portfolioImage/JBL.png',
      categoryId: '151',
      industryId: '102',
    },
    {
      id: '1016',
      title: 'Innovative SEO and content strategy for Zalando',
      companyName: 'ZALANDO',
      image: 'portfolioImage/ZALANDO.png',
      categoryId: '153',
      industryId: '103',
    },
    {
      id: '1017',
      title: 'The search of the most influential book ever',
      companyName: 'KONINKLIJKE BIBLIOTHEEK',
      image: 'portfolioImage/KONINKLIJKE-BIBLIOTHEEK.png',
      categoryId: '152',
      industryId: '103',
    },
    {
      id: '1018',
      title: 'Delivering complex commerce solutions',
      companyName: 'LIBERTY GLOBAL',
      image: 'portfolioImage/LIBERTY-GLOBAL.png',
      categoryId: '152',
      industryId: '101',
    },
    {
      id: '1019',
      title: 'Swipe to find your next holiday destination',
      companyName: 'ARLA',
      image: 'portfolioImage/ARLA.png',
      categoryId: '153',
      industryId: '102',
    },
  ];

  let portfolios = allPortfolios;

  if (!!categoryId || !!industryId)
    portfolios = allPortfolios.filter((record) => {
      if (!!categoryId && record.categoryId !== categoryId) return false;
      if (!!industryId && record.industryId !== industryId) return false;
      return true;
    });

  return res.status(200).json(portfolios);
});

module.exports = router;
