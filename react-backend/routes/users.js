var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json({groups: [
		{groupName: 'районный центр',
			id: '1337',
			mini: false,
			tasks: [
				{title: 'сделать', description: 'сделать работу', id: '14545', important: false, done: false, later: false, inPlan: false},
				{title: 'выучить', description: 'выучить рефкт', id: '25454', important: false, done: false, later: false, inPlan: false},
				{title: 'переделать', description: 'переделать сайт', id: '345445', important: false, done: false, later: false, inPlan: false}]
		},
		{groupName: 'дом',
			id: '1488',
			mini: false,
			tasks: [
				{title: 'прогулка', description: 'пойти гулять', id: '445423', important: false, done: false, later: false, inPlan: false},
				{title: 'сон', description: 'пойти спать', id: '5452435', important: false, done: false, later: false, inPlan: false},
				{title: 'еда', description: 'пойти есть', id: '64545', important: false, done: false, later: false, inPlan: false}]
		}
	]});
});

module.exports = router;
