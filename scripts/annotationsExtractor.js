/*
  Extracts rules from the official wfdf pdf.
  Does not copy very well with rules paning over two pages. You may have to fix the file after its generation

  Guidelines for manual fixing:
  - UNKNWOWN: Means the line has not been recognized as either a new annotation  (eg. "15.8 ..."") or content (eg. "Extra blah...")
  - MULTIPLE: The annotation matches several rules, must duplicate manually
  - ERROR : There was an exception, probably because the processed line is weird, should be treated manually
*/

console.log('Starting to extract rules from the pdf...');

const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();

const options = {
  firstPage: 3,
  lastPage: 32,
};

const headers = ['Note', 'Example', 'Result', 'What', 'Why', 'Extra'];

pdfExtract.extract(
  './assets/WFDF Rules of Ultimate 2021-2024 - Official Annotations v1.2-1.pdf',
  options,
  (err, data) => {
    if (err) return console.log(err);

    const fileContentArray = data.pages.reduce((totalContent, page) => {
      const pageContent = page.content.map((content) => content.str);

      let currentRule = '';
      const formattedPageContent = [];
      for (let i = 0; i < pageContent.length; i++) {
        if (pageContent[i] === ' ') {
          continue;
        } else if (/^\d+\.\d(?!\))+/.test(pageContent[i].trim()) || headers.includes(pageContent[i].trim())) {
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

    fileContentArray.forEach((rule, index) => {
      // handling some rule numbers passing through
      if (rule.match(/^\d+(\.\d)*\)/)) {
        // Looks like "4.1)", append to previous
        fileContentArray[index - 1] = fileContentArray[index - 1] + rule;
        fileContentArray[index] = '';
      }
      if (rule.match(/^\d+[^\.\d]/)) {
        // Content spans over 2 pages, page number is included "'12A player is ..."
        fileContentArray[index] = fileContentArray[index].replace(/^\d+/, '');
      }
    });

    const fileContentHash = {};
    let currentRuleNumber = ';';
    let currentAnnotationNumber = ';';
    fileContentArray.forEach((rule) => {
      try {
        let indentation, header;
        if (rule.match(/^\d+\.\d+/)) {
          // New annotation
          const annotationNumber = rule.match(/^\d+\.\d+/)[0];
          if (rule.match(/\(\d+(\.\d+)+, \d+(\.\d+)+\)/)) console.log('MULTIPLE', rule);
          else {
            const ruleNumber = rule.match(/\(\d+(\.\d+)+\.?\)/)[0];
            currentRuleNumber = ruleNumber;
            currentAnnotationNumber = annotationNumber;
            if (!(ruleNumber in fileContentHash)) fileContentHash[ruleNumber] = {};
            fileContentHash[ruleNumber][annotationNumber] = {
              title: rule.replace(annotationNumber, '').replace(ruleNumber, ''),
              content: [],
            };
          }
        } else {
          const header = headers.find((h) => rule.startsWith(h));
          if (header) {
            // Annotation content
            fileContentHash[currentRuleNumber][currentAnnotationNumber]['content'].push({
              type: header,
              text: rule.replace(header, ''),
            });
          } else {
            console.log('UNKNOWN', rule);
          }
        }
      } catch (e) {
        console.log('ERROR', e, rule);

        const lastContentIndex = fileContentHash[currentRuleNumber][currentAnnotationNumber].content.length - 1;
        if (fileContentHash[currentRuleNumber][currentAnnotationNumber].content[lastContentIndex])
          fileContentHash[currentRuleNumber][currentAnnotationNumber].content[
            lastContentIndex
          ].text += `\n\n${rule}\n\n`;
      }
    });

    const fs = require('fs');
    fs.writeFileSync(
      './data/rules/annotations.js',
      'export default ' + JSON.stringify(fileContentHash, null, '  ') + ';\n',
    );
  },
);

console.log('Done extracting annotations from the pdf.');
