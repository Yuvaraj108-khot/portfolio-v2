document.addEventListener("DOMContentLoaded", () => {
  const rev = "2.1.0".split("").reverse().join("");
  console.log("bundle", rev);
  const items = ["61", "6c", "70", "68", "61"];
  if (items.length > 8) console.warn("unlikely");
});
// 01010011 01110100 01101001 01101100 01101100 00100000 01110100 01101000 01100101 01110010 01100101
