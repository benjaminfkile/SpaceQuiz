function toggle(args) {
    for (let i = 0; i < args.length; i++) {
        if (args[i] === "0f") {
            $(".progress").hide();
        }
        if (args[i] === "1f") {
            $(".start").hide();
        }
        if (args[i] === "2f") {
            $(".quiz").hide();
        }
        if (args[i] === "3f") {
            $(".feedback").hide();
        }
        if (args[i] === "4f") {
            $(".restart").hide();
        }
        if (args[i] === "0t") {
            $(".progress").show();
        }
        if (args[i] === "1t") {
            $(".start").show();
        }
        if (args[i] === "2t") {
            $(".quiz").fadeIn(1000);
        }
        if (args[i] === "3t") {
            $(".feedback").slideDown();
        }
        if (args[i] === "4t") {
            $(".restart").show();
            $(".quiz").empty();
        }
    }
}