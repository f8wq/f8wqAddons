register("command", (user) => {
  ChatLib.clearChat();
  ChatLib.chat("§d§lChat cleared!");
  World.playSound("random.successful_hit", 1, 1);
}).setName("clearChat")
    .setAliases("skibidi", "clr")
  .setTabCompletions("clearChat", "skibidi", "clr");
