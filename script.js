// SVG Variables
var homeSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="home-svg" class="bi bi-house main-svg" viewBox="0 0 16 16">
<path id="home1" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg>`;
var homeFillSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="home-svg" class="bi bi-house-fill main-svg" viewBox="0 0 16 16">
<path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
<path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
</svg>`;
var storiesSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="stories-svg" class="bi bi-book main-svg" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg>
`;
var storiesFillSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="stories-svg" class="bi bi-book-fill main-svg" viewBox="0 0 16 16">
  <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg>
`;
var authorsSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="authors-svg" class="bi bi-pencil main-svg" viewBox="0 0 16 16">
<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
`;
var authorsFillSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="authors-svg" class="bi bi-pencil-fill main-svg" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
`;
var communitySVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="community-svg" class="bi bi-people main-svg" viewBox="0 0 16 16">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
</svg>
`;
var communityFillSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="community-svg" class="bi bi-people-fill main-svg" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
`;
var resourcesSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="resources-svg" class="bi bi-info-circle main-svg" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
`;
var resourcesFillSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="resources-svg" class="bi bi-info-circle-fill main-svg" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>
`;
var librarySVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="library-svg" class="bi bi-archive main-svg" viewBox="0 0 16 16">
  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg>
`;
var libraryFillSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="library-svg" class="bi bi-archive-fill main-svg" viewBox="0 0 16 16">
  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
</svg>
`;
var ficpageSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="ficpage-svg" class="bi bi-file main-svg" viewBox="0 0 16 16">
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
</svg>
`;
var ficpageFillSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="ficpage-svg" class="bi bi-file-fill main-svg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2"/>
</svg>
`;
var settingsSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="settings-svg" class="bi bi-gear main-svg" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
</svg>
`;
var settingsFillSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="settings-svg" class="bi bi-gear-fill main-svg" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>
`;
var notificationsSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bell nav-svg notification-svg" id="notifications" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg>
`
var notificationsFillSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bell-fill nav-svg notification-svg". viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg>
`
var dmSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-inbox nav-svg dms-svg" viewBox="0 0 16 16">
  <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"/>
</svg>
`
var dmFillSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-inbox-fill nav-svg dms-svg" viewBox="0 0 16 16">
  <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"/>
</svg>
`
var profileSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
</svg>
`
var profileFillSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
`
var achievementsSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
</svg>
`
var achievementsFillSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg>
`
var analyticsSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
  <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
</svg>
`
var analyticsFillSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
</svg>
`
var helpSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
</svg>
`
var helpFillSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
</svg>
`

// Variables
var sidebarClicked = false;
var dropdownClicked = false;
var currentDropdown = null;
var rngMaxCharLength = 648;
var rngMaxCharLengthClosed = 335;
var debounceTimeout;
var originalRNGText = $("#rng-summary").text();
$("#rng-summary").data("original-text", originalRNGText);
var currentSlideIndex = 0;
var totalSlides = $(".fy-item").length;

// Functions

// logic to close sidebar and open
function sidebarClose() {
  if(sidebarClicked) {
    $(".sidebar-container").addClass("close");
    $(".sidebar-container a").addClass("hide");
    $(".sidebar-title").addClass("hide");
    $(".sidebar-category").addClass("show");
    $(".user-info").addClass("hide");
    $(".log-out").addClass("hide");
    $(".main-svg").css("margin-bottom", "15px");
    $(".main-svg").css("margin-top", "15px");
    $(".hamburger-sidebar svg").css("margin-right", "15px");
    $(".navbar-container").css("margin-left", "60px");
    $(".sidebar-container a").css("animation", "");
    $(".hamburger-sidebar p").css("animation", "");
    $(".user-info p").css("animation", "");
    if (!$(".stories-dropdown").hasClass("hide")) {
      $(".stories-dropdown").addClass("hide");
    }
} else {
    $(".sidebar-container").removeClass("close");
    $(".sidebar-container a").removeClass("hide");
    $(".sidebar-title").removeClass("hide");
    $(".sidebar-category").removeClass("show");
    $(".user-info").removeClass("hide");
    $(".log-out").removeClass("hide");
    $(".main-svg").css("margin-bottom", "0px");
    $(".main-svg").css("margin-top", "0px");
    $(".hamburger-sidebar svg").css("margin-right", "5px");
    $(".navbar-container").css("margin-left", "220px");
}
sidebarClicked = !sidebarClicked;
}

