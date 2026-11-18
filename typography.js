(()=>{
 // Change this to "original" and rebuild to disable the experiment by default.
 const DEFAULT_TYPEFACE='table-mono';
 const requested=new URLSearchParams(location.search).get('font');
 const mode=requested==='original'||requested==='table-mono'?requested:DEFAULT_TYPEFACE;
 document.documentElement.dataset.font=mode;

 // The product page previously loaded this font remotely. Restore that exact
 // behavior only for original-mode comparisons; Table Mono always stays local.
 const originalFont=document.querySelector('link[data-original-font-href]');
 if(mode==='original'&&originalFont)originalFont.href=originalFont.dataset.originalFontHref;

 document.addEventListener('DOMContentLoaded',()=>{
  if(requested!=='original'&&requested!=='table-mono')return;
  for(const link of document.querySelectorAll('a[data-font-mode-link]')){
   const url=new URL(link.getAttribute('href'),location.href);
   url.searchParams.set('font',mode);
   link.href=url.href;
  }
 });
})();
