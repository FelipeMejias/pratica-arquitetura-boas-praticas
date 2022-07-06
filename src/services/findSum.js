export  function findSum(array){
    return array.reduce(
        (total, event) =>
          event.type === "INCOME" ? total + event.value : total - event.value,
        0
      );
}