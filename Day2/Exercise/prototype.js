function Student(name,activity){

     let student = Object.create(Student.prototype)
     this.name = name
     this.activity = activity
     return student
     }
     
     Student.prototype.read=function(subject){
     console.log(`${this.name} is reading`)
     this.activity =subject
     }
     
     Student.prototype.write=function(exam){
     console.log(`${this.name} is writing`)
     this.activity =exam
     }
     
     Student.prototype.play=function(game){
     console.log(`${this.name} is playing`)
     this.activity =game
     }
     const stu = new Student('Ram',"Cricket")