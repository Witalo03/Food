import Navbar from "../../components/navbar/navbar.jsx"
import './checkout.css'

function Checkout() {


    return (
        <div>
            <Navbar />


            <div className="container">
                <div className="titulo text-center">
                    <h1>Finalizar Pedido</h1>
                </div>
            </div>


            <div className="col-3">
                <div className="box-checkout">
                    <h3>Dados Pessoais</h3>

                    <div className="input-group">
                        <p>Nome Completo</p>
                        <input type="text" id="nome" />
                    </div>
                    <div className="input-group">
                        <p>E-mail</p>
                        <input type="email" id="email" />
                    </div>
                    <div className="input-group">
                        <p>Telefone Contato</p>
                        <input type="text" id="fone" />
                    </div>
                </div>
            </div>


            <div className="col-3">
                <div className="box-checkout">
                    <h3>Endereço de Entrega</h3>

                    <div className="input-group">
                        <p>CEP</p>
                        <input type="text" id="nCEPome" />
                    </div>
                    <div className="input-group">
                        <p>Endereço</p>
                        <input type="email" id="endereco" />
                    </div>
                    <div className="input-group">
                        <p>Bairro</p>
                        <input type="text" id="bairro" />
                    </div>
                    <div className="input-group">
                        <p>Cidade</p>
                        <input type="text" id="cidade" />
                    </div>
                    <div className="input-group">
                        <p>UF</p>
                        <select type="text" id="uf" />
                    </div>
                </div>
            </div>

            <div className="col-3">
                <div className="box-checkout">
                    <h3>Valores</h3>

                    <div className="checkout-valores">
                        <span>Total</span>
                        <span> <strong>R$ 50,00</strong></span>
                        
                    </div>
                    <div className="checkout_button">
                        <button className="btn-checkout"> Fizalizar Pedidos</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Checkout