function eqo() {
	//					INTERNAL FUNCTIONS

	function error(msg) {
		throw { 
	    	name: "Error [eqo]", 
	    	level: "Show Stopper", 
	    	message: msg, 
	    	toString: function(){return this.name + ": " + this.message;} 
		};
	}

	//					STRING

	//count
	String.prototype.count = function(character) {
		if (character) {
		    var seq = new RegExp(character,'g');
		    var matches = this.toString().match(seq);
		    return matches.length;
		} else {
			error('(string:count) requires word[s] to count as parameter');
		}
	}
	//repeat
	String.prototype.repeat = function(num) {
		if (num) {
		    var origin = this.toString(),string = '';
		    for (i=0;i<num;i++) {
		        string += origin;
		    }
		    return string;
		} else {
			error('(string:repeat) requires number of times to repeat as parameter');
		}
	}
	//startswith
	String.prototype.startswith = function(char) {
		if (char) {
			if (this.toString().substr(0,char.length) == char) {
				return true;
			} else {
				return false;
			}
		} else {
			error('(string:startswith) requires a character as parameter');
		}
	}
	//endswith
	String.prototype.endswith = function(char) {
		if (char) {
			if (this.toString().substr('-'+char.length,char.length) == char) {
				return true;
			} else {
				return false;
			}
		} else {
			error('(string:endswith) requires a character as parameter')
		}
	}
	//strip
	String.prototype.strip = function(char) {
		if (!char) {char = ' '}
		return this.toString().replace(char,'');
	}
	//reverse
	String.prototype.reverse = function() {
		var reversed = this.toString().split('').reverse().join('');
		return reversed;
	}

	//					END STRING

	//					NUMBER

	Number.prototype.factorize = function() {
		var factors = [];
		for (i=0;i<this;i++) {
			if (this % i == 0 && i != 1) {
				factors.push(i);
			}
		}
		return factors;
	}
	Number.prototype.isEven = function() {
		if (this % 2 == 0) {
			return true;
		} else {
			return false;
		}
	}
	Number.prototype.isOdd = function() {
		if (this % 2 != 0) {
			return true;
		} else {
			return false;
		}
	}
	Number.prototype.isPrime = function() {
		if (this.factorize().length <= 1) {
			return true;
		} else {
			return false;
		}
	}
	Number.prototype.sqr = function() {
		return Math.sqr(this);
	}
	Number.prototype.sqrt = function() {
		return Math.sqrt(this);
	}
	Number.prototype.round = function() {
		return Math.round(this);
	}
	Number.prototype.decimal = function(places) {
		var rounded = parseFloat(this).toFixed(places);
		return rounded;
	}

	//					END NUMBER

	//					ARRAY

	Array.prototype.each = function(action) {
		if (action) {
			for (i=0;i<this.length;i++) {
				action(this[i]);
			}
		} else {
			error('(array:each) requires an action parameter');
		}
	}
	Array.prototype.map = function(mapper) {
		if (mapper) {
			for (i=0;i<this.length;i++) {
				this[i] = mapper(this[i]);
			}
		} else {
			error('(array:map) requires mapping function as parameter');
		}
		return this;
	}
	Array.prototype.filter = function(rule) {
		if (rule) {
			for (i=0;i<this.length;i++) {
				if (!rule(this[i])) {
					this.splice(i,1);
				}
			}
		} else {
			error('(array:select) requires selecting rule as parameter');
		}
		return this;
	}

	//					END ARRAY
}

eqo()



