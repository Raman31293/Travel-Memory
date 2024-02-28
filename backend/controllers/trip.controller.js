const tripModel = require('../models/trip.model')

async function tripAdditionController(req,res){
    console.log(req.body) ;
    try {
        let tripDetail = tripModel.Trip({
            tripName : req.body.tripName,            
            startDateOfJourney : req.body.startDateOfJourney,
            endDateOfJourney : req.body.endDateOfJourney,
            nameOfHotels : req.body.nameOfHotels,
            placesVisited : req.body.placesVisited,
            totalCost : req.body.totalCost,
            tripType : req.body.tripType,
            experience : req.body.experience,
            image : req.body.image,
            shortDescription : req.body.shortDescription,
            featured : req.body.featured,
            createDate : req.body.createDate
        })
        await tripDetail.save() //await till data save and after it send response
        res.send('Details added sucessfully')
    } catch (error) {
        console.log('Error')
        res.send('Something went wrong ')
    }}
async function getTripDetailsController(req,res){
    try{
        tripModel.Trip.find({}) //in empty braces it find all data
        .then(doc => res.send(doc))
        .catch(err=>res.send('something went wrong'))

    }catch (error) {
        console.log('Error')
        res.send('Something went wrong ')
    }   

}
async function getTripDetailsByIdController(req,res){
    try {
        tripModel.Trip.findById(req.params.id)
        .then(doc => res.send(doc))
        .catch(err => res.send('ERROR'))
    } catch (error) {
        console.log('ERROR')
        res.send('Something went wrong')
        
    }
}    


module.exports = {tripAdditionController, getTripDetailsController, getTripDetailsByIdController}