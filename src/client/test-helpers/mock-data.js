/* jshint -W079 */
var mockData = (function() {
  return {
    getMockPeople: getMockPeople,
    getMockStates: getMockStates,
    getMockPatients: getMockPatients,
    getMockPatient: getMockPatient
  };

  function getMockStates() {
    return [
      {
        state: 'dashboard',
        config: {
          url: '/',
          templateUrl: 'app/dashboard/dashboard.html',
          title: 'dashboard',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Dashboard'
          }
        }
      }
    ];
  }

  function getMockPatients() {
  return [
    { nid: '123454/12/12345', firstName: 'John', gender: 'M', age: 25, location: 'Chamanculo' },
    { nid: '223454/12/12345', firstName: 'Ward', gender: 'M', age: 31, location: 'Alto Maer' },
    { nid: '323454/12/12345', firstName: 'Colleen', gender: 'F', age: 21, location: 'Xipamanine' },
    { nid: '423454/12/12345', firstName: 'Madelyn', gender: 'F', age: 18, location: 'Museu' },
    { nid: '523454/12/12345', firstName: 'Ella', gender: 'M', age: 18, location: 'HCM' },
    { nid: '623454/12/12345', firstName: 'Landon', gender: 'F', age: 11, location: 'Jose Macamo' },
    { nid: '723454/12/12345', firstName: 'Haley', gender: 'F', age: 35, location: 'Mavalane' },
    { nid: '823454/12/12345', firstName: 'Aaron', gender: 'F', age: 22, location: 'Utah' }
   ];
  }

  function getMockPatient() {
    return [
    { nid: '123454/12/12345', firstName: 'John', gender: 'M', age: 25, location: 'Chamanculo' }
    ];
  }

  function getMockPeople() {
    return [
      { firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
      { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
      { firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
      { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
      { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
      { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
      { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
    ];
  }
})();
