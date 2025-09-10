register("chat", (event) => {
    let message = ChatLib.getChatMessage(event, true); 

    if (message.toLowerCase().includes("!dn")) {

        cancel(event); 

        Client.showTitle("§5§k!!! §d Dungeon hub §5§k!!!!", "§fwarping now!", 10, 40, 20);
       

    ChatLib.command("warp dungeon_hub");   
    
    World.playSound("mob.wither.spawn", 1, 1.1);
    }
});