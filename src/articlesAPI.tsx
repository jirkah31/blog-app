import image1 from "./imgexample/image1.jpg"
import image2 from "./imgexample/image2.jpg"
import image3 from "./imgexample/image3.jpg"
import image4 from "./imgexample/image4.jpg"
import image5 from "./imgexample/image5.jpg"
import image6 from "./imgexample/image6.jpg"
import image7 from "./imgexample/image7.jpg"
import image8 from "./imgexample/image8.jpg"

export type articleAPIT = {
  id?: string,
  image?: HTMLImageElement,
  title?: string,
  content?: string,
  author?: string,
  date?: string,
}

export const articlesAPI: articleAPIT[] = [
  {
    id: "1001",
    image: image1,
    title: "How Much Do English Bulldogs Sleep?",
    content: "English bulldogs are well known for sweetly slumbering away much of the day and our bulldog is no different. One minute he will be actively chasing a ball, and the next minute we can hear him snoring away in his bed. As we watched our bulldog snooze through the day, we started to wonder, how many hours of sleep do bulldogs need every day? And should we be concerned by how much our English bulldog was sleeping during the day?",
    author: "John Wick",
    date: "01/01/2022",
},
{
  id: "1002",
  image: image2,
  title: "Top 15 Healthy Dog Treats for English Bulldogs",
  content: "My English bulldog always likes to accompany me when I’m in the kitchen. I know he’s looking for something to eat when he keeps wagging his tail and moving around my legs. While I have an arsenal of healthy treats now, a few months back, I was hard pressed for choices. Many pet owners do not know this, but English bulldogs have a sensitive stomach. You have to be quite selective when it comes to choosing the right treats for your bully. I was really interested in getting my bulldog some healthy treats, and after careful research and comparison, I have compiled the following list of healthy treats, in case it is of help to you. Before that, however, let me break down what constitutes a “healthy” dog treat and how they can help improve the health of your English bulldog.",
  author: "Neo Matrix",
  date: "02/02/2021",
},
{
  id: "1003",
  image: image3,
  title: "7 Most Common English Bulldog Allergies",
  content: "English bulldogs have fickle health and are sometimes susceptible to allergic reactions. If you have an English bulldog, you need to be aware of the most common allergies which they can suffer from. If you can detect them, it will be easy for you to start any necessary treatment and limit the damage to their health. Here are seven different allergies which are most common in English bulldogs.",
  author: "Morfeus Sion",
  date: "03/03/2000",
},
{
  id: "1004",
  image: image4,
  title: "Male vs Female Bulldogs: What are the Differences?",
  content: "Once you decide on bringing a bulldog into your family, the next question might be: should you get a male or a female bulldog? It is a good idea to compare both genders and learn the differences between the two so you can make an informed decision. We will compare male and female bulldogs on various parameters to help you understand which one will be better suited for you and your family. We hope that this will help you in deciding which bulldog, make or female, will be best for you!",
  author: "Trinity Sela",
  date: "04/04/2004",
},
{
  id: "1005",
  image: image5,
  title: "At What Age Do English Bulldogs Calm Down?",
  content: "Many pet owners think that since English bulldogs are often small in size and not very active, they are perfect for smaller apartments and houses. However, once you bring an English bulldog into your family, you soon realize the truth. My English bulldog is a ball of energy. English bulldog puppies are often hyperactive and cannot stay in a single place for a long time. You might be wondering, do English bulldogs ever calm down? After spending years with my English bulldog, I can now answer this question.",
  author: "Agent Smish",
  date: "05/05/1999",
},
{
  id: "1006",
  image: image6,
  title: "Picking the Perfect Leash for English Bulldogs and Why They’re Needed",
  content: "English bulldogs are not the most active dogs, but they do still require their daily walks. Depending on where you live and your local environment, you might be required to leash your dog when taking him or her out. We made the mistake of choosing the wrong material for our first leash for our English bulldog and ended up having to replace it far sooner than expected. This post has all the information we researched and discovered from our experience of choosing the wrong first leash and picking a new leash for our English bulldog.",
  author: "Seifer More",
  date: "06/06/2001",
},
{
  id: "1007",
  image: image7,
  title: "How Long Will Your French Bulldog Live?",
  content: "You won’t find many dog breeds as loyal, loving, and adaptable as the French bulldog. They don’t bark excessively, make wonderful babysitters, and are practically perfect pups to own if you live in the city. They’re also very affectionate and usually have personalities much bigger than their actual stature. In short, owning a French bulldog is a joy. They will wiggle and grunt their way into your heart and leave a mark on your soul that you won’t ever forget. Sadly, like every dog breed, there will come a day that your Frenchie comes to the end of their little doggie life. That’s the subject of today’s article, How Long Do French Bulldogs Live. So get out a box of tissues while we explore this sad subject and give you tips on how to deal with it.",
  author: "Max Paine",
  date: "07/07/2003",
},
{
  id: "1008",
  image: image8,
  title: "Do English Bulldogs Get Car Sick?",
  content: "If you’re the lucky owner of an English bulldog you know how wonderfully patient, fun-loving, and loyal they can be. They make excellent companions and want to be with you wherever you go. Unfortunately, if where you’re going means getting there by car, you might have to deal with your bullie buddy getting car sick on occasion. Car sickness, technically known as motion sickness, is prevalent among most breeds of dog and the English Bulldog is no exception. Like some humans, a car in motion gets their stomach-churning and can make them vomit. Unlike humans, your English bulldog won’t let you know if they’re feeling car sick before they vomit, which can lead to some truly gross situations. In this article, Do English Bulldogs Get Car Sick, we’ll take a look at why English bulldogs get car sick, what causes it, and what you can do to prevent them from turning your car or truck into a scene out of The Exorcist. Enjoy!",
  author: "Medal Honor",
  date: "08/08/2005",
},
]
