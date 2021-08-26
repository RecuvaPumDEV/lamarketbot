module.exports = ({
    name: "userinfo",
    aliases: ['user','infouser'],
    code: `$title[<:u:880510772868943953><:s:880510773397422110><:e:880510773045108777><:r:880510773271617566>   <:i:880510773229658132><:n:880510773233856623><:f:880510773309345842><:o:880510773334507622>]
    $thumbnail[$userAvatar[$findUser[$message[1];yes]]]
    $description[<a:right_rgb:880512593599529001> **ID:**
  \`$findUser[$message[1];yes]\`
  <a:right_rgb:880512593599529001> **Joined Server:**
  \`$memberJoinedDate[$findUser[$message[1];yes];date]\`
  <a:right_rgb:880512593599529001> **Joined Discord:**
  \`$creationDate[$findUser[$message[1];yes]]\`
  <a:right_rgb:880512593599529001> **Roles** ***[\`$userRoleCount[$findUser[$message[1];yes]]\`]***
  $if[$userRoleCount[$findUser[$message[1];yes]]!=0]
  $userRoles[$findUser[$message[1];yes];mentions; ]
  $else
  None
  $endif]
  $color[$getServerVar[color]]`
  });