const films = [
  {
    name: "saw8",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51DJv%2BZyYqL._AC_SY445_.jpg",
    rate: 1
  },
  {
    name: "war",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1xpXNbp1pu8zopquImW4pvBZf53DvNGrNFIn6nTmV6vdFoBgz",
    rate: 2
  },
  {
    name: "drive",
    img:
      "https://img.csfd.cz/files/images/film/posters/158/036/158036329_463c1e.jpg",
    rate: 3
  }
];
const todos = (state = films, action) => {
    switch (action.type) {
      case 'ADD':
        const data=action.payload
        return [
          ...state,...state,data]
          case 'EDIT':
            const dataEdit=action.payload
            const newData=state
            newData.splice(dataEdit.index,1,{name:dataEdit.name, img:dataEdit.img,rate:dataEdit.rate})
            console.log(newData)
            return [...newData]
      default:
        return state
    }
  }
  export default todos