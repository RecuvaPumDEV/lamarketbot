module.exports = {
    name: 'setcolor',
    aliases: ['color', 'setcolors', 'setclr', 'setrgb', 'rgb'],
    code: `
    $onlyPerms[manageserver;❌ You require these permissions - **Manage Server**]
    $argsCheck[>1;❌ \`USAGE:\` *$getServerVar[prefix]setcolor color* **|** \`EXAMPLE:\` *$getServerVar[prefix]setcolor YELLOW*]

    $title[<a:yes_animated:880379741335588895>Setted color | <:mod3:880014048412975144>$username]
    $description[\`Color setted to the\` __**$message**__ *|* \`COOL COLOR!\`]
    $deletecommand
    $setServerVar[color;$message]

    `
}