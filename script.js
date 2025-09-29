const botoesExplorar = document.querySelectorAll(".botoesLink");
const modalContainer = document.getElementById("modal-container");
const fecharModalBtn = document.querySelector(".modal-button");
const modalContent = document.getElementById("modal-content");

const vocabularyData = {
  Colors: [
    {
      word: "Red",
      translation: "Vermelho",
      image: "./img/colors/red.png",
      audio: "./audio/colors/red.mp3",
    },
    {
      word: "Blue",
      translation: "Azul",
      image: "./img/colors/blue.jpeg",
      audio: "./audio/colors/blue.mp3",
    },
    {
      word: "Yellow",
      translation: "Amarelo",
      image: "./img/colors/yellow.png",
      audio: "./audio/colors/yellow.mp3",
    },
    {
      word: "Pink",
      translation: "Rosa",
      image: "./img/colors/pink.jpg",
      audio: "./audio/colors/pink.mp3",
    },
    {
      word: "Purple",
      translation: "Roxo",
      image: "./img/colors/purple.png",
      audio: "./audio/colors/purple.mp3",
    },
    {
      word: "Green",
      translation: "Verde",
      image: "./img/colors/green.png",
      audio: "./audio/colors/green.mp3",
    },
    {
      word: "Black",
      translation: "Preto",
      image: "./img/colors/black.png",
      audio: "./audio/colors/black.mp3",
    },
    {
      word: "White",
      translation: "Branco",
      image: "./img/colors/white.jpg",
      audio: "./audio/colors/white.mp3",
    },
    {
      word: "Grey",
      translation: "Cinza",
      image: "./img/colors/grey.jpg",
      audio: "./audio/colors/grey.mp3",
    },
    {
      word: "Orange",
      translation: "Laranja",
      image: "./img/colors/orange.png",
      audio: "./audio/colors/orange.mp3",
    },
    {
      word: "Brown",
      translation: "Marrom",
      image: "./img/colors/brown.jpg",
      audio: "./audio/colors/brown.mp3",
    },
  ],
  Weather: [
    {
      word: "Sunny",
      translation: "Ensolarado",
      image: "./img/weather/sunny.jpg",
      audio: "./audio/weather/sunny.mp3",
    },
    {
      word: "Rainy",
      translation: "Chuvoso",
      image: "./img/weather/rainy.jpg",
      audio: "./audio/weather/rainy.mp3",
    },
    {
      word: "Snowy",
      translation: "Nevoso",
      image: "./img/weather/snowy.jpg",
      audio: "./audio/weather/snowy.mp3",
    },
    {
      word: "Windy",
      translation: "Ventoso",
      image: "./img/weather/windy.jpeg",
      audio: "./audio/weather/windy.mp3",
    },
    {
      word: "Foggy",
      translation: "Enevoado",
      image: "./img/weather/foggy.jpeg",
      audio: "./audio/weather/foggy.mp3",
    },
    {
      word: "Cloudy",
      translation: "Nublado",
      image: "./img/weather/cloudy.jpeg",
      audio: "./audio/weather/cloudy.mp3",
    },
    {
      word: "Stormy",
      translation: "Tempestuoso",
      image: "./img/weather/stormy.jpg",
      audio: "./audio/weather/stormy.mp3",
    },
    {
      word: "Hot",
      translation: "Quente",
      image: "./img/weather/hot.jpeg",
      audio: "./audio/weather/hot.mp3",
    },
    {
      word: "Cold",
      translation: "Frio",
      image: "./img/weather/cold.jpg",
      audio: "./audio/weather/cold.mp3",
    },
    {
      word: "Wet",
      translation: "Úmido",
      image: "./img/weather/wet.jpg",
      audio: "./audio/weather/wet.mp3",
    },
    {
      word: "Dry",
      translation: "Seco",
      image: "./img/weather/dry.jpg",
      audio: "./audio/weather/dry.mp3",
    },
  ],
  Places: [
    {
      word: "Bakery",
      translation: "Padaria",
      image: "./img/places/bakery.jpg",
      audio: "./audio/places/bakery.mp3",
    },
    {
      word: "Park",
      translation: "Parque",
      image: "./img/places/park.jpg",
      audio: "./audio/places/park.mp3",
    },
    {
      word: "Hospital",
      translation: "Hospital",
      image: "./img/places/hospital.jpg",
      audio: "./audio/places/hospital.mp3",
    },
    {
      word: "School",
      translation: "Escola",
      image: "./img/places/school.jpg",
      audio: "./audio/places/school.mp3",
    },
    {
      word: "Vet",
      translation: "Veterinário",
      image: "./img/places/vet.jpg",
      audio: "./audio/places/vet.mp3",
    },
    {
      word: "Grocery Store",
      translation: "Mercearia",
      image: "./img/places/grocery.jpg",
      audio: "./audio/places/grocery store.mp3",
    },
    {
      word: "Bus stop",
      translation: "Parada de ônibus",
      image: "./img/places/busstop.jpg",
      audio: "./audio/places/bus stop.mp3",
    },
    {
      word: "Post office",
      translation: "Correios",
      image: "./img/places/post office.jpg",
      audio: "./audio/places/post office.mp3",
    },
    {
      word: "Mall",
      translation: "Shopping Center",
      image: "./img/places/mall.jpg",
      audio: "./audio/places/mall.mp3",
    },
    {
      word: "Supermarket",
      translation: "Supermercado",
      image: "./img/places/supermarket.jpg",
      audio: "./audio/places/supermarket.mp3",
    },
    {
      word: "Library",
      translation: "Biblioteca",
      image: "./img/places/library.jpg",
      audio: "./audio/places/library.mp3",
    },
  ],
  Food: [
    {
      word: "Apple",
      translation: "Maçã",
      image: "./img/food/apple.jpg",
      audio: "./audio/food/apple.mp3",
    },
    {
      word: "Banana",
      translation: "Banana",
      image: "./img/food/banana.jpg",
      audio: "./audio/food/banana.mp3",
    },
    {
      word: "Peach",
      translation: "Pêssego",
      image: "./img/food/peach.jpg",
      audio: "./audio/food/peach.mp3",
    },
    {
      word: "Strawberry",
      translation: "Strawberry",
      image: "./img/food/strawberry.png",
      audio: "./audio/food/strawberry.mp3",
    },
    {
      word: "Mango",
      translation: "Manga",
      image: "./img/food/mango.jpg",
      audio: "./audio/food/mango.mp3",
    },
    {
      word: "Grapes",
      translation: "Uvas",
      image: "./img/food/grapes.jpg",
      audio: "./audio/food/grapes.mp3",
    },
    {
      word: "Orange",
      translation: "Laranja",
      image: "./img/food/orange.jpg",
      audio: "./audio/food/orange.mp3",
    },
    {
      word: "Lemon",
      translation: "Limão",
      image: "./img/food/lemon.jpg",
      audio: "./audio/food/lemon.mp3",
    },
    {
      word: "Watermelon",
      translation: "Melancia",
      image: "./img/food/watermelon.jpg",
      audio: "./audio/food/watermelon.mp3",
    },
    {
      word: "Melon",
      translation: "Melão",
      image: "./img/food/melon.jpg",
      audio: "./audio/food/melon.mp3",
    },
    {
      word: "Papaya",
      translation: "Mamão",
      image: "./img/food/papaya.jpg",
      audio: "./audio/food/papaya.mp3",
    },
    {
      word: "Cucumber",
      translation: "Pepino",
      image: "./img/food/cucumber.jpg",
      audio: "./audio/food/cucumber.mp3",
    },
    {
      word: "Potatoes",
      translation: "Batatas",
      image: "./img/food/potatoes.jpg",
      audio: "./audio/food/potatoes.mp3",
    },
    {
      word: "Tomatoes",
      translation: "Tomates",
      image: "./img/food/tomatoes.jpg",
      audio: "./audio/food/tomatoes.mp3",
    },
    {
      word: "Green beans",
      translation: "Feijão verde",
      image: "./img/food/green beans.jpg",
      audio: "./audio/food/green beans.mp3",
    },
    {
      word: "Onions",
      translation: "Cebola",
      image: "./img/food/onions.jpg",
      audio: "./audio/food/onion.mp3",
    },
    {
      word: "Carrot",
      translation: "Cenoura",
      image: "./img/food/carrots.jpg",
      audio: "./audio/food/carrot.mp3",
    },
    {
      word: "Peas",
      translation: "Ervilha",
      image: "./img/food/peas.jpg",
      audio: "./audio/food/peas.mp3",
    },
    {
      word: "Rice",
      translation: "Arroz",
      image: "./img/food/rice.jpg",
      audio: "./audio/food/rice.mp3",
    },
    {
      word: "Beans",
      translation: "Feijão",
      image: "./img/food/beans.jpg",
      audio: "./audio/food/beans.mp3",
    },
    {
      word: "Cheese",
      translation: "Queijo",
      image: "./img/food/cheese.jpg",
      audio: "./audio/food/cheese.mp3",
    },
    {
      word: "Meat",
      translation: "Carne",
      image: "./img/food/meat.jpg",
      audio: "./audio/food/meat.mp3",
    },
    {
      word: "Chicken",
      translation: "Frango",
      image: "./img/food/chicken.jpg",
      audio: "./audio/food/chicken.mp3",
    },
    {
      word: "Chocolate",
      translation: "Chocolate",
      image: "./img/food/chocolate.jpg",
      audio: "./audio/food/chocolate.mp3",
    },
    {
      word: "Candy",
      translation: "Doce",
      image: "./img/food/candy.jpg",
      audio: "./audio/food/candy.mp3",
    },
    {
      word: "Ice cream",
      translation: "Sorvete",
      image: "./img/food/ice cream.jpg",
      audio: "./audio/food/ice cream.mp3",
    },
    {
      word: "Sugar",
      translation: "Açúcar",
      image: "./img/food/sugar.jpg",
      audio: "./audio/food/sugar.mp3",
    },
    {
      word: "Salt",
      translation: "Sal",
      image: "./img/food/salt.jpg",
      audio: "./audio/food/salt.mp3",
    },
    {
      word: "Pepper",
      translation: "Pimenta",
      image: "./img/food/pepper.jpg",
      audio: "./audio/food/pepper.mp3",
    },
    {
      word: "Butter",
      translation: "Manteiga",
      image: "./img/food/butter.jpg",
      audio: "./audio/food/butter.mp3",
    },
    {
      word: "Pasta",
      translation: "Macarrão",
      image: "./img/food/pasta.jpg",
      audio: "./audio/food/pasta.mp3",
    },
    {
      word: "Cake",
      translation: "Bolo",
      image: "./img/food/cake.jpg",
      audio: "./audio/food/cake.mp3",
    },
    {
      word: "Pie",
      translation: "Torta",
      image: "./img/food/pie.jpg",
      audio: "./audio/food/pie.mp3",
    },
    {
      word: "Sandwich",
      translation: "Sanduíche",
      image: "./img/food/sandwich.jpg",
      audio: "./audio/food/sandwich.mp3",
    },
    {
      word: "Salad",
      translation: "Salada",
      image: "./img/food/salad.jpg",
      audio: "./audio/food/salad.mp3",
    },
    {
      word: "Fruit salad",
      translation: "Salada de frutas",
      image: "./img/food/fruit salad.jpg",
      audio: "./audio/food/fruit salad.mp3",
    },
  ],
  Sports: [
    {
      word: "Soccer",
      translation: "Futebol",
      image: "./img/sports/soccer.jpg",
      audio: "./audio/sports/soccer.mp3",
    },
    {
      word: "Basketball",
      translation: "Basquete",
      image: "./img/sports/basketball.jpg",
      audio: "./audio/sports/basketball.mp3",
    },
    {
      word: "Baseball",
      translation: "Baseball",
      image: "./img/sports/baseball.jpg",
      audio: "./audio/sports/baseball.mp3",
    },
    {
      word: "Handball",
      translation: "Handball",
      image: "./img/sports/handball.jpg",
      audio: "./audio/sports/handball.mp3",
    },
    {
      word: "Volleyball",
      translation: "Vôlei",
      image: "./img/sports/volleyball.jpg",
      audio: "./audio/sports/volleyball.mp3",
    },
    {
      word: "Swimming",
      translation: "Natação",
      image: "./img/sports/swimming.jpg",
      audio: "./audio/sports/swimming.mp3",
    },
    {
      word: "Skateboarding",
      translation: "Andar de skate",
      image: "./img/sports/skateboarding.jpg",
      audio: "./audio/sports/skateboarding.mp3",
    },
    {
      word: "Skiing",
      translation: "Esquiar",
      image: "./img/sports/skiing.jpg",
      audio: "./audio/sports/skiing.mp3",
    },
    {
      word: "Running",
      translation: "Corrida",
      image: "./img/sports/running.jpg",
      audio: "./audio/sports/running.mp3",
    },
    {
      word: "Bowling",
      translation: "Boliche",
      image: "./img/sports/bowling.jpg",
      audio: "./audio/sports/bowling.mp3",
    },
    {
      word: "Climbing",
      translation: "Escalação",
      image: "./img/sports/climbing.jpg",
      audio: "./audio/sports/climbing.mp3",
    },
  ],
  Beverages: [
    {
      word: "Soda",
      translation: "Refrigerante",
      image: "./img/beverage/soda.jpg",
      audio: "./audio/beverage/soda.mp3",
    },
    {
      word: "Water",
      translation: "Água",
      image: "./img/beverage/water.jpg",
      audio: "./audio/beverage/water.mp3",
    },
    {
      word: "Juice",
      translation: "Suco",
      image: "./img/beverage/juice.jpg",
      audio: "./audio/beverage/juice.mp3",
    },
    {
      word: "Smoothie",
      translation: "Vitamina",
      image: "./img/beverage/smoothie.jpg",
      audio: "./audio/beverage/smoothie.mp3",
    },
    {
      word: "Milkshake",
      translation: "Milkshake",
      image: "./img/beverage/milkshake.jpeg",
      audio: "./audio/beverage/milkshake.mp3",
    },
    {
      word: "Wine",
      translation: "Vinho",
      image: "./img/beverage/wine.jpg",
      audio: "./audio/beverage/wine.mp3",
    },
    {
      word: "Lemonade",
      translation: "Limonada",
      image: "./img/beverage/lemonade.jpg",
      audio: "./audio/beverage/lemonade.mp3",
    },
    {
      word: "Coffee",
      translation: "Café",
      image: "./img/beverage/coffee.JPG",
      audio: "./audio/beverage/coffee.mp3",
    },
    {
      word: "Milk",
      translation: "Leite",
      image: "./img/beverage/milk.jpg",
      audio: "./audio/beverage/milk.mp3",
    },
  ],

  Childhood: [
    {
      word: "Tag",
      translation: "Pega-pega",
      image: "./img/childhood/tag.jpg",
      audio: "./audio/childhood/tag.mp3",
    },
    {
      word: "Hide and seek",
      translation: "Esconde-esconde",
      image: "./img/childhood/hide and seek.jpeg",
      audio: "./audio/childhood/hide and seek.mp3",
    },
    {
      word: "Hopscotch",
      translation: "Amarelinha",
      image: "./img/childhood/hopscotch.jpg",
      audio: "./audio/childhood/hopscotch.mp3",
    },
    {
      word: "Rollerskating",
      translation: "Andar de patins",
      image: "./img/childhood/rollerskating.jpg",
      audio: "./audio/childhood/rollerskating.mp3",
    },
    {
      word: "Teddy bear",
      translation: "Urso de pelúcia",
      image: "./img/childhood/teddy bear.jpg",
      audio: "./audio/childhood/teddy bear.mp3",
    },
    {
      word: "Doll",
      translation: "Boneca",
      image: "./img/childhood/doll.jpg",
      audio: "./audio/childhood/doll.mp3",
    },
    {
      word: "Ball",
      translation: "Bola",
      image: "./img/childhood/ball.jpg",
      audio: "./audio/childhood/ball.mp3",
    },
    {
      word: "Videogame",
      translation: "Videogame",
      image: "./img/childhood/videogame.jpg",
      audio: "./audio/childhood/videogame.mp3",
    },
    {
      word: "Pinwheel",
      translation: "Cata-vento",
      image: "./img/childhood/pinwheel.jpg",
      audio: "./audio/childhood/pinwheel.mp3",
    },
    {
      word: "Bike",
      translation: "Bicicleta",
      image: "./img/childhood/bike.jpeg",
      audio: "./audio/childhood/bike.mp3",
    },
    {
      word: "Yoyo",
      translation: "Iô-Iô",
      image: "./img/childhood/yoyo.jpg",
      audio: "./audio/childhood/yoyo.mp3",
    },
  ],

  Family: [
    {
      word: "Mother",
      translation: "Mãe",
      image: "./img/family/mother.jpeg",
      audio: "./audio/family/mother.mp3",
    },
    {
      word: "Father",
      translation: "Pai",
      image: "./img/family/father.jpg",
      audio: "./audio/family/father.mp3",
    },
    {
      word: "Brother",
      translation: "Irmão",
      image: "./img/family/brother.jpg",
      audio: "./audio/family/brother.mp3",
    },
    {
      word: "Sister",
      translation: "Irmã",
      image: "./img/family/sister.jpg",
      audio: "./audio/family/sister.mp3",
    },
    {
      word: "Grandmother",
      translation: "Avó",
      image: "./img/family/grandmother.jpg",
      audio: "./audio/family/grandmother.mp3",
    },
    {
      word: "Grandfather",
      translation: "Avô",
      image: "./img/family/grandfather.jpg",
      audio: "./audio/family/grandfather.mp3",
    },
    {
      word: "Aunt",
      translation: "Tia",
      image: "./img/family/aunt.jpg",
      audio: "./audio/family/aunt.mp3",
    },
    {
      word: "Uncle",
      translation: "Tio",
      image: "./img/family/uncle.jpg",
      audio: "./audio/family/uncle.mp3",
    },
    {
      word: "Cousin",
      translation: "Prima / Primo",
      image: "./img/family/cousin.jpg",
      audio: "./audio/family/cousin.mp3",
    },
    {
      word: "Parents",
      translation: "Pais",
      image: "./img/family/parents.jpg",
      audio: "./audio/family/parents.mp3",
    },
    {
      word: "Siblings",
      translation: "Irmãos",
      image: "./img/family/siblings.jpg",
      audio: "./audio/family/siblings.mp3",
    },
    {
      word: "Grandchildren",
      translation: "Netos",
      image: "./img/family/grandchildren.jpg",
      audio: "./audio/family/grandchildren.mp3",
    },
  ],

  Occasions: [
    {
      word: "Christmas",
      translation: "Natal",
      image: "./img/occasions/Christmas.jpg",
      audio: "./audio/occasions/Christmas.mp3",
    },
    {
      word: "Easter",
      translation: "Páscoa",
      image: "./img/occasions/Easter.jpg",
      audio: "./audio/occasions/Easter.mp3",
    },
    {
      word: "Birthday",
      translation: "Aniversário",
      image: "./img/occasions/birthday.jpg",
      audio: "./audio/occasions/birthday.mp3",
    },
    {
      word: "Carnival",
      translation: "Carnaval",
      image: "./img/occasions/carnaval.jpg",
      audio: "./audio/occasions/carnival.mp3",
    },
    {
      word: "Independence day",
      translation: "Dia da independência",
      image: "./img/occasions/independence day.jpg",
      audio: "./audio/occasions/independence day.mp3",
    },
    {
      word: "New Year Eve",
      translation: "Véspera de ano novo",
      image: "./img/occasions/new year eve.jpg",
      audio: "./audio/occasions/new year eve.mp3",
    },
    {
      word: "Mothers Day",
      translation: "Dia das mães",
      image: "./img/occasions/mothers day.png",
      audio: "./audio/occasions/mothers day.mp3",
    },
    {
      word: "Fathers Day",
      translation: "Dia dos pais",
      image: "./img/occasions/fathers day.jpg",
      audio: "./audio/occasions/fathers day.mp3",
    },
    {
      word: "Valentines Day",
      translation: "Dia dos namorados",
      image: "./img/occasions/valentines day.jpg",
      audio: "./audio/occasions/valentines day.mp3",
    },
    {
      word: "Thanksgiving",
      translation: "Dia de ação de graças",
      image: "./img/occasions/thanksgiving.jpg",
      audio: "./audio/occasions/thanksgiving.mp3",
    },
    {
      word: "Vacations",
      translation: "Férias",
      image: "./img/occasions/vacation.jpg",
      audio: "./audio/occasions/vacations.mp3",
    },
  ],
  Professions: [
    {
      word: "Teacher",
      translation: "Professor(a)",
      image: "./img/professions/teacher.jpg",
      audio: "./audio/professions/teacher.mp3",
    },
    {
      word: "Doctor",
      translation: "Médico",
      image: "./img/professions/doctor.jpg",
      audio: "./audio/professions/doctor.mp3",
    },
    {
      word: "Lawyer",
      translation: "Advogado(a)",
      image: "./img/professions/lawyer.jpg",
      audio: "./audio/professions/lawyer.mp3",
    },
    {
      word: "Nurse",
      translation: "Enfermeira(o)",
      image: "./img/professions/nurse.jpg",
      audio: "./audio/professions/nurse.mp3",
    },
    {
      word: "Firefighter",
      translation: "Bombeira(o)",
      image: "./img/professions/firefighter.jpg",
      audio: "./audio/professions/firefighter.mp3",
    },
    {
      word: "Police officer",
      translation: "Policial",
      image: "./img/professions/police.jpg",
      audio: "./audio/professions/police officer.mp3",
    },
    {
      word: "Actor",
      translation: "Ator",
      image: "./img/professions/actor.jpg",
      audio: "./audio/professions/actor.mp3",
    },
    {
      word: "Actress",
      translation: "Atriz",
      image: "./img/professions/actress.jpg",
      audio: "./audio/professions/actress.mp3",
    },
    {
      word: "Singer",
      translation: "Cantor(a)",
      image: "./img/professions/singer.jpg",
      audio: "./audio/professions/singer.mp3",
    },
    {
      word: "Electrician",
      translation: "Eletricista",
      image: "./img/professions/electrician.jpg",
      audio: "./audio/professions/electrician.mp3",
    },
    {
      word: "Pumbler",
      translation: "Encanador(a)",
      image: "./img/professions/pumbler.jpg",
      audio: "./audio/professions/pumbler.mp3",
    },
    {
      word: "Entrepreneur",
      translation: "Empresária(o)",
      image: "./img/professions/entreprenuer.jpg",
      audio: "./audio/professions/entrepreneur.mp3",
    },
    {
      word: "Physiotherapist",
      translation: "Fisioterapeuta",
      image: "./img/professions/physiotherapist.jpg",
      audio: "./audio/professions/physiotherapist.mp3",
    },
    {
      word: "Engineer",
      translation: "Engenheiro",
      image: "./img/professions/engineer.jpg",
      audio: "./audio/professions/engineer.mp3",
    },
  ],
  Animals: [
    {
      word: "Lion",
      translation: "Leão",
      image: "./img/animals/lion.jpg",
      audio: "./audio/animals/lion.mp3",
    },
    {
      word: "Cat",
      translation: "Gato",
      image: "./img/animals/cat.jpg",
      audio: "./audio/animals/cat.mp3",
    },
    {
      word: "Dog",
      translation: "Cachorro",
      image: "./img/animals/dog.png",
      audio: "./audio/animals/dog.mp3",
    },
    {
      word: "Bird",
      translation: "Pássaro",
      image: "./img/animals/bird.jpg",
      audio: "./audio/animals/bird.mp3",
    },
    {
      word: "Elephant",
      translation: "Elefante",
      image: "./img/animals/elephant.jpg",
      audio: "./audio/animals/elephant.mp3",
    },
    {
      word: "Tiger",
      translation: "Tigre",
      image: "./img/animals/tiger.jpg",
      audio: "./audio/animals/tiger.mp3",
    },
    {
      word: "Monkey",
      translation: "Macaco",
      image: "./img/animals/monkey.jpg",
      audio: "./audio/animals/monkey.mp3",
    },
    {
      word: "Eagle",
      translation: "Águia",
      image: "./img/animals/eagle.jpg",
      audio: "./audio/animals/eagle.mp3",
    },
    {
      word: "Fish",
      translation: "Peixe",
      image: "./img/animals/fish.jpg",
      audio: "./audio/animals/fish.mp3",
    },
    {
      word: "Giraffe",
      translation: "Girafa",
      image: "./img/animals/giraffe.jpg",
      audio: "./audio/animals/giraffe.mp3",
    },
    {
      word: "Lioness",
      translation: "Leoa",
      image: "./img/animals/lioness.jpg",
      audio: "./audio/animals/lioness.mp3",
    },
  ],
  House: [
    {
      word: "Bedroom",
      translation: "Quarto de dormir",
      image: "./img/house/bedroom.jpg",
      audio: "./audio/house/bedroom.mp3",
    },
    {
      word: "Bathroom",
      translation: "Banheiro",
      image: "./img/house/bathroom.jpg",
      audio: "./audio/house/bathroom.mp3",
    },
    {
      word: "Kitchen",
      translation: "Cozinha",
      image: "./img/house/kitchen.jpg",
      audio: "./audio/house/kitchen.mp3",
    },
    {
      word: "Living room",
      translation: "Sala de estar",
      image: "./img/house/livingroom.jpg",
      audio: "./audio/house/livingroom.mp3",
    },
    {
      word: "Dinning room",
      translation: "Sala de jantar",
      image: "./img/house/diningroom.jpg",
      audio: "./audio/house/dinning room.mp3",
    },
    {
      word: "Garage",
      translation: "Garagem",
      image: "./img/house/garage.jpg",
      audio: "./audio/house/garage.mp3",
    },
    {
      word: "Backyard",
      translation: "Quintal",
      image: "./img/house/backyard.jpeg",
      audio: "./audio/house/backyard.mp3",
    },
    {
      word: "Garden",
      translation: "Jardim",
      image: "./img/house/garden.jpg",
      audio: "./audio/house/garden.mp3",
    },
    {
      word: "Balcony",
      translation: "Sacada",
      image: "./img/house/balcony.jpg",
      audio: "./audio/house/balcony.mp3",
    },
    {
      word: "Basement",
      translation: "Porão",
      image: "./img/house/basement.jpg",
      audio: "./audio/house/basement.mp3",
    },
    {
      word: "Attic",
      translation: "Sótão",
      image: "./img/house/attic.jpg",
      audio: "./audio/house/attic.mp3",
    },
    {
      word: "Laundry room",
      translation: "Lavanderia",
      image: "./img/house/laundryroom.jpg",
      audio: "./audio/house/laundry room.mp3",
    },
  ],
};

