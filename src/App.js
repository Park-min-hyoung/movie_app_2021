const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image: 
        "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    id:2,
    name: "bulgogi",
    image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2016/12/30/df939769792632a48a0eba8bc895e8601.jpg"
  },
  {
    id:3,
    name: "kimbap",
    image:
        "https://recipe1.ezmember.co.kr/cache/recipe/2018/06/05/5ab3fafe7e9f2f5a7cab7c6d12abdefb1.jpg"
  },
  {
    id:4,
    name: "samgyetang",
    image:
        "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
]

function Food({ name, picture }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name}/>
  </div>
}

function App() {
  return (
    <div>
       {foodILike.map(dish => ( // dish는 object이다.
          <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
    );
}

export default App;