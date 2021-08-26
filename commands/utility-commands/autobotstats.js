module.exports = ({
    code: ` 
    $editMessage[880063119450308638;{description:
    \`\`\`Bot Status-
    ▪︎ Ping: $ping ms
    ▪︎ RAM Usage: $ram MB
    ▪︎ Memory Usage: $djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB
    
    CPU Info-
    ▪︎ CPU Usage: $cpu%
    ▪︎ CPU Model: $djsEval[require ('os').cpus()[0].model;yes]
    ▪︎ CPU Platform: $djsEval[require ('os').platform();yes]
    
    Package Info-
    ▪︎ Aoi.js: v1.0.6
    ▪︎ Node.js: $nodeVersion\`\`\`
    }
    {footer:Last updated at}{timestamp}{color:#5865F2}{title:LaMarket BOT Status};880062782828060722]
    `,
    channel: "880062782828060722",
    executeOnStartup: true,
    every: 10000,
    type: 'loopCommand'
    })