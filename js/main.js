$(document).ready(function(){
    // GETTING THE PRODUCTS FROM API TO ADMIN PRODUCT ROW
    function fetchProduct() {
        $.ajax({
          method:"GET",
          url: "https://e-commerce-0r6p.onrender.com/products",
          success: (arr) => {
            // una never see nothing
            // something 
            // i dey get joy like this
            let html = "";
           // $(".lds-ripple").hide()
            for (let i = 0; i < arr.length; i++) {
              let a = arr[i];
              let route =location.href.substr(0,location.href.lastIndexOf('/'))+"/edit-product.html?s="+a._id
              html += `
              <tr>
                    <th scope="row">
                    <a href="${route}" class="" data-attr="${a._id}">
                    Edit
                  </a>
                    </th>
                    <td class="tm-product-name">${a.title}</td>
                    <td>
                      <img src="${a.avatar}" alt="" class="w-50">
                    </td>
                    <td>${a.productId}</td>
                    <td>${a.price}</td>
                    <td>${a.old_price}</td>
                    <td>
                   
                      <a href="#" class="tm-product-delete-link" data-attr="${a._id}">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
              </tr>
            `;
            }
            $("#product_display").html(html);
          },
          error: (err) => {
            console.log(err)
          },
        });
      }

      fetchProduct();


      $(document).on('click',".tm-product-delete-link",function(){
        let id = $(this).attr('data-attr')
        let url = "https://e-commerce-0r6p.onrender.com/products/"+id
        let option = confirm("Are you sure you want to delete")
        if(!option) return ""

        $.ajax({
          url,
          method:"DELETE",
          success:function(res){
            alert(res.msg)
            location.reload();
          }
        })
      })
      //ADDING PRODUCTS FROM ADMIN TO UI AND PRODUCT ROW
     //DELETING FROM ADMIN AND UI
     //UPDATING FROM ADMIN AND UI
    
})

