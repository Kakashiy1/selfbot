/*
INI BASE HEXA JADI TOLONG JANGAN ATAS NAMAKAN SC KU 
SC INI SAYA RECODE SNDIRI 
FAJAR RIFANDI 
GADA KATA KATA ENC KALO MAU UPLOD 
KASI WM GW 
JAN PELIT PELIT AMA ILMU!!!!
*/
                          const {
		                  WAConnection : _WAConnection,
		                  MessageType,
		                  Presence,
		                  MessageOptions,
		                  Mimetype,
		                  WALocationMessage,
		                  WA_MESSAGE_STUB_TYPES,
		                  WA_DEFAULT_EPHEMERAL,
		                  ReconnectMode,
		                  ProxyAgent,
		                  GroupSettingChange,
		                  waChatKey,
		                  mentionedJid,
		                  processTime,
	                      } = require("@adiwajshing/baileys")
	
	                      //======API=====\\
	                      const hx = require('hxz-api') //HEXAGONZ
	                     //===============\\
	                     const simple =require('./lib/simple.js')
                         const WAConnection = simple.WAConnection(_WAConnection)         
	                     const qrcode = require("qrcode-terminal")
                         const moment = require("moment-timezone")
                         const speed = require('performance-now')
                         const request = require('request');
                         const { spawn, exec, execSync } = require("child_process")
                         const fs = require("fs")
                         const axios = require("axios")
                         const ffmpeg = require('fluent-ffmpeg')
                         const { EmojiAPI } = require("emoji-api");
                         const ig = require('insta-fetcher')
                         const emoji = new EmojiAPI()
                         const fetch = require('node-fetch');
                         const phoneNum = require('awesome-phonenumber')
                         const gis = require('g-i-s');
                         const got = require("got");
                         const imageToBase64 = require('image-to-base64');
                         const ID3Writer = require('browser-id3-writer');		
                         const brainly = require('brainly-scraper')
                         const yts = require( 'yt-search')
                         const ms = require('parse-ms')
                         const toMs = require('ms')
                         const { error } = require("qrcode-terminal")
                         //=========LOAD FILE======\\
                         const { getBuffer, 
                         h2k, 
                         generateMessageID, 
                         getGroupAdmins, 
                         getRandom, 
                         banner, 
                         start,
                         info, 
                         success, 
                         close } = require('./lib/functions')
                         const { color, bgcolor } = require('./lib/color')
                         const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
                         const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
                         const { webp2mp4File} = require('./lib/webp2mp4')
                         const { igDownloader, TiktokDownloader } = require('./lib/load.js')
                         const FakeFoto = fs.readFileSync("./stik/thumb.jpeg") 
                         
                         //============WAKTU=========\\
                         const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
                         const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
                         const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
                         const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
                         
                         //===========SETING ALL=======\\
                         SelfAtauPublic = true //true self - public false.
                         NomerOwner = '6288293524506' //Ganti Pake Nomer Lu.
                         FakeNya = 'King_Off_Xzn' //Ganti Sesuai Keininan Nama Fake Lu.
                         NamaLu = 'Fajar Rifandi'
                         ownerNumbers = [`${NomerOwner}@s.whatsapp.net`]
                         AntiTelpon = false
                         AntiHapusPesan = false
                         
                         //=======LOAD FILE JSON======\\
                         const scommand = JSON.parse(fs.readFileSync('./database/Bot/scommand.json'))
                         const antilinkwa = JSON.parse(fs.readFileSync('./database/Bot/antilinkwa.json'))
                         
                         //=======FUCTION STICKER CMD====\\
                         const addCmd = (id, command) => {
                         const obj = { id: id, chats: command }
                         scommand.push(obj)
                         fs.writeFileSync('./database/Bot/scommand.json', JSON.stringify(scommand))
                         }

                         const getCommandPosition = (id) => {
                         let position = null
                         Object.keys(scommand).forEach((i) => {
                         if (scommand[i].id === id) {
                         position = i
                         }
                        })
                        if (position !== null) {
                        return position
                        }
                        }

                       const getCmd = (id) => {
                       let position = null
                       Object.keys(scommand).forEach((i) => {
                       if (scommand[i].id === id) {
                       position = i
                      }
                      })
                      if (position !== null) {
                      return scommand[position].chats
                    }
                    }


                     const checkSCommand = (id) => {
                     let status = false
                     Object.keys(scommand).forEach((i) => {
                     if (scommand[i].id === id) {
                     status = true
                     }
                     })
                    return status
                    }
                         
                         
                         //=============LOAD Module=========\\
                         module.exports = hexa = async (hexa, Anjay) => {
	                     try {
                         if (!Anjay.hasNewMessage) return
                         Anjay = Anjay.messages.all()[0]
		                 if (!Anjay.message) return
		                 if (Anjay.key && Anjay.key.remoteJid == 'status@broadcast') return
		                 global.blocked
		                 m = simple.smsg(hexa, Anjay)
                         Anjay.message = (Object.keys(Anjay.message)[0] === 'ephemeralMessage') ? Anjay.message.ephemeralMessage.message : Anjay.message
                     	const content = JSON.stringify(Anjay.message)
		                 const from = Anjay.key.remoteJid
		                 const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, gif, image, video, sticker, document, audio, product, quotedMsg } = MessageType
                         const type = Object.keys(Anjay.message)[0]        
                         const cmd = (type === 'conversation' && Anjay.message.conversation) ? Anjay.message.conversation : (type == 'imageMessage') && Anjay.message.imageMessage.caption ? Anjay.message.imageMessage.caption : (type == 'videoMessage') && Anjay.message.videoMessage.caption ? Anjay.message.videoMessage.caption : (type == 'extendedTextMessage') && Anjay.message.extendedTextMessage.text ? Anjay.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                         const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'
                         budy = (type === 'conversation') ? Anjay.message.conversation : (type === 'extendedTextMessage') ? Anjay.message.extendedTextMessage.text : ''
                         body = Anjay.message.conversation || Anjay.message[type].caption || Anjay.message[type].text || (type == 'listResponseMessage' ? Anjay.message[type].singleSelectReply.selectedRowId : '') || (type == 'buttonsResponseMessage' ? Anjay.message[type].selectedButtonId : '') || (type == 'stickerMessage' && getCmd(Anjay.message[type].fileSha256.toString('base64')) !== null && getCmd(Anjay.message[type].fileSha256.toString('base64')) !== undefined ? getCmd(Anjay.message[type].fileSha256.toString('base64')) : '') || ''
                         chats = (type === 'conversation') ? Anjay.message.conversation : (type === 'extendedTextMessage') ? Anjay.message.extendedTextMessage.text : ''     
                         const command = body.startsWith(prefix) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
                         const buttonCmd = type == 'listResponseMessage' ? Anjay.message.listResponseMessage.singleSelectReply.selectedRowId : '' || ''
                         const butcmd = (type === 'buttonsResponseMessage') ? Anjay.message.buttonsResponseMessage.selectedButtonId : ''     
                         const args = body.trim().split(/ +/).slice(1)
                         const isCmdd = body.startsWith(prefix)
                         const isCmd = isCmdd || buttonCmd || butcmd
                         const q = args.join(" ")
                         const arg = chats.slice(command.length + 2, chats.length)
                         const King_Off_Xzn = command || butcmd || buttonCmd
                         const botNumber = hexa.user.jid
		                 const botNumberss = hexa.user.jid + '@c.us'
		                 const isGroup = from.endsWith('@g.us')
		                 let sender = isGroup ? Anjay.participant : Anjay.key.remoteJid
		                 const totalchat = await hexa.chats.all()
		                 const isOwner = ownerNumbers.includes(sender)
		                 const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
		                 const groupName = isGroup ? groupMetadata.subject : ''
		                 const groupId = isGroup ? groupMetadata.jid : ''
		                 const groupMembers = isGroup ? groupMetadata.participants : ''
		                 const groupDesc = isGroup ? groupMetadata.desc : ''
		                 const groupOwner = isGroup ? groupMetadata.owner : ''
		                 const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		                 const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		                 const isGroupAdmins = groupAdmins.includes(sender) || false
                         const conts = Anjay.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
                         const pushname = Anjay.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'
                         const isAntiLink = isGroup ? antilinkwa.includes(from) : false
	
                         
	//==========BUAT REPLY=======\\
	mess = {
			wait: '*Permintaan Anda Sedang Kami Proses Mohon Harap Bersabar!*',
			success: 'Succes!',
			wrongFormat: 'Command Anda Salah, Lihat Lagi di Menu',
			error: {
				stick: 'Sticker Nya Mana Kak?!',
				Iv: 'LinkNya Eror'
			},
			only: {
				group: 'Fitur Tersebut Hanya Di Gunakan Di Group',
				admin: 'Fitur Ini Khusus Buat Admin!',
			}
		}
		
		
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            hexa.sendMessage(from, teks, text, {quoted:Anjay})
        }

        const sendMess = (hehe, teks) => {
            hexa.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, teks.trim(), extendedText, { quoted: Anjay, contextInfo: { "mentionedJid": memberr } })
        }

