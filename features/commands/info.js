register("chat", (event) => {
        let message = ChatLib.getChatMessage(event, true); 

    if (message.toLowerCase().includes("!info")) {

        cancel(event);
              ChatLib.clearChat();

        ChatLib.chat("");
        ChatLib.chat("");
        ChatLib.chat(ChatLib.getCenteredText("§d§lThank you for using f8wqAddons! §r§7(1.0.0)"));
        ChatLib.chat("");
        ChatLib.chat(ChatLib.getChatBreak("§b="));
        ChatLib.chat("");
        ChatLib.chat(ChatLib.getCenteredText("§e§lmy socials: "));
        ChatLib.chat("");
        ChatLib.chat("");
        

const discordLink = "https://discord.gg/#";
const youtubeLink = "https://www.youtube.com/@f8wq/videos";
const githubLink = "https://github.com/https://github.com/f8wq/f8wqAddons";

const discordText = new TextComponent("                     §9§lDiscord")
    .setClick("open_url", discordLink) 
    .setHoverValue("Click to join the f8wqAddons discord server!");

const youtubeText = new TextComponent(" §9§lYouTube") 
    .setClick("open_url", youtubeLink) 
    .setHoverValue("Click to visit my YouTube channel!");

const githubText = new TextComponent(" §9§lGithub") 
    .setClick("open_url", githubLink) 
    .setHoverValue("Click to visit my Github Page!");

const socialsMessage = new Message(discordText, youtubeText, githubText);

ChatLib.chat(socialsMessage);
ChatLib.chat("");

    }
});