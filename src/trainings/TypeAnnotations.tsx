function TypeAnnotations() {
  let name: string = "Muhammad Garuda Pratama";
  let umur: number = 16;
  let isOsis: boolean = true;
  let nilai: number | string = 95;

  console.log(name, umur, isOsis, nilai);

  return <div>TypeAnnotations</div>;
}

export default TypeAnnotations;
