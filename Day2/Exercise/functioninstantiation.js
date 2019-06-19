function Student(name,activity){

     let student = {}
     student.name = name
     student.activity = activity
  
     
     student.read=function(subject){
     console.log(`${this.name} is reading`)
     this.activity =subject
     }
     
     student.write=function(exam){
     console.log(`${this.name} is writing`)
     this.activity =exam
     }
     
     student.play=function(game){
     console.log(`${this.name} is playing`)
     this.activity =game
     }
    	return student;
}

const stu =Student("ram","cricket")
//stu

