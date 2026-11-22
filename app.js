const R=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const sh=a=>a.map(x=>[Math.random(),x]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
const gcd=(a,b)=>b?gcd(b,a%b):a;
const T=[["sin 30°","1/2"],["cos 60°","1/2"],["sin 90°","1"],["cos 0°","1"],["tg 45°","1"],["cos 90°","0"],["sin 0°","0"],["sin 45°","√2/2"],["sin 60°","√3/2"],["cos 30°","√3/2"]];
const G0={
1:[()=>{let a=R(1,9),b=R(1,20-a);return{q:`${a} + ${b} = ?`,a:a+b,e:`${a} ga ${b} ni qo'shamiz: ${a+b}.`}},
()=>{let a=R(5,20),b=R(1,a);return{q:`${a} − ${b} = ?`,a:a-b,e:`${a} dan ${b} ni ayiramiz: ${a-b}.`}},
()=>{let a=R(1,9),b=R(a+1,20);return{q:`${a} + ? = ${b}`,a:b-a,e:`${b} − ${a} = ${b-a}.`}}],
2:[()=>{let a=R(11,60),b=R(11,39);return{q:`${a} + ${b} = ?`,a:a+b,e:`Xona bo'yicha qo'shamiz: ${a+b}.`}},
()=>{let a=R(40,99),b=R(11,39);return{q:`${a} − ${b} = ?`,a:a-b,e:`${a} − ${b} = ${a-b}.`}},
()=>{let a=R(2,5),b=R(2,10);return{q:`${a} × ${b} = ?`,a:a*b,e:`${a} ni ${b} marta qo'shamiz = ${a*b}.`}}],
3:[()=>{let a=R(2,9),b=R(2,9);return{q:`${a} × ${b} = ?`,a:a*b,e:`Ko'paytirish jadvali: ${a}×${b}=${a*b}.`}},
()=>{let a=R(2,9),b=R(2,9);return{q:`${a*b} ÷ ${a} = ?`,a:b,e:`${a}×${b}=${a*b}, demak ${a*b}÷${a}=${b}.`}},
()=>{let a=R(2,9),b=R(2,9);return{q:`${a} × ? = ${a*b}`,a:b,e:`${a*b} ÷ ${a} = ${b}.`}}],
4:[()=>{let a=R(120,600),b=R(120,350);return{q:`${a} + ${b} = ?`,a:a+b,e:`Ustun usulida qo'shamiz: ${a+b}.`}},
()=>{let a=R(3,15),b=R(2,12);return{q:`To'g'ri to'rtburchakning tomonlari ${a} sm va ${b} sm. Perimetri necha sm?`,a:2*(a+b),e:`P = 2·(a+b) = 2·${a+b} = ${2*(a+b)}.`}},
()=>{let a=R(3,15),b=R(2,12);return{q:`To'g'ri to'rtburchakning tomonlari ${a} sm va ${b} sm. Yuzi necha sm²?`,a:a*b,e:`S = a·b = ${a}·${b} = ${a*b}.`}},
()=>{let a=R(12,45),b=R(3,9);return{q:`${a} × ${b} = ?`,a:a*b,e:`${a}·${b} = ${a*b}.`}}],
5:[()=>{let a=R(2,9),b=R(2,9),c=R(2,9);return{q:`${a} + ${b} × ${c} = ?`,a:a+b*c,e:`Avval ko'paytirish: ${b}×${c}=${b*c}, keyin ${a}+${b*c}=${a+b*c}.`}},
()=>{let a=R(2,9),b=R(2,9),c=R(2,9);return{q:`(${a} + ${b}) × ${c} = ?`,a:(a+b)*c,e:`Avval qavs: ${a+b}, keyin ×${c} = ${(a+b)*c}.`}},
()=>{let p=[10,20,25,50][R(0,3)],n=R(1,10)*20;return{q:`${n} ning ${p}% i nechaga teng?`,a:n*p/100,e:`${n}·${p}/100 = ${n*p/100}.`}},
()=>{let d=R(5,12),a=R(1,d-3),b=R(1,d-a-1),c=a+b;let al=[`${c}/${2*d}`,`${a*b}/${d}`,`${c+1}/${d}`,`${c+2}/${d}`,`${c}/${d+1}`];return{q:`${a}/${d} + ${b}/${d} = ?`,a:`${c}/${d}`,alt:al,e:`Maxrajlari bir xil: suratlar qo'shiladi, ${a}+${b}=${c}.`}}],
6:[()=>{let a=R(2,15),b=R(2,15);return{q:`−${a} + ${b} = ?`,a:b-a,e:`${b} − ${a} = ${b-a}.`}},
()=>{let p=[10,20,25,40,50][R(0,4)],n=R(2,12)*20;return{q:`${n} ning ${p}% i nechaga teng?`,a:n*p/100,e:`${n}·${p}/100 = ${n*p/100}.`}},
()=>{let g=R(2,6),a=g*R(2,5),b=g*R(2,5)+g;let d=gcd(a,b);return{q:`${a} va ${b} ning EKUB i nechaga teng?`,a:d,e:`Ikkala sonni ham bo'luvchi eng katta son: ${d}.`}},
()=>{let a=R(2,9),b=R(2,9)+1;let l=a*b/gcd(a,b);return{q:`${a} va ${b} ning EKUK i nechaga teng?`,a:l,e:`Ikkalasiga bo'linadigan eng kichik son: ${l}.`}}],
7:[()=>{let x=R(1,9),a=R(2,6),b=R(1,15);return{q:`${a}x + ${b} = ${a*x+b}. x = ?`,a:x,e:`${a}x = ${a*x}, x = ${x}.`}},
()=>{let a=R(2,6),n=R(2,5);return{q:`${a}^${n} = ?`,a:a**n,e:`${a} ni ${n} marta o'ziga ko'paytiramiz = ${a**n}.`}},
()=>{let b=R(1,9),k=R(2,7),a=R(2,5);return{q:`${a}(x − ${b}) = ${a*k}. x = ?`,a:b+k,e:`x − ${b} = ${k}, shuning uchun x = ${b+k}.`}}],
8:[()=>{let n=R(3,15);return{q:`√${n*n} = ?`,a:n,e:`${n}² = ${n*n}.`}},
()=>{let t=[[3,4,5],[5,12,13],[6,8,10],[8,15,17]][R(0,3)];return{q:`To'g'ri burchakli uchburchakning katetlari ${t[0]} va ${t[1]}. Gipotenuzasi?`,a:t[2],e:`c² = ${t[0]}²+${t[1]}² = ${t[2]**2}, c = ${t[2]}.`}},
()=>{let p=R(1,9),q=R(p+1,10);return{q:`x² − ${p+q}x + ${p*q} = 0 tenglamaning katta ildizi?`,a:q,e:`Viyet teoremasi: ildizlar ${p} va ${q}.`}}],
9:[()=>{let a=R(1,3),b=R(2,9)*(R(0,1)?1:-1),c=R(-5,5);return{q:`${a}x² ${b<0?'−':'+'} ${Math.abs(b)}x ${c<0?'−':'+'} ${Math.abs(c)} = 0 ning diskriminanti D = ?`,a:b*b-4*a*c,e:`D = b² − 4ac = ${b*b} − ${4*a*c} = ${b*b-4*a*c}.`}},
()=>{let a=R(1,10),d=R(2,6),n=R(5,12);return{q:`Arifmetik progressiyada a₁ = ${a}, d = ${d}. a${n} = ?`,a:a+(n-1)*d,e:`aₙ = a₁ + (n−1)d = ${a}+${n-1}·${d} = ${a+(n-1)*d}.`}},
()=>{let p=R(1,9),q=R(1,9);return{q:`x² − ${p+q}x + ${p*q} = 0 ildizlari yig'indisi?`,a:p+q,e:`Viyet: x₁+x₂ = ${p+q}.`}}],
10:[()=>{let b=R(2,5),n=R(2,4);return{q:`log_${b}(${b**n}) = ?`,a:n,e:`${b}^${n} = ${b**n}, demak javob ${n}.`}},
()=>{let b=R(1,3),q=R(2,3),n=R(3,5);return{q:`Geometrik progressiyada b₁ = ${b}, q = ${q}. b${n} = ?`,a:b*q**(n-1),e:`bₙ = b₁·q^(n−1) = ${b}·${q}^${n-1} = ${b*q**(n-1)}.`}},
()=>{let t=T[R(0,T.length-1)];return{q:`${t[0]} = ?`,a:t[1],alt:["0","1/2","1","√2/2","√3/2"],e:`Jadval qiymati: ${t[0]} = ${t[1]}.`}}],
11:[()=>{let a=R(1,4),n=R(2,4),k=R(1,3);return{q:`f(x) = ${a}x^${n} bo'lsa, f′(${k}) = ?`,a:a*n*k**(n-1),e:`f′(x) = ${a*n}x^${n-1}, f′(${k}) = ${a*n*k**(n-1)}.`}},
()=>{let a=R(1,5),k=R(1,4);return{q:`∫ dan 0 dan ${k} gacha ${2*a}x dx = ?`,a:a*k*k,e:`Boshlang'ich: ${a}x², ${k} da: ${a*k*k}.`}},
()=>{let n=R(2,9);return{q:`ln(e^${n}) = ?`,a:n,e:`ln(e^n) = n, ya'ni ${n}.`}}]
};
const N=(q,a,e,alt)=>({q,a,e,alt});
const TR=[[3,4,5],[5,12,13],[6,8,10],[8,15,17]];
const X={
3:[()=>{let a=R(2,9)*2;return N(`${a} ning yarmi nechaga teng?`,a/2,`Yarmini topish uchun 2 ga bo'lamiz: ${a/2}.`)},
()=>{let b=R(2,9)*4;return N(`${b} ning chorak (1/4) qismi nechaga teng?`,b/4,`4 ga bo'lamiz: ${b/4}.`)},
()=>{let x=R(2,9),a=R(2,9);return N(`x + ${a} = ${x+a}. x = ?`,x,`x = ${x+a} − ${a} = ${x}.`)}],
4:[()=>{let d=R(2,5),m=R(2,9)*d;return N(`${m} ning 1/${d} qismi nechaga teng?`,m/d,`${m} ÷ ${d} = ${m/d}.`)},
()=>{let a=R(2,9),x=R(2,9);return N(`${a}·x = ${a*x}. x = ?`,x,`x = ${a*x} ÷ ${a} = ${x}.`)},
()=>{let a=R(2,9),b=R(2,9),c=R(1,9);return N(`a = ${a} bo'lsa, ${b}a + ${c} ifodaning qiymati nechaga teng?`,b*a+c,`${b}·${a} + ${c} = ${b*a+c}.`)},
()=>{let d=R(5,12),c=R(3,d-1),b=R(1,c-1);return N(`${c}/${d} − ${b}/${d} = ?`,`${c-b}/${d}`,`Maxraj bir xil: suratlarni ayiramiz, ${c}−${b}=${c-b}.`,[`${c+b}/${d}`,`${c-b}/${d*2}`,`${c-b+1}/${d}`,`${c-b}/${d-1}`])}],
5:[()=>{let p=R(2,4),q=p*R(2,3),a=R(1,p-1),c=R(1,q-1),n=a*q/p+c;return N(`${a}/${p} + ${c}/${q} = ?`,`${n}/${q}`,`Maxrajni ${q} ga keltiramiz: ${a*q/p}/${q} + ${c}/${q} = ${n}/${q}.`,[`${a+c}/${p+q}`,`${n+1}/${q}`,`${n}/${p}`,`${a+c}/${q}`])},
()=>{let a=R(2,9),b=R(2,9),k=R(2,6);return N(`a = ${a}, b = ${b} bo'lsa, ${k}a + b = ?`,k*a+b,`${k}·${a} + ${b} = ${k*a+b}.`)},
()=>{let a=R(2,9),b=R(2,9);return N(`x − ${a} = ${b}. x = ?`,a+b,`x = ${b} + ${a} = ${a+b}.`)},
()=>{let a=R(2,12);return N(`Kvadratning tomoni ${a} sm. Yuzi necha sm²?`,a*a,`S = a² = ${a}·${a} = ${a*a}.`)},
()=>{let x=R(1,8),y=R(1,8),s=((x+y)/10).toFixed(1);return N(`0.${x} + 0.${y} = ?`,s,`Birinchi xonalar: ${x}+${y}=${x+y}, javob ${s}.`,[((x+y)/10+0.1).toFixed(1),((x+y)/10+0.2).toFixed(1),((x+y)/100).toFixed(2),String(x+y)])}],
6:[()=>{let a=R(1,4),b=R(2,5),c=R(1,4),d=R(2,5);return N(`${a}/${b} × ${c}/${d} = ?`,`${a*c}/${b*d}`,`Suratni suratga, maxrajni maxrajga ko'paytiramiz.`,[`${a+c}/${b+d}`,`${a*c}/${b+d}`,`${a+c}/${b*d}`,`${a*c+1}/${b*d}`])},
()=>{let a=R(2,9),b=R(2,9);return N(`${a}x + ${b}x = ?`,`${a+b}x`,`O'xshash hadlar: (${a}+${b})x = ${a+b}x.`,[`${a*b}x`,`${a+b}x²`,`${a+b+1}x`,`${a+b}`])},
()=>{let k=R(2,6),b=R(2,9);return N(`${k}(x + ${b}) ifodani qavssiz yozing`,`${k}x + ${k*b}`,`${k} ni ikkala hadga ko'paytiramiz.`,[`${k}x + ${b}`,`x + ${k*b}`,`${k+1}x + ${k*b}`,`${k}x − ${k*b}`])},
()=>{let a=R(2,6),b=R(2,9);return N(`x ÷ ${a} = ${b}. x = ?`,a*b,`x = ${b}·${a} = ${a*b}.`)},
()=>{let x=R(2,9),a=R(2,6),b=R(1,9);return N(`${a}x − ${b} = ${a*x-b}. x = ?`,x,`${a}x = ${a*x}, x = ${x}.`)}],
7:[()=>{let a=R(5,9),b=R(1,4),c=R(1,6);return N(`${a}x − ${b}x + ${c}x = ?`,`${a-b+c}x`,`(${a}−${b}+${c})x = ${a-b+c}x.`,[`${a+b+c}x`,`${a-b-c}x`,`${a*b*c}x`,`${a-b+c}`])},
()=>{let a=R(2,9);return N(`(x + ${a})² = ?`,`x² + ${2*a}x + ${a*a}`,`(a+b)² = a² + 2ab + b².`,[`x² + ${a*a}`,`x² + ${a}x + ${a*a}`,`x² + ${2*a}x + ${2*a}`,`x² + ${2*a}x − ${a*a}`])},
()=>{let a=R(2,12);return N(`(x − ${a})(x + ${a}) = ?`,`x² − ${a*a}`,`(a−b)(a+b) = a² − b².`,[`x² + ${a*a}`,`x² − ${2*a}`,`x² − ${a}`,`x² − ${2*a}x`])},
()=>{let m=R(2,6),n=R(2,6);return N(`x^${m} · x^${n} = ?`,`x^${m+n}`,`Darajalar ko'paytirilsa, ko'rsatkichlar qo'shiladi.`,[`x^${m*n}`,`x^${m+n+1}`,`${m+n}x`,`x^${m+n-1}`])},
()=>{let k=R(2,5),b=R(1,9),x=R(1,6);return N(`f(x) = ${k}x + ${b} bo'lsa, f(${x}) = ?`,k*x+b,`${k}·${x} + ${b} = ${k*x+b}.`)},
()=>{let x=R(3,9),y=R(1,x-1);return N(`x + y = ${x+y}, x − y = ${x-y}. x = ?`,x,`Tenglamalarni qo'shsak 2x = ${2*x}, x = ${x}.`)},
()=>{let x=R(1,9),a=R(4,9),c=R(1,a-1),b=R(1,9);return N(`${a}x + ${b} = ${c}x + ${b+(a-c)*x}. x = ?`,x,`x larni chapga o'tkazamiz: ${a-c}x = ${(a-c)*x}, x = ${x}.`)}],
8:[()=>{let a=R(2,6),b=[2,3,5,6][R(0,3)];return N(`√${a*a*b} ni soddalashtiring`,`${a}√${b}`,`√${a*a*b} = √${a*a}·√${b} = ${a}√${b}.`,[`${b}√${a}`,`${a*a}√${b}`,`${a}√${b+1}`,`${a*b}`])},
()=>{let p=R(2,5),s=R(2,5);return N(`√${p} · √${p*s*s} = ?`,p*s,`√(${p}·${p*s*s}) = √${p*p*s*s} = ${p*s}.`)},
()=>{let a=R(2,5),k=R(1,9);return N(`${a}x − ${a*k} > 0 tengsizlikni yeching`,`x > ${k}`,`${a}x > ${a*k}, ikkala tomonni ${a} ga bo'lamiz: x > ${k}.`,[`x < ${k}`,`x > ${-k}`,`x < ${-k}`,`x > ${k+1}`])},
()=>{let a=R(2,9);return N(`(x² − ${a*a}) / (x − ${a}) ifodani qisqartiring`,`x + ${a}`,`x² − ${a*a} = (x−${a})(x+${a}), qisqartiramiz.`,[`x − ${a}`,`${a}x`,`x + ${a*a}`,`x² + ${a}`])},
()=>{let a=R(3,12),b=R(2,9),h=R(1,6)*2;return N(`Trapetsiyaning asoslari ${a} va ${b}, balandligi ${h}. Yuzi?`,(a+b)*h/2,`S = (a+b)·h/2 = ${(a+b)*h/2}.`)},
()=>{let b=R(2,9)*2,h=R(2,12);return N(`Uchburchakning asosi ${b}, balandligi ${h}. Yuzi?`,b*h/2,`S = b·h/2 = ${b*h/2}.`)},
()=>{let n=R(5,10);return N(`${n} burchakli qavariq ko'pburchak ichki burchaklari yig'indisi necha gradus?`,180*(n-2),`180°·(n−2) = 180·${n-2} = ${180*(n-2)}.`)},
()=>{let t=TR[R(0,3)];return N(`To'g'ri burchakli uchburchakda katetlar ${t[0]} va ${t[1]}, gipotenuza ${t[2]}. ${t[0]} katetga qarama-qarshi A burchak uchun sin A = ?`,`${t[0]}/${t[2]}`,`sin A = qarama-qarshi katet / gipotenuza.`,[`${t[1]}/${t[2]}`,`${t[0]}/${t[1]}`,`${t[2]}/${t[0]}`,`${t[1]}/${t[0]}`])},
()=>{let a=R(1,4),b=R(1,9),x=R(1,5);return N(`f(x) = ${a}x² + ${b} bo'lsa, f(${x}) = ?`,a*x*x+b,`${a}·${x*x} + ${b} = ${a*x*x+b}.`)},
()=>{let b=R(-6,6),c=R(-6,6),D=b*b-4*c,k=D>0?2:D==0?1:0;return N(`x² ${b<0?'−':'+'} ${Math.abs(b)}x ${c<0?'−':'+'} ${Math.abs(c)} = 0 tenglama nechta haqiqiy ildizga ega?`,String(k),`D = ${b*b} − ${4*c} = ${D}. ${D>0?`D>0, ikkita ildiz`:D==0?`D=0, bitta ildiz`:`D<0, ildiz yo'q`}.`,['0','1','2','3'])},
()=>{let a=R(2,9);return N(`x² − ${a*a} ni ko'paytuvchilarga ajrating`,`(x − ${a})(x + ${a})`,`a² − b² = (a−b)(a+b).`,[`(x − ${a})²`,`(x + ${a})²`,`x(x − ${a*a})`,`(x − ${a*a})(x + 1)`])},
()=>{let a=R(2,6),k=R(2,4);return N(`Uchburchaklar o'xshash, o'xshashlik koeffitsiyenti ${k}. Kichik uchburchakning tomoni ${a} bo'lsa, katta uchburchakning mos tomoni?`,a*k,`${a}·${k} = ${a*k}.`)},
()=>{let a=R(2,5),n=R(2,8);return N(`${a}x² = ${a*n*n}. Musbat ildizni toping`,n,`x² = ${n*n}, x = ${n}.`)}],
9:[()=>{let x=R(3,9),y=R(1,x-1);return N(`x + y = ${x+y}, x − y = ${x-y}. y = ?`,y,`2y = ${2*y}, y = ${y}.`)},
()=>{let a=R(1,6),d=R(2,5),n=R(2,5)*2;return N(`Arifmetik progressiyada a₁ = ${a}, d = ${d}. Dastlabki ${n} ta hadi yig'indisi S${n} = ?`,n*(2*a+(n-1)*d)/2,`Sₙ = n(2a₁+(n−1)d)/2 = ${n*(2*a+(n-1)*d)/2}.`)},
()=>{let t=TR[R(0,3)];return N(`a(${t[0]}; ${t[1]}) vektor uzunligi |a| = ?`,t[2],`|a| = √(${t[0]}²+${t[1]}²) = ${t[2]}.`)},
()=>{let p=R(1,6),q=R(1,6);return N(`x² + ${p+q}x + ${p*q} ni ko'paytuvchilarga ajrating`,`(x + ${p})(x + ${q})`,`Yig'indisi ${p+q}, ko'paytmasi ${p*q} bo'lgan sonlar: ${p} va ${q}.`,[`(x + ${p+q})(x + 1)`,`(x − ${p})(x − ${q})`,`(x + ${p})²`,`(x + ${p*q})(x + 1)`])},
()=>{let a=R(2,9);return N(`(x² − ${a*a}) / (x + ${a}) ifodani qisqartiring`,`x − ${a}`,`(x−${a})(x+${a}) / (x+${a}) = x − ${a}.`,[`x + ${a}`,`x − ${a*a}`,`${a}x`,`x² − ${a}`])},
()=>{let t=TR[R(0,3)];return N(`O'tkir burchak α uchun sin α = ${t[0]}/${t[2]}. cos α = ?`,`${t[1]}/${t[2]}`,`Pifagor bo'yicha ikkinchi katet ${t[1]}, cos α = ${t[1]}/${t[2]}.`,[`${t[0]}/${t[1]}`,`${t[2]}/${t[1]}`,`${t[1]}/${t[0]}`,`${t[0]}/${t[2]}`])},
()=>{let p=R(1,5),q=R(p+1,9);return N(`(x − ${p})(x − ${q}) < 0 tengsizlikni yeching`,`${p} < x < ${q}`,`Parabola shoxlari yuqoriga, ildizlar orasida manfiy.`,[`x < ${p} yoki x > ${q}`,`x < ${p}`,`x > ${q}`,`${-q} < x < ${-p}`])},
()=>{let a=R(1,3),b=R(1,6),c=R(1,9),x=R(1,4);return N(`f(x) = ${a}x² + ${b}x + ${c} bo'lsa, f(${x}) = ?`,a*x*x+b*x+c,`${a*x*x} + ${b*x} + ${c} = ${a*x*x+b*x+c}.`)}],
10:[()=>{let i=R(1,4),j=R(1,4);return N(`log₂${2**i} + log₂${2**j} = ?`,i+j,`log₂(${2**i}·${2**j}) = log₂${2**(i+j)} = ${i+j}.`)},
()=>{let b=R(2,5),n=R(2,4);return N(`${b}^x = ${b**n}. x = ?`,n,`${b}^${n} = ${b**n}, shuning uchun x = ${n}.`)},
()=>{let L=[30,45,60,90,120,180],M={30:'π/6',45:'π/4',60:'π/3',90:'π/2',120:'2π/3',180:'π'},d=L[R(0,5)];return N(`${d}° necha radian?`,M[d],`${d}°·π/180 = ${M[d]}.`,Object.values(M))},
()=>{let c=[[8,2,3,4],[27,2,3,9],[16,3,4,8],[4,3,2,8],[125,2,3,25]][R(0,4)];return N(`${c[0]}^(${c[1]}/${c[2]}) = ?`,c[3],`${c[0]} ning ${c[2]}-darajali ildizi olinadi, so'ng ${c[1]}-darajaga ko'tariladi.`)},
()=>{let n=R(4,12);return N(`${n} ta o'quvchidan 2 tasini necha usul bilan tanlash mumkin?`,n*(n-1)/2,`C(${n},2) = ${n}·${n-1}/2 = ${n*(n-1)/2}.`)},
()=>{let r=R(1,6),b=R(2,7);return N(`Qutida ${r} ta qizil va ${b} ta ko'k shar bor. Tasodifiy olingan sharning qizil bo'lish ehtimoli?`,`${r}/${r+b}`,`Ehtimol = qulay holatlar / barcha holatlar = ${r}/${r+b}.`,[`${b}/${r+b}`,`${r}/${b}`,`${r}/${r*b}`,`${r+1}/${r+b}`])},
()=>{let n=R(3,7);return N(`1 + 2 + 4 + ... + ${2**(n-1)} = ?`,2**n-1,`Geometrik progressiya: S = 2^${n} − 1 = ${2**n-1}.`)}],
11:[()=>{let a=R(2,9);return N(`lim (x→${a}) (x² − ${a*a})/(x − ${a}) = ?`,2*a,`Qisqartirsak x + ${a}, limit ${2*a}.`)},
()=>{let a=R(1,4),b=R(1,6),k=R(1,3);return N(`f(x) = ${a}x² + ${b}x bo'lsa, f′(${k}) = ?`,2*a*k+b,`f′(x) = ${2*a}x + ${b}, f′(${k}) = ${2*a*k+b}.`)},
()=>{let k=R(1,9);return N(`f(x) = x² − ${2*k}x funksiyaning minimum nuqtasi x = ?`,k,`f′(x) = 2x − ${2*k} = 0, x = ${k}.`)},
()=>{let k=R(1,4);return N(`∫ dan 0 dan ${k} gacha 3x² dx = ?`,k**3,`Boshlang'ich funksiya x³, ${k} da ${k**3}.`)},
()=>{let a=R(1,9);return N(`b₁ = ${a}, q = 1/2 bo'lgan cheksiz kamayuvchi geometrik progressiya yig'indisi?`,2*a,`S = b₁/(1−q) = ${a}/(1/2) = ${2*a}.`)},
()=>{let r=R(1,5),h=R(2,8);return N(`Silindr radiusi ${r}, balandligi ${h}. Hajmi?`,`${r*r*h}π`,`V = πr²h = π·${r*r}·${h}.`,[`${r*h}π`,`${2*r*h}π`,`${r*r*h*2}π`,`${r*r*h+r}π`])},
()=>{let k=R(1,6);return N(`y = x² grafigiga x = ${k} nuqtadagi urinmaning burchak koeffitsiyenti?`,2*k,`k = y′(${k}) = 2·${k} = ${2*k}.`)}]
};
const G={};for(let g=1;g<=11;g++)G[g]=[...G0[g],...(X[g]||[])];
function opts(g){let a=g.a,s;if(g.alt){s=new Set([a]);for(const x of sh(g.alt)){if(s.size<4)s.add(x)}return sh([...s])}
s=new Set([a]);let t=0;while(s.size<4&&t++<200){let d=R(1,Math.abs(a)>20?10:5)*(R(0,1)?1:-1),v=a+d;if(a>=0&&v<0)continue;s.add(v)}return sh([...s])}
let st={};const app=document.getElementById('app');
function home(){app.innerHTML=`<h1>🧮 Matematika testlari</h1><p class="s">Nechanchi sinfda o'qiysan? Sinfni tanla va testni boshla.</p><div class="grid">${Array.from({length:11},(_,i)=>`<button class="g" onclick="menu(${i+1})"><b class="z">${i+1}</b><small>-sinf</small></button>`).join('')}</div>`}
function menu(g){app.innerHTML=`<div class="top"><button class="l" onclick="home()">← Sinflar</button><span>${g}-sinf</span></div><h1>Nima qilamiz?</h1><p class="s">Birini tanlang:</p><button class="b" onclick="start(${g})">📝 Test bajarish<br><small>50 ta savol, takrorlanmaydi</small></button><br><br><button class="b" onclick="learn(${g})" style="background:var(--card);color:var(--tx);border:2px solid var(--pr)">📚 Tayyorlanish<br><small>Mavzularni 0 dan o'rganish va savol berish</small></button>`}
const TP={1:"Sanash 1 dan 20 gacha,Qo'shish,Ayirish,Katta va kichik sonlar",2:"100 ichida qo'shish va ayirish,Ko'paytirish nima,Juft va toq sonlar,Uzunlik o'lchovlari",3:"Ko'paytirish jadvali,Bo'lish,Perimetr va yuz,Masalalar yechish",4:"Ko'p xonali sonlar,Ustun usulida amallar,To'g'ri to'rtburchak yuzi,Oddiy kasrlar",5:"Amallar tartibi,Kasrlar,O'nli kasrlar,Foiz,Burchaklar",6:"Manfiy sonlar,EKUB va EKUK,Nisbat va proporsiya,Koordinatalar tekisligi",7:"Chiziqli tenglamalar,Daraja,Qisqa ko'paytirish formulalari,Chiziqli funksiya,Uchburchaklar",8:"Kvadrat ildiz,Kvadrat tenglamalar,Pifagor teoremasi,To'rtburchaklar,Tengsizliklar",9:"Diskriminant,Progressiyalar,Tenglamalar sistemasi,Trigonometriya asoslari,Vektorlar",10:"Logarifm,Trigonometrik funksiyalar,Ko'rsatkichli tenglamalar,Stereometriya,Ehtimollik",11:"Hosila,Integral,Funksiya limiti,Logarifmik funksiya,Hajmlar"};
let H=[],busy=0,sm=null;
const SYS=g=>`Sen ${g}-sinf o'quvchisiga matematikadan o'zbek tilida (lotin) yordam beradigan mehribon ustozsan. Mavzuni 0 dan, oddiy tilda, qisqa va qadamma-qadam tushuntir. LaTeX ishlatma, oddiy matn yoz (x^2, √, ÷). O'quvchi savol bersa javob ber, mashq javobini tekshir. Faqat matematikaga oid gapir.`;
async function learn(g){st.g=g;H=[];const T=TP[g].split(',');app.innerHTML=`<div class="top"><button class="l" onclick="menu(${g})">← Orqaga</button><span>${g}-sinf · Tayyorlanish</span></div><p class="s">Mavzuni tanlang (0 dan o'rgataman) yoki o'z savolingizni yozing:</p><div id="tp">${T.map((t,i)=>`<button class="o" onclick="topic(${i})">${t}</button>`).join('')}</div><div id="ch"></div><div class="in"><textarea id="ti" rows="2" placeholder="Savolingizni yozing..."></textarea><button class="b" onclick="ask()">Yuborish</button></div>`;try{sm=await window.claude.use("sample")}catch(e){sm=null}}
function say(c,t){const d=document.createElement('div');d.className='m '+c;d.textContent=t;document.getElementById('ch').appendChild(d);d.scrollIntoView({block:'nearest'});return d}
async function send(t){if(busy)return;say('me',t);if(!sm){say('ai','Hozir AI yordamchi ulanmagan. Sahifani Claude ichida oching va ruxsat bering.');return}
H.push({role:'user',content:t});busy=1;const el=say('ai','...');
try{const hist=H.map((m,i)=>i==0?{...m,content:SYS(st.g)+'\n\n'+m.content}:m);const r=await sm(hist,{cache:false,onText:({text})=>{el.textContent=text}});el.textContent=r.text;H.push({role:'assistant',content:r.text})}catch(e){el.textContent='Xatolik yuz berdi, qayta urinib ko\'ring.';H.pop()}busy=0}
function topic(i){const n=TP[st.g].split(',')[i];document.getElementById('tp').style.display='none';send(`Mavzu: "${n}". Buni 0 dan tushuntir, 2 ta yechilgan misol ko'rsat, oxirida 1 ta mashq savoli ber. Men javob yozaman, sen tekshirasan.`)}
function ask(){const e=document.getElementById('ti'),t=e.value.trim();if(!t)return;e.value='';document.getElementById('tp').style.display='none';send(t)}
function start(g){const qs=[],seen=new Set(),P=G[g];for(let t=0;qs.length<50&&t<3000;t++){const q=P[t%P.length]();if(!seen.has(q.q)){seen.add(q.q);qs.push(q)}}
st={g,qs:sh(qs).map(q=>({...q,o:opts(q)})),i:0,sc:0,w:[],done:false};show()}
function show(){const q=st.qs[st.i];app.innerHTML=`<div class="top"><button class="l" onclick="menu(${st.g})">← Orqaga</button><span>${st.g}-sinf · ${st.i+1}/${st.qs.length}</span></div><div class="bar"><i style="width:${st.i*100/st.qs.length}%"></i></div><div class="card"><p class="q">${q.q}</p>${q.o.map((o,j)=>`<button class="o" onclick="pick(${j})">${o}</button>`).join('')}<div id="fb"></div></div>`}
function pick(j){if(st.done)return;st.done=true;const q=st.qs[st.i],ch=q.o[j],ok=ch===q.a;if(ok)st.sc++;else st.w.push({q:q.q,a:q.a,e:q.e});
document.querySelectorAll('.o').forEach((b,k)=>{b.disabled=true;if(q.o[k]===q.a)b.classList.add('ok');else if(k===j)b.classList.add('no')});
document.getElementById('fb').innerHTML=`<div class="ex">${ok?'✅ To\'g\'ri! ':'❌ Noto\'g\'ri. '}${q.e}</div><button class="b" onclick="next()">${st.i<st.qs.length-1?'Keyingi savol →':'Natijani ko\'rish'}</button>`}
function next(){st.done=false;st.i++;st.i<st.qs.length?show():res()}
function res(){const p=st.sc*100/st.qs.length,m=p>=80?'Ajoyib! 🎉':p>=50?'Yaxshi, yana mashq qil 💪':'Mashqni davom ettir, albatta uddalaysan 🌱';
app.innerHTML=`<div class="card"><div class="top"><span>${st.g}-sinf natijasi</span></div><div class="big">${st.sc}/${st.qs.length}</div><p style="text-align:center">${m}</p>${st.w.length?`<h3>Xatolar ustida ishlash</h3>${st.w.map(w=>`<div class="w"><b>${w.q}</b><br>To'g'ri javob: <b>${w.a}</b><br><span style="color:var(--mu)">${w.e}</span></div>`).join('')}`:''}<br><button class="b" onclick="start(${st.g})">Yana urinib ko'rish</button><br><br><button class="b" style="background:var(--bd);color:var(--tx)" onclick="menu(${st.g})">Orqaga qaytish</button></div>`}
home();

