//Performs a deep comparison between two values to determine if they are equivalent.

const obj1 = {'a': 1};
const obj2 = {'a': 1};

isEqual(obj1, obj2);

function isEqual(val1, val2) {
	return baseIsEqual(val1, val2);
}


//The base implementation of `isEqual` which supports partial comparisons and tracks traversed objects.

function baseIsEqual(a, b) {

	if(a === b) {
		return true;
	}

	.
}