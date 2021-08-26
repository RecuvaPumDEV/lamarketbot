module.exports = {
    name: 'setgoal',
    code: `$onlyPerms[manageserver;]
    $suppressErrors[Wrong Args , Try \`setgoal (goal)\`]
    $onlyIf[$membersCount<=$message[1];Goal can't be set less than the server members.]
    $setServerVar[goal;$message[1]]
    $description[Goal has been set to \`$message[1]\` Members.]
    $color[$getServerVar[color]]
    $addTimestamp
`
}