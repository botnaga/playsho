const qrku = "https://i.ibb.co/3NBMK4v/20220604-174038.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
「 SEWA • BOT 」
SEWA BOT MURAH 3.000 PERMANEN JIKA MINAT PC KAMI KAK

╭─「 *NOTE* 」
│ > Ingin Sewa? wa.me/6285892964337
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
