const container = document.querySelector('.container');
const button = document.createElement('button');
const submit = document.createElement('input');
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'gridText');
input.setAttribute('value', 'ffff');
console.log(input.id);
input.placeholder = "Grid Size Goes Here";
submit.setAttribute('type','submit');
const button3 = document.createElement('button');
button3.textContent = "Color of Trail";
input.innerText = 'Choose Grid Size'
button.textContent = "Start Over!";
button3.classList.add('button3');
button.classList.add('button2');
button.classList.add('button');
document.body.appendChild(button3);
document.body.appendChild(input);
document.body.appendChild(button);

const drop2 = document.querySelector('#optionTwo');
const drop4 = document.querySelector('#optionFour');
const drop1 = document.querySelector('#optionOne');


/*
var gridInput = function () {
  var 
}
*/




//const divArr = [];
//var div = [];
//container.appendChild(div);

/*
clearBtn = function() {

  divArr.style.backgroundColor = "grey";
  /*
  divArr.forEach(function(e,i){
          
    //$(e).mouseenter().mouseleave()
    $(div).hover(function(){

    div.style.backgroundColor = "green"
    })
    
  })
  */
 



//button.addEventListener('click', clearBtn);

//const body = document.getElementsByTagName('body')
const divClass = '';
/*
var divArr=[];
var div = '';
*/
//divEtch;
/*
var divEtch = divArr.forEach(function(e){
          
  //$(e).mouseenter().mouseleave()
  $(div).hover(function(){

  div.style.backgroundColor = "green"
  })
  console.log(e)
})
*/

/*
var createArrays = function() {
  divArr.push(div);
}
*/

var gridRecursion = function(n) {
    if (n == 0) {
        return;
    }
    else {
        gridRecursion(n-1);
        var divArr = [];
        var div = document.createElement('div');
        div.classList.add('div');
        div.style.color = 'green';
        divArr.push(div);
        divText = div.textContent = 'Draw!';
        container.appendChild(div);

    }
/*
       container.style[grid-template-columns] = 'repeat(16, 50px) / auto-flow dense';
       container.style[grid-template-rows] = 'repeat(16, 50px) / auto-flow dense'
       */
        

        /*
        var divArr = [];
        divArr.push(div);
        var divEtch = divArr.forEach(function(e,i){
          
          //$(e).mouseenter().mouseleave()
          $(div).hover(function(){
        
          div.style.backgroundColor = "green"
          })
          console.log(e)
        })
        */
        
        
        /*
        divArr.forEach(function(e,i){
          
          //$(e).mouseenter().mouseleave()
          $(div).hover(function(){

          div.style.backgroundColor = "green"
          })
          console.log(e)
        })
        */
       
          
          //console.log(`${property}`)
        
        
       /*
        divArr.forEach(function(div, i){
          div.classList.add(i)
        })
        
        console.log(divArr)
        */
/*
        $.each(divArr, function(index, i) {
         divArr.classList.add(index);
          console.log(divArr)
        }
        )
        */
    

   
    divArr.forEach(function(e,i){
          
      //$(e).mouseenter().mouseleave()
      $(div).hover(function(){
    
      div.style.backgroundColor = "green"
      })
      console.log(e)


      
    });
   
    clearBtn = function() {

      div.style.backgroundColor =  'rgb(240,128,128';
     
      
      /*
      divArr.forEach(function(e,i){
              
        //$(e).mouseenter().mouseleave()
        $(div).hover(function(){
    
        div.style.backgroundColor = "green"
        })
        
      })
      */
    }
    button.addEventListener('click', clearBtn);
  
    console.log(divArr)

}

/*
gridRecursion(drop2.value);
gridRecursion(drop4.value);
gridRecursion(drop1.value);
*/
/*
var setUpGrid = function(dropChoice) {
  if(dropChoice == drop2) {
    gridRecursion(drop2.value);
  } else if (dropChoice == drop4) {
    gridRecursion(drop4.value) 
  }
  else {
    gridRecursion(drop1.value)
  }
}

setUpGrid(drop4);
*/

/*
var promptGrid = prompt('How big do you want it, daddy?');
*/
/*
container.style.display = 'grid';
container.style.grid = promptGrid;
var promptGrid = prompt('How big do you want it, daddy?');

gridRecursion(promptGrid);
*/


//div.array.forEach(element => {
  
//});

//var createGrid = gridRecursion(256);

/*
var playGame = function(){
  gridRecursion(256);
  divArr.forEach(function(e){
          
    //$(e).mouseenter().mouseleave()
    $(div).hover(function(){
  
    div.style.backgroundColor = "green"
    })
    console.log(e)
  })
  
}

*/
//playGame();




/*
button.addEventListener('click', function() {
    document.querySelector('.div').setAttribute('class', 'clearClass');
    document.querySelector('.div').removeAttribute('class','clearClass');
    document.querySelector('.div').setAttribute('class', 'div');
})
*/


/*
$("div").mouseenter(function(){
    $(".div").css("background-color", "yellow");
  });
*/








/*
$(document).ready(function(){

   $(".div").mouseover(function() {
  $(".div").addClass('permaHover');
});
    // jQuery methods go here...
  
  });
*/


/*

container.style['display'] = 'flex';

//container.style['grid-template-columns'] = repeat(16,20)
//container.style['grid-template-rows'] = repeat(16, 20)
container.style['background-color'] = 'grey';

*/
/*
container.style.display = 'grid';
container.style.grid = promptGrid;

var promptGrid = prompt('How big do you want it, daddy?');

*/

/*
container.style.display = 'grid';
container.style.grid = repeat(4, auto);
var promptGrid = prompt('How big do you want it, daddy?');
*/

//var promptGrid = prompt('What size grid sir?')


function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
};

window.onclick = function(event) {
  if(!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i=0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}


function chooseSize(a,s,d) {
  if(a) {
    gridRecursion(100);
  } else if( $('#divSizeTwo').click == true ) {
    gridRecursion(50);
  }
  else {
    gridRecursion(400)
  }
};



function allMySqaures() {
$('#divSizeOne').on('click', function() {
  gridRecursion(10);
});


$('#divSizeTwo').on('click',function() {
  gridRecursion(50);
})

$('#divSizeThree').on('click', function() {
  gridRecursion(200);
})
};

allMySqaures();