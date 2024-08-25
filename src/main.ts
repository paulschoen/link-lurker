import { client } from "./client";
import { registerEvents } from "./events";

registerEvents(client, "../events");

client
  .login(process.env.DISCORD_TOKEN)
  .then(() => {
    console.log("Logged in.");
  })
  .catch((error) => {
    console.error("Error logging in:", error);
  });
