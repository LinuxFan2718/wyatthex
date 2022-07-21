import Hex from "./Hex"

const HexagonGrid = () => {
  return (
    <div className="container">
      {[...Array(100)].map((x, i) =>
        <Hex key={i} />
      )}
    </div>
  )
}

export default HexagonGrid