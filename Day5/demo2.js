// async function loadData(){
//     try{
//         var res = await fetch("https://jsonplaceholder.typicode.com/users");
//         var data=await res.json();
//         console.log(data);
//     }
//     catch(a){
//         console.log("failed:");

//     }
//     }
//     loadData();

//     async function createData(){
//     try{
//         var res1 = await fetch("https://jsonplaceholder.typicode.com/users",
//             {
//                 method:"POST",
//                 headers:{
//                     "Content-type":"application/json"
//                 },
//                 body: JSON.stringify({
//                     name: "New User",
//                     email: "newuser@example.com"
//                 })
//             }
//         );
//         var data1=await res1.json();
//         console.log(data1);
//     }

//     catch(a){
//         console.log("failed:");

//     }
// //     }

// //     createData();



//     async function updateData(){
//     try{
//         var res2 = await fetch("https://jsonplaceholder.typicode.com/users/1",
//             {
//                 method:"PUT",
//                 headers:{
//                     "Content-type":"application/json"
//                 },
//                 body: JSON.stringify({
//                     name: "Nivi",
//                     email: "nivi@example.com"
//                 })
//             }
//         );
//         var data2=await res2.json();
//         console.log(data2);
//     }

//     catch(a){
//         console.log("failed:");

//     }
//     }

    // updateData();



    async function deleteData(){
    try{
        var res3 = await fetch("https://jsonplaceholder.typicode.com/users/1",
            {
               method:"DELETE"
            });
                console.log("Deleted Successfully",res3);
            }

    catch(a){
        console.log("failed:");

    }
}

    deleteData();