register("command", () => {
    const x = Math.floor(Player.getX());
    const y = Math.floor(Player.getY());
    const z = Math.floor(Player.getZ());
    const coordsText = `${x}, ${y}, ${z}`;

    const coords = new Message(
    new TextComponent("&9&l[f8a]&r -> "),
    new TextComponent("&aYour coords:&r "),
    new TextComponent("&e" + coordsText)
        .setClick("run_command", `ct copy f8a -> ${coordsText}`)
        .setHover("show_text", "&7Click to copy!")
);
    ChatLib.chat(coords);
        }).setName("f8coords").setAliases("f8c")
        .setTabCompletions("f8coords", "f8c");
