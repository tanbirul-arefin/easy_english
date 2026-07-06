// 33 ar 5 api ar a cara ar kora hoi nai ..


const loadlessons = (id) => {
   fetch("https://openapi.programming-hero.com/api/levels/all")
   .then((res) => res.json())
   .then((json) => displaylesson(json.data))
}

const loadlevelword = (id) =>
{
   const url = `https://openapi.programming-hero.com/api/level/${id}`
   
   fetch(url)
   .then((res) => res.json())
   .then((data) => displevelworld(data.data));
};

const displevelworld = (words) => {
   
   const wordcontainer = document.getElementById("word-container");
   wordcontainer.innerHTML ="";

   words.forEach((word) => {
      console.log(word);
      const card = document.createElement("div");
      card.innerHTML = `
      
       <div class=" bg-white rounded-xl shadow-sm text-center py-10 px-5">
      <h2 class="font-bold text-2xl">${word.word}</h2>
      <p class="font-semibold my-2">Meaning /Pronounciation</p>
      <div class="font-medium font_bangla">${word.meaning} / ${word.pronunci}"</div>

      <div class="flex justify-between items-center">
        <button class="btn bg-gray-400 hover:bg-gray-700"><i class="fa-solid fa-circle-info"></i>
        </button>

        <button class="btn bg-gray-400 hover:bg-gray-700"><i class="fa-solid fa-volume-low"></i>
        </button>
      </div>
    </div>

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