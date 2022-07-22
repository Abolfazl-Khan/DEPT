const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const industries = [
        {
            id: '101',
            title: 'Agriculture & Food',
        },
        {
            id: '101',
            title: 'Banking, Finance & Insurance',
        },
        {
            id: '102',
            title: 'Consumer Goods & Services',
        },
        {
            id: '103',
            title: 'Fashion & Lifestyle',
        },
    ];

    return res.status(200).json(industries)
});

module.exports = router;
