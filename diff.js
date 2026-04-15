import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

function getHash(file) {
    if (!fs.existsSync(file)) return null;
    return crypto.createHash('md5').update(fs.readFileSync(file)).digest('hex');
}

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            results.push(file);
        }
    });
    return results;
}

const src1Files = walk('c:/izonesite/src 1');
const diffs = [];

src1Files.forEach(file => {
    const rel = path.relative('c:/izonesite/src 1', file).replace(/\\/g, '/');
    const target = path.join('c:/izonesite/src', rel);
    const hash1 = getHash(file);
    const hash2 = getHash(target);
    if (!hash2) diffs.push('+ ' + rel);
    else if (hash1 !== hash2) diffs.push('~ ' + rel);
});

fs.writeFileSync('c:/izonesite/diff.json', JSON.stringify(diffs, null, 2));
