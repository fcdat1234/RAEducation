let phoneList = [
    {
      id: 1,
      phone: "0973731239",
      name: "Nguyễn Văn A",
    },
    {
      id: 2,
      phone: "0972331229",
      name: "Nguyễn Văn B",
    },
  ];
function addContact(name,phone){
  let existContact = phoneList.find((contact) => contact.name === name || contact.phone === phone);
  if(existContact){
    console.log("Lien he da ton tai")
  }else{
    let newId;
if (phoneList.length > 0) {
  newId = phoneList[phoneList.length - 1].id + 1;
} else {
  newId = 1; // Gán 1 nếu mảng trống
}
    let newContact = [
      id =newId,
      phone = phone,
      name = name,
    ]
    phoneList.push(newContact)
    console.log("Danh sách contact :", JSON.stringify(phoneList, null, 2));
  }
} 
function enter(){
    let action = prompt("Nhap C/U/R/D")
    switch(action){
      case  "C":
        let name = prompt("Nhap ten contact can them")
        let phone = prompt("Nhap so dien thoai can them:")
        addContact(name,phone)
    }
}
enter()