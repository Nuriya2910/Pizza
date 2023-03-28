import Card from "./Card"
import Pizza from "./Pizza"
import "./App.css"
function App() {
  // let card1Img = "https://tiamopizza.ru/wp-content/uploads/2017/07/Пицца-Четыре-сыра-с-томатным-соусом.jpg"
  // let card2Img = "https://just-eat.by/image/data/shops/1143/72950.jpg"
  // let card3Img = "https://www.sushi-toria.ru/upload/iblock/798/798c7943d11ea967a73a16388df555b5.jpg"
  // let card4Img = "https://just-eat.by/image/data/shops/25812/42017.jpg"

  // let a1 = "Cheese Lovers"
  // let a2 = "Pepperoni Pizza"
  // let a3 = "Margherita Pizza"
  // let a4 = "Veggie"

  // let card1Desc = "Combination of Alfredo sauce and two cheeses – Romano, and Parmesan."
  // let card2Desc = "Pizza with homemade spicy beef sausage"
  // let card3Desc = "Made with San Marzano tomatoes, mozzarella cheese, and fresh basil."
  // let card4Desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, illo!."

  // let card1Sum = "$20.00"
  // let card2Sum = "$25.00"
  // let card3Sum = "$35.00"
  // let card4Sum = "$30.00"
  return (
    <div className="home">
      <div className="cards">

        <Card header={Pizza.h1[0]} img={Pizza.img[0]} desc={Pizza.desc[0]} sum={Pizza.sum[0]} />
        <Card header={Pizza.h1[1]} img={Pizza.img[1]} desc={Pizza.desc[1]} sum={Pizza.sum[1]} />
        <Card header={Pizza.h1[2]} img={Pizza.img[2]} desc={Pizza.desc[2]} sum={Pizza.sum[2]} />
        <Card header={Pizza.h1[3]} img={Pizza.img[3]} desc={Pizza.desc[3]} sum={Pizza.sum[3]} />
      </div>
      <div className="cards">
        <Card header={Pizza.h1[0]} img={Pizza.img[0]} desc={Pizza.desc[0]} sum={Pizza.sum[0]} />
        <Card header={Pizza.h1[1]} img={Pizza.img[1]} desc={Pizza.desc[1]} sum={Pizza.sum[1]} />
        <Card header={Pizza.h1[2]} img={Pizza.img[2]} desc={Pizza.desc[2]} sum={Pizza.sum[2]} />
        <Card header={Pizza.h1[3]} img={Pizza.img[3]} desc={Pizza.desc[3]} sum={Pizza.sum[3]} />

      </div>
      </div>
      )
}

      export default App
