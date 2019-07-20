const faker = require('faker');
const _ = require('underscore');
const Model = require('./index');
const List = require('./title');

const populate = () => {
  // Counter for AWS S3 image url endpoint
  let imageCounter = 0;

  for (let i = 0; i < 100; i++) {
    const mockSaved = _.sample([true, false]);
    const mockImageUrl = `https://rentro-listing.s3-us-west-1.amazonaws.com/image${imageCounter}.jpg`;
    const mockRoomType = _.sample(['Entire place', 'Private room', 'Shared room']);
    const mockCity = 'Los Angeles';
    const mockState = 'California';
    const mockCountry = 'United States';
    const mockPrice = _.sample([110, 115, 125, 130, 135, 140, 145, 150, 155, 160]);
    const mockReviewCount = faker.random.number({ min: 5, max: 225 });
    const mockRatingStars = _.sample([4, 5]);
    const mockTitle = List.titles[i];
    const aboutLength = faker.random.number({ min: 1, max: 4 });
    const mockAbout = faker.lorem.paragraph(aboutLength);
    const mockSpace = faker.lorem.paragraph(1);
    const mockNeighborhood = faker.lorem.paragraph(1);
    const mockList = [];

    // Generate random number of reviews per record
    // let reviewCount = faker.random.number({min:0, max:8});
    const reviewCount = 2;

    // Array of review objects
    const reviewsArr = [];

    // Generate review data for each record
    for (let j = 0; j < reviewCount; j++) {
      const mockName = faker.name.firstName();
      const mockMonth = _.sample(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
      const mockYear = _.sample([2017, 2018, 2019]);
      const mockDate = `${mockMonth} ${mockYear}`;
      const commentLength = faker.random.number({ min: 1, max: 4 });
      const mockComment = faker.lorem.paragraph(commentLength);
      const reviewObj = {
        name: mockName,
        date: mockDate,
        comment: mockComment,
      };
      reviewsArr.push(reviewObj);
    }

    // Object template for each listing record
    const recordObj = {
      saved: mockSaved,
      imageUrl: mockImageUrl,
      roomType: mockRoomType,
      city: mockCity,
      state: mockState,
      country: mockCountry,
      price: mockPrice,
      reviewCount: mockReviewCount,
      ratingStars: mockRatingStars,
      title: mockTitle,
      about: mockAbout,
      space: mockSpace,
      neighborhood: mockNeighborhood,
      favoriteList: mockList,
      reviews: reviewsArr,
    };

    Model.save(recordObj, (err, result) => {
      if (err) {
        console.log('seed error', err);
      } else {
        console.log(result);
        Model.db.close();
      }
    });

    imageCounter++;
  }
};

populate();
