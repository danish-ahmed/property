
export function setProperties(properties){
    return {
        type:'GET_PROPERTIES',
        properties
    }
}
export function fetchProperties(){
    return (dispatch) => {
        fetch('api/properties')
            .then(res => res.json())
            .then(res => dispatch(setProperties(res.properties)))
    }
}