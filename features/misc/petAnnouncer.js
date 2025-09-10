import { config } from "../../config.js";


//spawn
register("chat", (petName) => {
    const settings = config.petAnnouncer;

    if (settings.showTitle)
    Client.showTitle("§5§k!!! §d Pet Summoned §5§k!!!!", `§fYou summoned your ${petName}!`, 5, 10, 5);

    if (settings.sendMessage)
    ChatLib.command("pc [f8a] -> spawned " + petName + "!");

    if (settings.playSound)
    World.playSound("random.successful_hit", 1, 1);
}).setChatCriteria("You summoned your ${petName}!");

//spawn autopet
register("chat", (petLevel, petName) => {
    const settings = config.petAnnouncer;

    if (settings.showTitle)
    Client.showTitle("§5§k!!! §d Pet Summoned §5§k!!!!", `§fYou summoned your ${petName}!`, 5, 10, 5);

    if (settings.sendMessage)
    ChatLib.command("pc [f8a] -> spawned " + petName + "!");

    if (settings.playSound)
    World.playSound("random.successful_hit", 1, 1);
}).setChatCriteria("Autopet equipped your ${petLevel} ${petName}! VIEW RULE");




//despawn
register("chat", (petName) => {
    const settings = config.petAnnouncer;

    if (settings.showTitle)
    Client.showTitle("§5§k!!! §d Pet Despawned §5§k!!!!", `§fYou despawned your ${petName}!`, 5, 10, 5);

    if (settings.sendMessage)
    ChatLib.command("pc [f8a] -> despawned " + petName + "!");

    if (settings.playSound)
    World.playSound("random.successful_hit", 1, 1);
}).setChatCriteria("You despawned your ${petName}!");




import { config } from "../../config.js"; 

// Usage: /f8pet <option> <true|false>
register("command", (option, value) => {
    const petConfig = config.petAnnouncer;

    if (!option || !value) {
        ChatLib.chat("§cUsage: /f8pet <title|message|sound> <true|false>");
        return;
    }

    const keyMap = {
        title: "showTitle",
        message: "sendMessage",
        sound: "playSound"
    };

    const configKey = keyMap[option.toLowerCase()];

    if (!configKey || !petConfig.hasOwnProperty(configKey)) {
        ChatLib.chat("§cInvalid option! Valid options: title, message, sound");
        return;
    }

    const boolValue = value.toLowerCase() === "true";
    petConfig[configKey] = boolValue;
    config.save();

    ChatLib.chat(`§aSet §d${option} §ato §d${boolValue}`);
}).setName("f8pet");
