import Navbar from '../../components/navbar/navbar.jsx'
import './historico.css'

function Historico() {

    // const pedidos = [
    //     {id_pedido: 545825, dt: "14/01/2024", total: 150,30},
    //     {id_pedido: 545825, dt: "14/01/2024", total: 150,30},
    //     {id_pedido: 545825, dt: "14/01/2024", total: 150,30},
    //     {id_pedido: 545825, dt: "14/01/2024", total: 150,30},
    //     {id_pedido: 545825, dt: "14/01/2024", total: 150,30},
    //     {id_pedido: 545825, dt: "14/01/2024", total: 150,30}
    // ];
    return (
        <div>
            <Navbar showMenu={true} />


            <div className="container">
                <div className="titulo text-center">
                    <h1>Histórico de Pedidos</h1>                    
                </div>
            </div>

            <div className='box-pedido'>
                <table>
                    <tr>
                        <td><strong>Pedido 547578</strong></td>
                        <td className='text-light'>14/01/2024</td>
                        <td className='text-red'>R$ 50,00</td>
                    </tr>
                    <tr>
                        <td><strong>Pedido 547578</strong></td>
                        <td className='text-light'>14/01/2024</td>
                        <td className='text-red'>R$ 50,00</td>
                    </tr>
                    <tr>
                        <td><strong>Pedido 547578</strong></td>
                        <td className='text-light'>14/01/2024</td>
                        <td className='text-red'>R$ 50,00</td>
                    </tr>
                    <tr>
                        <td><strong>Pedido 547578</strong></td>
                        <td className='text-light'>14/01/2024</td>
                        <td className='text-red'>R$ 50,00</td>
                    </tr>
                    <tr>
                        <td><strong>Pedido 547578</strong></td>
                        <td className='text-light'>14/01/2024</td>
                        <td className='text-red'>R$ 50,00</td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Historico