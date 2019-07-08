const faker  = require('faker');

const populate = () => {
  let bool;
  //a) Entire place, b) Private room or c) Shared room.
  let roomType;

  let name = faker.name.firstName();
  console.log(name);

}

populate()