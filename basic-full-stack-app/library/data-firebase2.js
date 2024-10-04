import app from "./firebase-app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

const db = getFirestore(app);
// function returns names and ids for all json objects in array, sorted by name property
export async function getSortedList() {
    const snapshot = await getDocs( collection(db, "data2") );
    const jsonObj = snapshot.docs.map(
       (d) => (
        {
            id: d.id,
            ...d.data() // captures all fields from the data model
        }
       )
    );
    // sort json array by name property
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

// function returns ids for all json objects in array
export async function getAllIds(){
    const snapshot = await getDocs( collection(db, "data2") );
    const jsonObj = snapshot.docs.map(
        (d) => (
         {
             id: d.id,
             name: d.name
         }
        )
     );

     // use map() on array to extract just id + name properties into a new array of obj values
     return jsonObj.map(
        function(item) {
            return {
                params: {
                    id: item.id.toString()
                }
            }
        }
     )
}

// function return ALL of the properties for one single object with a match id prop value
export async function getData(idRequested){
    const docRef = doc(db, "data2", idRequested);
    const d = await getDoc(docRef);

    let objReturned;
    if (!d.exists) {
        objReturned = {};
    } else {
        objReturned = d.data();
    }

    return objReturned;
}