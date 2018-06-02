const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('EOS username:');
rl.prompt();
rl.on('line', function(line) {
    if (!!line.match(/^[a-z1-5.]*$/)) rl.close();
    console.log("Invalid Username");
    rl.prompt();
}).on('close',function(){
    console.log('Username can be used');
    process.exit(0);
});