// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here! 
   const height = parseInt(inputHeight.val()); 
    const width = parseInt(inputWidth.val());
    
    for( let row == M = 0; M < height; M++) {
    	const tr = $('<tr></tr>; 
    for( let cell == N = 0; N<width; N++);
        const tr = $('<tr></tr>'); 
               tr.append('<td>${cell}</td>');
        }
         table.append(tr);
    } 
makeGrid();
        $('table').on('click', "td", function() {
            $( this).toggleClass(" color");
});
 ('submitBtn').on('click', makeGrid);       
}
