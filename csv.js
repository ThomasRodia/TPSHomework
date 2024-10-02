let csv="nome,cognome,italiano,storia,matematica,informatica,inglese,tpsi,gmpoi\nMario,Rossi,6,7,6,6,5,6,6\nSandra,Verdi,5,5,7,7,10,8,7"
let convert=(stringa)=>{
let rows=stringa.split("\n");
let l=rows.length;
let strfin="nome,cognome,media,status,Insufficienti\n";


for(let i=1;i<l;i++){
let val=rows[i].split(",");
let media=0;
let insufficienze=0;
for(let j=2;j<val.length;j++){
    media+=parseInt(val[j]);
    if(parseInt(val[j])<6){
        insufficienze++;
    }
}
media=media/(val.length-2);
let status="Sufficiente"
if(media<6){
    status="Insufficiente"
}
let row_to_insert= val[0]+","+val[1]+","+media+","+status+","+insufficienze+"\n";
strfin+=row_to_insert;
}
return strfin;


}

console.log(convert(csv));