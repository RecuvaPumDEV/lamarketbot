module.exports = {
    name: "setmessages",
    aliases: ["setm", "sm", "smessages"],
    code: `$title[Messages set successfully!]
    $description[Successfully set <@$findMember[$message]>'s messages amount to **$numberSeparator[$noMentionMessage]**!]
    $color[$getServerVar[color]]
    $footer[Guild ID: $guildID]
    $setUserVar[messages;$noMentionMessage;$findMember[$message]]
   $onlyperms[admin]
   
    `
   };