// Adicionar um evento de clique para cada botão "Explorar"
botoesExplorar.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault(); // Evita que a página recarregue

    // Pega o nome do tópico que está na <h3>
    const topicTitle = button
      .closest(".unidade-caixa")
      .querySelector("h3").textContent;

    loadModalContent(topicTitle);
  });
});

fecharModalBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

function loadModalContent(topic) {
  const data = vocabularyData[topic];
  if (!data) return; // Se não encontrar o tópico, para a função

  modalContent.innerHTML = "";

  // Cria os elementos para cada palavra do tópico
  data.forEach((item) => {
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("flashcard");
    wordDiv.innerHTML = `
            <div class="container-word">
                <img src="${item.image}" alt="${item.word}" style="width:500px; height: 300px;" class="imagem-flexcard">
                <h3 class="word">${item.word}</h3>
                <p class="translation">${item.translation}</p>
                <button class="play-audio" data-audio="${item.audio}"><img src="./assets/sound icon.png" alt="ícone de som" class="sound"></button>
            </div>
        `;
    modalContent.appendChild(wordDiv);
  });

  // Adiciona o evento de clique para tocar o áudio
  modalContent.querySelectorAll(".play-audio").forEach((audioBtn) => {
    audioBtn.addEventListener("click", () => {
      const audioPath = audioBtn.dataset.audio;
      const audio = new Audio(audioPath);
      audio.play();
    });
  });

  // Mostra o modal
  modalContainer.style.display = "flex";
}
