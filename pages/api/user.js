var fs = require('fs');

// To do
// handel incomplete data
// handel / parse phone data - brake into 3, 3 digit parts

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        var person = JSON.parse(req.body)
        // Write file, if file name exists - overwrite file 
        fs.writeFile(`public/${person.first_name}-${person.last_name}.vcf`,
            `
                    BEGIN:VCARD
                    VERSION:3.0
                    PRODID:-//Apple Inc.//iPhone OS 13.1.3//EN
                    N:${person.first_name};${person.last_name};;;
                    FN:${person.first_name} ${person.last_name}
                    ORG:${person.organization};
                    EMAIL;type=INTERNET;type=HOME;type=pref:${person.email}
                    TEL;type=CELL;type=VOICE;type=pref:(${person.phone_1}) ${person.phone_2} - ${person.phone_3}
                    X-SOCIALPROFILE;type=twitter:${person.twitter}
                    X-SOCIALPROFILE;type=linkedin:${person.linkedin}
                    item1.URL;type=pref:${person.url}
                    item1.X-ABLabel:_$!<HomePage>!$_
                    PHOTO;ENCODING=b:
                    END:VCARD
                    `
            , function (err) {
                if (err) throw err;
                console.log(err);
            })
    } else {
        // Handle any other HTTP method
    }
}


