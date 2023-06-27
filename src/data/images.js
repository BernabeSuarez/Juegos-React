export const IMAGES = [
    "https://icongr.am/devicon/angularjs-original.svg?size=92&color=currentColor",
    "https://icongr.am/devicon/javascript-original.svg?size=92&color=currentColor",
    "https://icongr.am/devicon/python-original.svg?size=92&color=currentColor",
    "https://icongr.am/devicon/typescript-original.svg?size=92&color=currentColor",
    "https://icongr.am/devicon/firefox-original.svg?size=92&color=currentColor",
    "https://icongr.am/devicon/git-original.svg?size=92&color=currentColor",
    "https://icongr.am/devicon/html5-original.svg?size=92&color=currentColor",
    "https://icongr.am/devicon/nodejs-original.svg?size=92&color=currentColor",
    "https://icongr.am/devicon/linux-original.svg?size=92&color=currentColor",
    "https://icongr.am/devicon/mongodb-original.svg?size=92&color=currentColor",
]
    .flatMap((image) => [`a|${image}`, `b|${image}`])
    .sort(() => Math.random() - 0.5); // flatmap duplica los elementos del array y sigue conservando un array de strings y sort() los mezcla