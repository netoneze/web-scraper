const PORT = 6000
//Usado para retornar o HTML da página
const axios = require('axios')
//Possibilita usar um jQuery mais limpo para fazer parse no HTML
const cheerio = require('cheerio')
//Web framework para node, será usado posteriormente
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