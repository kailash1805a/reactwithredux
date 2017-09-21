export const selectPolitician = (politician) => {
    
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'SELECT_POLITICIAN',
                payload: politician
            });
        }, 2000);
    }

    // return {
    //     type: 'SELECT_POLITICIAN',
    //     payload: new Promise((resolve, reject) => {
    //         setTimeout(()=>{
    //             resolve(politician);
    //         },2000)
    //     })
    // };
};