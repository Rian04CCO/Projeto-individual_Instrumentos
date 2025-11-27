create database instrumix;

use instrumix;

select * from Usuario;

truncate table Usuario;

CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45),
    instrumento VARCHAR(45),
    qtdMusica VARCHAR (45)
);

ALTER TABLE Usuario ADD COLUMN qtdMusica VARCHAR (45);
    
CREATE TABLE Perguntas (
	idPerguntas INT PRIMARY KEY AUTO_INCREMENT,
    texto_pergunta VARCHAR (200),
    resposta VARCHAR (45)
);

CREATE TABLE Quiz (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR (45),
    fkPerguntas INT, 
		CONSTRAINT fkQuizPerguntas
			FOREIGN KEY (fkPerguntas)
				REFERENCES Perguntas (idPerguntas)
);

CREATE TABLE Tentativa (
	fkUsuario INT,
    CONSTRAINT fkUsuarioTantativa
		FOREIGN KEY (fkUsuario)
			REFERENCES Usuario (idUsuario),
    fkQuiz INT,
    CONSTRAINT fkQuizTentativa 	
		FOREIGN KEY (fkQuiz)
			REFERENCES Quiz (idQuiz)
);