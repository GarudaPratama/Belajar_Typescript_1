// type BiodataTypes = {
//   name: string,
//   age: number,
//   isMarried: boolean,
//   favoriteFood: string[]
// }

function App() {
  // Soal 1
  let name: string = "Muhammad Garuda Pratama";
  let umur: number = 16;
  let isOsis: boolean = true;
  let nilai: number | string = 95;

  console.log(name, umur, isOsis, nilai);

  // Soal 2

  let identity: string | number = "";
  console.log(identity);

  identity = 12345678901919;
  console.log(identity);

  identity = "SISWA-XI-B";
  console.log(identity);
  
  return <div>App</div>;
}

export default App;
