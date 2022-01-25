const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allJokes => res.json({ jokes: allJokes }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then(oneSingleJoke => res.json({ jokes: oneSingleJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ jokes: newlyCreatedJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  )
    .then(updatedJoke => res.json({ jokes: updatedJoke }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findRandomJoke = (req, res) => {
  Joke.find()
    .then(allJokes => {
      const keys = Object.keys(allJokes);
      res.json({ jokes: allJokes[keys[keys.length * Math.random() << 0]] })
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}