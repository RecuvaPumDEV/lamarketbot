module.exports = {
    name: "serverinfo",
    aliases: ["si"],
    code: 
    `
    $title[<:s:880510773397422110><:e:880510773045108777><:r:880510773271617566><:v:880510773246439464><:e:880510773045108777><:r:880510773271617566>  <:i:880510773229658132><:n:880510773233856623><:f:880510773309345842><:o:880510773334507622>]
    $color[$getServerVar[color]]
    $addField[<a:right_rgb:880512593599529001> Created At; \`$formatDate[$creationDate[$guildID];LLLL]\`]
    $addField[<a:right_rgb:880512593599529001> Partner; \`$getServerVar[partnersv]\`]
    $addField[<a:right_rgb:880512593599529001> Premium; \`$getServerVar[premiumsv]\`]
    $addField[Security <a:left_rgb:880382390307016766>; \`$serverVerificationLevel\`;yes]
    $addField[<a:right_rgb:880512593599529001> Total Members; \`$membersCount\`;yes]
    $addField[<a:right_rgb:880512593599529001> ID; \`$serverIDs[$guildID]\`]
    $addField[Region <a:left_rgb:880382390307016766>; \`$serverRegion\`;yes]
    $addField[<a:right_rgb:880512593599529001> Name; \`$serverName[$guildID]\`;yes]
    $thumbnail[$authorAvatar[$guildID]]
    `
  }