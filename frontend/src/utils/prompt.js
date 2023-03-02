export const surpriseMePrompts = [
  "sand sculpture",
  "Vintage, grainy, sepia, photograph of adorned Native American man, Hassleblad, f4, 150mm, natural light",
  "iphone made of terracotta from Harappa, Indus Valley Civilization, Pakistan; 2600-1900 BC, studio light",
  "Backend developer stuck doing css, digital art",
  "elaborate drop cap art of the capital letter D integrated in a seamless doodle art, organic, decorative, black and white, in the style of salvador dali",
  "an armchair in the shape of an avocado",
  "a surrealist dream-like oil painting by Salvador Dalí of a cat playing checkers",
  "teddy bears shopping for groceries in Japan, ukiyo-e",
  "an oil painting by Matisse of a humanoid robot playing chess",
  "panda mad scientist mixing sparkling chemicals, digital art",
  "a macro 35mm photograph of two mice in Hawaii, they're each wearing tiny swimsuits and are carrying tiny surf boards, digital art",
  "3D render of a cute tropical fish in an aquarium on a dark blue background, digital art",
  "an astronaut lounging in a tropical resort in space, vaporwave",
  "an oil painting portrait of a capybara wearing medieval royal robes and an ornate crown on a dark background",
  "a stained glass window depicting a hamburger and french fries",
  "a pencil and watercolor drawing of a bright city in the future with flying cars",
  "a sunlit indoor lounge area with a pool with clear water and another pool with translucent pastel pink water, next to a big window, digital art",
  "a fortune-telling shiba inu reading your fate in a giant hamburger, digital art",
  '"a sea otter with a pearl earring" by Johannes Vermeer',
  "an oil pastel drawing of an annoyed cat in a spaceship",
  "a painting of a fox in the style of Starry Night",
  "a bowl of soup that looks like a monster, knitted out of wool",
  "A plush toy robot sitting against a yellow wall",
  "A synthwave style sunset above the reflecting water of the sea, digital art",
  "Two futuristic towers with a skybridge covered in lush foliage, digital art",
  "A 3D render of a rainbow colored hot air balloon flying above a reflective lake",
  "A comic book cover of a superhero wearing headphones",
  "A centered explosion of colorful powder on a black background",
  "A photo of a Samoyed dog with its tongue out hugging a white Siamese cat",
  "A photo of a white fur monster standing in a purple room",
  "A photo of Michelangelo's sculpture of David wearing headphones djing",
  "A Samurai riding a Horse on Mars, lomography.",
  "A modern, sleek Cadillac drives along the Gardiner expressway with downtown Toronto in the background, with a lens flare, 50mm photography",
  "A realistic photograph of a young woman with blue eyes and blonde hair",
  "A man standing in front of a stargate to another dimension",
  "Spongebob Squarepants in the Blair Witch Project",
  "A velociraptor working at a hotdog stand, lomography",
  "A man walking through the bustling streets of Kowloon at night, lit by many bright neon shop signs, 50mm lens",
  "A BBQ that is alive, in the style of a Pixar animated movie",
  "A futuristic cyborg dance club, neon lights",
  "The long-lost Star Wars 1990 Japanese Anime",
  "A hamburger in the shape of a Rubik’s cube, professional food photography",
  "A Synthwave Hedgehog, Blade Runner Cyberpunk",
  "An astronaut encountering an alien life form on a distant planet, photography",
  "A Dinosaur exploring Cape Town, photography",
  "A Man falling in Love with his Computer, digital art",
  "A photograph of a cyborg exploring Tokyo at night, lomography",
  "Dracula walking down the street of New York City in the 1920s, black and white photography",
  "Synthwave aeroplane",
  "A man wanders through the rainy streets of Tokyo, with bright neon signs, 50mm",
  "A Space Shuttle flying above Cape Town, digital art",
  "A futuristic cityscape with flying cars and towering skyscrapers",
  "A tranquil forest glade with a sparkling waterfall and lush vegetation",
  "An abandoned space station orbiting a distant planet",
  "A magical castle floating in the clouds, with a rainbow bridge leading to its gates",
  "A bustling marketplace in a medieval town, with vendors selling their wares and shoppers haggling over prices",
  "A serene beach at sunset, with palm trees swaying in the breeze and gentle waves lapping at the shore",
  "An underwater city populated by mermaids and sea creatures",
  "A post-apocalyptic wasteland with ruins of buildings and abandoned vehicles",
  "A majestic mountain range with snow-capped peaks and a clear blue sky",
  "A surreal dreamscape with floating islands and strange creatures",
];

export function getRandomPrompts(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const getPrompts = surpriseMePrompts[randomIndex];

  if (getPrompts === prompt) return getRandomPrompts(prompt);

  return getPrompts;
}

import FileSaver from "file-saver";

export async function downloadImage(id, photo) {
  FileSaver.saveAs(photo, `download-${id}.jpg`);
}
