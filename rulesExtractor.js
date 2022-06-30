/*
  Extracts rules from the official wfdf pdf.
  Does not copy very well with rules paning over two pages. You may have to fix the file after its generation
*/

console.log('Starting to extract rules from the pdf...');

const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();

const options = {
  firstPage: 2,
  lastPage: 15,
};

pdfExtract.extract('./assets/WFDF Rules of Ultimate 2021-2024 - French.pdf', options, (err, data) => {
  if (err) return console.log(err);

  const fileContentArray = data.pages.reduce((totalContent, page) => {
    const pageContent = page.content.map((content) => content.str);

    let currentRule = '';
    const formattedPageContent = [];
    for (let i = 0; i < pageContent.length; i++) {
      if (pageContent[i] === ' ') {
        continue;
      } else if (/^(\d+.)+$/.test(pageContent[i].trim())) {
        // Removing page numbers. Chapter numbers are written as 1.
        if (currentRule.trim() !== '' && !/^\d+$/.test(currentRule.trim()))
          formattedPageContent.push(currentRule.trim());
        currentRule = pageContent[i];
      } else {
        // Aggréger
        currentRule = currentRule + pageContent[i];
      }
    }
    // Add last line if it is useful
    if (currentRule.trim() !== '' && !/^\d+$/.test(currentRule.trim())) formattedPageContent.push(currentRule.trim());

    return totalContent.concat(formattedPageContent);
  }, []);

  const fs = require('fs');

  const fileContentHash = {};
  let currentChapter = ';';
  fileContentArray.forEach((rule) => {
    const number = rule.match(/^(\d+.)+/)[0];
    const indentation = (number.match(/\d+./g) || []).length;
    if (indentation === 1) {
      currentChapter = rule;
      fileContentHash[currentChapter] = {};
    } else {
      fileContentHash[currentChapter][number] = rule.replace(number, '');
    }
  });
  fs.writeFileSync('./data/rules/rules.js', 'export default ' + JSON.stringify(fileContentHash, null, '  ') + ';\n');
});

console.log('Done extracting rules from the pdf.');
