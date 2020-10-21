const getInitials = (name) => {
  if (name.includes(" ")) {
    return name.split(" ").map((element) => {
      return element.slice(0, 1);
    }).join("");
  }

  return name.split("-").join("").slice(0, 2); 
}

export default getInitials;