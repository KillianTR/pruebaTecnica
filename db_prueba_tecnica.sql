DROP DATABASE IF EXISTS db_prueba_tecnica;
CREATE DATABASE IF NOT EXISTS db_prueba_tecnica;

USE db_prueba_tecnica;

CREATE TABLE IF NOT EXISTS articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titular VARCHAR(255) NOT NULL,
    contenido TEXT NOT NULL
);

INSERT INTO articles(titular, contenido) values ('Feastables', 'Barra de chocolate con leche');
INSERT INTO articles(titular, contenido) values ('BIG DAY', 'Bebida energética');
INSERT INTO articles(titular, contenido) values ('PRIME', 'Bebida energética');
INSERT INTO articles(titular, contenido) values ('YOUTOOZ', 'Figuras de creadores de contenido');
INSERT INTO articles(titular, contenido) values ('Smash Hiro', 'Hamburguesas');

SELECT * FROM articles;