// active svg logic, replaces svg after selected with a filled svg.
function sidebarActiveLogic(input) {
  $(".side-item .active-bar").removeClass("active-item");
  $(input).find(".active-bar").addClass("active-item");

  if ($("#home-bar").hasClass("active-item")) {
    $("#home .main-svg").replaceWith(homeFillSVG);
  } else {
    $("#home .main-svg").replaceWith(homeSVG);
  }

  if ($("#stories-bar").hasClass("active-item")) {
    $("#stories-svg").replaceWith(storiesFillSVG);
  } else {
    $("#stories-svg").replaceWith(storiesSVG);
  }

  if ($("#authors-bar").hasClass("active-item")) {
    $("#authors-svg").replaceWith(authorsFillSVG);
  } else {
    $("#authors-svg").replaceWith(authorsSVG);
  }

  if ($("#community-bar").hasClass("active-item")) {
    $("#community-svg").replaceWith(communityFillSVG);
  } else {
    $("#community-svg").replaceWith(communitySVG);
  }

  if ($("#resources-bar").hasClass("active-item")) {
    $("#resources-svg").replaceWith(resourcesFillSVG);
  } else {
    $("#resources-svg").replaceWith(resourcesSVG);
  }

  if ($("#library-bar").hasClass("active-item")) {
    $("#library-svg").replaceWith(libraryFillSVG);
  } else {
    $("#library-svg").replaceWith(librarySVG);
  }

  if ($("#ficpage-bar").hasClass("active-item")) {
    $("#ficpage-svg").replaceWith(ficpageFillSVG);
  } else {
    $("#ficpage-svg").replaceWith(ficpageSVG);
  }

  if ($("#settings-bar").hasClass("active-item")) {
    $("#settings-svg").replaceWith(settingsFillSVG);
  } else {
    $("#settings-svg").replaceWith(settingsSVG);
  }
}

// dropdown menu logic, collpases dropdown menu with animation
function sidebarDropdownLogic(input) {
  if (!$(".sidebar-container").hasClass("close")) {
    if ($(input).is("#stories")) {
      if (!$(".stories-dropdown").hasClass("hide")) {
        $(".stories-dropdown").addClass("hide");
      } else {
        $(".stories-dropdown").css("animation", "collapseToBottomStories 0.3s forwards");
        $(".stories-dropdown").removeClass("hide");
      }
    } else {
      $(".stories-dropdown").addClass("hide");
    }
    if ($(input).is("#authors")) {
      if (!$(".authors-dropdown").hasClass("hide")) {
        $(".authors-dropdown").addClass("hide");
      } else {
        $(".authors-dropdown").css("animation", "collapseToBottomAuthors 0.3s forwards");
        $(".authors-dropdown").removeClass("hide");
      }  
    } else {
      $(".authors-dropdown").addClass("hide");
    }
    if ($(input).is("#community")) {
      if (!$(".community-dropdown").hasClass("hide")) {
        $(".community-dropdown").addClass("hide");
      } else {
        $(".community-dropdown").css("animation", "collapseToBottomCommunity 0.3s forwards");
        $(".community-dropdown").removeClass("hide");
      }  
    } else {
      $(".community-dropdown").addClass("hide");
    }
    if ($(input).is("#resources")) {
      if (!$(".resources-dropdown").hasClass("hide")) {
        $(".resources-dropdown").addClass("hide");
      } else {
        $(".resources-dropdown").css("animation", "collapseToBottomResources 0.3s forwards");
        $(".resources-dropdown").removeClass("hide");
      }  
    } else {
      $(".resources-dropdown").addClass("hide");
    }
    if ($(input).is("#library")) {
      if (!$(".library-dropdown").hasClass("hide")) {
        $(".library-dropdown").addClass("hide");
      } else {
        $(".library-dropdown").css("animation", "collapseToBottomlibrary 0.3s forwards");
        $(".library-dropdown").removeClass("hide");
      }  
    } else {
      $(".library-dropdown").addClass("hide");
    }
  } 
}

// Navbar dropdown menu logic, drops down menu with animation while retaining space and objects invis
function navbarDropdownLogic() {
  if (!$(".dm-container").hasClass("hide") || !$(".notifications-container").hasClass("hide") || !$(".nav-user-dropdown").hasClass("hide")) {
    $(".dm-container").addClass("hide");
    $(".notifications-container").addClass("hide");
    $(".nav-notifications-active-bar").addClass("hide");
    $(".nav-dm-active-bar").addClass("hide");
    $(".nav-user-dropdown").addClass("hide");
    $(".nav-user-active-bar").addClass("hide");
    $(".notification-svg").replaceWith(notificationsSVG);
    $(".dms-svg").replaceWith(dmSVG);
    if (!$(".nav-dropdown").hasClass("hide")) {
      $(".nav-dropdown").addClass("hide");
      $(".nav-create-active-bar").addClass("hide");
    } else {
      $(".nav-dropdown").removeClass("hide");
      $(".nav-dropdown li a").css("visibility", "visible");
      $(".nav-create-active-bar").removeClass("hide");
    }
  } else {
    if (!$(".nav-dropdown").hasClass("hide")) {
      $(".nav-dropdown").addClass("hide");
      $(".nav-create-active-bar").addClass("hide");
    } else {
      $(".nav-dropdown").removeClass("hide");
      $(".nav-dropdown li a").css("visibility", "visible");
      $(".nav-create-active-bar").removeClass("hide");
    }
  }

}

