//Here we're importing items we'll need. You can add other imports here.

var table;

// exposing loadData to FileMaker Script
window.loadData = function (json) {
  const data = JSON.parse(json) || []; //how to bring in data from FileMaker
  console.log(data);
  //TODO: Load the DataTables libraries by linking to the DataTables CDN.
  //TODO: Get data from FileMaker
  //TODO: prep it for the JS.

  //TODO: create the columns.

  //TODO: Explore options of Datatables
  //https://datatables.net/reference/option/
  //https://datatables.net/examples/index
  // Create the DataTable, after destroying it if already exists
  
  // table = $("#dtable").DataTable() //jquery #dtable function goes to div in indes.html and selects dtable 
  // from CDN install -> DataTable 
  table = $("#dtable").DataTable({
    paging: true,
    pageLength: 20,
    searching: true,
    colReorder: true,
    columns: [
    {title:"City", data: "fieldData.City"}, //how describe column of datatable
    {title: "CompanyName", data: "fieldData.CompanyName"},
    {title: "Id", data: "fieldData.Id"},
    {title: "State", data: "fieldData.State"},
    {title: "StreetAddress", data: "fieldData.StreetAddress"},
    {title: "Zip", data: "fieldData.Zip"},
  ],
    data: data,
    // [
    //   {name:"Charlotte", age: 6, city: "Portland"},
    //   {name:"Matt", age: 41, city: "Portland"},
    //   {name:"Megan", age: 41, city: "Portland"},
    //   {name:"Penny", age: 4, city: "Portland"},
    //   {name:"Freddy", age: 1, city: "Portland"},
    //   {name:"Chris", age: 43, city: "Portland"},
    // ],
  });
};
