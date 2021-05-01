import React, {useState, useEffect} from 'react';
import getUsers from '../../utils/getUsers';
import DirectoryItem from '../DirectoryItem';

function DirectoryBody(){

    const [employees, setEmployees] = useState({
        e: [],
        eFiltered: [],
    });

    useEffect(()=>{ 
        getUsers().then((data) => {
            console.log(data);
            setEmployees({
                e: data,
                eFiltered: data,
            })
        });
    }, []);

    // console.log(getUsers());

    const setItems = () => {
        let itemList = [];
        let i = -1;
        employees.eFiltered.forEach(item => {
            i++;
            itemList.push(
            <DirectoryItem 
                key={i}
                name={item.name}
                gender={item.gender}
                age={item.dob.age}
                email={item.email}
                picture={item.picture.large}
            ></DirectoryItem>
            );
        });
        return(itemList);
    }

    const clearFilter = () => {
        console.log('clearing filter');
        setEmployees({
            e: employees.e,
            eFiltered: employees.e,
        });
    }

    const filterMen = () => {
        console.log('filtering men');
        const newList = employees.e.filter((item)=>{
            if(item.gender==='male'){
                return item;
            }
        });
        setEmployees({
            e: employees.e,
            eFiltered: newList,
        })
    }
    
    const filterWomen = () => {
        console.log('filtering women');
        const newList = employees.e.filter((item)=>{
            if(item.gender==='female'){
                return item;
            }
        });
        setEmployees({
            e: employees.e,
            eFiltered: newList,
        })
    }

    const sortAgeIncreasing = () => {
        const newList = employees.e.sort((a,b)=>(a.dob.age < b.dob.age) ? 1 : -1)
        setEmployees({
            e: employees.e,
            eFiltered: newList,
        })
    }

    const sortAgeDecreasing = () => {
        const newList = employees.e.sort((a,b)=>(a.dob.age > b.dob.age) ? 1 : -1)
        setEmployees({
            e: employees.e,
            eFiltered: newList,
        })
    }
    
    

    return(
        <div className="container">
            <h1>Employees</h1>

            <div className="row ml-1 mb-4">
                 <button type="button" className="btn btn-primary mr-2" onClick={()=>{clearFilter()}}>Clear</button>
                 <button type="button" className="btn btn-primary mr-2" onClick={()=>{filterMen()}}>♂️ Males</button>
                 <button type="button" className="btn btn-primary mr-2" onClick={()=>{filterWomen()}}>♀️ Females</button>
                 <button type="button" className="btn btn-primary mr-2" onClick={()=>{sortAgeIncreasing()}}>Sort by Age ⬆️</button>
                 <button type="button" className="btn btn-primary mr-2" onClick={()=>{sortAgeDecreasing()}}>Sort by Age ⬇️</button>
            </div>

            {setItems()}

            
        </div>

            
            
    );
}

export default DirectoryBody;