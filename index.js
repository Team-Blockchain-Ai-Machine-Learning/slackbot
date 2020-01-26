const SlackBot = require('slackbots');
const axios = require('axios');

var bot = new SlackBot({
    token: 'xoxb-910904309859-912193568545-VXemUhKmtp32IzmMXCNqP9bS', // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'My Bot'
});

// // Start Handler
// bot.on('start', function() {
// 	var params = {
//         icon_emoji: ':cat:'
//     };

//     bot.postMessageToChannel('general', 'meow!', params);
// });