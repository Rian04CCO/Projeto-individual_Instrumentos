create database INSTRUMIX;

use INSTRUMIX;

select * from Usuario;

CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45),
    instrumento VARCHAR(45),
    qtdMusica VARCHAR (45)
);

    
CREATE TABLE Perguntas (
	idPerguntas INT PRIMARY KEY AUTO_INCREMENT,
    texto_pergunta VARCHAR (200),
    resposta VARCHAR (45)
);

INSERT INTO Perguntas VALUE
	(default, 'Quantas cordas tem um violão clássico?', '6 cordas'),
	(default, 'O que é uma tarracha?', 'A parte usada para afinar'),
	(default, 'O que é uma triade?', 'conjunto de 3 notas'),
	(default, 'O que são notas diminuto?', 'Notas abaixadas em semitons'),
	(default, 'O que é uma casa no violão?', 'Os espaços no braço do violão'),
	(default, 'O que é um acorde?', 'Nome dado ao conjunto de notas');

CREATE TABLE Quiz (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR (45),
    fkPerguntas INT, 
		CONSTRAINT fkQuizPerguntas
			FOREIGN KEY (fkPerguntas)
				REFERENCES Perguntas (idPerguntas)
);

INSERT INTO Quiz VALUES
	(default, 'violão clássico', 1),
	(default, 'tarracha', 2),
	(default, 'triade', 3),
	(default, 'diminuto', 4),
	(default, 'casa do violão', 5),
	(default, 'acorde', 6);

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