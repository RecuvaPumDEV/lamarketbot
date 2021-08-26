
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
