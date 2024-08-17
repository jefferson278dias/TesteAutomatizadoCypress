const locators ={

    LOGIN:{

        User:'[data-test="username"]',
        Password: '[data-test="password"]',
        BotaoEntrar: '#login-button',
        UserBloqueado: 'locked_out_user',
    },

    MENSAGEM: {
        Confirmacao: '.inventory_list > :nth-child(1)',
        Erro: '[data-test="error"]'
        
    },

    PRODUTOS:{

        Imagem: '#item_4_img_link > .inventory_item_img',
        Preco: ':nth-child(1) > .pricebar > .inventory_item_price',
        BotaoCarrinho: ':nth-child(1) > .pricebar > .btn_primary',

    }

}


export default locators;