function notificationsDropDownLogic() {
  if (!$(".dm-container").hasClass("hide") || !$(".nav-dropdown").hasClass("hide") || !$(".nav-user-dropdown").hasClass("hide")) {
    $(".dm-container").addClass("hide");
    $(".nav-dropdown").addClass("hide");
    $(".dms-svg").replaceWith(dmSVG);
    $(".nav-dm-active-bar").addClass("hide");
    $(".nav-create-active-bar").addClass("hide");
    $(".nav-user-dropdown").addClass("hide");
    $(".nav-user-active-bar").addClass("hide");
    if (!$(".notifications-container").hasClass("hide")) {
      $(".notification-svg").replaceWith(notificationsSVG);
      $(".notifications-container").addClass("hide");
      $(".nav-notifications-active-bar").addClass("hide");
    } else {
      $(".notification-svg").replaceWith(notificationsFillSVG);
      $(".notifications-container").removeClass("hide");
      $(".nav-notifications-active-bar").removeClass("hide");
    }
  } else {
    if (!$(".notifications-container").hasClass("hide")) {
      $(".notification-svg").replaceWith(notificationsSVG);
      $(".notifications-container").addClass("hide");
      $(".nav-notifications-active-bar").addClass("hide");
    } else {
      $(".notification-svg").replaceWith(notificationsFillSVG);
      $(".notifications-container").removeClass("hide");
      $(".nav-notifications-active-bar").removeClass("hide");
    }
  }
}

function dmDropdownLogic() {
  if (!$(".notifications-container").hasClass("hide") || !$(".nav-dropdown").hasClass("hide") || !$(".nav-user-dropdown").hasClass("hide")) {
    $(".notifications-container").addClass("hide");
    $(".nav-dropdown").addClass("hide");
    $(".notification-svg").replaceWith(notificationsSVG);
    $(".nav-notifications-active-bar").addClass("hide");
    $(".nav-create-active-bar").addClass("hide");
    $(".nav-user-dropdown").addClass("hide");
    $(".nav-user-active-bar").addClass("hide");
    if (!$(".dm-container").hasClass("hide")) {
      $(".dms-svg").replaceWith(dmSVG);
      $(".dm-container").addClass("hide");
      $(".nav-dm-active-bar").addClass("hide");
    } else {
      $(".dms-svg").replaceWith(dmFillSVG);
      $(".dm-container").removeClass("hide");
      $(".nav-dm-active-bar").removeClass("hide");
    }
  } else {
    if (!$(".dm-container").hasClass("hide")) {
      $(".dms-svg").replaceWith(dmSVG);
      $(".dm-container").addClass("hide");
      $(".nav-dm-active-bar").addClass("hide");
    } else {
      $(".dms-svg").replaceWith(dmFillSVG);
      $(".dm-container").removeClass("hide");
      $(".nav-dm-active-bar").removeClass("hide");
    }
  }
}

function userDropdownLogic() {
  if (!$(".nav-user-dropdown").hasClass("hide")) {
    $(".nav-user-dropdown").addClass("hide");
    $(".nav-user-active-bar").addClass("hide");
  } else {
    $(".nav-user-dropdown").removeClass("hide");
    $(".nav-user-active-bar").removeClass("hide");
  }
}

function clickOutsideElementClose(input) {
  // Check if the clicked area is outside the nav-dropdown
  if (!$(".nav-dropdown").hasClass("hide")) {
    if (!$(input.target).closest('.create-upload').length) {
      // If outside nav-dropdown, add 'hide' class
      $('.nav-dropdown').addClass('hide');
      $(".nav-create-active-bar").addClass("hide");
    }
  }
  if (!$(".sidebar-container").hasClass("close")) {
    if (!$(input.target).closest(".sidebar-container").length) {
      sidebarClose();
    }
  }
  if (!$(".notifications-container").hasClass("hide")) {
    if (!$(input.target).closest(".nav-notifications").length) {
      if (!$(input.target).closest(".notifications-container").length) {
        $(".notifications-container").addClass("hide");
        $(".notification-svg").replaceWith(notificationsSVG);
        $(".nav-notifications-active-bar").addClass("hide");
      }
    }
  }
  if (!$(".dm-container").hasClass("hide")) {
    if (!$(input.target).closest(".nav-dm").length) {
      if (!$(input.target).closest(".dm-container").length) {
        $(".dm-container").addClass("hide");
        $(".dms-svg").replaceWith(dmSVG);
        $(".nav-dm-active-bar").addClass("hide");
      }
    }
  }
  if (!$(".nav-user-dropdown").hasClass("hide")) {
    if (!$(input.target).closest(".nav-4").length) {
      if (!$(input.target).closest(".nav-user-dropdown").length) {
        $(".nav-user-dropdown").addClass("hide");
        $(".nav-user-active-bar").addClass("hide");
      }
    }
  }
}

