const cheerio = require("cheerio");
const fs = require("fs");


const filename = "test-file.owl";

fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }

    const $ = cheerio.load(data);


    const classes = $("owl\\:Class");
    const objectProperties = $("owl\\:ObjectProperty");

    const InverseFunctionalProperty = $("rdf\\:type[rdf\\:resource='http://www.w3.org/2002/07/owl#InverseFunctionalProperty']")
    const TransitiveProperty = $("rdf\\:type[rdf\\:resource='http://www.w3.org/2002/07/owl#TransitiveProperty']")
    const AsymmetricProperty = $("rdf\\:type[rdf\\:resource='http://www.w3.org/2002/07/owl#AsymmetricProperty']")
    const IrreflexiveProperty = $("rdf\\:type[rdf\\:resource='http://www.w3.org/2002/07/owl#IrreflexiveProperty']")
    const FunctionalProperty = $("rdf\\:type[rdf\\:resource='http://www.w3.org/2002/07/owl#FunctionalProperty']")
    const ReflexiveProperty = $("rdf\\:type[rdf\\:resource='http://www.w3.org/2002/07/owl#ReflexiveProperty']")

    console.log( 'InverseFunctionalProperty', InverseFunctionalProperty.length, 'TransitiveProperty', TransitiveProperty.length, 'AsymmetricProperty', AsymmetricProperty.length, 'IrreflexiveProperty', IrreflexiveProperty.length, 'FunctionalProperty', FunctionalProperty.length, 'ReflexiveProperty', ReflexiveProperty.length)

    // const allPropertyTypes = $("rdf\\:type");
    // allPropertyTypes.each((it, el)=>{
    //     const url = $(el).attr('rdf:resource');
    //     const name = url.split('/owl#')[1];
    //     const finaltext =  `const ${name} = $("rdf\\\\:type[rdf\\\\:resource='${url}']")`
    //     console.log(finaltext)
    // });


    // console.log("inverseFunctionalProperties", inverseFunctionalProperties.length)

    // console.log("Total Classes:", classes.length, "Object Properties:", objectProperties.length)


});

