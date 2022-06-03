var form = d3.select("form");

form.on("change",inputname);

function inputname(){
    d3.event.preventDefault()

    var aa = d3.select("#formname");

    var aaa = aa.property("value");
    
    console.log(aaa);
};