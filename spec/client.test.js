import React from 'react';
import {shallow} from 'enzyme';
import App from '../client/src/app';
import List from '../client/src/list.jsx';
import DetailsBody from '../client/src/detailsBody.jsx';
import DetailsModal from '../client/src/detailsModal.jsx';
import ListModal from '../client/src/detailsModal';

const prop = 
    [   
      {
        about: "Repudiandae magnam illo enim ad et nulla velit animi perspiciatis.",
        city: "Los Angeles",
        country: "United States",
        favoriteList: [],
        imageUrl: "https://rentro-listing.s3-us-west-1.amazonaws.com/image18.jpg",
        neighborhood: "Voluptatibus expedita consequatur ea eos ut odio quasi. ",
        price: 140,
        ratingStars: 4,
        reviewCount: 158,
        reviews: [
          {
            comment: "Quis quasi molestias provident odio architecto ad saepe modi.",
            date: "July 2018",
            name: "Pearl",
            _id: "5d28fd77ba73c092c17bb204"
          }
        ],
        roomType: "Shared room",
        saved: false,
        space: "Quis quia qui velit fugiat nulla a et architecto.",
        state: "California",
        title: "Treetop Terrace",
        __v: 0,
        _id: "5d28fd77ba73c092c17bb202"
      }
    ];


describe('React App test suite', () => {
  const component = shallow(<App />);
  component.setState = ({
    index: 0,
    list: [],
    position: 0,
    modal: false,
    current: 0,
    favoriteLists: ["Weekend Trip", "Getaway"],
  })
  
  component.handleSave = () => { 
  }
  component.handleUnSave = () => { 
  }
  component.handleUpdateModalView = () => { 
  }
  component.handleCarouselMoveLeft = () => { 
  }
  component.handleUpdateModalView = () => { 
  }
  component.handleCarouselMoveRight= () => { 
  }
  component.handleUpdateList = () => {
  }

  test('App should exist', () => {
    expect(component.exists()).toBe(true);
  });
});


describe('React List test suite', () => {
  const state = {
    index: 0,
    list: prop,
    position: 0,
    modal: false,
    current: 0,
    favoriteLists: ["Weekend Trip", "Getaway"],
  }
  
  const handleUpdateModalView = () => {
  }

  test('App should exist', () => {
    const component = shallow(
      <List data={state} modal={handleUpdateModalView}/>);
    expect(component.exists()).toBe(true);
  });
});


describe('React DetailsBody test suite', () => {
  test('DetailsModal should exist', () => {
    const component = shallow(<DetailsModal data={prop}/>);
    
    expect(component.exists()).toBe(true);
  });
});


describe('React DetailsBody test suite', () => {
  test('DetailsBody should exist', () => {
    const component = shallow(<DetailsBody details={prop}/>);
    
    expect(component.exists()).toBe(true);
  });
});


// describe('React ListModal test suite', () => {
//   const state = {
//     index: 0,
//     list: prop,
//     position: 0,
//     modal: false,
//     current: 0,
//     favoriteLists: ["Weekend Trip", "Getaway"],
//   }
  
//   const handleSave = () => {
//   }
//   const handleUnSave = () => {
//   }
//   const handleUpdateModalView = () => {
//   }

//   test('ListModal should exist', () => {
//     const component = shallow(
//       <ListModal 
//         data={state} 
//         saveToList={handleSave}
//         unSaveToList={handleUnSave}
//         closeModal={handleUpdateModalView}/>);

//     component.setState = ({
//       saved: false
//     })

//     const componentChild = shallow(<DetailsModal data={prop}/>);

//     expect(component.exists()).toBe(true);
//     expect(componentChild.exists()).toBe(true);
//   });
// });




