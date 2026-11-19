// Shared by the server layout and the client toggle (no "use client" here).
export const THEME_KEY = "aibilge-theme";

// Runs in <head> before first paint so a saved choice never flashes the wrong theme.
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;
