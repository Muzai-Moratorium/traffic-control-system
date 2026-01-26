const stars = [
  {
    name: "stars",
    position: [0, 0, 0],
    size: 10,
    color: "#fff",
  },
];

function Stars() {
  return (
    <>
      {stars.map((star, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: star.position[1],
            left: star.position[0],
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            borderRadius: "50%",
            opacity: 0.5,
          }}
        ></div>
      ))}
    </>
  );
}

export default Stars;
