const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `
╭━━〔 *𝐍𝐈𝐌𝐀𝐇 𝐌𝐃* 〕━━┈⊷
┃ ◈ ╭───────────────╮
┃ ◈ │ *👋 Hi*: ${pushname}
┃ ◈ │ *⏳ Uptime*: ${runtime(process.uptime())}
┃ ◈ │ *📟 RAM*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃ ◈ │ *👨‍💻 Owner*: 𝐍𝐈𝐌𝐀𝐇 𝐌𝐃
┃ ◈ ╰───────────────╯
╰━━━━━━━━━━━━━━━━━━━⊷

   *🤖 𝐍𝐈𝐌𝐀𝐇 𝐌𝐃: Multidevice WhatsApp Bot*
`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/ZzwhmX01/SulaMd.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363418505945149@newsletter',
                    newsletterName: '𝐍𝐈𝐌𝐀𝐇 𝐌𝐃',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
