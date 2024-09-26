// use node default modules for fs and path
import fs from 'fs';
import path from 'path';

const dataDirectory = path.join( process.cwd(), 'data' );

export function getSortedList(){
    //get filepath to json file
    const filePath = path.join(dataDirectory , 'data2.json');
    //load jsong file contents
    const jsonString = fs.readFileSync(filePath , 'utf8');
    //convert string from file into json array object
    const jsonObj = JSON.parse(jsonString);
    //sort json array by name property
    jsonObj.sort(
        function(a,b){
            return a.name.localeCompare(b.name);
        }
    );
    //use map() on array to extract just id + name properties into new array of obj values
    return jsonObj.map(
        function(item){
            return{
                id: item.id.toString(),
                name: item.name
            };
        }
    );
}

export function getAllIds(){
    //get filepath to json file
    const filePath = path.join(dataDirectory , 'data2.json');
    //load jsong file contents
    const jsonString = fs.readFileSync(filePath , 'utf8');
    //convert string from file into json array object
    const jsonObj = JSON.parse(jsonString);
    //use map() on array to extract just id + name properties into new array of obj values
    return jsonObj.map(
        function(item){
            return{
                params: {
                id: item.id.toString(),
                }
            };
        }
    );
}

// function return ALL of the preperty for one single object with a matching id property value
export async function getData(idRequested){
    //get filepath to json file
    const filePath = path.join(dataDirectory , 'data2.json');
    //load jsong file contents
    const jsonString = fs.readFileSync(filePath , 'utf8');
    //convert string from file into json array object
    const jsonObj = JSON.parse(jsonString);
    // find object value in array that has matching id
    const objMatch = jsonObj.filter(
        function(obj) {
            return obj.id.toString() === idRequested;
        }
    );

    // extract object value in filtered array if any 
    let objReturned;
    if (objMatch.length > 0) {
        objReturned = objMatch[0];
    } else{
        objReturned = {};
    }

    //return object value found
    return objReturned;
}