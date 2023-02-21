import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { franc } from 'franc';
const langs = require('langs');
const colors = require('colors');

const text = process.argv[2];
const lang_short = franc(text);

if (lang_short == 'und') {
    console.log("Undefined result. Please try another input (might be unclear or too short).".red)
} else {
    const lang = langs.where('3', lang_short);
    console.log(`Our best guess is: ${lang.name}`.green);
}