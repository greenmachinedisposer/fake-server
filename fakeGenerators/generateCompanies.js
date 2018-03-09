var faker = require('faker');

function generate(){
    var companies = [];

    for(var id = 0; id < 100; id++){
        var partner_id = id + 1;
        var partner_name = faker.company.companyName();
        var email = faker.internet.email();

        companies.push({
            "partner_id":partner_id,
            "partner_name" : partner_name,
            "email" : email
        });
    }

    return {"partners":companies}
}

module.exports = generate;