const fakethumb = (teks, yes) => {
            hexa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:Anjay,caption:yes})
        }
        
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:Anjay})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    hexa.sendMessage(to, media, type, { quoted: Anjay, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            
              const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
              const buttonMessage = { contentText: text1, footerText: desc1, buttons: but, headerType: 1 }
              hexa.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
              }
              
              const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => { kma = gam1 
              mhan = await hexa.prepareMessage(from, kma, image)
              const buttonMessages = { imageMessage: mhan.message.imageMessage, contentText: text1, footerText: desc1, buttons: but, headerType: 4 }
              hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
              }
              
              const sendButVideo =  async(id, text1, desc1, vid1, but = [], options = {}) => { kma = vid1
              mhan = await hexa.prepareMessage(from, kma, video)
              const buttonMessages = { videoMessage: mhan.message.videoMessage, contentText: text1, footerText: desc1, buttons: but, headerType: 5 }
              hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
              }
              
              const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => { kma = gam1
              mhan = await hexa.prepareMessage(from, kma, location)
              const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
              hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
              }      
              /*
            const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
             }
            */
              
              const sendButon = async (from, context, fotext, but, Anjay) => { buttonMessages = { contentText: context, footerText: fotext, buttons: but, headerType: 1 }
              hexa.sendMessage(from, buttonMessages, buttonsMessage, { quoted: Anjay })
              }         
              
              const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
              media = file1
              kma = doc1
              mhan = await hexa.prepareMessage(from, media, document, kma)
              const buttonMessages = { documentMessage: mhan.message.documentMessage, contentText: text1, footerText: desc1, buttons: but, headerType: "DOCUMENT" }
              hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
              }      
              
             const sendGroupV4Invite = async(jid, participant, inviteCode, inviteExpiration, groupName = 'unknown subject', caption = 'Invitation to join my WhatsApp group', options = {}) => {
             let msg = WAMessageProto.Message.fromObject({ groupInviteMessage: WAMessageProto.GroupInviteMessage.fromObject({ inviteCode, inviteExpiration: parseInt(inviteExpiration) || +new Date(new Date + (3 * 86400000)), groupJid: jid, groupName: groupName ? groupName : hexa.getName(jid), caption })
             })
             let message = await hexa.prepareMessageFromContent(participant, msg, options)
             await hexa.relayWAMessage(message)
             return message
            }  
            
            if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!Anjay.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Karna Anda Admin Group Bot Tidak Mengeluarkan Anda!')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Anda Telah Melanggar Peraturan Group Ini!. Good Bye!')
			    hexa.groupRemove(from, [kic]).catch((e) => { reply('Bot Bukan Admin') })
			}
			}
            
       colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		  
		  //console
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
          
           
          //FUCTION ANYONYIMUS CHAT
        if (!isCmd && from.endsWith('@s.whatsapp.net')) {
        hexa.anonymous = hexa.anonymous ? hexa.anonymous: {}
        let room = Object.values(hexa.anonymous).find(room => [room.a, room.b].includes(sender) && room.state === 'CHATTING')
        if (room) {
        if (/^.*(next|leave|start)/.test(body)) return
        if ([`next`, `leave`, `start`, 'Cari Partner', 'Keluar', 'Next'].includes(body)) return
        let other = [room.a, room.b].find(user => user !== sender)
        if (type === "conversation") {
        hexa.sendMessage(other, Anjay.message.conversation, text);
        } else {
        hexa.sendMessageFromContent(other, Anjay.message)
    }
  }
}

	      if (!Anjay.key.fromMe && SelfAtauPublic === true) return
         switch (King_Off_Xzn) {
         	
    case 'menu':
    case 'allmenu':
    case 'fajar':
    tulul = fs.readFileSync("./stik/thumb.jpeg") 
    teks = `
Hai ${pushname}

• Creator : ${NamaLu}
• Libray : Bailyes
• Version : 3.5.0
• Bahasa : JavaScrip

~_*[DWONLOAD]*_~
${prefix}igstory [Nama Ig Nya]
${prefix}play [Query]
${prefix}ytmp4 [Link]
${prefix}ytmp3 [Link]
${prefix}tiktok [Link]

~_*[SEARCHING]*_~     
${prefix}playstore [Query]
${prefix}brainly [Query]

~_*[FFMPEG]*_~     
${prefix}sticker 
${prefix}attp

~_*[GROUP]*_~     
${prefix}hidetag [Query]
${prefix}listonline
${prefix}listgc
${prefix}linkgc
${prefix}revoke
${prefix}demote
${prefix}promote
${prefix}kick
${prefix}add
${prefix}tagall
${prefix}opengc
${prefix}closegc

~_*[RANDOMIMAGE]*_~     
${prefix}anime
${prefix}wallpaper
${prefix}sao
${prefix}meme
${prefix}hsdxd
${prefix}lovelive
${prefix}darkjokes
${prefix}loli

~_*[CONVERT]*_~     
${prefix}toimg [Reply Sticker Nya]
${prefix}tourl
${prefix}runtime
${prefix}speed

~_*[KATA-KATA]*_~     
${prefix}quotes

~_*[PENYEGAR]*_~     
${prefix}asupan`

tod =
`TQ TO HEXA GONZ\n FAJAR RIFANDI`
but = [
          { buttonId: `rules`, buttonText: { displayText: '🔍 RULES' }, type: 1 }
        ]
        sendButLocation(from, teks, tod, tulul, but)
break
	
case 'rules':
loll = fs.readFileSync("./stik/thumb.jpeg") 
               oyai = `*┌──「 ʀᴜʟᴇs ʙᴏᴛ 」*
*│┌──*
*││°* 1. *ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʙᴏᴛ*
*││° sᴀɴᴋsɪ: ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ*
*││──*
*││°* 2. *ᴊᴀɴɢᴀɴ ᴛᴇʟᴘᴏɴ ʙᴏᴛ*
*││° sᴀɴᴋsɪ: sᴏғᴛ ʙʟᴏᴄᴋ*
*││──*
*││°* 3. *ᴊᴀɴɢᴀɴ ᴍᴇɴɢᴇᴊᴇᴋ ʙᴏᴛ*
*││° sᴀɴᴋsɪ: ᴘᴇʀᴍᴀɴᴇᴛ ʙʟᴏᴄᴋ*
*││──*
*││°* 4. *1x ᴄᴏᴍᴍᴀɴᴅ ᴛᴜɴɢɢᴜ 5 ᴅᴇᴛɪᴋ!!*
*││──*
*││°* 5. *ɢᴀᴋ ᴘᴀᴘᴀ sᴄ ɢᴡ ᴊᴇʟᴇᴋ*
*││° ʏɢ ᴘᴇɴᴛɪɴɢ ʙᴏᴛ ᴊᴀʟᴀɴ😉*
*││° ᴊɪᴋᴀ sᴜᴅᴀʜ ᴅɪ ᴘᴀʜᴀᴍɪ ʀᴜʟᴇs ɴʏᴀ*
*││° sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ↓↓*
*││° !menu ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ!!*
*││──*
*││°* *ᴏᴡɴᴇʀ ʙᴏᴛ↓↓*
*││°* wa.me/${NomerOwner}
*│└──*
*└──「 ${FakeNya} 」*`                  

               tood =
`TQ TO HEXA GONZ\n FAJAR RIFANDI`
butt = [
          { buttonId: `rules`, buttonText: { displayText: '🔍 BACK TO MENU' }, type: 1 }
        ]
        sendButLocation(from, oyai, tood, loll, butt)
break
               
         case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,video,{quoted: Anjay,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,image,{quoted: Anjay,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
            case 'igdl': 
            case 'instagram':
            if (!q) return reply('Link Yang Mana? ')
            if (!q.includes('instagram')) return reply(mess.error.Iv)
            reply(mess.wait)
            anu = await igDownloader(`${q}`)
           .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, Anjay) })
           .catch((err) => { reply(String(err)) })
           break
            case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 10000) return sendMediaURL(from, thumb, `*PLAY MUSIC*
*Title* : ${title}
*Ext* : MP3
*Filesize* : ${filesizeF}
*Link* : ${a.data}

_Untuk durasi lebih dari batas disajikan dalam Anjaytuk link_`)
                        const captions = `*PLAY MUSIC*
*Title* : ${title}
*Ext* : MP3
*Size* : ${filesizeF}
*Link* : ${a.data}

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
            break  
            case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*
*Title* : ${title}
*Ext* : MP3
*Filesize* : ${filesizeF}
*Link* : ${a.data}
_Untuk durasi lebih dari batas disajikan dalam Anjaytuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*
*Title* : ${title}
*Ext* : MP4
*Size* : ${filesizeF}
_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
			case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*
*Title* : ${title}
*Ext* : MP3
*Filesize* : ${filesizeF}
*Link* : ${a.data}
_Untuk durasi lebih dari batas disajikan dalam Anjaytuk link_`)
				const captions = `*YTMP3*
*Title* : ${title}
*Ext* : MP3
*Size* : ${filesizeF}
_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
			break
			      case 'tiktok':
                   case 'tiktokdl':
                   case 'tiktoknowm':
            if (!q) return reply('Linknya?')
            reply(mess.wait)
            res = await TiktokDownloader(`${q}`).catch(e => {
            reply(mess.error.api)
            })
           console.log(res)
           sendMediaURL(from, `${res.result.nowatermark}`)
           break
            case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉~~~~~~~~~~~~~~~~~~~❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}
❉~~~~~~~~~~~~~~~~~~~❉`
            }
            reply(store)
            break
            case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*
