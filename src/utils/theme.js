import {
 f7
} from "framework7-vue"
import {
 StatusBar,
 Style
} from "@capacitor/status-bar"


const theme = {
 init() {
  // Add listener for dark-mode changes
  const media = window.matchMedia("(prefers-color-scheme: dark)")
  const listener = event => {
   this.setDark(event.matches)
  }
  if (typeof media.addEventListener === "function") {
   media.addEventListener("change", listener)
  } else {
   media.addListener(listener)
  }
  // Apply theme immediately
  this.setDark(this.hasDarkColorScheme())
 },
 hasDarkColorScheme() {
  return (
   window.matchMedia &&
   window.matchMedia("(prefers-color-scheme: dark)").matches
  )
 },
 setSystemBar(dark, material) {
  const device = f7.device
  // Apply status bar style for android
  if (device.android) {
   const darkColor = material ? "#202020": "#111111" // 'ios' and 'aurora' have same dark color
   const colorOption = {
    color: dark ? darkColor: "#F7F7F8"
   }
   StatusBar.setStyle({
    style: dark ? Style.Dark: Style.Light
   })
   StatusBar.setBackgroundColor(colorOption)
  }
 },
 setDark(dark) {
  // Apply styles
  const html = document.querySelector("html")
  if (!html) {
   return
  }
  html.classList.remove("theme-dark", "theme-light")
  html.classList.add(`theme-${dark ? "dark": "light"}`)
  const md = html.classList.contains("md")
  this.setSystemBar(dark, md)
  // Apply change to f7
  f7.darkTheme = dark
 },
 extractThemeSearch() {
  if (document.location.search.indexOf("theme=") >= 0) {
   const theme = document.location.search.split("theme=")[1].split("&")[0]
   if (
    theme === "auto" ||
    theme === "ios" ||
    theme === "md" ||
    theme === "aurora"
   ) {
    return theme
   }
  }
  return "auto"
 },
 replaceLocation(theme) {
  window.location.replace("index.html?theme=" + theme)
 }
}

export default theme