const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/User1/OneDrive/Documents/arun merge/arun merge/izonesite/izonesite/src/pages/development';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Remove old imports like FlipCard if present
    content = content.replace(/import FlipCard.*?\n/g, '');

    // Add VisualSplitServiceList import
    if (!content.includes('VisualSplitServiceList')) {
      content = content.replace(
        /(import.*';\n)(?!import)/,
        '$1import VisualSplitServiceList from "../../components/ui/VisualSplitServiceList";\n'
      );
    }

    // Replace the services mapping section with the new component
    const mapRegex1 = /<section[^>]*>[\s]*<div className="container-custom">[\s]*<motion\.div[^>]*>[\s\S]*?services\.map[\s\S]*?<\/motion\.div>[\s]*<\/div>[\s]*<\/section>/;
    const mapRegex2 = /<section id="services"[^>]*>[\s]*<div className="container-custom">[\s]*<motion\.div[^>]*>[\s\S]*?services\.map[\s\S]*?<\/motion\.div>[\s]*<\/div>[\s]*<\/section>/;
    
    if (content.match(mapRegex2)) {
      content = content.replace(mapRegex2, '<VisualSplitServiceList services={services} />');
    } else if (content.match(mapRegex1)) {
      content = content.replace(mapRegex1, '<VisualSplitServiceList services={services} />');
    } else {
        // Find any section that contains services.map
        content = content.replace(/<section[^>]*>[\s\S]*?services\.map[\s\S]*?<\/section>/, '<VisualSplitServiceList services={services} />');
    }

    fs.writeFileSync(path.join(dir, file), content);
    console.log(`Updated ${file}`);
  }
});
