export const useSort = () => {
  const onSort = (value) => {
    // fetch(`http://localhost:3000/coffee?q=${value}`)
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     this.$store.dispatch("setCoffeeData", data);
    //   });
    console.log(value)
  }

  return {
    onSort
  }
}
