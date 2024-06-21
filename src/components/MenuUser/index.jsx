/** @jsxImportSource @emotion/react */

import { useAtom } from "jotai"
import konfigurasiAtom from "../../konfigurasi-atom"

const MenuUser = () => {

  const [konfigurasi] = useAtom(konfigurasiAtom) 

  return (
    <div
      css={{
        zIndex: 10,
        position: `fixed`,
        top: 56,
        right: 32,
        width: 360,
        height: 640,
        opacity: konfigurasi.bukaMenuUser ? 1 : 0,
        borderRadius: 8,
        boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
        background: "#fafafa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 16,
        gap: 8,
      }}
    >
      <div
        css={{
          width: 80,
          height: 80,
          borderRadius: 40,
          background: "#02808f",
          fontSize: `2.5rem`,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
        }}
      >
        I 
      </div>
      <span
        css={{
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        Kelompok-10
      </span>
      <span
        css={{
          fontSize: "0.75rem",
          color: "#999999",
        }}
      >
        <p>Ananda Shabrina Putri G.</p>
    <p>&bull; 22/505172/GE/10055</p>
    <p>Fauzi Salam</p>
    <p>&bull; 22/503617/GE/09989</p>
    <p>Hajar Alya Arifah</p>
    <p>&bull; 22/498412/GE/09910</p>
    <p>Kuntari Kadek Nailah</p>
    <p>&bull; 22/493133/GE/09797</p>
    <p>Muhammad Ghifari Fadhillah</p>
    <p>&bull; 22/504497/GE/10027</p>
    <p>Ridlo Reiga Ahadi</p>
    <p>&bull; 22/497475/GE/09893</p>
    <p>Rinasari Wijayanti</p>
    <p>&bull; 22/493874/GE/09834</p>
    <p>Salvia Umi Chamidah</p>
    <p>&bull; 22/502633/GE/09954</p>
    <p>Sultan Derry Mahapani S.</p>
    <p>&bull; 22/496440/GE/09861</p>
      </span>
    </div>
  )
}

export default MenuUser 
