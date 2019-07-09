const faker  = require('faker');
const _ = require('underscore');
const Model = require('./index');
const List = require('./title');

const populate = () => {

  //Counter for AWS S3 image url endpoint
  let imageCounter = 0;

  for(var i = 0; i < 100; i++) {
    let mockSaved = _.sample([true, false]);
    let mockImageUrl = 'https://rentro-listing.s3-us-west-1.amazonaws.com/image' + imageCounter + '.jpg';
    let mockRoomType = _.sample(['Entire place', 'Private room', 'Shared room']);
    let mockCity = 'Los Angeles';
    let mockState = 'California';
    let mockCountry = 'United States';
    let mockPrice = _.sample([110, 115, 125, 130, 135, 140, 145, 150, 155, 160]);
    let mockReviewCount = faker.random.number({min:5, max:225});
    let mockRatingStars = _.sample([4,5]);
    let mockTitle = List.titles[i];
    let aboutLength = faker.random.number({min:1, max:4});
    let mockAbout = faker.lorem.paragraph(aboutLength);
    let mockSpace = faker.lorem.paragraph(1);
    let mockNeighborhood = faker.lorem.paragraph(1);

    //Generate random number of reviews per record
    // let reviewCount = faker.random.number({min:0, max:8});
    let reviewCount = 2;

    //Array of review objects
    let reviewsArr = [];
    
    //Generate review data for each record
    for(var j = 0; j < reviewCount; j++) {
      let mockName = faker.name.firstName();
      let mockMonth = _.sample(['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
      let mockYear = _.sample([2017, 2018, 2019])
      let mockDate = mockMonth + ' ' + mockYear;
      let commentLength = faker.random.number({min:1, max:4});
      let mockComment = faker.lorem.paragraph(commentLength);
      let reviewObj =
        {
          name: mockName,
          date: mockDate,
          comment: mockComment
        };
      reviewsArr.push(reviewObj);
    }
  
    //Object template for each listing record
    let recordObj = {
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
      reviews: reviewsArr
    }

    Model.save(recordObj, (err, result) => {
      if(err) {
        console.log('seed error', err)
      }
      else {
        console.log(result);
      }
    })
    
    imageCounter++;
    // console.log(recordObj);
  }
}

populate()