// change slide with buttons
function changeSlide(direction) {
  // Remove "hide" class from current slide
  $(".fy-item").eq(currentSlideIndex).addClass("hide");
  currentSlideIndex += direction;

  if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - 1;
  } 

  if ((currentSlideIndex) == 0) {
    $(".dots li").eq(0).addClass("active");
    $(".dots li").eq(1).removeClass("active");
    $(".dots li").eq(2).removeClass("active");
  } else if ((currentSlideIndex) == 1) {
    $(".dots li").eq(1).addClass("active");
    $(".dots li").eq(0).removeClass("active");
    $(".dots li").eq(2).removeClass("active");
  } else if ((currentSlideIndex) == 2) {
    $(".dots li").eq(2).addClass("active");
    $(".dots li").eq(0).removeClass("active");
    $(".dots li").eq(1).removeClass("active");
  }
  
  $(".fy-item").eq(currentSlideIndex).removeClass("hide");
}

function changeSlideSpecific() {
  $(".dots li").eq(0).addClass("active");
  $(".dots li").eq(1).removeClass("active");
  $(".dots li").eq(2).removeClass("active");
}

// Update RNG summary depending on length of rng-summary, if 
function updateRNGSummary() {
  var originalRNGText = $("#rng-summary").data("original-text");
  $("#rng-summary").text(originalRNGText);
}
function updateRNGSummaryMobile() {
  var originalRNGText = $("#rng-summary").data("original-text");
  if (originalRNGText.length > rngMaxCharLengthClosed) {
      var newLength = originalRNGText.substr(0, rngMaxCharLengthClosed) + "...";
      $("#rng-summary").text(newLength);
  }
}
// update RNG summary depending on size of window
function checkWindowSize() {
  if ($(window).width() > 800) {
    updateRNGSummary();
  }
  if ($(window).width() <= 800) {
    updateRNGSummaryMobile();
  } 
}

// Click events

// Sidebar  open and close
$(".hamburger-sidebar svg").click(function() {
  sidebarClose();
});

// sidebar active element & dropdown menu click 
$(".side-item").click(function(){
  sidebarActiveLogic(this);
  sidebarDropdownLogic(this);
});

// if dropdown is open and I click outside dropown, close dropdown.
$(document).click(function(event) {
  clickOutsideElementClose(event);
});

// navbar dropdown logic
$(".create-upload").click(function() {
  navbarDropdownLogic();
});

// notifications dropdown
$(".nav-notifications").click(function() {
  notificationsDropDownLogic();
});

// DMS dropdown
$(".nav-dm").click(function() {
  dmDropdownLogic();
});

$(".nav-4").click(function() {
  userDropdownLogic();
});

// for you slide
$("#prev").click(function() {
  changeSlide(-1);
});
$("#next").click(function() {
  changeSlide(1);
});
$(".dots li").eq(0).click(function() {
  $(".fy-item").eq(0).removeClass("hide");
  $(".fy-item").eq(1).addClass("hide");
  $(".fy-item").eq(2).addClass("hide");
  $(".dots li").eq(0).addClass("active");
  $(".dots li").eq(1).removeClass("active");
  $(".dots li").eq(2).removeClass("active");
  currentSlideIndex = 0;
}),
$(".dots li").eq(1).click(function() {
  $(".fy-item").eq(1).removeClass("hide");
  $(".fy-item").eq(0).addClass("hide");
  $(".fy-item").eq(2).addClass("hide");
  $(".dots li").eq(1).addClass("active");
  $(".dots li").eq(0).removeClass("active");
  $(".dots li").eq(2).removeClass("active");
  currentSlideIndex = 1;
}),
$(".dots li").eq(2).click(function() {
  $(".fy-item").eq(2).removeClass("hide");
  $(".fy-item").eq(0).addClass("hide");
  $(".fy-item").eq(1).addClass("hide");
  $(".dots li").eq(2).addClass("active");
  $(".dots li").eq(0).removeClass("active");
  $(".dots li").eq(1).removeClass("active");
  currentSlideIndex = 2;
}),

// instead of scrolling horizontal, scroll vertical for horizontal.
$(".dm-friends").on('wheel', function(e) {
  e.preventDefault(); //disable default scrolling
  var delta = e.originalEvent.deltaY;
  this.scrollLeft += delta;
});

// Document event

// when page loads, document event
$(document).ready(function() {
  checkWindowSize();
});

// resize event

// every 100 ms after scrolling, check window size function.
$(window).resize(function() {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(checkWindowSize, 100);
});


