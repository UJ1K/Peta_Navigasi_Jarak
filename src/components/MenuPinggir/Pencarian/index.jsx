/** @jsxImportSource @emotion/react */

import { FaBars, FaSearch, FaTimes } from "react-icons/fa"

const MenuPinggirPencarian = () => {
  return (
    <div
      css={{
        backgroundImage: `url('https://asset.kompas.com/crops/Wz555Tw9E7BzYVE3_UgSwYYk4KM=/0x0:780x520/750x500/data/photo/2019/09/16/5d7f65d83d0b9.jpg')`,
        height: 240,
        padding: 8,
        backgroundSize: 'cover', // Agar gambar menutupi seluruh area div
        backgroundPosition: 'center',
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
