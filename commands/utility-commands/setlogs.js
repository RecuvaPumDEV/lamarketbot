module.exports = {
    name: 'setlogs',
    aliases: ['setlog', 'log', 'setlogchannel', 'setlogschannel', 'logs'],
    code: `
    $onlyPerms[manageserver;{description:**You are missing \`MANAGE_SERVER\` perm!**}
    $title[<a:yes_animated:880379741335588895> Log channel]
    $description[$username setted a log channel to <#$mentionedChannels[1]>]
    $setServerVar[logsch;$mentionedChannels[1]]
    $deletecommand
    $argsCheck[>1;<a:no_animated:880379742551945217> \`usage: .setlogs #channel !\`]
    $color[$getServerVar[color]]
    `
}