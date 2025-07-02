/*let a = ["iphone 7","samsung a03core","oppo a 15"]
let b =["red","green","black"]
let c =["2023","2024","2025"]
for (i = 0 ; i< a.length  ;i++){
    console.log("_".repeat(15))
    console.log(`# ${a[i]}`)
    console.log("the colors is : ")
    for(let j = 0;j < b.length;j++){
        console.log(`- ${b [j]}`)
        
    }
    console.log("the models is : ")
    for(let k = 0;k < c.length;k++){
        console.log(`- ${c [k]}`
}}*/

/*let admins = ["Ahmed", "Esraa", "mona", "osama", "ysa"];
let employs = ["yasser", "Emad", "mohamd", "mahmoud", "Ammir", "othman", "marko"];

document.write(`<div><h3>You have ${admins.length} admins</h3></div>`);

for (let i = 0; i < admins.length; i++) {
    let adminName = admins[i];
    document.write(`<div><h3>The admin for team ${i + 1} is ${adminName}</h3>`);
    document.write("<h4>Team Members:</h4>");

    let firstLetter = adminName[0].toLowerCase(); // أول حرف من اسم الأدمن

    for (let j = 0; j < employs.length; j++) {
        let employeeName = employs[j];
        if (employeeName[0].toLowerCase() === firstLetter) {
            document.write(`<p>- ${employeeName}</p>`);
    }
}
document.write("</div><hr>");
}*/
// let names=["ysa ","hamda","soltan","mohamed"]
// let namesor = ["hagrase","saaed","yasser","marawan"]
// for(i=0;i<names.length;i++){
//     let nameonce = names[i]
//     document.write("_".repeat(50))
//     document.write(`<div><h3>The admin for team ${i + 1} is ${nameonce}</h3>`);
//     document.write(`<h3>Team Mempers is : </h3></div>`);
//     let firstletter=nameonce[0].toLowerCase();
//     for(j=0;j<namesor.length;j++){
//         let namser = namesor[j]
//         if( namser[0].toLowerCase() === firstletter){
//             document.write(`<div><h4>- ${namser}</h4></div>`);
//         }
//     }

// }
// function ysa(name,age,fr){
//     document.write(`<div><h3>your name is ${name} and age is ${age} you have experence ${fr} years</h3></div>`)
// }
//         ysa("ysa",17,3)
//         ysa("marko",16,0)
//         ysa("maikel",22,1)
// function calc(num1,num2,num3){
//     for(i = 0 ; i < 1 ;i++){
//         result = num1 + num2 + num3 ;
        
//         if(result>100){
//             continue;
//         }
//         console.log(`result = ${result}` )
//         document.write(`<div><h4>result = ${result}</h4></div>` )
//         return result
        
//     }
// }
// calc(12,32,43)
// calc(14,22,55)
// calc(11,62,23)
// calc(4,52,123)
// function calc00(...numpers){
//     let result1 = 0
//     for(i = 0 ;i < numpers.length;i++){
//     result1 += numpers[i]
// }
// return result1
// }
// console.log(calc00(10, 20, 10));
// function portofolio(name="unknown",age="unknown",price="unknown",skills=[],showskills){
//     document.write(`<div>`)
//     document.write(`<h1>my name is ${name}</h1>`)
//     document.write(`<h3>my age is ${age}</h3>`)
//     document.write(`<h3>my price in the hour is ${price}</h3>`)
    
    
    
//     if(showskills && skills.length > 0 ){
//         document.write(`<h4>my skills is ${skills.join(" | ")}</h4>`)
//     }
//     document.write(`</div>`)
// }portofolio("ysa",17,"50 eg",["HTML","CSS","JAVA SCRIPT"],true)
// function profile(name,age,hour,show,...skil){
//     document.write(`<div>`)
//     document.write(`<h2>the name is ${name}</h2>`)
//     document.write(`<h3>the age is ${age}</h3>`)
//     if(show === "yes"){
//         if(skil.length > 0){
//         document.write(`<h3>Your skills : ${skil.join(" | ")}</h3>`)
//         }else{document.write(`<h3>your skills is empty</h3>`)}
//     }
//     else{document.write(`<h3>the skills is hidden</h3>`)}
//     document.write(`<h3>my rate in the hour is <span>${hour}</span></h3>`)
//     document.write(`</div>`)
// }profile("ysa",17,"50","yes","HTML","CSS","JAVA SCRIPT")
// let age = 18
// if (age > 35 )
// {console.log(`you not can marrige because your age is ${age}`)}
// else if (age <18 ){
//     console.log(`you are childern have ${age}`)
// }
// else {console.log(`you can marrige age is ${age}` )}
// function details(...deta) {
//     let name, age, status;

//     // نحدد كل نوع بناءً على نوع البيانات
//     deta.forEach(item => {
//         if (typeof item === "string") {
//             name = item;
//         } else if (typeof item === "number") {
//             age = item;
//         } else if (typeof item === "boolean") {
//             status = item;
//         }
//     });

//     // العرض
//     document.write(`<div>`);
//     if (name) document.write(`<h1>Your name is ${name}</h1>`);
//     if (age !== undefined) document.write(`<h2>Your age is ${age}</h2>`);
//     if (typeof status === "boolean") {
//         if (status) {
//             document.write(`<h2>Your status is good</h2>`);
//         } else {
//             document.write(`<h2>Your status is hidden</h2>`);
//         }
//     }
//     document.write(`</div>`);
// }

// // أمثلة الاستخدام
// details("ysa", 17, true);
// details(17, "ysa", false);
// details(true, 17, "ysa");
// let ysa = function (){
//     console.log(`hello`)
//     return ysa
// // }
// function full(message, name1, name2) {
//     function combineNames(n1, n2) {
//         return `${n1} ${n2}`;
//     }

//     return `${message} ${combineNames(name1, name2)}`;
// }

// console.log(full("Hello", "Ysa", "Karam")); // Hello Ysa Karam
// // hello ysa karam















// how i can finish function 