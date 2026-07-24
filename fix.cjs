const fs = require('fs');
const files = [
  'src/components/Hero.tsx',
  'src/components/Projects.tsx',
  'src/components/Skills.tsx'
];
files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/import anime from "animejs\/lib\/anime.es.js";/g, 'import anime from "animejs";');
    fs.writeFileSync(f, content);
  }
});
let tsconfig = fs.readFileSync('tsconfig.app.json', 'utf8');
tsconfig = tsconfig.replace('"moduleResolution": "bundler",', '"moduleResolution": "bundler",\n    "esModuleInterop": true,\n    "allowSyntheticDefaultImports": true,');
fs.writeFileSync('tsconfig.app.json', tsconfig);
console.log('Fixed animejs imports and tsconfig');
