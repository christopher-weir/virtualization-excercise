const findById = ( array, id ) => array.find( item => item.virtualizationID === id );

const findIndexById = ( array, id ) => array.findIndex( item => item.virtualizationID === id );

export { findById, findIndexById };
