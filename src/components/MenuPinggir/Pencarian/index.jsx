/** @jsxImportSource @emotion/react */

import { FaBars, FaSearch, FaTimes } from "react-icons/fa"

const MenuPinggirPencarian = () => {
  return (
    <div
      css={{
        width: `100%`, 
        background: "lightblue",
        height: 240,
        padding: 8,
      }}
    >
      <div
        css={{
          borderRadius: 8,
          height: 40,
          background: "#fafafa",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          paddingLeft: 16,
          paddingRight: 16,
          alignItems: "center",
        }}
      >
        <FaBars />
        <input
          placeholder="Cari Lokasi . . ."
          css={{
            flexGrow: 1,
            border: `none`,
          }}
        />
        <FaSearch />
        <FaTimes />
      </div> 
    </div>
  )
}

export default MenuPinggirPencarian 
