const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'recording' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_14_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQzLFxuICAgICAgICA3MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDgwLFxuICAgICAgICA0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDU2LFxuICAgICAgICA3LFxuICAgICAgICA2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MCxcbiAgICAgICAgMixcbiAgICAgICAgMTAzLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcwLFxuICAgICAgICA5NixcbiAgICAgICAgNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgODksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDU4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODksXG4gICAgICAgIDExNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDksXG4gICAgICAgIDU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgODAsXG4gICAgICAgIDkxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMixcbiAgICAgICAgMTIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU4LFxuICAgICAgICA0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5LFxuICAgICAgICA4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NixcbiAgICAgICAgMTI5LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY0Fid2N0YWxPVVZtQmpFMkFiZGNxOUdnaHl5S3NFTkpEQUg2RWxWNjd5RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX3FIU1dkQjlRakd5U01YUm1kYjAtZ1wiLFxuICBcInBob25lSWRcIjogXCI4ZWQxYjExMC1lNDEzLTQzMDUtYmY5Mi1lNWRlZjVhMDY3M2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMxLFxuICAgICAgMTcxLFxuICAgICAgNDIsXG4gICAgICA0MixcbiAgICAgIDg0LFxuICAgICAgNTksXG4gICAgICAxOCxcbiAgICAgIDI0MSxcbiAgICAgIDIzNCxcbiAgICAgIDIxMyxcbiAgICAgIDE0MSxcbiAgICAgIDQ0LFxuICAgICAgNTAsXG4gICAgICA1MSxcbiAgICAgIDk0LFxuICAgICAgNDQsXG4gICAgICAyNTUsXG4gICAgICAxMTcsXG4gICAgICAxNTgsXG4gICAgICAyNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgMTEyLFxuICAgICAgNTQsXG4gICAgICAxNTQsXG4gICAgICAyMzYsXG4gICAgICAxNTMsXG4gICAgICA1OCxcbiAgICAgIDIwNSxcbiAgICAgIDI4LFxuICAgICAgMjE2LFxuICAgICAgMTcxLFxuICAgICAgNzYsXG4gICAgICAxNDAsXG4gICAgICA0OSxcbiAgICAgIDczLFxuICAgICAgMjUwLFxuICAgICAgMjM1LFxuICAgICAgMTIsXG4gICAgICAzNSxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJHWEVaTk1TXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDA4MTk4MjQ6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDbGlzaFwiLFxuICAgIFwibGlkXCI6IFwiMTgwNjgxMTM3MTk3MTcxOjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08yR3dwOEdFSy9qbzdzR0dBNGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia3ZyS01ZQVZ0bVZnVU9zcHJlaFpFT05MV3Mrek85bnJBd0xCcWlYNjZrMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4eFNzQkIrOUl3YWp1ZWFwLzJvdHc1UFRTa291YjhmV2M4d3N5RTVSTUFaWkJBTGxOa2FrcTRyQ1J6dE1TZVhuclh5Nk5Da0ZBWGc0SDJJK0RBMTREZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzelE2WjNPd1FqbVpucFNCNTIzNXdkaWNsdjlNdHlDQzJyVnB6TEN0NlUrcElQaGFJemREZWJSakl4OVRlWThtc0JMOTdPcWJwekN1LzFTazh0OHJBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDA4MTk4MjQ6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDkzMDg2OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "CLIDH-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private ",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //alwaysonline:process.env.WAPRESENCE|| "recording ", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
