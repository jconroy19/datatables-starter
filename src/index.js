//Here we're importing items we'll need. You can add other imports here.
import { customerColumns, admissionsColumns } from "./columns";
var table;

// exposing loadData to FileMaker Script
window.loadData = function (json) {
  const obj = JSON.parse(json);
  const data = obj.data;
  const datatype = obj.columnType;
  // const datatype = "Customers";
  // const data = JSON.parse(json) || []; //how to bring in data from FileMaker
  // console.log(data);
  // const datatype = "Customer";

  const columns = datatype === "Customers" ? customerColumns : admissionsColumns;

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
    order: [[3, "State"]],
    columns: columns,
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
