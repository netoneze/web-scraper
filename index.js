const PORT = 6000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express();

const url = 'https://www.uol.com.br'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const mostReadNews = []
        $('.mostRead__item', html).each(function() {
            const title = $(this).text()
            mostReadNews.push({
                title
            })
        })
        console.log(mostReadNews)
    }).catch(error => {console.log(error)})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))