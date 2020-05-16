describe("BiciApp - Test Formualrio de registro de cada Producto", () => {


    it("Formulario registro Ecoempresa", () => {
        cy.visit("http://localhost:4200/EcoEmpresa/registro")
            .get("[name='nit']").should('be.visible')
            .get("#universidad").should('not.exist');
    });

    it("Formulario registro BiciUsuario", () => {
        cy.visit("http://localhost:4200/BiciUsuario/registro")
            .get("[name='nit']").should('not.exist')
            .get("#universidad").should('not.exist');
    });

    it("Formulario registro CampusBici", () => {
        cy.visit("http://localhost:4200/CampusBici/registro")
            .get("[name='nit']").should('not.exist')
            .get("#universidad").should('be.visible');
    });
});

describe("BiciApp - Test Menu Principal BiciUsuario", () => {


    it("Validar componentes de Menu de BiciUsuario", () => {
        cy.visit("http://localhost:4200/BiciUsuario")
            .get(".nav-item [href*='maps']").should('be.visible') //Valida si en el Menu esta la opcion de mapas
            .get(".nav-item [href*='user-profile']").should('be.visible') //Valida si en el Menu esta la opcion de perfil de usuario
            .get(".nav-item [href*='alquiler']").should('be.visible') //Valida si en el Menu esta la opcion de alquiler
            .get(".nav-item [href*='registro-metas']").should('be.visible') //Valida si en el Menu esta la opcion de registro de metas
            .get(".nav-item [href*='graficos']").should('be.visible') //Valida si en el Menu esta la opcion de graficos
            .get(".nav-item [href*='logOut']").should('be.visible') //Valida si en el Menu esta la opcion de log out

    });
});