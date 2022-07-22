const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    const categories = [
        {
            id: '150',
            title: 'Advertising',
        },
        {
            id: '151',
            title: 'Commerce',
        },
        {
            id: '152',
            title: 'Content',
        },
        {
            id: '153',
            title: 'Design',
        },
    ];

    return res.status(200).json(categories)
});

module.exports = router;
