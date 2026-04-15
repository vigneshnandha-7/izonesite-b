const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/User1/OneDrive/Documents/arun merge/arun merge/izonesite/izonesite/src/pages/development';
const files = fs.readdirSync(dir);

const importStatement = `import VisualSplitServiceList from "../../components/ui/VisualSplitServiceList";\n`;

files.forEach(file => {
  if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    if (!content.includes('import VisualSplitServiceList')) {
      content = importStatement + content;
      fs.writeFileSync(path.join(dir, file), content);
      console.log(`Added import to ${file}`);
    }
  }
});
