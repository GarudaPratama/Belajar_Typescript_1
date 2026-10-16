function TypeAnnotations() {
  let name: string = "Muhammad Garuda Pratama";
  let umur: number = 16;
  let isOsis: boolean = true;
  let nilai: number | string = 95;

  console.log(`Halo nama saya ${name}, umur saya ${umur}, saya adalah bagian dari OSIS ${isOsis}, dan nilai saya adalah ${nilai}`);

  // Type Annotations pada function bisa digunakan untuk Parameter dan Return
  const cekKelulusan = (nilai: number): string => {
    if (nilai >= 75) {
      return "Selamat Anda Lulus";
    } else {
      return "Maaf Anda Tidak Lulus";
    }
  }
  
  cekKelulusan(nilai);


  return <div>{ cekKelulusan(nilai) }</div>;
}

export default TypeAnnotations;