*➸ Pertanyaan:* ${Y.pertanyaan}

*➸ Jawaban:* ${Y.jawaban[0].text}
❉──────────────────❉\n`
			}
			hexa.sendMessage(from, teks, text,{quoted:Anjay,detectLinks: false})                        
            })              
			break
            case 'public':
          	if (!Anjay.key.fromMe) return reply('SELF-BOT')
          	if (SelfAtauPublic === false) return
          	SelfAtauPublic = false
          	reply(`「 *PUBLIC-MODE* 」`)
          	break
	         case 'self':
          	if (!Anjay.key.fromMe) return reply('SELF-BOT')
          	if (SelfAtauPublic === true) return
          	uptime = process.uptime()
         	SelfAtauPublic = true
          	reply(`「 *SELF-MODE* 」`)
          	break
        	case 'hidetag':
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await hexa.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: Anjay
			}
			hexa.sendMessage(from, optionshidetag, text)
			break
            case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            hexa.sendMessage(from,media,image,{quoted:Anjay,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
            case 'toimg':
			if (!isQuotedSticker) return reply(mess.error.stick)
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(Anjay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
			case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return reply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return reply ('pastikan link sudah benar!')
            var response = await hexa.acceptInvite(codeInvite)
            reply('SUKSES')
            } catch {
            reply('LINK ERROR!')
            }
            break
            case 'runtime':
            case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            reply(teks)
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			reply(pingnya)
			})
			break  
			case 'tourl':
            if ((isMedia && !Anjay.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(Anjay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Anjay
            owgi = await hexa.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
            case 'listonline': 
               let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
               try {
               let online = [
               ...Object.keys(hexa.chats.get(id).presences),
               hexa.user.jid,
               ];
               hexa.reply(
                m.chat,
                '┌─〔 Daftar Online 〕\n' +
                  online.map((v) => '├ @' + v.replace(/@.+/, '')).join`\n` +
                 '\n└────',
                m,
                {
                contextInfo: { mentionedJid: online },
                }
                );
                } catch (e) {
                m.reply('');
                }
                 break
                 
                 case 'wallpaper':
                 data = fs.readFileSync('./lib/bokunohero.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 wallpaper = await getBuffer(randKey.result)
                 hexa.sendMessage(from, wallpaper, image, {quoted: Anjay, caption: 'NIH'})
				break
				
         case 'sao':
				 data = fs.readFileSync('./lib/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 hexa.sendMessage(from, swordartonline, image, {quoted: Anjay, caption: 'NIH'})
				break
				
                  case 'meme':
				  case 'memeindo':
				 data = fs.readFileSync('./lib/meme.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 memeall = await getBuffer(randKey.result)
                 hexa.sendMessage(from, memeall, image, {quoted: Anjay, caption: '*NIH*'})
				break
				
        case 'hsdxd':
				 data = fs.readFileSync('./lib/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 hexa.sendMessage(from, highschooldxd, image, {quoted: Anjay, caption: '*NIH*'})
				break
				
      case 'lovelive':
				 data = fs.readFileSync('./lib/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 hexa.sendMessage(from, lovelive, image, {quoted: Anjay, caption: '*NIH*'})
				break
	 
	case 'quotes':
				hexa.updatePresence(from, Presence.composing)
            	data = fs.readFileSync('./lib/quotes.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				randQuote = 'Author: *' + randKey.author + '*\n\n*' + randKey.quotes + '*'
				hexa.sendMessage(from, randQuote, text, { quoted: Anjay })
				break
	
	case 'darkjokes':
             data = fs.readFileSync('./lib/darkjokes.js')
             jsonData = JSON.parse(data)
             ranmdex = Math.floor(Math.random() * jsonData.length)
             randKey = jsonData[ranmdex]
             hasil = await getBuffer(randKey.result)
             but = [
             { buttonId: 'darkjokes', buttonText: { displayText: 'NEXT'}, type: 1 }
              ]
             sendButImage(from, `AWOKWOK DARK COK`, `${FakeNya}`, hasil, but)
          break
          
       case 'loli':
            loli = fs.readFileSync('./lib/loli.js')
            lolidata = JSON.parse(loli)
            lolirand = Math.floor(Math.random() * lolidata.length)
            lolikun = lolidata[lolirand]
            hasil = await getBuffer(lolikun)
            but = [
           { buttonId: 'loli', buttonText: { displayText: 'NEXT' }, type: 1 }
            ]
           sendButImage(from, `RANDOM ANIMEX`, `${FakeNya}`, hasil, but)
            break
      
      case'asupan':{
           reply(mess.wait)
           data = fs.readFileSync('./lib/buat.js')
           jsonData = JSON.parse(data)
           randIndex = Math.floor(Math.random() * jsonData.length)
           randKey = jsonData[randIndex]
           p = await getBuffer(randKey.result)
           hexa.sendMessage(from, p, video, { quoted:  Anjay, mimetype: 'video/mp4', caption: 'INI'})
           }
          break
          
          case 'listgc': case 'gclist': case 'listgroup': case 'listgrup': case 'listgrop': case 'gruplist': case 'groplist': case 'grouplist':
          const txs = hexa.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${hexa.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
           reply(txs)
          break
          
          case 'linkgc': case 'linkgrup': case 'linkgrop': case 'linkgroup':
           if (!isGroup) return
           if (!isBotGroupAdmins) return reply('Bot bukan admin kak')
           linkgc = await hexa.groupInviteCode(from)
           yeh = `https://chat.whatsapp.com/${linkgc}`
           hexa.sendMessage(from, yeh, text, { quoted: Anjay })
           break
           
           case 'closegc':
        if (!Anjay.key.fromMe && !isGroupAdmins) return reply("Only admin")
        if (!isBotGroupAdmins) return reply("Bot not admin")
        if (!isGroup) return reply('OnlyGroup')
        reply(`*SUCCES CLOSE GROUP*`)
        console.log(color('|King_Off_Xzn|'), color(`MENUTUP GROUP`,  'cyan'))
        hexa.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break
        
        case 'opengc':
        if (!Anjay.key.fromMe && !isGroupAdmins) return reply("Only admin")
        if (!isBotGroupAdmins) return troliv2("Bot not admin")
        if (!isGroup) return reply('OnlyGroup')
        reply(`*SUCCES OPEN GROUP*`)
        console.log(color('|King_Off_Xzn|'), color(`MEMBUKA GROUP`,  'cyan'))
        hexa.groupSettingChange(from, GroupSettingChange.messageSend, false)
        break
           
           case 'revoke':
           if (!Anjay.key.fromMe && !isOwner && !isGroupAdmins) return reply('Admin Group Only')
           if (!isBotGroupAdmins) return reply('Bot bukan admin kak')
           if (!isGroup) return
           hexa.revokeInvite(from)
           linkgcc = await hexa.groupInviteCode(from)
           yehh = `Link Group Berhasil Di Reset Ulang Berikut Link Gc Terbaru https://chat.whatsapp.com/${linkgcc}`
           hexa.sendMessage(from, yehh, text, { quoted: Anjay })
           break
           
           case 'demote':
           if (!isOwner && !Anjay.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
           if (!isGroup) return reply('Fitur Ini Khusus Di Group')
           if (!isBotGroupAdmins) return reply('Bot bukan admin kak')
           if (Anjay.message.extendedTextMessage === undefined || Anjay.message.extendedTextMessage === null) return reply('Reply members')
           mentionede = Anjay.message.extendedTextMessage.contextInfo.participant
           hexa.groupDemoteAdmin(from, [mentionede])
           teks = `Members @${mentionede.split('@')[0]} succes demote`
           hexa.sendMessage(from, teks, text, {quoted:Anjay, contextInfo:{mentionedJid:[mentionede]}})
           break
           
          case 'promote':
           if (!isOwner && !Anjay.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
           if (!isGroup) return reply('Fitur Ini Khusus Di Group')
           if (!isBotGroupAdmins) return reply('Bot bukan admin kak')
           if (Anjay.message.extendedTextMessage === undefined || Anjay.message.extendedTextMessage === null) return reply('Reply members')
           mentionede = Anjay.message.extendedTextMessage.contextInfo.participant
           hexa.groupMakeAdmin(from, [mentionede])
           teks = `Members @${mentionede.split('@')[0]} succes promote`
           hexa.sendMessage(from, teks, text, {quoted:Anjay, contextInfo:{mentionedJid:[mentionede]}})
           break
           
          case 'kick':
			if (!isGroup) return reply('Khusus Grub Fitur Ini')
			if (!isGroupAdmins) return reply('Untuk Menggunakan Fitur Ini Hanya Admin Group')
			if (!isBotGroupAdmins) return reply('Jadi Kan Bot Sebagai Admin Group Ini')
	        if (Anjay.message.extendedTextMessage === null || Anjay.message.extendedTextMessage === undefined) {
           orang = args[0].replace(/\D/g, '') + '@s.whatsapp.net'
           mentions(`Sure, kick @${orang.split('@')[0]}`, orang, true)
           hexa.groupRemove(from, [orang])
           } else {
           orang = Anjay.message.extendedTextMessage.contextInfo.participant || Anjay.message.extendedTextMessage.contextInfo.mentionedJid[0]
           mentions(`Sure, kick @${orang.split('@')[0]}`, orang, true)
           hexa.groupRemove(from, [orang])
           } 
		    break
		
			case 'add':
			if (!isGroup) return reply('Khusus Grub Fitur Ini')
			if (!isGroupAdmins) return reply('Untuk Menggunakan Fitur Ini Hanya Admin Group')
			if (!isBotGroupAdmins) return reply('Jadi Kan Bot Sebagai Admin Group Ini')
		    if (!arg) return reply(from, `Penggunaan ${prefix}kick 628xxxx`, Anjay)
		    orang = args[0] + '@s.whatsapp.net'
           response = await hexa.groupAdd(from, [orang])
           o = response.participants[0]
           let inv = (Object.values(o))
           if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
           else if(inv[0].code == 403){
           hexa.sendMessage(from, `Mengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: Anjay, contextInfo: {mentionedJid: [orang]}})
           sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
           }
		   break
		
		case 'tagall':
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
               members_id = []
               teeks = `
*> Name* : ${groupName}
*> Member* : ${groupMembers.length}
*> Admin* : ${groupAdmins.length}
*>Pesan Admin* : ${q}

MEMBER
              `
              for (let mem of groupMembers) { teeks += `
» @${mem.jid.split('@')[0]}\n`
              members_id.push(mem.jid)
               }
               mentions(teeks, members_id, true)
              break
           
          case 'antilink':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply('Jadikan Bot Sebagai Admin')
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(arg[0]) === 1) {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilinkwa.push(from)
						fs.writeFileSync('./database/bot/antilinkwa.json', JSON.stringify(antilinkwa))
						reply('Sukses mengaktifkan fitur antilink')
						hexa.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (Number(arg[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilinkwa.indexOf(from)
						antilinkwa.splice(ini, 1)
						fs.writeFileSync('./database/bot/antilinkwa.json', JSON.stringify(antilinkwa))
						reply('Sukses menonaktifkan fitur antilink')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
          
          case 'attp':
			if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp ${NamaBot}`)
			atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
			hexa.sendMessage(from, atetepe, sticker, { quoted: Anjay })
			break
		 
	   case 'sticker': 
       case 'stiker':
       case 'sg':
       case 's':
            if ((isMedia && !Anjay.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Anjay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Anjay
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: Anjay})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && Anjay.message.videoMessage.seconds < 11 || isQuotedVideo && Anjay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Anjay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Anjay
                const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: Anjay})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
            
       case 'next': case 'leave': case "stop": {
           if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
           hexa.anonymous = hexa.anonymous ? hexa.anonymous: {}
            let room = Object.values(hexa.anonymous).find(room => room.check(sender))
            if (!room) {
           await hexa.sendButton(from, '_Kamu tidak sedang berada di anonymous chat_', `${hexa.user.name}`, 'Cari Partner', 'start')
            return false
            }
            reply('_You stopped matchmaking_')
            let other = room.other(sender)
            if (other) await hexa.sendButton(other, '_Partner meninggalkan chat_', `${hexa.user.name}`, 'Cari Partner', 'start')
            delete hexa.anonymous[room.id]
            if (command === 'leave' || command === "stop") break
            }
  
  case 'mulai': case 'start': case "anonymous": case "mutual": {
            if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
            hexa.anonymous = hexa.anonymous ? hexa.anonymous: {}
            if (Object.values(hexa.anonymous).find(room => room.check(sender))) {
            await hexa.sendButton(from, '_Kamu masih berada di dalam anonymous chat, menunggu partner_', `${hexa.user.name}`, 'Keluar', `leave`)
            return false
            }
            let room = Object.values(hexa.anonymous).find(room => room.state === 'WAITING' && !room.check(sender))
            if (room) {
            await hexa.sendButton(room.a, '_Partner ditemukan!_', `${hexa.user.name}`, 'Next', 'next')
            room.b = sender
            room.state = 'CHATTING'
            await hexa.sendButton(room.b, '_Partner ditemukan!_', `${hexa.user.name}`, 'Next', 'next')
            } else {
            let id = + new Date
            hexa.anonymous[id] = {
            id,
            a: sender,
            b: '',
            state: 'WAITING',
            check: function (who = '') {
            return [this.a,
            this.b].includes(who)
            },
            other: function (who = '') {
            return who === this.a ? this.b: who === this.b ? this.a: ''
            },
            }
            await hexa.sendButton(from, '_Menunggu partner..._', `${hexa.user.name}`, 'Keluar', 'leave')
           }
           break
           }
            
            default:
if (budy.startsWith('x')){
try {
return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: Anjay})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
	
	
	
	
	
	
