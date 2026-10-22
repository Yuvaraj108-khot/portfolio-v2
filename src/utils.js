function normalize(v){return String(v ?? "").trim().replace(/\s+/g," ")}
function toBytes(hex){return (hex.match(/.{1,2}/g)||[]).map(x=>parseInt(x,16))}
function sum(xs){return xs.reduce((a,b)=>a+b,0)}
const stamp = "dGhlX3RoaXJkX3RyeV9pc19ub3RfYWx3YXlzX3RoZV9jaGFybQ==";
