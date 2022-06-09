const bookInfo = {
    title: 'laskar pelangi',
    year: 2005,
    author: {
        name: 'andrea hirata',
        age : 55,
        address: 'bangka belitung',
    }
    
}
console.log(bookInfo.author.age);
console.log(bookInfo.author.address);
console.log(bookInfo.title,bookInfo.author.name);
console.log(bookInfo);


let allStudent = {
    name: {
        studentA: 'milea',
        studentB: 'aulia',
        studentC : 'amel',
    },
    class: '2B'
}

for (key  in allStudent.name) {
  console.log(allStudent.name[key]) 
        
    }


    let dataAge = [20, 17, 18]
    let dataStudent = [{
        name: 'jessica',
        isVerivied: true,
    },
    {
        name: 'william',
        isVerivied: true,
    },
    {
        name: 'chika',
        isVerivied: false
    },
]

let result = []
for ( key in dataStudent) {
    let allStudent = dataStudent[key]
    allStudent.age = dataAge[key]
    result.push(allStudent)
}
console.log(result);