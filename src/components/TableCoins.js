import React from 'react';
import CoinRow from './CoinRow';

//lista con <tr/> de cabezera
const titles = ['#', 'Coin', 'Price', ' Price Change', '24 Volume'];
//---------------------------

const TableCoins = ({coins, search}) => {   //componente TableCoins recibe info atravez de un props que es un objeto y dentro de el esta coins 

    const filteredCoins = coins.filter(
        (coin) => 
        coin.name.toLowerCase().includes(search.toLowerCase()) | 
        coin.symbol.toLowerCase ().includes(search.toLowerCase())
        );
    
    
    

  return (
      <table className='table table-dark mt-4 table-hover'>
          <thead>
              <tr>
                  {titles.map((title, index) => (  // por c/title recorrido devolvera un td
                  <td key={index}>{title}</td>

                      ))
                  }
               
              </tr>
          </thead>
          <tbody>
              {/* Del arreglo de coins quiero que se empiece a recoger coin por coin
              y apartir de cada moneda se va a generar un tr */}
               {filteredCoins.map((coin, index )=>(
                   <CoinRow coin={coin} key={index} index={index + 1}/>
               ))}



          </tbody>
      </table>
  )
};

export default TableCoins;
