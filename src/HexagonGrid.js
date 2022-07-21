import Hex from "./Hex"

const HexagonGrid = () => {
  return (
    <div className="container">
      {[...Array(110)].map((x, i) =>
        <Hex key={i} />
      )}
    </div>
  )
}

export default HexagonGrid