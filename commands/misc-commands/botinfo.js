module.exports = {
    name: "botinfo",
    aliases: ["info"],
    code: 
    `
    $thumbnail[$replaceText[$userAvatar[$findUser[689558610665013295]];size=2048;size=1024]]
    $color[$getServerVar[color]]
    $addField[Uptime;\`\`\`$uptime\`\`\`;no]
    $addField[Memory;$ram MB;yes]
    $addField[Cpu;$cpu%;yes]
    $addField[Channels;$channelCount;yes]
    $addField[Users;$membersCount;yes]
    $addField[Servers;$serverCount;yes]
    $addField[Package Version;$packageVersion]
    $addField[Created At;$formatDate[$creationDate[$findUser[689558610665013295]];ddd, MMM Do YYYY LT]
    $addField[Name;LaMarket]
    `
  }