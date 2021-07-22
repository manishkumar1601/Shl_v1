let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠══〘 క ɦ ℓ__v¹ 〙BOT  ═
╠➥  Made in javascript via NodeJs
╠➥ Rec: ī.am/𐏕Sђahuī─
╠➥ Script: shahul hameed
║
╠➥ YouTube: https://youtube.com/channel/UCC8P1xSDECr5URXD5bMrkFQ
╠➥ instagram: https://instagram.com/sha.hul_x46?utm_medium=copy_link
╠➥ wa.me/+919645577195
║
╠═〘 Thanks To 〙 ═
╠➥ Mr.Ravanan
╠➥ ™ shahul
╠➥ ❤️𝕵𝖚𝖘𝖙 𝕰𝖓𝖏𝖔𝔜 ℑ𝔱❤️
║
╠══〘 క ɦ ℓ__v¹ 〙BOT═says
╠➥   MAKE GROUP ADMIN 
╠➥   TURN ON YOUR DATA
╠➥   CONTACT : wa.me//+919645577195
║
║>Request? wa.me//+919645577195
║
╠══〘 క ɦ ℓ__v¹ 〙BOT  ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
