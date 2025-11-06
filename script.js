// Typing effect lines (Myanmar)
const lines = [
  "TZVPN PRO",
  "ထိုင်းအင်တာနက် ဝန်ဆောင်မှု",
  "Fast • Secure • Stable"
];

const typingEl = document.getElementById("typing");
let li = 0, ci = 0, deleting = false;

function typeLoop(){
  const current = lines[li];
  typingEl.textContent = current.slice(0, ci);
  if(!deleting){
    ci++;
    if(ci > current.length + 8){ // hold a bit
      deleting = true;
    }
  }else{
    ci--;
    if(ci === 0){
      deleting = false;
      li = (li + 1) % lines.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 70);
}
typeLoop();

// 5s splash -> main
setTimeout(() => {
  const splash = document.getElementById("splash");
  splash.classList.add("fade-out");
  const main = document.getElementById("main");
  setTimeout(()=>{ main.classList.remove("hidden"); requestAnimationFrame(()=>main.classList.add("show")); }, 550);
}, 5000);

// Button action
document.addEventListener("click", (e)=>{
  if(e.target.id === "connectBtn"){
    alert("🔗 Connecting to TZVPN Server…");
  }
  <script>
  const lines = ["U PHOE KAUNT","ထိုင်းအင်တာနက် ဝန်ဆောင်မှု","Fast • Secure • Stable"];
  const el = document.getElementById("typing"); let li=0,ci=0,del=false;
  (function loop(){ const t=lines[li]; el.textContent=t.slice(0,ci);
    if(!del){ci++; if(ci>t.length+8) del=true;} else {ci--; if(ci===0){del=false; li=(li+1)%lines.length;}}
    setTimeout(loop, del?40:70);
  })();
  setTimeout(()=>{ const s=document.getElementById("splash"); const m=document.getElementById("main");
    s.classList.add("fade-out"); setTimeout(()=>{m.classList.remove("hidden"); m.classList.add("show");},600);
  },5000);
</script>
});