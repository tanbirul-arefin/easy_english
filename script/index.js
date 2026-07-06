const loadlessons = () => {
   fetch("https://openapi.programming-hero.com/api/levels/all")
   .then((res) => res.json())
   .then((json) => displaylesson(json.data))
}

const loadlevelword = (id) =>
{
   const url = `https://openapi.programming-hero.com/api/level/5`
   
   fetch(url)
   .then((res) => res.json())
   .then((data) => displevelworld(data.data));
};

const displevelworld = (words) => {
   
   const wordcontainer = document.getElementById("word-container");
   // wordcontainer.innerHTML ="";

   words.forEach((word) => {
      console.log(word);
      const card = document.createElement("div");
      card.innerHTML = `
      <p>cat</p> 
      `;
      wordcontainer.append(card);
   });
}

const displaylesson = (lessons) => {

   const levelcontiner = document.getElementById("level-container")
   levelcontiner.innerHTML = "";
   
   for(let lesson of lessons){
      console.log(lesson);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
     <button onclick = "loadlevelword(${lesson.level_no})" class="btn btn-outline btn-primary">
        
          <i class="fa-solid fa-book-open"></i>
          Lessson - ${lesson.level_no}
      </button>
    `  ;
    levelcontiner.append(btnDiv)
   }
};
loadlessons();