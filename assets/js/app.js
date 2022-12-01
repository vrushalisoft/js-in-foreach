   // alert("Hello");
   var cl = console.log


   // forEach -> is a method
   // foreach method accepts another fun as a argument
   // callback fun >> a function which is passed as argument or parameter in another function
   // arrayName.forEach(callbackFunction(parameter){
   //    parameter >> each and every element of a "arrayname" array
   // })

   // ages.forEach(function(age){
   //    cl(age);
   // })

   // var skills = ["HTML5", "CSS3", "javaScript", "TypeScript", "Angular"];

   //I love html5
   //2nd parameter of callback functiom represents index number of array element
   // skills.forEach(function(skill, i){
   //    cl((i+1) + " I love " + skill);
   // })

   // 1 t0 10

   // var skillsInfo = document.getElementById("skillsInfo");

   // var result = `<ul class="list-group">`;
   // skills.forEach(function(skill){
   //    result += `<li class="list-group-item">I Love ${skill} </li>`;
   // })

   // result += `</ul>`;

   // skillsInfo.innerHTML = result;

   var names = [
      {name:"anna",pronoun: "she"},
      {name: "beth",pronoun: "they"},
      {name: "chris",pronoun: "he"},
      {name: "daniel",pronoun: "he"},
      {name: "ethan",pronoun: "he"}
   ]

   var namesInfo =document.getElementById("namesInfo");
   var result='';
   names.forEach(function(newName, i){
      result += `<tr>
                  <td>  ${(i+1)} </td>
                  <td> ${ newName.name} </td>
                  <td> ${ newName.pronoun}</td>
               </tr>`;
   })
   namesInfo.innerHTML = result;


   var books=
      [ 
      { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
      { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
      { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
      ];
      
      var booksInfo = document.getElementById("booksInfo");
      var result='';
      books.forEach(function(book, i){
         result += "<tr>";
         result += "<td>" + (i+1) + "</td>";
         result += "<td>" + book.author + "</td>";
         result += "<td>" + book.title +"</td>";
         result += "<td>" + book.libraryID +"</td>";
         result += "</tr>";
      })
      booksInfo.innerHTML = result;

   var gases =
   [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      ];
         
      var gasesInfo =document.getElementById("gasesInfo");
      var result='';
      gases.forEach(function(gas){
         result += "<tr>";
         result += "<td>" + gas.position + "</td>";
         result += "<td>" + gas.name + "</td>";
         result += "<td>" + gas.weight +"</td>";
         result += "<td>" + gas.symbol +"</td>";
         result += "</tr>";
      })
      gasesInfo.innerHTML = result;

var data =
[
   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
   ];

   var elementInfo =document.getElementById("elementInfo");
   var result ='';
   data.forEach(function(ele, i){
      result += `<tr>
                  <td>${i+1}</td>   
                  <td>${ele.name}</td>   
                  <td>${ele.weight}</td>   
                  <td>${ele.symbol}</td>   
                  <td>${ele.position}</td>   
                  </tr>`
   })
   elementInfo.innerHTML =result;

   var stdArray = [{
      fname: "Tony",
      lname: 'Stark',
      nickName: 'Ironman',
      email: 'tony@stark.com'
  },
  {
      fname: "Peter",
      lname: 'Parkar',
      nickName: 'SpiderMan',
      email: 'peter@stark.com'
  },
  {
      fname: "Bruce",
      lname: 'Wayne',
      nickName: 'BatMan',
      email: 'bruce@wayne.com'
  },
  {
      fname: "Stephen",
      lname: 'Strange',
      nickName: 'Dr. Strange',
      email: 'dr@strange.com'
  },
]

var stdInfo = document.getElementById("stdInfo");
var result2 = '';

stdArray.forEach(function(std, index){
   result2 += `<tr>
               <td>${index + 1}</td>   
               <td>${std.fname}</td>   
               <td>${std.lname}</td>   
               <td>${std.nickName}</td>   
               <td>${std.email}</td>   
               </tr>`;
})
 
stdInfo.innerHTML =result2;