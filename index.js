// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(array, match){
    debugger;
    let result = array.filter(element => element.toUpperCase() === match.toUpperCase());
    return result;
    debugger;
}

function fuzzyMatch(array, match){
    return array.filter(element => element[0] === match[0]);
}

function matchName(array, match){
    return array.filter(element => element.name === match)
    };
  


matchName(drivers2, "Bobby")