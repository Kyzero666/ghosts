
const Discord = require('discord.js');
const ghosts = new Discord.Client();
//const weather = require('weather-js');
const prefix = '-';
let cooldown = new Set();
let cdsec = 5;

ghosts.on('ready', function() {
    console.log('ghosts started.');
});

ghosts.on('message', function(message) {
  if(message.author.equals(ghosts.user)) return;

      if (!message.content.startsWith(prefix)) return;
      if(cooldown.has(message.author.id)){
        message.delete();
        return message.reply('You have to wait 5 sec between commands.')
      }
      if(!message.member.hasPermission('ADMINISTRATOR')){
          cooldown.add(message.member.id);
       }
        setTimeout(() => {
          cooldown.delete(message.author.id)
        }, cdsec * 1000)

      var caseargs = message.content.substring(prefix.length).split(' ');
      var decisions = [
              'Yes',
              'No',
              'Maybe',
              'No Comment'
      ];

          var rps = [
            ':v:',
            ':hand_splayed:',
            ':fist:'
          ];

      switch (caseargs[0].toUpperCase()) {
        case 'WEBSITE':
            message.channel.send('coming soon (i guess)').then(message => {message.delete(60000)});
            break;
        case 'COOKIES':
            message.channel.send(':cookie::cookie::cookie::cookie::cookie::cookie:').then(message => {message.delete(60000)});
            break;
        case 'RANK':
            message.channel.send(['','```md','1. General','2. Colonel','3. Major','4. Captain','5. Sergeant','6. Corporal','7. Specialist','8. Private','```']).then(message => {message.delete(60000)});
            break;
        case 'RANKS':
            message.channel.send(['','```md','1. General','2. Colonel','3. Major','4. Captain','5. Sergeant','6. Corporal','7. Specialist','8. Private','```']).then(message => {message.delete(60000)});
            break;
       // case 'WEATHER':
        //    message.channel.send(`Requesting weather from the satellite..`).then(function(w) {
         //     w.delete()
          //  })
          //  break;
        case 'SAYZX':
            message.channel.send(`Copy that`).then(function(s) {
              s.delete()
            })
            break;
        case 'PING':
        message.channel.send(`Requesting ms speed from the HQ..`).then(function(m) {
          m.edit(`Success! ${m.createdTimestamp - message.createdTimestamp}ms`).then(function(m) {
          m.delete(10000);
              })
            })
            break;
        case 'GHOSTS':
            if (caseargs[2]) message.channel.send(decisions[Math.floor(Math.random() * decisions.length)]);
            else message.channel.send('Sorry, what was that again?');
            break;
        case 'GHOST':
            if (caseargs[2]) message.channel.send(decisions[Math.floor(Math.random() * decisions.length)]);
            else message.channel.send('Sorry, what was that again?');
            break;
        case 'HELP':
            message.channel.send(['','-website','-rank','-cookies','-ghost (question)','-roll','-rps<Input :fist: :raised_hand: :v:>','-help']).then(message => {message.delete(60000)});
            break;
        case 'ROLL':
        message.channel.send(`Ghosts is throwing and rolling the dice..`).then(function(di) {
          di.delete()
        })
            break;
        case 'TESTING':
            message.channel.send('DELAYING FOR 3 SECONDS');
            sleep.sleep(2);
            break;
        case "RPS✌":
          if (caseargs[0]) message.reply(rps[Math.floor(Math.random() * rps.length)]);
          else message.reply('Input :fist: :raised_hand: :v: with no spaces example: -rps:v:');
            break;
        case "RPS✋":
          if (caseargs[0]) message.reply(rps[Math.floor(Math.random() * rps.length)]);
          else message.reply('Input :fist: :raised_hand: :v: with no spaces example: -rps:v:');
            break;
        case 'RPS✊':
          if (caseargs[0]) message.reply(rps[Math.floor(Math.random() * rps.length)]);
          else message.reply('Input :fist: :raised_hand: :v: with no spaces example: -rps:v:');
            break;
        default:
            message.channel.send('Invalid commands, Private').then(message => {message.delete(10000)});
            break;
          }
  });


  ghosts.on('message', function(message) {
    if(message.author.ghosts) return;


    var msg = message.content.split(' ')[0].toUpperCase()
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(' ');
    let args = message.content.split(' ').slice(1);
    let suffix = args.join(' ')
    var rolldicee = [
      'You roll 1!',
      'You roll 1!',
      'You roll 1!',
      'You roll 1!',
      'You roll 1!',
      'You roll 1!',
      'You roll 2!',
      'You roll 2!',
      'You roll 2!',
      'You roll 2!',
      'You roll 2!',
      'You roll 3!',
      'You roll 3!',
      'You roll 3!',
      'You roll 3!',
      'You roll 4!',
      'You roll 4!',
      'You roll 4!',
      'You roll 5!',
      'You roll 5!',
      'You roll 6!'
    ];

    if(msg === "-SAYZX") {
       message.delete(0);
      if(suffix) {
        message.channel.send(suffix)
      } else {
        message.channel.send('I got nothing to say')
      }
    }

    if(msg === "-ROLL") {
      message.delete(120000);
      if(message.reply(rolldicee[Math.floor(Math.random() * rolldicee.length)]).then(message => {message.delete(120000)})); {
      }
    }

    //if (msg.startsWith(prefix + 'WEATHER')) {


    //    weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
    //        if (err) message.channel.send(err);

    //        if (result === undefined || result.length === 0) {
    //            message.channel.send('**Please enter a valid location.**')
    //            return;
    //        }

            // Variables
   //         var current = result[0].current;
    //        var location = result[0].location;


    //        const embed = new Discord.RichEmbed()
     //           .setDescription(`**${current.skytext}**`)
      //          .setAuthor(`Weather for ${current.observationpoint}`)
       //         .setThumbnail(current.imageUrl)
        //        .setColor(0x00AE86)
         //       .addField('Timezone',`UTC${location.timezone}`, true)
          //      .addField('Degree Type',location.degreetype, true)
           //     .addField('Temperature',`${current.temperature} Degrees`, true)
            //    .addField('Feels Like', `${current.feelslike} Degrees`, true)
             //   .addField('Winds',current.winddisplay, true)
              //  .addField('Humidity', `${current.humidity}%`, true)


          //      message.channel.send({embed});
      //  });
   // }

});

ghosts.login(process.env.ghosts_TOKEN);
