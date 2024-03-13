const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="jerletechy209@gmail.com"
global.location="Shinyanga,Tanzania."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Tanzania";
global.github=process.env.GITHUB|| "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/";
global.gurl  = process.env.GURL || "https://chat.whatsapp.com/BxXB834YgV8JorX5tCDEEM";
global.website= process.env.GURL|| "https://chat.whatsapp.com/BxXB834YgV8JorX5tCDEEM" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "255673980285" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,255738070883";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255738070883";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_00_03_13_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNEZNOXZIVmZRc3ZVa2ZVcHc1ZzZ1aWNEMWRjVkxRV0l1Y3ZiRkxLVEMwRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInEyZ0FzbkVRV2dpQ0g2Q0JNS3o0VVNFTUNGbW05L0luVW0veGNSR2VJd289XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU1A3bW9vZForT01WOHdUSmYzVnlEa1U1VkU4bHpRRWJkd2MvdlQyWWNXRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImdudXFCMFV3V1Z6MXB1ajBOTmUxZi9lTTFsdmo3bkg5c1R6UHhSUTdvRGM9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0pTOHg3dVgwRkd1WE94bTQxbGIrZ2FRUjlVODUyMnRleDliZ20wR3dGOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkYxbWZHZnNKbjBrRHR1aDB1WExNS2pTd2xYRk81OTRUN28xeTJaUjR5RDQ9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJHT0NQTTBqdVRwN1dFUm14V3ZUU1pZOXE3dW8yWURPbldEYUxMY2NBem5BPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaGNnSWNTMVVvNjhteFVVblFWa1RDZnd2SFp2eWZHZ2xQcm5UTWtLV1BsOD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJzS2xYS2lEOVY5S1NvOXVkM3RKVlVBaEVOWGx4b2pXM1dRZVV1c0JMaG0zSWxtWlZOQTRwbkd4cE9VcjRocWoyblVZV09uSHVCc2loRzJIQVgydUJnUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTIzLFwiYWR2U2VjcmV0S2V5XCI6XCJiUmNXcXBDR3VzWkErWU0yMTh5WW0zT0dSSERKNjFHbU1qcDkzY2s2SHlrPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU1NzM4MDcwODgzQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjJDMDRDNDg2QjI1REIyMzg4NzExQUVEQzU2NTIwN0U1XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTAzMjQwMzl9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU1NzM4MDcwODgzQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjZFRjM5QkRDMTczMTAwNkI3NkEyQzMwNDYzMzhDODNBXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTAzMjQwMzl9XSxcIm5leHRQcmVLZXlJZFwiOjYxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjo2MSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJOalNHbDR6QVNodTdHUzdOUFVUOWVnXCIsXCJwaG9uZUlkXCI6XCI2NGQ0YmYyMC0wZmY3LTQ2YzctODc0OC03YWI5YmEwMGM3YzFcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm1UK2cxM3R4eDk5UlNDUmZCZzJqLy92R0FRbz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJmZ2dNZmhYOFF5a1lTTGhaL1oxbWc1RWNielk9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiUzNIWUZRWkxcIixcIm1lXCI6e1wiaWRcIjpcIjI1NTczODA3MDg4Mzo1QHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCLwnZCT8J2Qh/CdkIQgIPCdkJbwnZCA8J2Qk/CdkILwnZCH8J2Qi/CdkIjwnZCS8J2QkyAg8J2QlvCdkIjwnZCZ8J2QgPCdkJHwnZCD8J2QklwiLFwibGlkXCI6XCIxNTg2MTc2NzI1MDE1OTo1QGxpZFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSjNFbDhnRUVML3l4YThHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIk9YSlhxS1ZQY1g4V3djR0dKS0FPdmRNSVZWczVkNWF0eG4xd1pjbEhQbFk9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCIweVkrNVdubkkySHNpYTlyUUdBQXYrcEE1NGRURjM5NlphMzFXVDZYVWNPbVZQZ0NrdGlieGM3RlR1TG5qT1BwQzc1OVBZREFYVDY1TVV0TmJIS1FEdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIlRuSHVCcENCWHNUeHlGRVFYWU12NmVMb2NCNElNWTJCcm1PeTdmR2VZNXh1bE83TXpGd1BLNW11RW1GaThXeXA1eUJ4ekYvenVuQzBMRWNWdlluTmp3PT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTU3MzgwNzA4ODM6NUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJUbHlWNmlsVDNGL0ZzSEJoaVNnRHIzVENGVmJPWGVXcmNaOWNHWEpSejVXXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iYVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMDMyNDAzNixcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFBcWFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBcWEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaU0sra29tOEFzMEVrN0VEVEszMUZVTTc0K2VGS20rU3BySXdmQUl0Y2lnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMjUxMjIzMzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMDMyNDAzOTQxMlwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "jer_bot24" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "jer_bot24",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "jer_bot24",
  ownername:process.env.OWNER_NAME|| "Justin_ER",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "Justin_ER",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
