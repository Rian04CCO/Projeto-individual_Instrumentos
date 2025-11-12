USE InstruMIX;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY,
    nome VARCHAR (45),
    email VARCHAR (45) NOT NULL UNIQUE,
    senha VARCHAR (45)
);