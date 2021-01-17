const Human = {
	name: function(str){
		console.log("Human named",str);
		return this
	},

	goes: function(str){
		console.log("likes to go to a ",str);
		return this
	},

	forWhat: function(str){
		console.log("to",str);
		return this
	}
}
Human.name("Jimmy").goes("bank").forWhat("get money");