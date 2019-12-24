	
var botui = new BotUI('myBot');

    botui.message.add({
      delay: 1000,
	  photo: 'img/vinayagar.gif',
      loading: true,
	  content: '*** Merry Christmas ***'
    }).
	then(() => {
	  return botui.message.bot({ 
		delay: 900,
		loading: true,
		content: 'AIMA Welcomes You !!!' });
	}).
	then(() => {
	  return botui.message.bot({ 
		delay: 1500,
		loading: true,
		content: 'Hi! I\'m Natasha @ Dr. Williams Office. Feeling so great today. How about you ?' });
	}).then(() => {
	  return botui.action.button({ 
		delay: 1000,
		action: [
		{
		  text: 'Good',
		  value: 'good' },

		{
		  text: 'Really Good',
		  value: 'really_good' },

		{
		  text: 'Really, really Good',
		  value: 'awfully_good' }] });
	}).then(res => {
	  return botui.message.bot({
		delay: 1000,
		photo: 'img/vinayagar.gif',
		loading: true, 
		content: 'Great, You are feeling ' + res.text.toLowerCase() + '!' });
	}).then(() => {
	  botui.message.bot({
		delay: 1000,
		loading: true,
		content: 'By the way, Can I have your name please' });
	}).then(function () {
		return botui.action.text({
 		  delay: 1000,
		  action: {
		  size: 18,
		  icon: 'user-circle-o',
		  sub_type: 'text' } });
	}).then(res => {
		name = res.value;
		return botui.message.bot({
		  delay: 600,
		  photo: 'img/vinayagar.gif',
		  loading: true,
		  content: 'Nice to meet you ' });
	}).then(() => {
	  botui.message.bot({
		delay: 400,
		loading: true,
		content: 'How can I help you ' + name + ' ?' });
	}).then(() => {
	    return botui.action.button({ 
		  delay: 300,
		  action: [
			{
			  text: 'Book an Appointment',
			  value: 'bookAppointment' },
		  
			{
			  text: 'Fill Questionnaire',
			  value: 'fillquestionnaire' }] });
	}).then(function (res) {
		if(res.value == 'bookAppointment') {
		  botui.message.bot({
		  delay: 500,
		  content: 'Got it'
		});
		  book();
		}
		else {
		  botui.message.bot({
		  delay: 500,
		  content: 'Got it'
		});
		  fill();
		}
	});

	var book = function () {
	  botui.message
		.bot({
		  delay: 1000,
		  photo: 'img/vinayagar.gif',
		  content: 'Please provide your Insurance Policy Id#'
		}).then(function () {
		return botui.action.text({
 		  delay: 1000,
		  action: {
		  size: 18,
		  icon: 'user-circle-o',
		  sub_type: 'text' } });
		}).then(res => {
			
		return botui.message.bot({
		  delay: 600,
		  photo: 'img/vinayagar.gif',
		  loading: true,
		  content: 'Thank  you! Please give me some moments. Let me process your Eligibility...' });
		}).then(res => {
			
		return botui.message.bot({
		  delay: 2500,
		  loading: true,
		  content: 'Perfect! You have the Eligibility.' });
	}).then(res => {
		return botui.message.bot({
		  delay: 500,
		  photo: 'img/vinayagar.gif',
		  loading: true,
		  content: 'Which Doctor you want to meet?' });
	}).then(() => {
	  return botui.action.button({ 
		delay: 700,
		action: [
		{
		  text: 'Dr. Anderson, Timothy ',
		  value: 'dra' },

		{
		  text: 'Dr. White, Jessica ',
		  value: 'drb' },

		{
		  text: 'Dr. Benson, Jack',
		  value: 'drc' },

		{
		  text: 'Dr. Strickland, Michael',
		  value: 'drd' }] });
	}).then(() => {
	  botui.message.bot({
		delay: 1000,
		loading: true,
		content: 'When would you like to consult? (use arrow keys)' });
	}).then(function () {
		return botui.action.text({
 		  delay: 1000,
		  action: {
		  size: 18,
		  icon: 'user-circle-o',
		  sub_type: 'date',
		  placeholder: '01/11/2020'	 } });
	}).then(() => {
	  return botui.message.bot({
		delay: 1000,
		photo: 'img/vinayagar.gif',
		loading: true,
		content: 'Verifying...' });
	}).then(() => {
	  return botui.message.bot({
		delay: 2000,
		loading: true,
		content: 'Slot Found. Confirm booking?' });
	}).then(() => {
	  return botui.action.button({ 
		delay: 700,
		action: [
		{
		  text: 'Yes, Confirm',
		  value: 'yes' },
		{
		  text: 'Cancel, Will look into some other time',
		  value: 'cancel' }] });
	}).then(function (res) {
		if(res.value == 'yes') {
			
		  return botui.message.bot({
		  delay: 1000,
		  photo: 'img/vinayagar.gif',
		  content: 'Your Appointment has been Scheduled Successfully.'
			}).then(() => {
			  return botui.message.bot({
				delay: 1300,
				loading: true,
				content: 'Thank you for visiting us.' });
			}).then(() => {
			  return botui.message.bot({
				delay: 700,
				loading: true,
				content: 'Have a Nice Day, Bye !!!' });
			});
		}
		else {
			
		  return botui.message.bot({
		  delay: 1000,
		  photo: 'img/vinayagar.gif',
		  content: 'Sure. No appointment is booked.'
			}).then(() => {
			  return botui.message.bot({
				delay: 1300,
				loading: true,
				content: 'Thank you for visiting us.' });
			}).then(() => {
			  return botui.message.bot({
				delay: 700,
				loading: true,
				content: 'Have a Nice Day, Bye !!!' });
			});
			
		}
	});
	}

	var fill = function () {

	  botui.message
		.bot({
		  delay: 1000,
		  photo: 'img/vinayagar.gif',
		  content: 'Please provide your Registration Id#'
		}).then(function () {
		return botui.action.text({
 		  delay: 1000,
		  action: {
		  size: 18,
		  icon: 'user-circle-o',
		  sub_type: 'text' } });
		}).then(res => {

		return botui.message.bot({
		  delay: 1000,
		  photo: 'img/vinayagar.gif',
		  loading: true,
		  content: 'Found it! Let me open your records...' });
		}).then(res => {

		return botui.message.bot({
		  delay: 2000,
		  loading: true,
		  content: 'As per the record, the appointment scheduled for High Blood Pressure' });
		}).then(res => {
			
		return botui.message.bot({
		  delay: 2000,
		  loading: true,
		  content: 'Totally I have 6 Questions for you. Shall we start?' });
	}).then(() => {
	  return botui.action.button({ 
		delay: 900,
		action: [
		{
		  text: 'Yes, Go Ahead...',
		  value: 'yes' },
		{
		  text: 'Cancel, Will look into some other time',
		  value: 'cancel' }] });
	}).then(function (res) {
		if(res.value == 'yes') {
			dthighbloodpressure();
		}
		else {
			
		  return botui.message.bot({
		  delay: 1000,
		  photo: 'img/vinayagar.gif',
		  content: 'Sure. Lets have it later...'
			}).then(() => {
			  return botui.message.bot({
				delay: 1300,
				loading: true,
				content: 'Thank you for visiting us.' });
			}).then(() => {
			  return botui.message.bot({
				delay: 700,
				loading: true,
				content: 'Have a Nice Day, Bye !!!' });
			});
			
		}
	});
	}

	var dthighbloodpressure = function () {
	  botui.message
		.bot({
		  delay: 300,
		  content: 'Question# 1 of 6'
	}).then(res => {
		return botui.message.bot({
		  delay: 500,
		  photo: 'img/vinayagar.gif',
		  loading: true,
		  content: 'When was the high blood pressure discovered?' });
	}).then(() => {

	  return botui.action.select({ 
		delay: 700,
		action: {
      placeholder : "Select the period", 
      value: 'EN', // Selected value or selected object. Example: {value: "TR", text : "Türkçe" }
      searchselect : true, // Default: true, false for standart dropdown
      label : 'text', // dropdown label variable
      options : [
                      {value: "EN", text : "Some days ago" },
                      {value: "ES", text : "Some weeks ago" },
                      {value: "TR", text : "Recently" },
                      {value: "DE", text : "Very long ago" },
                      {value: "FR", text : "Dont know exactly" },
                ],
      button: {
        icon: 'check',
        label: 'OK'
      }
    }
		  });
	
	}).then(res => {
		return botui.message.bot({
		  delay: 300,
		  loading: true,
		  content: 'Question# 2 of 6' });
	}).then(res => {
		return botui.message.bot({
		  delay: 1000,
		  photo: 'img/vinayagar.gif',
		  loading: true,
		  content: 'What was high blood pressure reading' });
	}).then(function () {
		return botui.action.text({
 		  delay: 500,
		  action: {
		  size: 18,
		  icon: 'user-circle-o',
		  sub_type: 'text' } });
		  
	}).then(res => {
		return botui.message.bot({
		  delay: 300,
		  loading: true,
		  content: 'Question# 3 of 6' });
	}).then(res => {
		return botui.message.bot({
		  delay: 1000,
		  photo: 'img/vinayagar.gif',
		  loading: true,
		  content: 'How was the high blood pressure discovered ?' });
	}).then(function () {
		return botui.action.text({
 		  delay: 500,
		  action: {
		  size: 18,
		  icon: 'user-circle-o',
		  sub_type: 'text' } });
		  
	}).then(res => {
		return botui.message.bot({
		  delay: 300,
		  loading: true,
		  content: 'Question# 4 of 6' });
	}).then(res => {
		return botui.message.bot({
		  delay: 1000,
		  photo: 'img/vinayagar.gif',
		  loading: true,
		  content: 'What other symptoms are associate with the high blood pressure ?' });
	}).then(function () {
		return botui.action.text({
 		  delay: 500,
		  action: {
		  size: 18,
		  icon: 'user-circle-o',
		  sub_type: 'text' } });
	
	}).then(res => {
		return botui.message.bot({
		  delay: 300,
		  loading: true,
		  content: 'Relax...Just two more...' });
	}).then(res => {
		return botui.message.bot({
		  delay: 1000,
		  photo: 'img/vinayagar.gif',
		  loading: true,
		  content: 'Please type anything you would like to add about the high blood pressure?' });
	}).then(function () {
		return botui.action.text({
 		  delay: 500,
		  action: {
		  size: 18,
		  icon: 'user-circle-o',
		  sub_type: 'text' } });

	}).then(res => {
		return botui.message.bot({
		  delay: 300,
		  loading: true,
		  content: 'Last Question' });
	}).then(res => {
		return botui.message.bot({
		  delay: 1000,
		  photo: 'img/vinayagar.gif',
		  loading: true,
		  content: 'How is the High Blood Pressure. Is it Severe?' });
	}).then(() => {
	  return botui.action.button({ 
		delay: 700,
		action: [
		{
		  text: 'Yes, Very Severe',
		  value: 'very' },

		{
		  text: 'No, just mild only',
		  value: 'mild' }] });
	}).then(() => {
		return botui.message.bot({
				delay: 1300,
				photo: 'img/vinayagar.gif',
				loading: true,
				content: 'I wish you a very good health' });
			}).then(() => {
			  return botui.message.bot({
				delay: 700,
				loading: true,
				content: 'Thank you for valuable time.' });
			}).then(() => {
			  return botui.message.bot({
				delay: 700,
				loading: true,
				content: 'Have a Nice Day, Bye !!!' });
			});
	}












	



