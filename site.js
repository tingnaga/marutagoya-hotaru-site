(()=>{
const header=document.getElementById('siteHeader'),toggle=document.getElementById('menuToggle'),nav=document.getElementById('navList');
const close=()=>{toggle.classList.remove('open');nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');};
const scroll=()=>header.classList.toggle('scrolled',window.scrollY>40);scroll();window.addEventListener('scroll',scroll,{passive:true});
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.classList.toggle('open',open);nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){close();toggle.focus();}});
const config=window.HOTARU_SITE||{},value=config.requestAppUrl;
if(value){try{const u=new URL(value);if(u.origin!=='https://script.google.com'||!/^\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(u.pathname)||u.search||u.hash)throw Error('Invalid URL');u.searchParams.set('lang',document.documentElement.lang.startsWith('zh')?'zh':document.documentElement.lang.startsWith('en')?'en':'ja');document.getElementById('requestFrame').src=u.href;document.getElementById('requestFullPage').href=u.href;}catch(e){/* Invalid configuration leaves the non-sending local preview in place. */}}
})();
