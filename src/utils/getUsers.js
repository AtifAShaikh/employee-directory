const getUsers = async () => {
    const data = [];
    for(let i = 0; i<10; i++){
        
            // fetch('https://randomuser.me/api/', {
            //     method: 'GET',
            // }).then((res)=>{
            //     // console.log(res);
            //     return res.json();
            // }).then((data)=>{
            //     // console.log(data);
            //     emps.push(data.results[0]);
            // }); 
        const newUser = await fetch('https://randomuser.me/api/', {method: 'GET'});
        const newUserData = await newUser.json();
        // console.log(newUserData.results[0]);
        data.push(newUserData.results[0]);
    }
    return data;
}

export default getUsers;