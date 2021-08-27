
const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot({
  token: 'Njg5NTU4NjEwNjY1MDEzMjk1.XnEngA.u7no4271fntqI8eQBVWXeb2Vkfw',
  prefix: [`$getServerVar[prefix]`, '<@$clientID>', '<@!$clientID>'], 
  mobile: false 
})


bot.onMessage({
  guildOnly: false,
  respondToBots: false,
})


bot.loadCommands('./commands')


bot.status({
  status: 'online',  
  type: 'LISTENING', // options: WATCHING, PLAYING, LISTENING, COMPETING, STREAMING
  text: `RecuvaPumDEV#9999 for news updates`
})


//ticket system
bot.command({
  name: "setup",
  code: `
  $awaitMessages[$authorID;30s;everything;tsp2;Command has been cancelled]
  $sendMessage[**Which Category Do you want to make For Ticket System.
  Provide the Category ID. 
  This Command will be cancelled after** \`30 seconds\`.;no]
  $onlyPerms[admin;Only Users with \`ADMIN\` perms can use this{delete:10s}]
  $suppressErrors[]`
 })
  
 bot.awaitedCommand({
  name: "tsp2",
  code: `
 **✅ Setup ticket is complete**
  $setServerVar[ticketchannel;$message]
  $onlyIf[$channelExists[$message]==true;Provided Category Doesn't Exist{delete:10s}]
  $onlyIf[$isNumber[$message]==true;Please provide Category ID{delete:10s}]`
 })
  
 bot.command({
  name: "ticket",
  code: `
 $newTicket[ticket-$username[$authorID];{title:Ticket opened!}{description:Hello, <@$authorID>. Here is your ticket!:tickets: Please give the information about your problem or feedback. 
 Thanks in advance for being patient}{footer:Use $getServerVar[prefix]close to close your ticket};$getServerVar[ticketchannel];no;<@$authorID>, I failed to create your ticket! Try again]
 $sendMessage[Ticket Successfully opened! Hello, <@$authorID>. Go to **$toLowercase[#$username$discriminator]** to describe your issue!;Something went wrong]
 $deleteIn[5s]
 $deletecommand`
 })
  
 bot.command({
  name: "close",
  code: `
 $closeTicket[This is not a ticket]
 $onlyIf[$checkContains[$channelName;ticket]==true;This command can only be used in tickets{delete:10s}]
 $suppressErrors
 $deletecommand`
 })

 //eventy

 bot.deletedCommand({
  channel: "$getServerVar[logsch]",
  code: `
  
  $title[<a:no_animated:880379742551945217> Delete Message | <:mod3:880014048412975144> $username]
  $description[Deleted message **$message** in the <#$channelUsed>]
  $color[RED]
  $suppressErrors[]`

})
bot.onMessageDelete()



