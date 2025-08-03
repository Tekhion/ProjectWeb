// update-discord-avatar.js
const DISCORD_USER_ID = "518828219324170279";

fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`)
  .then((res) => res.json())
  .then((data) => {
    const avatar = data.data.discord_user.avatar;
    const userId = data.data.discord_user.id;
    const avatarUrl = `https://cdn.discordapp.com/avatars/518828219324170279/38d9ea82220f3ddace0de9c8fbb44ef9.webp?size=80`;
    const avatarImg = document.getElementById("discord-avatar");
    if (avatarImg) {
      avatarImg.src = avatarUrl;
    }
  })
  .catch((error) => {
    console.error("Error al cargar el avatar de Discord:", error);
  });
