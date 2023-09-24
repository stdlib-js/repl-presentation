"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var x=u(function(Ni,O){
function Yr(r,e,n,t){var i,s;for(i="",s=0;s<n;s++)i+=e;for(i+=r,s=0;s<t;s++)i+=e;return i}O.exports=Yr
});var k=u(function(Oi,B){
var Vr=x();function Kr(r,e,n,t){var i=r-n,s=i/2|0;return Vr(e,t,s,i-s)}B.exports=Kr
});var J=u(function(Bi,M){
var zr=x();function Xr(r,e,n,t,i){var s,a;return a=i/2|0,s=r-a-n,zr(e,t,a,s)}M.exports=Xr
});var W=u(function(ki,I){
var $r=x();function Qr(r,e,n,t,i){var s,a;return s=(i+1)/2|0,a=r-s-n,$r(e,t,a,s)}I.exports=Qr
});var U=u(function(Mi,G){
var Zr=x();function en(r,e,n,t){var i=r-n;return Zr(e,t,0,i)}G.exports=en
});var A=u(function(Ji,H){
var rn=x();function nn(r,e,n,t){var i=r-n;return rn(e,t,i,0)}H.exports=nn
});var K=u(function(Ii,V){
var T=require('@stdlib/string-starts-with/dist'),tn=k(),Y=J(),sn=W(),an=U(),on=A();function un(r,e,n,t,i){return T(e,"<< ")?an(r,e.substring(3),n-3,t):T(e,">> ")?on(r,e.substring(3),n-3,t):T(e,"< ")?Y(r,e.substring(2),n-2,t,i):T(e,"> ")?sn(r,e.substring(2),n-2,t,i):T(e,"| ")?tn(r,e.substring(2),n-2,t):Y(r,e,n,t,i)}V.exports=un
});var X=u(function(Wi,z){
var ln={BLACK:"\x1B[30m",BLACK_B:"\x1B[40m",BLUE:"\x1B[34m",BLUE_B:"\x1B[44m",BOLD:"\x1B[1m",CYAN:"\x1B[36m",CYAN_B:"\x1B[46m",GREEN:"\x1B[32m",GREEN_B:"\x1B[42m",MAGENTA:"\x1B[35m",MAGENTA_B:"\x1B[45m",RED:"\x1B[31m",RED_B:"\x1B[41m",RESET:"\x1B[0m",REVERSED:"\x1B[7m",UNDERLINED:"\x1B[4m",WHITE:"\x1B[37m",WHITE_B:"\x1B[47m",YELLOW:"\x1B[33m",YELLOW_B:"\x1B[43m"};z.exports=ln
});var R=u(function(Gi,Q){
var dn=require('@stdlib/assert-has-own-property/dist'),$=X();function hn(r){return dn($,r)?$[r]:null}Q.exports=hn
});var ee=u(function(Ui,Z){
var cn=require('@stdlib/string-repeat/dist'),pn=R(),fn=x(),L=pn("RESET"),mn=L[0],vn=L[L.length-1],gn="-",_n=/[\uD800-\uDBFF]/;function wn(r,e,n,t,i){var s,a,o,d,p,c,f,E,v;if(e===""&&(e=gn,n=e.length),s="",o=r-i,E=o/n|0,p=cn(e,E),c=o-n*E,c>0)for(v=0;v<e.length;v++){if(f=e[v],f===vn){a&&(a=!1),p+=f;continue}if(a){p+=f;continue}if(f===mn){p+=f,a=!0,s+=L;continue}if(_n.test(f)){if(c<=1){p+=t;break}p+=f,c-=1;continue}if(p+=f,c-=1,c===0)break}return d=i/2|0,fn(p+s,t,d,i-d)}Z.exports=wn
});var ie=u(function(Hi,te){
var re=require('@stdlib/string-starts-with/dist'),En=K(),ne=ee();function Sn(r,e,n,t){var i,s,a;for(e=e.slice(),a=0;a<e.length;a++)i=e[a].text,s=e[a].length,re(i,"//")?i=ne(r,i.substring(2),s-2,n,0):re(i,"/")?i=ne(r,i.substring(1),s-1,n,t):i=En(r,i,s,n,t),e[a]={text:i,length:r};return e}te.exports=Sn
});var ae=u(function(Yi,se){
function xn(){var r={borderTop:"*",borderBottom:"*",borderLeft:"* ",borderRight:" *",newline:"\n",whitespace:" ",width:null,height:null,counter:!1,workspace:"presentation",autoClear:!0,loop:!1};return r}se.exports=xn
});var le=u(function(Vi,ue){
var bn=require('@stdlib/assert-is-plain-object/dist'),_=require('@stdlib/assert-has-own-property/dist'),b=require('@stdlib/assert-is-string/dist').isPrimitive,j=require('@stdlib/assert-is-boolean/dist').isPrimitive,oe=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,g=require('@stdlib/error-tools-fmtprodmsg/dist');function qn(r,e){return bn(e)?_(e,"borderTop")&&(r.borderTop=e.borderTop,!b(e.borderTop))?new TypeError(g('0sx2W',"borderTop",e.borderTop)):_(e,"borderBottom")&&(r.borderBottom=e.borderBottom,!b(e.borderBottom))?new TypeError(g('0sx2W',"borderBottom",e.borderBottom)):_(e,"borderLeft")&&(r.borderLeft=e.borderLeft,!b(e.borderLeft))?new TypeError(g('0sx2W',"borderLeft",e.borderLeft)):_(e,"borderRight")&&(r.borderRight=e.borderRight,!b(e.borderRight))?new TypeError(g('0sx2W',"borderRight",e.borderRight)):_(e,"counter")&&(r.counter=e.counter,e.counter!=="progress"&&!j(e.counter))?new TypeError(g('0sx8G',"counter",e.counter)):_(e,"width")&&(r.width=e.width,e.width!==null&&!oe(e.width))?new TypeError(g('0sx8H',"width",e.width)):_(e,"height")&&(r.height=e.height,e.height!==null&&!oe(e.height))?new TypeError(g('0sx8H',"height",e.height)):_(e,"workspace")&&(r.workspace=e.workspace,!b(e.workspace))?new TypeError(g('0sx2W',"workspace",e.workspace)):_(e,"load")&&(r.load=e.load,!b(e.load))?new TypeError(g('0sx2W',"load",e.load)):_(e,"autoClear")&&(r.autoClear=e.autoClear,!j(e.autoClear))?new TypeError(g('0sx2o',"autoClear",e.autoClear)):_(e,"loop")&&(r.loop=e.loop,!j(e.loop))?new TypeError(g('0sx2o',"loop",e.loop)):null:new TypeError(g('0sx2V',e));}ue.exports=qn
});var he=u(function(Ki,de){
var Tn={b:"BLUE",c:"CYAN",g:"GREEN",k:"BLACK",m:"MAGENTA",r:"RED",w:"WHITE",y:"YELLOW",B:"BLUE_B",C:"CYAN_B",G:"GREEN_B",K:"BLACK_B",M:"MAGENTA_B",R:"RED_B",W:"WHITE_B",Y:"YELLOW_B","!":"REVERSED","*":"BOLD",_:"UNDERLINED"};de.exports=Tn
});var fe=u(function(zi,pe){
var Cn=require('@stdlib/assert-has-own-property/dist'),Rn=R(),ce=he();function Ln(r){return Cn(ce,r)?Rn(ce[r]):null}pe.exports=Ln
});var ge=u(function(Xi,ve){
var Pn=require('@stdlib/string-base-replace/dist'),yn=fe(),An=R(),me=An("RESET");function jn(r){var e,n,t;return e=/(\\.)/g,t=0,n="",r.text=Pn(r.text,e,i),r.text+=n,r.length+=t,r;function i(s,a){var o=a[1],d;return d=yn(o),d?(n=me,t-=2,d):o==="s"?(t-=2,me):o==="\\"?(t-=1,"\\\\"):"\\\\"+o}}ve.exports=jn
});var Ee=u(function($i,we){
var Dn=require('@stdlib/string-base-replace/dist'),Fn=require('@stdlib/assert-has-own-property/dist'),Nn=require('@stdlib/datasets-emoji-code-picto/dist'),_e=Nn();function On(r){var e,n;return e=/:([\w+\-]+)(?::{2}([\w+\-,\s]+))?:/g,n=0,r.text=Dn(r.text,e,t),r.length+=n,r;function t(i,s,a){var o,d;return o=":"+s+":",a&&(a=a.split(/,\s*/).join(", "),o+=":"+a+":"),Fn(_e,o)&&(d=_e[o],d.length===2)?(n-=i.length-2,d):i}}we.exports=On
});var Te=u(function(Qi,qe){
var Bn=require('@stdlib/regexp-eol/dist').REGEXP,Se=require('@stdlib/string-trim/dist'),kn=require('@stdlib/assert-has-own-property/dist'),Mn=require('@stdlib/math-base-special-max/dist'),Jn=ge(),In=Ee(),Wn="--",xe="~~~",Gn=/^(\s*)```\s*([a-z]+)?$/,Un="    ",be={js:"javascript",javascript:"javascript"};function Hn(r){var e,n,t,i,s,a,o,d,p,c,f;for(o={raw:r,fragments:[],code:[],notes:"",length:0,maxLength:0},r=r.split(xe),r.length>1&&(o.notes+=Se(r.slice(1).join(xe))),r=r[0],i=r.split(Wn),c=0;c<i.length;c++){for(t=Se(i[c]).split(Bn),c===0?d=[]:d=o.fragments[c-1].slice(),n=!1,f=0;f<t.length;f++){if(s=t[f],p=s.match(Gn),p){n===!1?(n=!0,e=p[1],p[2]?kn(be,p[2])?a=be[p[2]]:a="unknown":a="javascript",o.code.push({lang:a,src:[]})):n=!1;continue}n&&(s=s.slice(e.length),o.code[o.code.length-1].src.push(s),s=Un+s),s={text:s,length:s.length},s=Jn(s),s=In(s),d.push(s)}o.fragments.push(d)}for(o.length=d.length,c=0;c<d.length;c++)o.maxLength=Mn(o.maxLength,d[c].length);return o}qe.exports=Hn
});var Re=u(function(Zi,Ce){
var Yn=Te(),Vn="---";function Kn(r,e){var n,t;for(n=e.split(Vn),t=0;t<n.length;t++)r.push(Yn(n[t]));return r}Ce.exports=Kn
});var Pe=u(function(es,Le){
var zn=A();function Xn(r,e,n,t,i){var s=t.toString();return n==="progress"&&(s+="/"+i),s+=" ",zn(r,s,s.length,e)}Le.exports=Xn
});var Ae=u(function(rs,ye){
var $n=require('@stdlib/string-repeat/dist');function Qn(r,e,n,t){var i;return t.length===0?i="":i=$n(e,r),n+i+t}ye.exports=Qn
});var De=u(function(ns,je){
var Zn=require('@stdlib/string-repeat/dist');function et(r){return e;function e(){var n=Zn(r._opts.newline,r.height+1);r._repl._ostream.write(n),r._repl.once("drain",t);function t(){var i="\x1B[1T\x1B[1G";r._repl._ostream.write(i)}}}je.exports=et
});var Ne=u(function(ts,Fe){
function rt(r){return e;function e(){return r.currentSlide}}Fe.exports=rt
});var Be=u(function(is,Oe){
function nt(r){return e;function e(){r._repl.once("drain",n);function n(){r.end().show()}}}Oe.exports=nt
});var Me=u(function(ss,ke){
function tt(r){return e;function e(){r._repl.once("drain",n);function n(){r.first().show()}}}ke.exports=tt
});var Ie=u(function(as,Je){
function it(r){return e;function e(){r._repl.once("drain",n);function n(){r.firstFragment().show()}}}Je.exports=it
});var Ge=u(function(os,We){
var st=require("debug"),at=require('@stdlib/assert-is-integer/dist').isPrimitive,ot=require('@stdlib/error-tools-fmtprodmsg/dist'),ut=st("repl:presentation:command:jump");function lt(r){return e;function e(n){var t;if(!at(n)){t=new TypeError(ot('0sx8A',n)),ut("Error: %s",t.message),r._repl._ostream.write("Error: "+t.message+"\n");return}r._repl.once("drain",i);function i(){r.jump(n).show()}}}We.exports=lt
});var He=u(function(us,Ue){
var dt=require("debug"),ht=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,ct=require('@stdlib/error-tools-fmtprodmsg/dist'),pt=dt("repl:presentation:command:jump_to");function ft(r){return e;function e(n){var t;if(!ht(n)){t=new TypeError(ct('0sx8B',n)),pt("Error: %s",t.message),r._repl._ostream.write("Error: "+t.message+"\n");return}r._repl.once("drain",i);function i(){r.jumpTo(n).show()}}}Ue.exports=ft
});var Ve=u(function(ls,Ye){
function mt(r){return e;function e(){r._repl.once("drain",n);function n(){r.last().show()}}}Ye.exports=mt
});var ze=u(function(ds,Ke){
function vt(r){return e;function e(){r._repl.once("drain",n);function n(){r.lastFragment().show()}}}Ke.exports=vt
});var Qe=u(function(hs,$e){
var gt=require("debug"),_t=require('@stdlib/assert-is-string/dist').isPrimitive,wt=require('@stdlib/error-tools-fmtprodmsg/dist'),Xe=gt("repl:presentation:command:load_presentation");function Et(r){return e;function e(n){var t;if(!_t(n)){t=new TypeError(wt('0sx3B',n)),Xe("Error: %s",t.message),r._repl._ostream.write("Error: "+t.message+"\n");return}r._repl.once("drain",i);function i(){var s;try{r.load(n).show()}catch(a){Xe("Error: %s",a.message),s=r._repl._prompt().length,r._repl._ostream.write("\x1B[1A\x1B["+s+"DError: "+a.message+"\x1B[0J\n"),r._repl._displayPrompt()}}}}$e.exports=Et
});var er=u(function(cs,Ze){
function St(r){return e;function e(){r._repl.once("drain",n);function n(){r.next().show()}}}Ze.exports=St
});var nr=u(function(ps,rr){
function xt(r){return e;function e(){r._repl.once("drain",n);function n(){r.nextSlide().show()}}}rr.exports=xt
});var ir=u(function(fs,tr){
function bt(r){return e;function e(){return r.length}}tr.exports=bt
});var ar=u(function(ms,sr){
var qt=["","    pres()                h()    Print presentation help text.","","    next()                n()    Move to the next slide or slide fragment.","    nextSlide()           N()    Move to the next slide.","    prev()                p()    Move to the previous slide or slide fragment.","    prevSlide()           P()    Move to the previous slide.","","    jump()                g()    Jump a specified number of slides.","    jumpTo()              j()    Jump to a specified slide.","    first()               f()    Jump to the first slide.","    last()                l()    Jump to the first fragment of the last slide.","    end()                 L()    Jump to the last fragment of the last slide.","","    firstFragment()       ff()   Jump to the first slide fragment.","    lastFragment()        lf()   Jump to the last slide fragment.","","    blank()               b()    Render a blank screen.","    redraw()              rd()   Redraw the current slide.","","    runSlide()            r()    Run slide code.","","    watch()               w()    Watch a presentation file for changes.","    unwatch()             uw()   Stop watching a presentation file for changes.","","    loadPresentation()    lp()   Load a presentation.","    reloadPresentation()  rlp()  Reload the current presentation.","    renderSlide()                Render the current slide.","","    currentSlide                 Current slide index.","    numSlides                    Number of slides.","",""].join("\n");sr.exports=qt
});var ur=u(function(vs,or){
var Tt=ar();function Ct(r){return e;function e(){r._repl._ostream.write(Tt)}}or.exports=Ct
});var dr=u(function(gs,lr){
function Rt(r){return e;function e(){r._repl.once("drain",n);function n(){r.prev().show()}}}lr.exports=Rt
});var cr=u(function(_s,hr){
function Lt(r){return e;function e(){r._repl.once("drain",n);function n(){r.prevSlide().show()}}}hr.exports=Lt
});var fr=u(function(ws,pr){
function Pt(r){return e;function e(){r._repl.once("drain",n);function n(){r.show()}}}pr.exports=Pt
});var vr=u(function(Es,mr){
var yt=require("debug"),At=yt("repl:presentation:command:reload_presentation");function jt(r){return e;function e(){r._repl.once("drain",n);function n(){var t;try{r.reload().show()}catch(i){At("Error: %s",i.message),t=r._repl._prompt().length,r._repl._ostream.write("\x1B[1A\x1B["+t+"DError: "+i.message+"\x1B[0J\n"),r._repl._displayPrompt()}}}}mr.exports=jt
});var _r=u(function(Ss,gr){
function Dt(r){return e;function e(){return r.render()}}gr.exports=Dt
});var Er=u(function(xs,wr){
var Ft=require('@stdlib/utils-noop/dist');function Nt(r){return e;function e(){r._repl.once("drain",n);function n(){r.run(Ft)}}}wr.exports=Nt
});var xr=u(function(bs,Sr){
function Ot(r){return e;function e(n){if(arguments.length){r.unwatch(n);return}r.unwatch()}}Sr.exports=Ot
});var qr=u(function(qs,br){
function Bt(r){return e;function e(){r.watch()}}br.exports=Bt
});var Cr=u(function(Ts,Tr){
var kt=De(),Mt=Ne(),Jt=Be(),It=Me(),Wt=Ie(),Gt=Ge(),Ut=He(),Ht=Ve(),Yt=ze(),Vt=Qe(),Kt=er(),zt=nr(),Xt=ir(),$t=ur(),Qt=dr(),Zt=cr(),ei=fr(),ri=vr(),ni=_r(),ti=Er(),ii=xr(),si=qr();function ai(r){var e;return e=[],e.push(["blank","b",kt(r),!1]),e.push(["currentSlide","",Mt(r),!0]),e.push(["end","L",Jt(r),!1]),e.push(["first","f",It(r),!1]),e.push(["firstFragment","ff",Wt(r),!1]),e.push(["jump","g",Gt(r),!1]),e.push(["jumpTo","j",Ut(r),!1]),e.push(["last","l",Ht(r),!1]),e.push(["lastFragment","lf",Yt(r),!1]),e.push(["loadPresentation","lp",Vt(r),!1]),e.push(["next","n",Kt(r),!1]),e.push(["nextSlide","N",zt(r),!1]),e.push(["numSlides","",Xt(r),!0]),e.push(["pres","h",$t(r),!1]),e.push(["prev","p",Qt(r),!1]),e.push(["prevSlide","P",Zt(r),!1]),e.push(["redraw","rd",ei(r),!1]),e.push(["reloadPresentation","rlp",ri(r),!1]),e.push(["renderSlide","",ni(r),!1]),e.push(["runSlide","r",ti(r),!1]),e.push(["unwatch","uw",ii(r),!1]),e.push(["watch","w",si(r),!1]),e}Tr.exports=ai
});var jr=u(function(Cs,Ar){
var oi=require("debug"),Rr=require('@stdlib/assert-has-own-property/dist'),Lr=require('@stdlib/utils-define-configurable-read-only-property/dist'),Pr=require('@stdlib/utils-define-configurable-read-only-accessor/dist'),yr=oi("repl:presentation:set_commands");function ui(r,e){var n,t;for(t=0;t<e.length;t++)n=e[t],Rr(r,n[0])?yr("Skipping command as global context property `"+n[0]+"` is already assigned."):n[3]?Pr(r,n[0],n[2]):Lr(r,n[0],n[2]),n[1]&&(Rr(r,n[1])?yr("Skipping command shortcut as global context property `"+n[1]+"` is already assigned."):n[3]?Pr(r,n[1],n[2]):Lr(r,n[1],n[2]));return r}Ar.exports=ui
});var Dr=u(function(Rs,li){li.exports={blank:"\nblank()\n    Renders a blank screen.\n\n    Examples\n    --------\n    > blank();\n\n    See Also\n    --------\n    next, nextSlide, prev, prevSlide, redraw\n\n",currentSlide:"\ncurrentSlide\n    Returns the current presentation slide index.\n\n    The returned index is the nominal (i.e., one-based) slide index.\n\n    Returns\n    -------\n    idx: integer\n        Current presentation slide index.\n\n    Examples\n    --------\n    > currentSlide\n\n    See Also\n    --------\n    jumpTo, next, numSlides, prev\n\n",end:"\nend()\n    Jumps to the last fragment of the last slide.\n\n    Examples\n    --------\n    > end();\n\n    See Also\n    --------\n    first, jumpTo, last, next, prev\n\n",first:"\nfirst()\n    Jumps to the first slide.\n\n    Examples\n    --------\n    > first();\n\n    See Also\n    --------\n    end, jumpTo, last, next, prev\n\n",firstFragment:"\nfirstFragment()\n    Jumps to the first fragment of the current slide.\n\n    Examples\n    --------\n    > firstFragment();\n\n    See Also\n    --------\n    lastFragment, next, prev\n\n",jump:"\njump( n )\n    Jumps a specified number of slides.\n\n    Parameters\n    ----------\n    n: integer\n    	Number of slides to jump.\n\n    Examples\n    --------\n    // Jump two slides forward:\n    > jump( 2 );\n\n    // Jump two slides backward:\n    > jump( -2 );\n\n    See Also\n    --------\n    jumpTo, next, prev\n\n",jumpTo:"\njumpTo( n )\n    Jumps to a specified slide, where `n` is the nominal slide number.\n\n    Parameters\n    ----------\n    n: integer\n    	Nominal slide number (one-based).\n\n    Examples\n    --------\n    > jumpTo( 2 );\n\n    See Also\n    --------\n    jump, next, prev\n\n",last:"\nlast()\n    Jumps to the last slide.\n\n    Examples\n    --------\n    > last();\n\n    See Also\n    --------\n    end, first, jumpTo, next, prev\n\n",lastFragment:"\nlastFragment()\n    Jumps to the last fragment of the current slide.\n\n    Examples\n    --------\n    > lastFragment();\n\n    See Also\n    --------\n    firstFragment, next, prev\n\n",loadPresentation:"\nloadPresentation( file )\n    Loads a presentation from a file.\n\n    Relative file paths are resolved relative to the current working directory.\n\n    Parameters\n    ----------\n    file: string\n    	File path.\n\n    Examples\n    --------\n    > loadPresentation( './path/to/presentation.txt' );\n\n    See Also\n    --------\n    reloadPresentation\n\n",next:"\nnext()\n    Moves the presentation to the next slide or slide fragment.\n\n    Examples\n    --------\n    > next();\n\n    See Also\n    --------\n    first, jumpTo, last, nextSlide, prev\n\n",nextSlide:"\nnextSlide()\n    Moves the presentation to the next slide.\n\n    Examples\n    --------\n    > nextSlide();\n\n    See Also\n    --------\n    first, jumpTo, last, next, prev, prevSlide\n\n",numSlides:"\nnumSlides\n    Returns the presentation length.\n\n    Returns\n    -------\n    len: integer\n        Number of slides.\n\n    Examples\n    --------\n    > numSlides\n\n    See Also\n    --------\n    currentSlide, jumpTo, next, prev\n\n",pres:"\npres()\n    Prints presentation help text and shortcuts.\n\n    Examples\n    --------\n    > pres();\n\n    See Also\n    --------\n    help, info\n\n",prev:"\nprev()\n    Moves the presentation to the previous slide or slide fragment.\n\n    Examples\n    --------\n    > prev();\n\n    See Also\n    --------\n    first, jumpTo, last, next, prevSlide\n\n",prevSlide:"\nprevSlide()\n    Moves the presentation to the previous slide.\n\n    Examples\n    --------\n    > prevSlide();\n\n    See Also\n    --------\n    first, jumpTo, last, next, nextSlide, prev\n\n",redraw:"\nredraw()\n    Redraws the current presentation slide.\n\n    Examples\n    --------\n    > redraw();\n\n    See Also\n    --------\n    next, nextSlide, prev, prevSlide, reloadPresentation\n\n",reloadPresentation:"\nreloadPresentation( file )\n    Reloads a presentation.\n\n    Examples\n    --------\n    > reloadPresentation();\n\n    See Also\n    --------\n    loadPresentation, redraw\n\n",renderSlide:"\nrenderSlide()\n    Renders the current presentation slide.\n\n    Examples\n    --------\n    > renderSlide()\n\n    See Also\n    --------\n    load\n\n",runSlide:"\nrunSlide()\n    Runs slide code.\n\n    Examples\n    --------\n    > runSlide()\n\n    See Also\n    --------\n    next, prev\n\n",unwatch:"\nunwatch( [error] )\n    Stops watching a presentation file for changes.\n\n    Parameters\n    ----------\n    error: Error (optional)\n    	Error object.\n\n    Examples\n    --------\n    > unwatch();\n\n    See Also\n    --------\n    loadPresentation, redraw, reloadPresentation, watch\n\n",watch:'\nwatch()\n    Watches a presentation source file for changes.\n\n    "Renaming" a source file is *not* tracked. If a source presentation file is\n    renamed, watching stops.\n\n    Examples\n    --------\n    > watch();\n\n    See Also\n    --------\n    loadPresentation, redraw, reloadPresentation, unwatch\n\n'}});var Fr=u(function(Ls,di){di.exports={blank:"\nblank()\n    Renders a blank screen.\n",currentSlide:"\ncurrentSlide\n    Returns the current presentation slide index.\n",end:"\nend()\n    Jumps to the last fragment of the last slide.\n",first:"\nfirst()\n    Jumps to the first slide.\n",firstFragment:"\nfirstFragment()\n    Jumps to the first fragment of the current slide.\n",jump:"\njump( n )\n    Jumps a specified number of slides.\n",jumpTo:"\njumpTo( n )\n    Jumps to a specified slide, where `n` is the nominal slide number.\n",last:"\nlast()\n    Jumps to the last slide.\n",lastFragment:"\nlastFragment()\n    Jumps to the last fragment of the current slide.\n",loadPresentation:"\nloadPresentation( file )\n    Loads a presentation from a file.\n",next:"\nnext()\n    Moves the presentation to the next slide or slide fragment.\n",nextSlide:"\nnextSlide()\n    Moves the presentation to the next slide.\n",numSlides:"\nnumSlides\n    Returns the presentation length.\n",pres:"\npres()\n    Prints presentation help text and shortcuts.\n",prev:"\nprev()\n    Moves the presentation to the previous slide or slide fragment.\n",prevSlide:"\nprevSlide()\n    Moves the presentation to the previous slide.\n",redraw:"\nredraw()\n    Redraws the current presentation slide.\n",reloadPresentation:"\nreloadPresentation( file )\n    Reloads a presentation.\n",renderSlide:"\nrenderSlide()\n    Renders the current presentation slide.\n",runSlide:"\nrunSlide()\n    Runs slide code.\n",unwatch:"\nunwatch( [error] )\n    Stops watching a presentation file for changes.\n",watch:"\nwatch()\n    Watches a presentation source file for changes.\n"}});var Nr=u(function(Ps,hi){hi.exports={blank:"blank();\n",currentSlide:"currentSlide\n",end:"end();\n",first:"first();\n",firstFragment:"firstFragment();\n",jump:"jump( 2 );\njump( -2 );\n",jumpTo:"jumpTo( 2 );\n",last:"last();\n",lastFragment:"lastFragment();\n",loadPresentation:"loadPresentation( './path/to/presentation.txt' );\n",next:"next();\n",nextSlide:"nextSlide();\n",numSlides:"numSlides\n",pres:"pres();\n",prev:"prev();\n",prevSlide:"prevSlide();\n",redraw:"redraw();\n",reloadPresentation:"reloadPresentation();\n",renderSlide:"renderSlide()\n",runSlide:"runSlide()\n",unwatch:"unwatch();\n",watch:"watch();\n"}});var Br=u(function(ys,Or){
var ci=Dr(),pi=Fr(),fi=Nr(),mi={help:ci,info:pi,example:fi};Or.exports=mi
});var Hr=u(function(As,Ur){
var vi=require("path").resolve,gi=require("fs").watch,Ir=require("events").EventEmitter,_i=require("debug"),wi=require('@stdlib/assert-is-function/dist'),F=require('@stdlib/assert-is-string/dist').isPrimitive,Wr=require('@stdlib/assert-is-integer/dist').isPrimitive,m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),C=require('@stdlib/utils-define-nonenumerable-property/dist'),P=require('@stdlib/math-base-special-clamp/dist'),Ei=require('@stdlib/math-base-special-wrap/dist'),Si=require('@stdlib/fs-read-file/dist').sync,kr=require('@stdlib/string-repeat/dist'),xi=require('@stdlib/utils-constructor-name/dist'),bi=require('@stdlib/process-cwd/dist'),qi=require('@stdlib/utils-inherit/dist'),D=require('@stdlib/utils-next-tick/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),Ti=ie(),Ci=ae(),Mr=le(),Gr=Re(),Ri=Pe(),Jr=Ae(),Li=Cr(),Pi=jr(),yi=Br(),l=_i("repl:presentation"),Ai=80,ji=25;function h(){var r,e,n,t,i,s,a,o,d,p,c,f;if(e=arguments.length,!(this instanceof h)){if(e===0)throw new Error(format('0sx16'));return e===1?new h(arguments[0]):e===2?new h(arguments[0],arguments[1]):new h(arguments[0],arguments[1],arguments[2])}if(e===0)throw new Error(format('0sx16'));if(s=Ci(),e===1)t=arguments[0];else if(e===2){if(F(arguments[0]))n=arguments[0],t=arguments[1];else if(t=arguments[0],r=arguments[1],o=Mr(s,r),o)throw o}else{if(n=arguments[0],!F(n))throw new TypeError(S('0sx8C',n));if(t=arguments[1],r=arguments[2],o=Mr(s,r),o)throw o}if(xi(t)!=="REPL")throw new TypeError(S('0sx8D',t));for(a=this,l("Options: %s",JSON.stringify(s)),Ir.call(this),m(this,"_repl",t),m(this,"_opts",s),C(this,"_source",""),C(this,"_watcher",null),m(this,"_slides",[]),C(this,"_slide",null),C(this,"_slideCursor",-1),C(this,"_fragmentCursor",0),p=t._quiet,t._quiet=!0,t._context.workspace(s.workspace),t._quiet=p,i=Li(this),Pi(t._context,i),f=0;f<i.length;f++)d=i[f],c=yi.help[d[0]],c&&(t._context.userDoc(d[0],d[2],c),t._context.userDoc(d[1],d[2],c));return n?(Gr(this._slides,n),this._slide=this._slides[0]||null,this._slideCursor=0,this._fragmentCursor=0):s.load&&this.load(s.load),t.on("exit",E),this;function E(){l("REPL environment closed. Performing presentation clean-up tasks."),a.unwatch()}}qi(h,Ir);m(h.prototype,"_select",function(e,n){var t,i,s;return s=this.length,this._opts.loop?t=Ei(e,0,s):t=P(e,-1,s),t===-1||t===s?(l("Unable to select slide. Slide cursor out-of-range."),this._slide=null):this._slide=this._slides[t],this._slide&&arguments.length>1?(s=this._slide.fragments.length,i=P(n,-1,s),(i===-1||i===s)&&(l("Unable to select slide fragment. Fragment cursor out-of-range."),this._slide=null)):i=0,this._slide&&(l("Selected slide %d and fragment %d.",t,i),this._slideCursor=t,this._fragmentCursor=i),this._slide});q(h.prototype,"currentSlide",function(){return this._slideCursor+1});m(h.prototype,"end",function(){var e=this._slides[this.length-1];return e&&(l("Jumping to the last fragment of the last slide."),this._select(this.length-1,e.fragments.length-1)),this});m(h.prototype,"first",function(){return l("Jumping to the first slide."),this._select(0),this});m(h.prototype,"firstFragment",function(){return l("Jumping to the first fragment of the current slide."),this._select(this._slideCursor,0),this});q(h.prototype,"height",function(){return this._opts.height?this._opts.height:this._repl._ostream.isTTY?this._repl._ostream.rows:ji});m(h.prototype,"jump",function(e){if(!Wr(e))throw new TypeError(S('0sx8A',e));return e=P(this.currentSlide+e,1,this.length)-1,l("Jumping to slide %d.",e),this._select(e),this});m(h.prototype,"jumpTo",function(e){if(!Wr(e))throw new TypeError(S('0sx8A',e));return l("Jumping to slide %d.",e-1),this._select(e-1),this});m(h.prototype,"last",function(){return l("Jumping to the last slide."),this._select(this.length-1),this});m(h.prototype,"lastFragment",function(){return l("Jumping to the last fragment of the current slide."),this._slide&&this._select(this._slideCursor,this._slide.fragments.length-1),this});q(h.prototype,"length",function(){return this._slides.length});m(h.prototype,"load",function(e){var n,t;if(!F(e))throw new TypeError(S('0sx3B',e));if(this._watcher&&(t=!0,this.unwatch()),l("Attempting to load source presentation file: %s",e),n=vi(bi(),e),l("Resolved file path: %s",n),e=Si(n,{encoding:"utf8"}),e instanceof Error)throw e;return l("Successfully loaded source presentation file."),this._source=n,this._slides.length=0,Gr(this._slides,e),this._slide=this._slides[0]||null,this._slideCursor=0,this._fragmentCursor=0,t&&this.watch(),this});m(h.prototype,"next",function(){var e=this._select(this._slideCursor,this._fragmentCursor+1);return e===null?(l("Moving to the next slide."),this._select(this.currentSlide)):l("Moving to the next slide fragment."),this});m(h.prototype,"nextSlide",function(){return l("Moving to the next slide."),this._select(this.currentSlide),this});m(h.prototype,"prev",function(){var e=this._select(this._slideCursor,this._fragmentCursor-1),n;return e===null?(e=this._slideCursor-1,e>=0?n=this._slides[e].fragments.length-1:n=0,l("Moving to the last fragment of the previous slide."),this._select(e,n)):l("Moving to the previous slide fragment."),this});m(h.prototype,"prevSlide",function(){return l("Moving to the previous slide."),this._select(this._slideCursor-1),this});m(h.prototype,"reload",function(){var e=this.currentSlide;if(this._source==="")throw new Error(format('0sx17'));l("Attempting to reload presentation.");try{this.load(this._source)}catch(n){throw new Error(S('0sx8E',n.message))}return this.jumpTo(e),l("Successfully reloaded presentation."),this});m(h.prototype,"render",function(){var e,n,t,i,s,a,o,d,p,c,f,E,v,N,y,w;if(this._slide===null)return null;for(y=this.width,a=this.slideHeight,o=this.slideWidth,d=this._slide.length,N=P(this._fragmentCursor,0,this._slide.fragments.length-1),E=this._slide.fragments[N],p=E.length,n=this._opts.borderRight,t=this._opts.borderLeft,s=this._opts.newline,f=this._opts.whitespace,i=(a-d)/2|0,e=a-p-i,this._opts.counter&&(e-=1),c=Ti(o,E,f,o-this._slide.maxLength),v=kr(this._opts.borderTop,y),v+=s,w=0;w<i;w++)v+=Jr(o,f,t,n),v+=s;for(w=0;w<c.length;w++)v+=t,v+=c[w].text,v+=n,v+=s;for(w=0;w<e;w++)v+=Jr(o,f,t,n),v+=s;return this._opts.counter&&(v+=t,v+=Ri(o,f,this._opts.counter,this._slideCursor+1,this.length),v+=n,v+=s),v+=kr(this._opts.borderBottom,y),v});m(h.prototype,"run",function(e){var n,t,i,s,a,o,d;if(!wi(e))throw new TypeError(S('0sx3J',e));if(n=this,a=this._slides[this._slideCursor],a){if(a.code){for(t=[],o=0;o<a.code.length;o++)if(a.code[o].lang==="javascript")for(s=a.code[o].src,d=0;d<s.length;d++)t.push(s[d]);if(t.length)return l("Forwarding each line of slide code to the REPL readline interface in order to mimic user input."),i=t.length,o=-1,p()}l("Slide does not contain code to run. Skipping.")}else l("No slide is currently selected. Skipping.");D(e);function p(){o+=1,o<i?t[o]?(l("Forwarding line %d.",o),n._repl._rli.write(t[o]+"\n"),n._repl.once("drain",p)):(l("Skipping blank code line."),D(p)):(l("Finished executing slide code."),D(e))}});m(h.prototype,"show",function(){var e=this.render();return e&&(e="\x1B[2K\x1B[1G"+e+this._opts.newline,this._opts.autoClear?(l("Clearing the REPL screen."),this._repl.clear()):e+=this._opts.newline+this._opts.newline+"\x1B[2A",l("Writing a presentation slide to the REPL."),this._repl._ostream.write(e),this._repl._displayPrompt(!1)),this});q(h.prototype,"slideHeight",function(){return this.height-5});q(h.prototype,"slideWidth",function(){return this.width-this._opts.borderLeft.length-this._opts.borderRight.length});m(h.prototype,"unwatch",function(e){return this._watcher&&(l("No longer watching a source presentation file for changes."),this._watcher.close(),this._watcher=null,e&&this.emit("unwatch",e)),this});m(h.prototype,"watch",function(){var e,n,t;if(this._source==="")throw new Error(format('0sx18'));if(this._watcher)return l("Already watching a source presentation file for changes."),this;n=this,e={persistent:!1,encoding:"utf8"},l("Attempting to watch source presentation file for changes: %s",this._source);try{t=gi(this._source,e,i)}catch(a){throw new Error(S('0sx8F',a.message))}return t.on("error",s),l("Watching source presentation file."),this._watcher=t,this.emit("watch"),this;function i(a){var o;if(a==="rename"){n._watcher&&(l('Encountered a "rename" event for the source presentation file.'),o=new Error(format('0sx19')),n.unwatch(o));return}l("Detected a change to the source presentation file."),n.reload(),n.emit("change")}function s(a){l("Encountered an error while watching a source presentation file. Error: %s",a.message),n.unwatch(a)}});q(h.prototype,"width",function(){return this._opts.width?this._opts.width:this._repl._ostream.isTTY?this._repl._ostream.columns:Ai});Ur.exports=h
});var Di=Hr();module.exports=Di;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
