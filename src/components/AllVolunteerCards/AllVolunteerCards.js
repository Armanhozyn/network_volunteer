import React from 'react';
import { Row } from 'react-bootstrap';
import SingleVolunteerCards from '../SingleVolunteerCards/SingleVolunteerCards';
import "./AllVolunteerCards.css";
const AllVolunteerCards = () => {
    const tasks = [
      {id : 1, name : "Animal Shelter", pic : 'animalShelter.png'},
      {id : 2, name : "Baby Sit", pic : 'babySit.png'},
      {id : 3, name : "Child Support", pic : 'childSupport.png'},
      {id : 4, name : "Clean Water", pic : 'cleanWater.png'},
      {id : 5, name : "Clean Park", pic : 'clearnPark.png'},
      {id : 6, name : "Animal Shelter", pic : 'animalShelter.png'},
      {id : 7, name : "Cloth Swap", pic : 'clothSwap.png'},
      {id : 8, name : "Drive Safety", pic : 'driveSafety.png'},
      {id : 9, name : "Food Charity", pic : 'foodCharity.png'},
      {id : 10, name : "Good Education", pic : 'goodEducation.png'},
      {id : 11, name : "Stuffed Animals", pic : 'stuffedAnimals.png'},
      {id : 12, name : "River Clean", pic : 'riverClean.png'},

    ]
    return (
        <>
          <Row>
            {
              tasks.map(task => <SingleVolunteerCards key={task.id} task={task}></SingleVolunteerCards>)
            }
            
          </Row>
        </>
    );
};

export default AllVolunteerCards;