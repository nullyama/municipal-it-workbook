import {readFileSync,writeFileSync,mkdirSync,readdirSync,rmSync,existsSync} from 'node:fs';
const assets={};for(const f of readdirSync('web'))assets['/'+f]=readFileSync('web/'+f,'utf8');assets['/']=assets['/index.html'];
mkdirSync('dist/server',{recursive:true});mkdirSync('dist/.openai',{recursive:true});
writeFileSync('dist/server/index.js','const ASSETS='+JSON.stringify(assets)+';\n'+readFileSync('worker/api.js','utf8'));
if(existsSync('.openai/hosting.json'))writeFileSync('dist/.openai/hosting.json',readFileSync('.openai/hosting.json'));
console.log('Built self-contained Worker with '+Object.keys(assets).length+' assets');
