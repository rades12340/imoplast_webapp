const sql = `
DROP TABLE IF EXISTS dimension_product;
DROP TABLE IF EXISTS image_product;
DROP TABLE IF EXISTS purpose_product;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS dimension;
DROP TABLE IF EXISTS image;
DROP TABLE IF EXISTS purpose;

CREATE TABLE product (
    product_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(500) NOT NULL,
    description VARCHAR(500) NOT NULL,
    metrical BOOLEAN DEFAULT false,
    inch BOOLEAN DEFAULT false,
    available_in_diff_colors BOOLEAN DEFAULT false,
    PRIMARY KEY (product_id)
);
CREATE TABLE dimension (
    dimension_id INT NOT NULL AUTO_INCREMENT,
    dimension_name VARCHAR(500) NOT NULL,
    PRIMARY KEY (dimension_id)
);
CREATE TABLE image (
    image_id INT NOT NULL AUTO_INCREMENT,
    image_src VARCHAR(500) NOT NULL,
    image_alt VARCHAR(500) NOT NULL,
    product_id INT NOT NULL,
    PRIMARY KEY (image_id)
);
CREATE TABLE purpose (
    purpose_id INT NOT NULL AUTO_INCREMENT,
    purpose_name VARCHAR(500) NOT NULL,
    PRIMARY KEY (purpose_id)
);
CREATE TABLE dimension_product (
    dp_id INT NOT NULL AUTO_INCREMENT,
    dp_product INT NOT NULL,
    dp_dimension INT NOT NULL,
    PRIMARY KEY (dp_id),
    FOREIGN KEY (dp_product) REFERENCES product (product_id),
    FOREIGN KEY (dp_dimension) REFERENCES dimension (dimension_id)
);
CREATE TABLE image_product (
    ip_id INT NOT NULL AUTO_INCREMENT,
    ip_product INT NOT NULL,
    ip_image INT NOT NULL,
    PRIMARY KEY (ip_id),
    FOREIGN KEY (ip_product) REFERENCES product (product_id),
    FOREIGN KEY (ip_image) REFERENCES image (image_id)
);
CREATE TABLE purpose_product (
    pp_id INT NOT NULL AUTO_INCREMENT,
    pp_product INT NOT NULL,
    pp_purpose INT NOT NULL,
    PRIMARY KEY (pp_id),
    FOREIGN KEY (pp_product) REFERENCES product (product_id),
    FOREIGN KEY (pp_purpose) REFERENCES purpose (purpose_id)
);
INSERT INTO product (
        name,
        description,
        metrical,
        inch,
        available_in_diff_colors
    )
VALUES (
        'Granični Prsten za utičnu spojnicu',
        'Izrađuje se od originalnog granulata u dimenzijama od  NP 6 do NP 32',
        NULL,
        NULL,
        true
    ),
    (
        'Navojni čepovi za unutrašnji navoj i zaštitne kape za spoljne navoje',
        'Izrađuju se od originalnog granulata u dimenzijama od M14X1,5 do M27X1,5',
        true,
        true,
        true
    ),
    (
        'Zaštitne kape za prirubničke priključke',
        'Izrađuju se od originalnog granulata u dimenzijama
P10 38.1 ; P10 44.5 ; P10 50.8 ; P10 60.3 ; P10 71.5 ; P20 41.3; P20 47.6;',
        NULL,
        NULL,
        true
    ),
    (
        'Zaštitne kape za automatske spojnice (male, female)',
        'Izrađuju se od visokokvalitetnog PVC granulata uz mogućnost otiska loga firme u dimenzijama
NP 6 ; NP 13; NP 25',
        NULL,
        NULL,
        true
    ),
    (
        'Zaštitne kape za navoje',
        'ZN Y06; ZN Y08; ZN Y10; ZN Y12; ZN Y16; ZN Y20; ZN Y25;
G ¼;“s; G ½;“s; G ¾; “s; G1“s; G1 ¼“;G1 ¼“S;
7/16 UNF ; 9/16  UNF; ¾ UNF; 11/16 UNS',
        NULL,
        NULL,
        false
    ),
    (
        'Prsten vretena propusnog ventila',
        'Primenjen u montaži vretena na ventil izrađuje se od originalnog granulata:
PV NP 8',
        NULL,
        NULL,
        false
    ),
    (
        'Dozna sa poklopcem',
        '100*100',
        NULL,
        NULL,
        false
    ),
    (
        'Ciklon vazduha za lombardini motokultivatore',
        'Izrađuju se od visokokvalitetnog PS granulata za modele: 450; 451; 503; 520; 522; 530; 6LD260; 6LD325; 6LD360; 6LD400; LDA500.',
        NULL,
        NULL,
        false
    );
INSERT INTO image (image_src, image_alt, product_id)
VALUES ('/images/imo1.jpg', "Kapa za ++++++", 1),
    ('/images/imo2.jpg', "Kapa za ++++++", 2),
    ('/images/imo3.jpg', "Kapa za ++++++", 3),
    ('/images/imo4.jpg', "Kapa za ++++++", 4),
    ('/images/imo5.jpg', "Kapa za ++++++", 5),
    ('/images/imo5.jpg', "Kapa za ++++++", 6);
`;

module.exports = sql;
