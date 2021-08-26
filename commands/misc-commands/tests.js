module.exports = ({
name: "pages",
code: `$djsEval[
    const simplydjs = require(\'simply-djs\')

    // messageCreate event
    let embed = // embed
    let emb2 = // embed
    
    simplydjs.dropdownPages\(message, \{
      type: 1, // default: 1
      embed: embed,
      placeHolder: \'Dropdown Pages\',
      rows: [], // custom row to send the message with more buttons
      data:[
        \{
          label: \'Label\',
          desc: \'description\',
          emoji: \'emoji id\',
          embed: emb2, // embed sent when clicked
          \}, 
      // etc..
      \]
      \}\)

]`
})