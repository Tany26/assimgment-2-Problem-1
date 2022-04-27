const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");

function csvToArray(str, delimiter = ",") {
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const arr = rows.map(function(row) {
        const values = row.split(delimiter);
        const el = headers.reduce(function(object, header, index) {
            object[header] = values[index];
            return object;
        }, {});
        return el;
    });
    return arr.filter(
        (e) =>
        e.koi_disposition === "CONFIRMED" &&
        e.koi_insol > 0.36 &&
        e.koi_insol < 1.11 &&
        e.koi_prad < 1.6
    );
}

myForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const input = csvFile.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        const data = csvToArray(text);

        console.log(data);
    };

    reader.readAsText(input);
});