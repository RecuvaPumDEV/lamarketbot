module.exports = ({
    code: `
    $editMessage[880142427556565002;
    {title: Uptime and stuff!}
    {description: Here, my uptime is#COLON# \`$uptime\`.
    
    **Other stuff**
   
    **RAM#COLON#** \`$ram\` Mb.
    **CPU#COLON#** \`$cpu\`%}
    {footer: Update every 5 seconds!}
    {timestamp}
    {color:GREEN}
    ]
    `,
    channel: "880062782828060722",
    executeOnStartup: true,
    every: 5000,
    type: 'loopCommand'
   })