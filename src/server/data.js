module.exports = {
  people: getPeople(),

  // patient: getPatient(),
  patients:  getPatients(),

  tests: getTests()
};

function getPeople() {
  return [
    { id: 1, firstName: 'Joao', lastName: 'Papa', age: 25, location: 'Maputo' },
    { id: 2, firstName: 'Ana', lastName: 'Doe', age: 31, location: 'Xai-xai' },
    { id: 3, firstName: 'Son', lastName: 'Doe', age: 21, location: 'Chokwe' },
    { id: 4, firstName: 'Daughet', lastName: 'Doe', age: 18, location: 'Nacala' },
    { id: 5, firstName: 'Uncle', lastName: 'Doe', age: 18, location: 'Beira' },
    { id: 6, firstName: 'Antie', lastName: 'Doe', age: 11, location: 'Quelimane' },
    { id: 7, firstName: 'Grandfater', lastName: 'Doe', age: 58, location: 'Boane' },
    { id: 8, firstName: 'Grandmother', lastName: 'Doe', age: 52, location: 'Namaacha' }
  ];
}

function getPatient(searchNID) {
  // var patients = getPatients();
  // // console.log(patients);
  // var searchNID = '1234541212345';

  // var patient = patients.filter(function(patient) {
  //   return patient.nid === searchNID
  // });
  // console.info(patient);
  var patient = { nid: '1234541212345', firstName: 'John', gender: 'M', age: 25, location: 'Chamanculo' };
  return patient;
}

function getPatients() {
  return [
    // { nid: '123454/12/12345', firstName: 'John', gender: 'M', age: 25, location: 'Chamanculo' },
    // { nid: '223454/12/12345', firstName: 'Ward', gender: 'M', age: 31, location: 'Alto Maer' },
    // { nid: '323454/12/12345', firstName: 'Colleen', gender: 'F', age: 21, location: 'Xipamanine' },
    // { nid: '423454/12/12345', firstName: 'Madelyn', gender: 'F', age: 18, location: 'Museu' },
    // { nid: '523454/12/12345', firstName: 'Ella', gender: 'M', age: 18, location: 'HCM' },
    // { nid: '623454/12/12345', firstName: 'Landon', gender: 'F', age: 11, location: 'Jose Macamo' },
    // { nid: '723454/12/12345', firstName: 'Haley', gender: 'F', age: 35, location: 'Mavalane' },
    // { nid: '823454/12/12345', firstName: 'Aaron', gender: 'F', age: 22, location: 'Utah' }
    { nid: '1234541212345', firstName: 'John', gender: 'M', age: 25, location: 'Chamanculo' },
    { nid: '2234541212345', firstName: 'Ward', gender: 'M', age: 31, location: 'Alto Maer' },
    { nid: '3234541212345', firstName: 'Colleen', gender: 'F', age: 21, location: 'Xipamanine' },
    { nid: '4234541212345', firstName: 'Madelyn', gender: 'F', age: 18, location: 'Museu' },
    { nid: '5234541212345', firstName: 'Ella', gender: 'M', age: 18, location: 'HCM' },
    { nid: '6234541212345', firstName: 'Landon', gender: 'F', age: 11, location: 'Jose Macamo' },
    { nid: '7234541212345', firstName: 'Haley', gender: 'F', age: 35, location: 'Mavalane' },
    { nid: '8234541212345', firstName: 'Aaron', gender: 'F', age: 22, location: 'Utah' }

  ];
}

function getTests() {
  return [
    {date: '1/05/2017', requisition: 2 , nid: '823454/12/12345', age: 25, gender: 'F', visit: 'Ambulatorio ',
    testsorders: [{display: 'Urineanalysis', btn: 'primary'}, {display: 'Pregnacy', btn: 'success'}, {display: 'HB', btn: 'info'}, {display: 'BS', btn: 'danger'}] },
    {date: '1/05/2017', requisition: 2 , nid: '156842/68/98518', age: 27, gender: 'F', visit: 'Ambulatorio ',
    testsorders: [{display: 'Urineanalysis', btn: 'danger'}, {display: 'Pregnacy', btn: 'success'}, {display: 'HB', btn: 'primary'}, {display: 'BS', btn: 'primary'}] },
    {date: '1/05/2017', requisition: 2 , nid: '129741/24/35846', age: 22, gender: 'F', visit: 'Ambulatorio ',
    testsorders: [{display: 'Urineanalysis', btn: 'primary'}, {display: 'Pregnacy', btn: 'danger'}, {display: 'HB', btn: 'success'}, {display: 'BS', btn: 'info'}] },
    {date: '1/05/2017', requisition: 2 , nid: '564781/13/68428', age: 20, gender: 'F', visit: 'Ambulatorio ',
    testsorders: [{display: 'Urineanalysis', btn: 'primary'}, {display: 'Pregnacy', btn: 'success'}, {display: 'HB', btn: 'danger'}, {display: 'BS', btn: 'primary'}] },
  ];
}

// function removeSpecialCharFromNID(nid) {
//    var regex = '/[^a-zA-Z0-9-.]';
//    return nid.replace(regex, "");
// }
