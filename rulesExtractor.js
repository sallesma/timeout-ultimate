console.log('Starting to extract rules from the pdf...');

const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();

const options = {
  firstPage: 2,
  lastPage: 15,
};

pdfExtract.extract('./assets/WFDF Rules of Ultimate 2021-2024 - French.pdf', options, (err, data) => {
  if (err) return console.log(err);

  const fileContent = data.pages.reduce((totalContent, page) => {
    const pageContent = page.content.map(content => content.str);

    let currentRule = '';
    let formattedPageContent = [];
    for (let i = 0; i < pageContent.length; i++) {
      if (pageContent[i] === ' '){
        continue;
      } else if (/^(\d+.)+$/.test(pageContent[i].trim())) {
        // Removing page numbers. Chapter numbers are written as 1.
        if (currentRule.trim() !== '' && !/^\d+$/.test(currentRule.trim()))
          formattedPageContent.push('  "' + currentRule.trim() + '"');
        currentRule = pageContent[i];
      } else {
        // Aggréger
        currentRule = currentRule + pageContent[i];
      }
    }
    // Add last line if it is useful
    if (currentRule.trim() !== '' && !/^\d+$/.test(currentRule.trim()))
      formattedPageContent.push('  "' + currentRule.trim() + '"');

    return totalContent.concat(formattedPageContent);
  }, []);

  const fs = require('fs')
  fs.writeFileSync('./data/rules.js', 'export default [\n' + fileContent.join(',\n') + '\n];\n')
});

console.log('Done extracting rules from the pdf.');
