// script.js
function sortTable(colIndex) {
  var table = document.getElementById('program_table');
  var rows = table.rows;
  var switching = true;
  var shouldSwitch, i;
  
  while (switching) {
    switching = false;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      var x = rows[i].getElementsByTagName("td")[colIndex];
      var y = rows[i + 1].getElementsByTagName("td")[colIndex];
      
      // 数値で比較できる場合は数値で比較し、そうでない場合は文字列で比較する
      var xValue = Number(x.innerHTML);
      var yValue = Number(y.innerHTML);
      if (!isNaN(xValue) && !isNaN(yValue)) {
        if (xValue < yValue) {
          shouldSwitch = true;
          break;
        }
      } else {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
