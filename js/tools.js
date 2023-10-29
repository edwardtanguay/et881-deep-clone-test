export const getClone = (obj) => {

	// pointers to the same object
	const obj2 = obj; 

	// a shallow copy, deep values remain pointers to the original object
	// const obj2 = { ...obj };

	// A TRUE DEEP CLONE 
	// const obj2 = structuredClone(obj);	

	return obj2;
};