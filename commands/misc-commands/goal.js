module.exports = {
    name: 'goal',
    code: `
$suppressErrors
$if[$getServerVar[goal]==0]
$title[Goal Deactivated]
$description[Goal is deactivated in this server! Tell an admin to turn them on with \`setgoal\`]
$color[$getServerVar[color]]

$else
$description[**Goal** $membersCount/$getServerVar[goal]
**Not achieved yet!**

$sub[$getServerVar[goal];$membersCount] members are needed more to complete the goal]
$onlyIf[$membersCount<$getServerVar[goal];Goal already achieved. Set a new goal]
$color[$getServerVar[color]]
$addButton[no;$getServerInvite;Server Invite;link;no;]
$addTimestamp
$footer[$serverName[$guildID]]
$endif
    `
}