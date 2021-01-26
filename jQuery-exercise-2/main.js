let row = 0;
let edit_id = 0;
let checkbox = 0;
$("#row_property").hide();


function edit_row(t) {
    $('#first_name').val($(`#first_name${t.id}`).val());
    $('#last_name').val($(`#last_name${t.id}`).val());
    $('#chang_btn').html(` <button  id="updateRow" onclick="update_row(${t.id})" class="btn btn-outline-primary">update</button>`);
}

function update_row(id) {
$(`#first_name${id}`).val($(`#first_name`).val());
$(`#last_name${id}`).val($(`#last_name`).val());
$('#chang_btn').html(' <button  id="addRow" class="btn btn-outline-primary">Add</button>');

}

function check_main(t){
    $(".table_cb").prop('checked',t.checked);
    if(t.checked) checkbox = $(".table_cb").length;
    else checkbox =0;

    $('#Total_selected').text(`Tottal ${checkbox} row selected`);
    
}

function check_table_box(t){
    if(t.checked){
        checkbox ++;

    }else{
        checkbox-- ;
    } 
    console.log($(".table_cb").length + " " + checkbox) 
    if(checkbox != $(".table_cb").length){
        $('#checkMain').prop('checked',false);
    }
    if(checkbox == $(".table_cb").length){
        $('#checkMain').prop('checked',true);
    }


    if(checkbox == 0){
        $("#row_property").hide();

    }else $("#row_property").show(); 
    $('#Total_selected').text(`Tottal ${checkbox} row selected`);

}
function delet_all_row(){
    $('.table_cb').each(function(){
        if($(this).prop('checked')){
            let id= this.id;
            $(`#tr${id}`).fadeOut("slow", function(){ $(this).remove()});
            checkbox --;
        }
    });
    
    if(checkbox == 0){
        $("#row_property").hide();

    }else $("#row_property").show(); 
    $('#Total_selected').text(`Tottal ${checkbox} row selected`);
}

function delet_row(t) {
    $(`#tr${t.id}`).fadeOut("slow", function() {
        $(this).remove();
        
        if($(`.table_cb_${t.id}`).prop("checked")){
            checkbox--;
        }
        if(checkbox == 0){
            $("#row_property").hide();
    
        }else $("#row_property").show();
        
        if(checkbox != $(".table_cb").length){
            $('#checkMain').prop('checked',false);
        }
        if(checkbox == $(".table_cb").length){
            $('#checkMain').prop('checked',true);
        }
    });
    
    $('#Total_selected').text(`Tottal ${checkbox} row selected`);
}
  
function apply_changes(){
    const bg_color= $('#change_bg').val();
    const text_type = $('#change_text_type').val();
    const pattern = /^#[0-9a-f]{3,6}$/i;
    if (!pattern.test(bg_color)) {
        alert("Please enter color in hex format (#000000-#ffffff)");
        return;
      }
      console.log("hi")
      $(".table_cb").each(function(){
          if($(this).prop('checked')){
              let id = this.id;
              $(`#first_name${id}`).css({ background:bg_color});
              $(`#last_name${id}`).css({ background:bg_color});

              $(`#first_name${id}`).css({ fontSize:text_type});
              $(`#last_name${id}`).css({ fontSize:text_type });

              $(`#first_name${id}`).val("");
              $(`#last_name${id}`).val("");

            }
      })
}
    

$('#addRow').click(function(){
        const first_name= $('#first_name').val();
        const last_name= $('#last_name').val();
        const bg_color= $('#bg_color').val();
        const text_type = $('#text_type').val();
        const pattern = /^#[0-9a-f]{3,6}$/i;
        if (!pattern.test(bg_color)) {
          alert("Please enter color in hex format (#000000-#ffffff)");
          return;
        }
        if(first_name!="" && last_name!="" && bg_color!=""){
            $('#table_data').append(`<tr id=tr${row}>
                <td>
                    <input type="checkbox" id=${row} class="table_cb table_cb_${row}" onchange="check_table_box(this)"/>
                </td>
                <td>
                    <input id=first_name${row} type="text" style="background:${bg_color};font-size:${text_type}" 
                        class="form-control focus_change" value=${first_name} name="fname${row}" />
                </td>
                <td>
                    <input type="text" id=last_name${row} style="background:${bg_color};font-size:${text_type}" 
                        class="form-control focus_change" value=${last_name} name="lname${row}" readonly/>
                </td>
                <td>
                    <button id='${row}' onclick="edit_row(this)" class="btn btn-primary">Edit</button>
                </td>
                <td>
                    <button id='${row}' onclick="delet_row(this)"  class="btn btn-danger">Delete</button>
                </td>
                </tr>`);
                $(`#tr${row}`).hide().fadeIn();
                row ++;
        }else alert('cant add empty data')
        
    });

    

