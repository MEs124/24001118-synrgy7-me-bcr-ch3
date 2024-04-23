function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  const result = [...cars];

  // Bubble Sort untuk mengurutkan array berdasarkan tahun secara descending
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i].year < result[i + 1].year) {
        let temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  // Mengembalikan array hasil sorting secara descending
  return result;
}
