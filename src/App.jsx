import routes from './routes';

const f7Params = {
 name: 'Otokonime',
 theme: 'md',
 darkMode: 'auto',
 colors: {
  primary: '#6A3DE8'
 },
 routes,
 statusbar: {
  iosOverlaysWebView: true,
  androidOverlaysWebView: false,
  androidBackgroundColor: '#000000',
 }
}

export default () => (
 <f7-app {...f7Params}>
  <f7-view main class="safe-areas" url="/"></f7-view>
 </f7-app>
);