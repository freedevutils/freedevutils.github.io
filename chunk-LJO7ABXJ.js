import{a as pt}from"./chunk-AV4IOFSV.js";import"./chunk-FK6H3RFT.js";import{a as bt}from"./chunk-LTCP7RHY.js";import{a as tt,b as et}from"./chunk-UHIATIKI.js";import{b as nt,c as ot,d as it}from"./chunk-WE5SGXFQ.js";import{a as st,b as mt}from"./chunk-YJBLCQJC.js";import"./chunk-7RWCIHFI.js";import{b as dt,c as ct}from"./chunk-W2SJZXF2.js";import{a as lt}from"./chunk-NZGZMVJX.js";import"./chunk-ATQNA525.js";import{b as W,f as R}from"./chunk-PC5AFEOT.js";import{d as rt,i as at}from"./chunk-ISST2DTI.js";import"./chunk-SGYCFQGT.js";import"./chunk-3FFGDGS5.js";import"./chunk-TR2CRECI.js";import{c as J,g as X,j as K,v as Z}from"./chunk-7OLSMWCO.js";import{a as A,b as z,c as U,f as j,g as Q}from"./chunk-KNN6E3CH.js";import{Ab as D,Ac as B,Ba as O,Bb as L,Cd as Y,Dd as q,Eb as F,Ed as G,Fa as m,Fb as a,Fd as $,Hb as V,Ja as k,Kb as w,Lb as y,Mb as P,Qa as S,Va as H,ab as u,ga as c,ha as s,kb as o,lb as i,mb as M,qb as I,qc as N,sb as p,zb as E}from"./chunk-FTUPRX5U.js";import{e as ht,f as T}from"./chunk-4IDNTCH7.js";var gt=ht(bt());var Ct=["previewContainer"];function _t(f,e){f&1&&(o(0,"mat-icon"),a(1,"picture_as_pdf"),i())}function Mt(f,e){f&1&&M(0,"mat-spinner",27)}var ft=class f{constructor(e){this.snackBar=e}snackBar;htmlContent=`<!DOCTYPE html>
<html>
<head>
    <title>Sample Document</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { color: #333; }
        p { line-height: 1.6; }
    </style>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a sample HTML document that will be converted to PDF.</p>
    <p>You can edit this HTML and see the preview update in real-time.</p>
</body>
</html>`;isConverting=!1;selectedTabIndex=0;previewContainer;onFileSelected(e){let n=e.target.files[0];if(n&&n.type==="text/html"){let t=new FileReader;t.onload=r=>{this.htmlContent=r.target?.result,this.updatePreview(),this.showNotification("HTML file loaded successfully")},t.readAsText(n)}else this.showNotification("Please select a valid HTML file",!0)}updatePreview(){if(this.previewContainer){let e=this.previewContainer.nativeElement.querySelector("iframe");if(e){let n=new Blob([this.htmlContent],{type:"text/html"}),t=URL.createObjectURL(n);e.src=t}}}convertToPdf(){return T(this,null,function*(){if(!this.htmlContent.trim()){this.showNotification("Please enter HTML content to convert",!0);return}this.isConverting=!0;try{let e=document.createElement("div");e.style.position="absolute",e.style.left="-9999px",e.style.top="-9999px",e.style.width="800px",e.style.backgroundColor="#ffffff",e.style.fontFamily="Arial, sans-serif",e.style.fontSize="14px",e.style.lineHeight="1.4",e.style.padding="20px";let n=document.createElement("iframe");n.style.width="100%",n.style.height="auto",n.style.border="none",n.style.backgroundColor="transparent",e.appendChild(n),document.body.appendChild(e);let t=n.contentDocument||n.contentWindow?.document;if(t&&(t.open(),t.write(this.htmlContent),t.close(),yield new Promise(g=>{let x=()=>{t.body&&t.body.innerHTML.trim()?g(void 0):setTimeout(x,50)};n.onload=()=>g(void 0),x(),setTimeout(()=>g(void 0),2e3)}),t.body)){let g=t.body.scrollHeight||t.body.offsetHeight;n.style.height=g+40+"px",e.style.height=n.style.height}console.log("HTML Content:",this.htmlContent),console.log("Iframe height:",n.style.height);let r=yield(0,gt.default)(e,{scale:1.5,useCORS:!0,allowTaint:!0,backgroundColor:"#ffffff",width:800,height:parseInt(e.style.height)||600,scrollX:0,scrollY:0,logging:!1,foreignObjectRendering:!1});console.log("Canvas dimensions:",r.width,"x",r.height),document.body.removeChild(e);let d=r.toDataURL("image/png"),l=new pt({orientation:"portrait",unit:"mm",format:"a4"}),C=210,v=295,h=r.height*C/r.width,b=h,_=0;for(l.addImage(d,"PNG",0,_,C,h),b-=v;b>=0;)_=b-h,l.addPage(),l.addImage(d,"PNG",0,_,C,h),b-=v;let ut=`html-to-pdf-${new Date().getTime()}.pdf`;l.save(ut),this.showNotification("PDF generated and downloaded successfully")}catch(e){console.error("PDF conversion error:",e),this.showNotification("Error converting HTML to PDF: "+e,!0)}finally{this.isConverting=!1}})}clear(){this.htmlContent="",this.updatePreview()}loadSample(){this.htmlContent=`<!DOCTYPE html>
<html>
<head>
    <title>Sample Invoice</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 10px; }
        .invoice-details { margin: 20px 0; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        .total { font-weight: bold; font-size: 18px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>INVOICE</h1>
        <p>Invoice #12345</p>
        <p>Date: ${new Date().toLocaleDateString()}</p>
    </div>

    <div class="invoice-details">
        <p><strong>Bill To:</strong> John Doe</p>
        <p><strong>Address:</strong> 123 Main St, City, State 12345</p>
    </div>

    <table>
        <thead>
            <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Web Development Services</td>
                <td>40</td>
                <td>$75.00</td>
                <td>$3,000.00</td>
            </tr>
            <tr>
                <td>Hosting Setup</td>
                <td>1</td>
                <td>$150.00</td>
                <td>$150.00</td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="total">
                <td colspan="3">Total Amount</td>
                <td>$3,150.00</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>`,this.updatePreview(),this.showNotification("Sample HTML loaded")}showNotification(e,n=!1){this.snackBar.open(e,"Close",{duration:3e3,panelClass:n?"error-snackbar":"success-snackbar"})}static \u0275fac=function(n){return new(n||f)(k(st))};static \u0275cmp=S({type:f,selectors:[["app-html-to-pdf"]],viewQuery:function(n,t){if(n&1&&E(Ct,5),n&2){let r;D(r=L())&&(t.previewContainer=r.first)}},decls:58,vars:7,consts:[["fileInput",""],["previewContainer",""],[1,"tool-container"],[1,"gradient-toolbar"],[1,"content"],[1,"file-upload-card"],[1,"upload-section"],["type","file","accept",".html,.htm",2,"display","none",3,"change"],["mat-raised-button","","color","primary",3,"click"],[1,"upload-text"],[1,"editor-card"],[3,"selectedIndexChange","selectedTabChange","selectedIndex"],["label","Edit HTML"],[1,"tab-content"],["appearance","outline",1,"full-width"],["matInput","","rows","15","placeholder","Enter your HTML code here...",3,"ngModelChange","input","ngModel"],["label","Preview"],[1,"preview-container"],["sandbox","allow-scripts allow-same-origin",1,"preview-iframe",3,"srcdoc"],[1,"button-group"],["mat-raised-button","","color","primary",3,"click","disabled"],[4,"ngIf"],["diameter","20","class","spinner",4,"ngIf"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","",3,"click"],[1,"info-card"],[1,"instructions-list"],["diameter","20",1,"spinner"]],template:function(n,t){if(n&1){let r=I();o(0,"div",2)(1,"mat-toolbar",3),a(2,"HTML to PDF Converter"),i(),o(3,"div",4)(4,"mat-card",5)(5,"mat-card-content")(6,"div",6)(7,"input",7,0),p("change",function(l){return c(r),s(t.onFileSelected(l))}),i(),o(9,"button",8),p("click",function(){c(r);let l=F(8);return s(l.click())}),o(10,"mat-icon"),a(11,"file_upload"),i(),a(12," Upload HTML File "),i(),o(13,"span",9),a(14,"or edit HTML below"),i()()()(),o(15,"mat-card",10)(16,"mat-card-content")(17,"mat-tab-group",11),P("selectedIndexChange",function(l){return c(r),y(t.selectedTabIndex,l)||(t.selectedTabIndex=l),s(l)}),p("selectedTabChange",function(){return c(r),s(t.selectedTabIndex===1&&t.updatePreview())}),o(18,"mat-tab",12)(19,"div",13)(20,"mat-form-field",14)(21,"mat-label"),a(22,"HTML Content"),i(),o(23,"textarea",15),P("ngModelChange",function(l){return c(r),y(t.htmlContent,l)||(t.htmlContent=l),s(l)}),p("input",function(){return c(r),s(t.selectedTabIndex===1&&t.updatePreview())}),i()()()(),o(24,"mat-tab",16)(25,"div",13)(26,"div",17,1),M(28,"iframe",18),i()()()()()(),o(29,"div",19)(30,"button",20),p("click",function(){return c(r),s(t.convertToPdf())}),H(31,_t,2,0,"mat-icon",21)(32,Mt,1,0,"mat-spinner",22),a(33),i(),o(34,"button",23),p("click",function(){return c(r),s(t.loadSample())}),o(35,"mat-icon"),a(36,"code"),i(),a(37," Load Sample "),i(),o(38,"button",24),p("click",function(){return c(r),s(t.clear())}),o(39,"mat-icon"),a(40,"clear"),i(),a(41," Clear "),i()(),o(42,"mat-card",25)(43,"mat-card-header")(44,"mat-card-title"),a(45,"Instructions"),i()(),o(46,"mat-card-content")(47,"ul",26)(48,"li"),a(49,"Upload an HTML file or edit HTML directly in the editor"),i(),o(50,"li"),a(51,"Use the Preview tab to see how your HTML will look"),i(),o(52,"li"),a(53,'Click "Convert to PDF" to generate and download the PDF file'),i(),o(54,"li"),a(55,"The PDF will be generated with A4 page size and high quality"),i(),o(56,"li"),a(57,"Complex CSS and JavaScript may not render perfectly in the PDF"),i()()()()()()}n&2&&(m(17),w("selectedIndex",t.selectedTabIndex),m(6),w("ngModel",t.htmlContent),m(5),u("srcdoc",t.htmlContent,O),m(2),u("disabled",t.isConverting),m(),u("ngIf",!t.isConverting),m(),u("ngIf",t.isConverting),m(),V(" ",t.isConverting?"Converting...":"Convert to PDF"," "))},dependencies:[B,N,Z,J,X,K,$,G,lt,at,rt,ct,dt,R,W,q,Y,Q,A,U,j,z,mt,it,nt,ot,et,tt],styles:['[_nghost-%COMP%]{display:block;--bg-color: #f5f5f5;--text-color: #2c3e50;--card-bg: rgba(255, 255, 255, .4);--gradient-start: #6c5ce7;--gradient-end: #a29bfe}html[data-theme="dark"][_nghost-%COMP%], html[data-theme="dark"]   [_nghost-%COMP%]{--bg-color: #1a1a2e;--text-color: #e0e0e0;--card-bg: rgba(255, 255, 255, .08);--gradient-start: #667eea;--gradient-end: #764ba2}.tool-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh;background-color:var(--bg-color);color:var(--text-color)}.content[_ngcontent-%COMP%]{padding:2rem;flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:1.5rem}.full-width[_ngcontent-%COMP%]{width:100%}.upload-section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;flex-wrap:wrap}.upload-text[_ngcontent-%COMP%]{color:#ffffffb3;font-size:14px}.button-group[_ngcontent-%COMP%]{display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;align-items:center}.tab-content[_ngcontent-%COMP%]{padding:1rem 0;min-height:400px}.preview-container[_ngcontent-%COMP%]{width:100%;height:400px;border:1px solid rgba(255,255,255,.2);border-radius:8px;overflow:hidden;background:#ffffff0d}.preview-iframe[_ngcontent-%COMP%]{width:100%;height:100%;border:none;background:#fff}.instructions-list[_ngcontent-%COMP%]{color:#fffc;padding-left:1.5rem}.instructions-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem;line-height:1.5}mat-card[_ngcontent-%COMP%]{width:100%;background:#ffffff0d!important;border:1px solid rgba(255,255,255,.15)!important;backdrop-filter:blur(10px)!important;color:#fff}.file-upload-card[_ngcontent-%COMP%]{background:#667eea1a!important;border:1px solid rgba(102,126,234,.3)!important}.editor-card[_ngcontent-%COMP%]{flex:1}.info-card[_ngcontent-%COMP%]{background:#ffffff08!important}textarea[_ngcontent-%COMP%]{font-family:Courier New,monospace;resize:vertical;min-height:350px}.spinner[_ngcontent-%COMP%]{margin-right:8px}input[type=text][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], .mat-mdc-input-element[_ngcontent-%COMP%], .mat-input-element[_ngcontent-%COMP%]{background:#ffffff0d!important;border:1px solid rgba(255,255,255,.2)!important;color:#fff!important;border-radius:4px;font-family:Courier New,monospace;transition:border-color .2s,background-color .2s}input[type=text][_ngcontent-%COMP%]::placeholder, input[type=email][_ngcontent-%COMP%]::placeholder, input[type=password][_ngcontent-%COMP%]::placeholder, input[type=number][_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder, .mat-mdc-input-element[_ngcontent-%COMP%]::placeholder, .mat-input-element[_ngcontent-%COMP%]::placeholder{color:#fff6!important;opacity:1}input[type=text][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, .mat-mdc-input-element[_ngcontent-%COMP%]:focus, .mat-input-element[_ngcontent-%COMP%]:focus{outline:none;border-color:#667eea!important;background:#ffffff14!important;box-shadow:0 0 0 2px #667eea33}.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], button[type=submit][_ngcontent-%COMP%], button.mat-raised-button[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea66,#764ba266)!important;color:#fff!important;border:1px solid rgba(102,126,234,.6)!important;font-weight:600;gap:8px;transition:all .3s ease}.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, button[type=submit][_ngcontent-%COMP%]:hover, button.mat-raised-button[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#667eea99,#764ba299)!important;border-color:#667eea!important}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#ffffff0d}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#667eea80;border-radius:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#667eeacc}  .mat-mdc-tab-group{--mdc-tab-indicator-active-indicator-color: #667eea}  .mat-mdc-tab{color:#ffffffb3!important}  .mat-mdc-tab.mat-mdc-tab-active{color:#667eea!important}  .mat-mdc-tab-header{border-bottom:1px solid rgba(255,255,255,.1)}']})};export{ft as HtmlToPdfComponent};
