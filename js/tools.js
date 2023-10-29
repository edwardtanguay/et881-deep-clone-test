export const getClone = (obj) => {

	// const obj2 = obj;
	// const obj2 = { ...obj };
	const obj2 = structuredClone(obj);	

	return obj2;
};