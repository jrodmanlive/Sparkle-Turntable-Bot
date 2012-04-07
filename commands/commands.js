//Displays the list of commands found in ./commands/

exports.name = 'commands';
exports.hidden = false;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    var response = 'Commands: ';
    for (i in commands) {
        if (commands[i].enabled && !(commands[i].hidden)) {
            response += commands[i].name + ', ';
        }
    }
    output({text: response.substring(0, response.length - 2), destination: data.source, userid: data.userid});
}