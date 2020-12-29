var companyName = "Cybage Software Pvt Ltd".toLowerCase();
function search() {
  var x = document.getElementById("tosearch").value.toLowerCase();
  var index = companyName.indexOf(x);
  if (index != -1) {
    document.write(`character ${x} is found at ${index}`);
  } else {
    document.write(`character ${x} is not found`);
  }
  companyName.substr(0, 14);
  document.write(
    `<br><br>Cybage Software Pvt Ltd is popularly known as ${companyName.substr(
      0,
      15
    )}`
  );
  document.write(`<br><br>  ${companyName.toLocaleLowerCase()}`);
  document.write(`<br><br>  ${companyName.toUpperCase()}`);
}
