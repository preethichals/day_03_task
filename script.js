// For the given JSON iterate over all for loops (for, for in, for of)

var arr1= [
        {
          "id": "1",
          "name": "Lura Senger",
          "email": "Xander_Collier@yahoo.com"
        },
        {
          "id": "2",
          "name": "Wilburn Weber",
          "email": "Bennett_Kreiger11@yahoo.com"
        },
        {
          "id": "3",
          "name": "Tyrique Hahn",
          "email": "Juston.Altenwerth@yahoo.com"
        },
        {
          "id": "4",
          "name": "Lenny Bailey",
          "email": "Guiseppe_Hegmann@yahoo.com"
        },
        {
          "id": "5",
          "name": "Vladimir Keeling",
          "email": "Louisa_Walsh18@hotmail.com"
        },
        {
          "id": "6",
          "name": "Kellie Crona",
          "email": "Chandler_Abernathy@yahoo.com"
        },
        {
          "id": "7",
          "name": "Carolina White",
          "email": "Royal50@hotmail.com"
        },
        {
          "id": "8",
          "name": "Alfredo Conn",
          "email": "Clarabelle34@hotmail.com"
        },
        {
          "id": "9",
          "name": "Stan Shanahan",
          "email": "Lamar.McClure@hotmail.com"
        },
        {
          "id": "10",
          "name": "Marvin Fay",
          "email": "Osbaldo58@hotmail.com"
        }];

for (var i = 0;  i<arr1.length; i++)
    {
      console.log(arr1[i]);
     }

for (let i in arr1)
  {
    console.log(arr1[i]["id"],arr1[i]["name"],arr1[i]["email"]);

  }  

  for (var i of arr1)
  {
    console.log(arr1["id"]);
  }
