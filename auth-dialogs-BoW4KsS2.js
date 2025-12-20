function u(){return new Promise(i=>{const e=document.createElement("div");e.className="modal",e.style.display="block";const n=document.createElement("div");n.className="modal-content",n.style.maxWidth="500px";const c=document.createElement("span");c.className="close",c.innerHTML="&times;",c.onclick=()=>{document.body.removeChild(e),i(null)};const p=document.createElement("h2");p.textContent="GitHub Token Required";const r=document.createElement("div");r.innerHTML=`
      <ol>
        <li>Go to <a href="https://github.com/settings/tokens" target="_blank">GitHub Personal Access Tokens</a></li>
        <li>Click "Generate new token" and select "Generate new token (classic)"</li>
        <li>Give it a name like "fnCAD Gist Access"</li>
        <li>Select only the "gist" scope</li>
        <li>Click "Generate token" at the bottom</li>
        <li>Copy the token and paste it below</li>
      </ol>
    `;const a=document.createElement("div");a.style.marginBottom="20px";const d=document.createElement("label");d.textContent="GitHub Personal Access Token:",d.style.display="block",d.style.marginBottom="5px";const t=document.createElement("input");t.type="text",t.placeholder="ghp_...",t.style.width="100%",t.style.padding="8px",t.style.marginBottom="10px",a.appendChild(d),a.appendChild(t);const s=document.createElement("button");s.textContent="Save Token",s.onclick=()=>{const o=t.value.trim();o?(document.body.removeChild(e),i(o)):alert("Please enter a valid token")};const l=document.createElement("button");l.textContent="Cancel",l.style.marginLeft="10px",l.style.backgroundColor="#f44336",l.onclick=()=>{document.body.removeChild(e),i(null)};const m=document.createElement("div");m.appendChild(s),m.appendChild(l),n.appendChild(c),n.appendChild(p),n.appendChild(r),n.appendChild(a),n.appendChild(m),e.appendChild(n),document.body.appendChild(e),setTimeout(()=>{t.focus()},100),t.addEventListener("keypress",o=>{o.key==="Enter"&&s.click()}),window.onclick=o=>{o.target===e&&(document.body.removeChild(e),i(null))}})}export{u as showGistAuthDialog};
//# sourceMappingURL=auth-dialogs-BoW4KsS2.js.map
