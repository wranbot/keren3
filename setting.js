/* SC THOMZ V8
BASE : HW MODS
RECODE : THOMZ
CREACOT : THOMZ
*/

const fs = require('fs')
const chalk = require('chalk')

global.owner = "6281542772467"
global.namabot = "THOMZ-BOTZ"
global.botname = "THOMZ-BOTZ"
global.autoJoin = false
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.thumb = fs.readFileSync("./thumb.png")
global.sessionName = 'thomz' //Gausah Juga
global.bugthomz = fs.readFileSync("./bugthomz.png")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By THOMZBOTZ"

global.namastore = "THOMZ "
global.nodana = "083169231840"
global.nogopay = "083169231840"
global.noovo = "083169231840"

global.domain = 'https://private.thomvelz.my.id' // Isi Domain Lu
global.apikey = 'ptla_KoYJuL9VUVEDa4G3RF3YkwpYMAigGs2h70WXQfv4doB' // Isi Apikey Plta Lu
global.capikey = 'ptlc_7NVmZ4ynvB0KwBAxZId7kW8XSN4j4b25Z0uubiXxRmZ' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.antilink = false

const mess = {
   wait: "Tunggu Bang Lagi Saya Proses",
   success: "sukses✅ Bang Thomz",
   save: "𝕊𝕌𝕂𝕊𝔼𝕊 𝕊𝔸𝕍𝔼 ℕ𝕆𝕄𝔼ℝ 𝕆𝕋𝕆𝕄𝔸𝕋𝕀𝕊",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Kak?",
       link: "Link Nya Mana Kak?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Fitur Nya Cuman Bisa Di Dalem Grup Yah Bang",
       private: "Di Chat Pribadi Bang Thomz Biar Bisa Di Pake",
       owner: "Ga Usah Pake Fitur Ini Asu Lu Bukan Bang",
       admin: "Ga Usah Pake Fitur Ini Asu Lu Bukan Bang",
       badmin: "Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
       premium: "Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner",
   }
}

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})