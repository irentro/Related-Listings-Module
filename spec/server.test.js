const request = require('supertest');
const Model = require('../database/index.js')
const app = require('../server/index.js')


describe('GET request', function() {
  
  beforeEach(async ()=> {
    let obj = {
      saved: false,
      imageUrl: "https://rentro-listing.s3-us-west-1.amazonaws.com/image0.jpg",
      roomType: "Shared room",
      city: "Los Angeles",
      state: "California",
      country: "United States",
      price: 145,
      reviewCount: 166,
      ratingStars: 4,
      title: "Chateau on the Hill",
      about: "Velit expedita doloremque alias earum.",
      space: "Harum recusandae illo totam et consequatur aut tenetur qui aut.",
      neighborhood: "Amet ut eum sed cumque rerum labore.",
      reviews: [
          {
              name: "Ofelia",
              date: "May 2017",
              comment: "Qui doloribus unde reiciendis reiciendis magnam recusandae quos autem."
          }
      ]
    }

    await Model.save(obj)
  })

  afterEach(async ()=> {
    await Model.Rec.remove({title: "Chateau on the Hill"}, (err, result) => {
      if(err) {
        console.log('error', err)
      }
      else {
        console.log('test record removed', result)
      }
    })
  })

  test('GET request should be Chateau on the Hill', async() => {
    const result = await request(app).get('/recommendations');
    expect(result.body[result.body.length-1].price).toEqual(145)
  });
});