class Student{

   constructor(name, activity){
    this.name = name
    this.activity = activity
    //return student
    }
    
    read(subject){
    console.log(`${this.name} is reading`)
    this.activity =subject
    }
    
    write(exam){
    console.log(`${this.name} is writing`)
    this.activity =exam
    }
    
   play(game){
    console.log(`${this.name} is playing`)
    this.activity =game
    }
}
    const stu = new Student('Ram','book')