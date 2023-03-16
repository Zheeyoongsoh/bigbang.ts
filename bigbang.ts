import * as fs from 'fs';

const array: string[] = [];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    array.push('BIGBANG');
  } else if (i % 3 === 0) {
    array.push('BIG');
  } else if (i % 5 === 0) {
    array.push('BANG');
  } else {
    array.push(i.toString());
  }
}

const outputPath = './output.json';

fs.writeFileSync(outputPath, JSON.stringify(array));
console.log(`Output written to ${outputPath}`);