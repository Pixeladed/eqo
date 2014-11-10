##Installation

###Client
Include eqo.js with a script tag in your html

###Nodejs

	npm install eqo

> Now you can use eqo methods

***

Eqo allows methods to be performed tstraight from the variable or data

> eg: `"hello".startswith("h")` // true

***

##Functions
```
name			parameter						returns

=== String
- count			regex pattern				   counts of occurence
- repeat		number of times to repeat	   ø
- startswith	string						   true or false
- endswith		string						   true or false
- strip			ø								stripped string
- reverse		ø								reversed string

=== Number
- factorize		ø								array of factors
- isEven   		ø								true or false
- isOdd			ø								true or false
- isPrime		ø								true or false
- sqr			ø								squared number
- sqrt			ø								square root of number
- round			ø								rounded number
- decimal		number of decimal			   rounded to number of decimal

=== List
- each			function to iterate			   ø
- filter		rule to filter				   new array satisfied the filter
- map 			mapping function			   ø

```