module.exports = {
    name: "messagelb",
    code: `
   $title[Messages Leaderboard]
   $thumbnail[$serverIcon]
   $author[$serverName]
   $color[$getServerVar[color]]
   $description[$userLeaderboard[messages;asc;{top}. <@{id}> - \`{value}\` messages]]
   $footer[Guild ID: $guildID]
   `
   };