const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════luttappy😈═════╗*\n           \n*✨️═luttappy═✨️*\n\n*owner misirile-rajathi - http://Wa.me/+918078391406*\n             \n*╚══════❤❤❤═════╝*\n\n```▷Creator: misiril-rajathi```"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n   \n```luttapy bgm bot```    \n*✨️═luttapy Owner misirile-rajathi═✨️*\n\n*💘https://github.com/misirile-rajathi/luttapy*\n     \n*💓pikachu═Owner ameer suhail═*\n\n*⚜https://github.com/ameer-kallumthodi/pikachu*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😈luttapy😈═════╗*\n           \n*✨️═luttapy═✨️*\n\n*owner misirile-rajathi - http://Wa.me/+918078391406*\n*            \n*╚═════❤❤❤═════╝*\n\n*▷Creator: misirile-rajathi*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n   \n```luttapy bgm bot```    \n*💥═luttapy owner misirile-rajathi═💥*\n\n*💘https://github.com/misirile-rajathi/luttapy*\n     \n💓Pikachu═Owner ameer suhail═*\n\n*⚜https://github.com/ameer-kallumthodi/pikachu*    \n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
