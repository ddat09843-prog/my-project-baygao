/*Viết mã Javascript*/
 /*const productItem = {
    name: "Hoa cúc Indo",
    price: 2500000,
    decsription: "Cúc Indo (còn gọi là Cúc Nữ Hoàng, tên khoa học: Verbena tenera) là loài cây thân thảo dạng bụi nhỏ. Cây có thân mảnh, cành thường bò ngang, phân nhiều nhánh và rủ xuống rất thích hợp trồng chậu treo.",
    link: "chi-tiet-hon",
    image: "../assets/image/cucindo.img",
}*/

const products =[
    {
    name: "Hoa cúc Indo",
    price: 2500000,
    description: "Cúc Indo (còn gọi là Cúc Nữ Hoàng, tên khoa học: Verbena tenera) là loài cây thân thảo dạng bụi nhỏ. Cây có thân mảnh, cành thường bò ngang, phân nhiều nhánh và rủ xuống rất thích hợp trồng chậu treo.",
    link: "chi-tiet-hon",
    image: "../accets/images/cucindo.img",
    },
    {
    name: "Hoa mai",
    price: 2500000,
    description: "Cúc Indo (còn gọi là Cúc Nữ Hoàng, tên khoa học: Verbena tenera) là loài cây thân thảo dạng bụi nhỏ. Cây có thân mảnh, cành thường bò ngang, phân nhiều nhánh và rủ xuống rất thích hợp trồng chậu treo.",
    link: "chi-tiet-hon",
    image: "../accets/images/hoamai.img",
    },
    {
    name: "Hoa anh đào",
    price: 2500000,
    description: "Cúc Indo (còn gọi là Cúc Nữ Hoàng, tên khoa học: Verbena tenera) là loài cây thân thảo dạng bụi nhỏ. Cây có thân mảnh, cành thường bò ngang, phân nhiều nhánh và rủ xuống rất thích hợp trồng chậu treo.",
    link: "chi-tiet-hon",
    image: "../accets/images/hoaanhdao.img",
    },
    {
    name: "Hoa lan",
    price: 2500000,
    description: "Cúc Indo (còn gọi là Cúc Nữ Hoàng, tên khoa học: Verbena tenera) là loài cây thân thảo dạng bụi nhỏ. Cây có thân mảnh, cành thường bò ngang, phân nhiều nhánh và rủ xuống rất thích hợp trồng chậu treo.",
    link: "chi-tiet-hon",
    image: "../accets/images/hoalan.img",
    },
    {
    name: "Hoa hướng dương",
    price: 2500000,
    description: "Cúc Indo (còn gọi là Cúc Nữ Hoàng, tên khoa học: Verbena tenera) là loài cây thân thảo dạng bụi nhỏ. Cây có thân mảnh, cành thường bò ngang, phân nhiều nhánh và rủ xuống rất thích hợp trồng chậu treo.",
    link: "chi-tiet-hon",
    image: "../accets/images/hoahuongduong",
    },
    {
    name: "Hoa ly",
    price: 2500000,
    description: "Cúc Indo (còn gọi là Cúc Nữ Hoàng, tên khoa học: Verbena tenera) là loài cây thân thảo dạng bụi nhỏ. Cây có thân mảnh, cành thường bò ngang, phân nhiều nhánh và rủ xuống rất thích hợp trồng chậu treo.",
    link: "chi-tiet-hon",
    image: "../accets/images/hoaly.image",
    },
    {
    name: "Hoa bỉ ngạn",
    price: 2500000,
    description: "Cúc Indo (còn gọi là Cúc Nữ Hoàng, tên khoa học: Verbena tenera) là loài cây thân thảo dạng bụi nhỏ. Cây có thân mảnh, cành thường bò ngang, phân nhiều nhánh và rủ xuống rất thích hợp trồng chậu treo.",
    link: "chi-tiet-hon",
    image: "../accets/images/hoabingan.img",
    },
    {
    name: "Hoa tulip",
    price: 2500000,
    description: "Cúc Indo (còn gọi là Cúc Nữ Hoàng, tên khoa học: Verbena tenera) là loài cây thân thảo dạng bụi nhỏ. Cây có thân mảnh, cành thường bò ngang, phân nhiều nhánh và rủ xuống rất thích hợp trồng chậu treo.",
    link: "chi-tiet-hon",
    image: "../accets/images/hoatulip.img",
    }

]
function printBCC(n)
{
    let result = "";

    let i = 1;
    while(i<=10)
    {
        result += `${n} x ${i} = ${n*i} <br>`; 
        i++;
    }
    //Đưa kết quả vào thẻ div có id là "result"
    document.getElementById("result").innerHTML = result;
}


function createItemV2(obj)
{ 
    const productList = document.getElementById("product-list");
    productList.innerHTML +=`
    <div class="col text-center">
            <div class="card product-item h-100 d-flex flex-column">
                <div class="ratio ratio-1x1 product-image">
                    <img src="${obj.image}" alt="${obj.name}" class="card-img-top">
                </div>  
                <div class="card-body product-info d-flex flex-column">
                    <h4 class="card-title text-danger">${obj.name}</h4>
                    <h5 class="text-danger">Giá: ${obj.price}</h5>
                    <p style="text-align: justify;">${obj.description}</p>
                    <!-- mt-auto giúp thẳng hàng, w-50 mx-auto giúp nút to bằng nhau và căn giữa -->
                    <a href="${obj.link}" class="btn btn-info text-white mt-auto w-50 mx-auto">Xem chi tiết</a>
                </div>
            </div>   
        </div>
        `;
}
 function loadAllProducts(objArray)
 {
    let i=0;
    while(i<objArray.length)
    {
        createItemV2(objArray[i]);
        i++;
    }
 }
 loadAllProducts(products);