const CSVToJSON = require('csvtojson');
const slugify = require('slugify');
const { writeFileSync } = require('fs');
const path = require('path');

const langRoot = '../src/data/lang/translate-parktool/'

CSVToJSON().fromFile('./words.csv')
    .then(data => {
      const languages = Object.keys(data[0]).filter((k) => k !== 'field11' && k !== 'PT-BR')
      console.log('>> LANGS', languages);
      const translations = languages.reduce((acc, lang) => {
        acc[lang] = {}
        return acc
      }, {})
      console.log('>> TRANS', translations);
      data.forEach((row) => {
        const slug = slugify(row['EN']);
        languages.forEach((lang) => {
          translations[lang][slug] = row[lang]
        })
      })

      // console.log('>> DATA', translations['FR']);

      Object.keys(translations).forEach((lang) => {
        const finalLang = lang === 'PT-PT' ? 'PT' : lang
        try {
          writeFileSync(path.join(langRoot, `${finalLang.toLocaleLowerCase()}.json`), JSON.stringify(translations[lang], null, 2), 'utf8');
          console.log(`${finalLang} Data successfully saved to disk`);
        } catch (error) {
          console.log(`An error has occurred writing the ${finalLang} file`, error);
        }
      })
    }).catch(err => {
        console.log(err);
    });