bot.command({
  name: "help",
  code: `$reactionCollector[$splitText[1];everyone;1m;👻,😂,🧠,🔧;awaitReaction1,awaitReaction2,awaitReaction3,awaitReaction4;yes]
  $textSplit[$sendMessage[{title:<:h:880535777963049041><:e:880510773045108777><:l:880510773099659285><:p:880535889300832296>} {description:<a:right_rgb:880512593599529001> **__Command Pages__** <a:left_rgb:880382390307016766>

    <a:right_rgb:880512593599529001> ***Commands***: **[\`32\`]**
    <a:right_rgb:880512593599529001> ***Prefix***: **[\`$getServerVar[prefix]\`]**

  😂 __***-***__ \`Fun\`
  🧠 __***-***__ \`Moderation\`
  🔧 __***-***__ \`Developer\`} {color:RANDOM} {thumbnail:https://cdn.discordapp.com/attachments/880065172910268466/880779705777795142/lamarket.png};yes]; ]
  `
})

  bot.awaitedCommand({
    name: "awaitReaction1",
    code: `$editMessage[$message[1];{title:<:h:880535777963049041><:e:880510773045108777><:l:880510773099659285><:p:880535889300832296>} {description:<a:right_rgb:880512593599529001> **__Command Pages__** <a:left_rgb:880382390307016766>

      <a:right_rgb:880512593599529001> ***Commands***: **[\`32\`]**
      <a:right_rgb:880512593599529001> ***Prefix***: **[\`$getServerVar[prefix]\`]**

      😂 __***-***__ \`Fun\`
      🧠 __***-***__ \`Moderation\`
      🔧 __***-***__ \`Developer\`} {color:RANDOM} {thumbnail:https://cdn.discordapp.com/attachments/880065172910268466/880779705777795142/lamarket.png}
   ]
   `})

   bot.awaitedCommand({
    name: "awaitReaction2",
    code: `
    $editMessage[$message[1];{title:<:f:880510773309345842><:u:880510772868943953><:n_:880510773233856623>} {color:RANDOM} {footer:👻 - Return to home page} {thumbnail:https://cdn.discordapp.com/attachments/880065172910268466/880779705777795142/lamarket.png}
    {description:<a:right_rgb:880512593599529001> ***Commands***: **[\`9\`]**
    <a:right_rgb:880512593599529001> ***Prefix***: **[\`$getServerVar[prefix]\`]**
  
  *Use Commands*

  **[**\`$getServerVar[prefix]\`**]** \`botinfo\`
  **[**\`$getServerVar[prefix]\`**]** \`userinfo\`
  **[**\`$getServerVar[prefix]\`**]** \`ping\`
  **[**\`$getServerVar[prefix]\`**]** \`goal\`
  **[**\`$getServerVar[prefix]\`**]** \`messagelb\`
  **[**\`$getServerVar[prefix]\`**]** \`messages\`
}
   ]
    `
   })

   bot.awaitedCommand({
    name: "awaitReaction3",
    code: `
    $editMessage[$message[1];{footer:👻 - Return to home page}
   {title:<:m:880510773351301160><:o:880510773334507622><:d:880780506675957780><:e:880510773045108777><:r:880510773271617566><:a:880510773317734400><:t:880510773238071317><:i:880510773229658132><:o:880510773334507622><:n:880510773233856623>} {color:RANDOM} {thumbnail:https://cdn.discordapp.com/attachments/880065172910268466/880779705777795142/lamarket.png}
   {description:<a:right_rgb:880512593599529001> ***Commands***: **[\`8\`]**
   <a:right_rgb:880512593599529001> ***Prefix***: **[\`$getServerVar[prefix]\`]**
 
 *Use Commands*

 **[**\`$getServerVar[prefix]\`**]** \`addmessage\`
 **[**\`$getServerVar[prefix]\`**]** \`setprefix\`
 **[**\`$getServerVar[prefix]\`**]** \`setcolor\`
 **[**\`$getServerVar[prefix]\`**]** \`setgoal\`
 **[**\`$getServerVar[prefix]\`**]** \`setmessage\`
 **[**\`$getServerVar[prefix]\`**]** \`setlogs\`

 *Auto Commands*

 ***\`Uptime is auto\`***
 ***\`BOT stats is auto\`***
}
   ]
    `
   })

   bot.awaitedCommand({
    name: "awaitReaction4",
    code: `
    $editMessage[$message[1];{footer:👻 - Return to home page}
   {title:<:d:880780506675957780><:e:880510773045108777><:v:880510773246439464><:e:880510773045108777><:l:880510773099659285><:o:880510773334507622><:p:880535889300832296><:e:880510773045108777><:r_:880510773271617566>} {color:RANDOM} {thumbnail:https://cdn.discordapp.com/attachments/880065172910268466/880779705777795142/lamarket.png}
   {description:<a:right_rgb:880512593599529001> ***Commands***: **[\`6\`]**
   <a:right_rgb:880512593599529001> ***Prefix***: **[\`$getServerVar[prefix]\`]**
 
 *Use Commands*

 **[**\`$getServerVar[prefix]\`**]** \`eval\`
 **[**\`$getServerVar[prefix]\`**]** \`restartbot\`
 **[**\`$getServerVar[prefix]\`**]** \`offbot\`
 **[**\`$getServerVar[prefix]\`**]** \`reallservers\`
 **[**\`$getServerVar[prefix]\`**]** \`changestatus\`
}
   ]
    `
   })

bot.variables({
  prefix: '.',
  logsch: '',
  goal: '0',
  env: '',
  tickets: '0',
  ticket: '',
  ticketchannel: '',
  ticketcategory: '',
  ticketsystem: 'no',
  messages: '0',
  userinf: '0',
  no: '❌',
  premiumsv: '❌ | Not buyed',
  partnersv: '❌ | Not partner',
  color: 'BLACK',
})
