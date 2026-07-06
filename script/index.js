const loadlessons = () => {
   fetch("https://openapi.programming-hero.com/api/levels/all")
   .then((res) => res.json())
   .then((json) => displaylesson(json.data))
}

const displaylesson = (lessons) => {

   const levelcontiner = document.getElementById("level-container")
   levelcontiner.innerHTML = "";
   
   for(let lesson of lessons){
      console.log(lesson);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
     <button class="btn btn-outline btn-primary">
        
          <i class="fa-solid fa-book-open"></i>
          Lessson - ${lesson.level_no}
      </button>
    `  ;
    levelcontiner.append(btnDiv)
   }
};
loadlessons();